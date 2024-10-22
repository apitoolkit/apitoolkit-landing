---
title: Go Gin
ogTitle: Go Gin SDK Guide
date: 2022-03-23
updatedDate: 2024-06-08
menuWeight: 4
---

# Go Gin SDK Guide

You can integrate your Golang Gin application with APIToolkit using OpenTelemetry. This allows you to send logs, metrics, and traces to APIToolkit for monitoring and analytics.


```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.


## Installation

Unlike NodeJs which has Auto Instrumentation, the corresponding Go OpenTelemetry initiative is still a work in progress. As a result, it will be a bit technical but not difficult.

We will be using a basic RateLimiter as our starter project. You can find the initial code [here](https://github.com/danielAsaboro/go_gin_test/tree/initial_code).

### 1. Add OpenTelemetry Instrumentation

Run the following command to install the required packages and dependencies:

```sh
go get "go.opentelemetry.io/otel" \
  "go.opentelemetry.io/otel/exporters/stdout/stdoutmetric" \
  "go.opentelemetry.io/otel/exporters/stdout/stdouttrace" \
  "go.opentelemetry.io/otel/exporters/stdout/stdoutlog" \
  "go.opentelemetry.io/otel/sdk/log" \
  "go.opentelemetry.io/otel/log/global" \
  "go.opentelemetry.io/otel/propagation" \
  "go.opentelemetry.io/otel/sdk/metric" \
  "go.opentelemetry.io/otel/sdk/resource" \
  "go.opentelemetry.io/otel/sdk/trace" \
  "go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin" \
  "go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
```

### 2. Initialize the OpenTelemetry SDK

Create a `main.go` file with the following content:

```go
package main

import (
	"context"
	"errors"
	"flag"
	"log"
	"time"

	"github.com/fatih/color"
	"github.com/gin-gonic/gin"
	"go.opentelemetry.io/contrib/instrumentation/github.com/gin-gonic/gin/otelgin"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
	"go.opentelemetry.io/otel/exporters/stdout/stdoutlog"
	"go.opentelemetry.io/otel/exporters/stdout/stdoutmetric"
	"go.opentelemetry.io/otel/log/global"
	"go.opentelemetry.io/otel/propagation"
	sdklog "go.opentelemetry.io/otel/sdk/log"
	sdkmetric "go.opentelemetry.io/otel/sdk/metric"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	"go.uber.org/ratelimit"
)

var (
	limit ratelimit.Limiter
	rps   = flag.Int("rps", 100, "request per second")
)

func init() {
	log.SetFlags(0)
	log.SetPrefix("[GIN] ")
	log.SetOutput(gin.DefaultWriter)
}

func leakBucket() gin.HandlerFunc {
	prev := time.Now()
	return func(ctx *gin.Context) {
		now := limit.Take()
		log.Print(color.CyanString("%v", now.Sub(prev)))
		prev = now
	}
}

func ginRun(rps int) {
	limit = ratelimit.New(rps)

	app := gin.Default()
	app.Use(otelgin.Middleware("gin test project"))
	app.Use(leakBucket())

	app.GET("/rate", func(ctx *gin.Context) {
		tracer := otel.Tracer("rate-limiter-service")
		_, span := tracer.Start(context.Background(), "rate-limiting")
		defer span.End()

		span.SetAttributes(attribute.String("method", ctx.Request.Method))
		span.SetAttributes(attribute.String("path", ctx.FullPath()))

		ctx.JSON(200, "rate limiting test")
	})

	log.Printf(color.CyanString("Current Rate Limit: %v requests/s", rps))
	app.Run(":8081")
}

func main() {
	flag.Parse()

	ctx := context.Background()
	shutdown, err := setupOTelSDK(ctx)
	if err != nil {
		log.Fatalf("Error setting up OTel SDK: %v", err)
	}
	defer func() {
		if err := shutdown(ctx); err != nil {
			log.Fatalf("Error shutting down OTel SDK: %v", err)
		}
	}()

	ginRun(*rps)
}

func setupOTelSDK(ctx context.Context) (shutdown func(context.Context) error, err error) {
	var shutdownFuncs []func(context.Context) error

	prop := propagation.NewCompositeTextMapPropagator(
		propagation.TraceContext{},
		propagation.Baggage{},
	)
	otel.SetTextMapPropagator(prop)

	traceExporter, err := otlptracegrpc.New(context.Background(),
		otlptracegrpc.WithEndpoint("localhost:4317"),
		otlptracegrpc.WithInsecure(),
	)
	if err != nil {
		return nil, err
	}
	tracerProvider := sdktrace.NewTracerProvider(
		sdktrace.WithBatcher(traceExporter, sdktrace.WithBatchTimeout(5*time.Second)),
	)
	shutdownFuncs = append(shutdownFuncs, tracerProvider.Shutdown)
	otel.SetTracerProvider(tracerProvider)

	metricExporter, err := stdoutmetric.New()
	if err != nil {
		return nil, err
	}
	meterProvider := sdkmetric.NewMeterProvider(
		sdkmetric.WithReader(sdkmetric.NewPeriodicReader(metricExporter, sdkmetric.WithInterval(3*time.Second))),
	)
	shutdownFuncs = append(shutdownFuncs, meterProvider.Shutdown)
	otel.SetMeterProvider(meterProvider)

	logExporter, err := stdoutlog.New()
	if err != nil {
		return nil, err
	}
	loggerProvider := sdklog.NewLoggerProvider(
		sdklog.WithProcessor(sdklog.NewBatchProcessor(logExporter)),
	)
	shutdownFuncs = append(shutdownFuncs, loggerProvider.Shutdown)
	global.SetLoggerProvider(loggerProvider)

	return func(ctx context.Context) error {
		var err error
		for _, fn := range shutdownFuncs {
			err = errors.Join(err, fn(ctx))
		}
		return err
	}, nil
}
```

### 3. Instrument your application

The code above already includes instrumentation for the Gin application. The `otelgin.Middleware("gin test project")` line adds OpenTelemetry middleware to your Gin application.

### 4. Add Custom Instrumentation

Custom instrumentation is added in the `/rate` endpoint handler:

```go
app.GET("/rate", func(ctx *gin.Context) {
    tracer := otel.Tracer("rate-limiter-service")
    _, span := tracer.Start(context.Background(), "rate-limiting")
    defer span.End()

    span.SetAttributes(attribute.String("method", ctx.Request.Method))
    span.SetAttributes(attribute.String("path", ctx.FullPath()))

    ctx.JSON(200, "rate limiting test")
})
```

This creates a new span for each request to the `/rate` endpoint and adds attributes for the HTTP method and path.

### 5. Configure the OpenTelemetry Exporter

Before running your application, you need to set up the environment variables for the OpenTelemetry exporter. Add the following exports to your environment or to a startup script:

```sh
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="my go gin project test"
export OTEL_RESOURCE_ATTRIBUTES=at-project-key="z6BJfZVEOSozztMfhqZsGTpG9DiXT9Weurvk1bpe9mwF8orB"
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"
export OTEL_PROPAGATORS="baggage,tracecontext"
```

These environment variables configure OpenTelemetry to:
- Use the OTLP exporter for traces
- Send data to a collector at `http://otelcol.apitoolkit.io:4317`
- Detect and include environment, host, and OS information in the telemetry data
- Set the service name for your application
- Include your APIToolkit project key in the resource attributes
- Use gRPC as the transport protocol
- Use baggage and tracecontext propagators

### 6. Update the OpenTelemetry SDK Setup

Modify the `setupOTelSDK` function in your `main.go` file to use the OTLP exporter instead of stdout exporters. Replace the existing function with the following:

```go
func setupOTelSDK(ctx context.Context) (shutdown func(context.Context) error, err error) {
    var shutdownFuncs []func(context.Context) error

    // Set up propagator
    prop := propagation.NewCompositeTextMapPropagator(
        propagation.TraceContext{},
        propagation.Baggage{},
    )
    otel.SetTextMapPropagator(prop)

    // Set up trace provider
    traceExporter, err := otlptracegrpc.New(ctx)
    if err != nil {
        return nil, err
    }
    tracerProvider := sdktrace.NewTracerProvider(
        sdktrace.WithBatcher(traceExporter),
    )
    shutdownFuncs = append(shutdownFuncs, tracerProvider.Shutdown)
    otel.SetTracerProvider(tracerProvider)

    // Set up meter provider
    metricExporter, err := otlpmetricgrpc.New(ctx)
    if err != nil {
        return nil, err
    }
    meterProvider := sdkmetric.NewMeterProvider(
        sdkmetric.WithReader(sdkmetric.NewPeriodicReader(metricExporter)),
    )
    shutdownFuncs = append(shutdownFuncs, meterProvider.Shutdown)
    otel.SetMeterProvider(meterProvider)

    // Return shutdown function
    return func(ctx context.Context) error {
        var err error
        for _, fn := range shutdownFuncs {
            err = errors.Join(err, fn(ctx))
        }
        return err
    }, nil
}
```

This setup uses the OTLP gRPC exporter for both traces and metrics, which will send the telemetry data to the endpoint specified in your environment variables.

### 7. Run the application

Build and run the application with the following command:

```sh
go mod tidy
go run .
```

The application will start and listen on port 8081. You can test it by sending a request to `http://localhost:8081/rate`.

## Visualization and Analysis

With the configuration you've provided, your application is now set up to send telemetry data to APItoolkit The OTLP exporter will send the data to the endpoint specified in the `OTEL_EXPORTER_OTLP_ENDPOINT` environment variable.

## Conclusion

This guide demonstrates how to integrate OpenTelemetry with a Go Gin application and configure it to send telemetry data to an external backend system. You can extend this setup to include more detailed metrics, logs, and traces as needed for your specific application.

Remember to keep your APIToolkit project key (`at-project-key`) secure and not expose it in public repositories or logs.