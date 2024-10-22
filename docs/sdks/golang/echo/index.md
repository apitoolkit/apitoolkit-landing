---
title: Go Echo
ogTitle: Go Echo OpenTelemetry Integration
date: 2022-03-23
updatedDate: 2024-10-22
menuWeight: 2
---

# Go Echo OpenTelemetry Integration Guide

To integrate your Golang Echo application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **Golang SDK**.

```=html
<hr>
```

This guide demonstrates how to integrate APItoolkit with your Go Echo application for distributed tracing using OpenTelemetry. We'll walk through the code and explain each part of the integration process.

To get started, you'll need to install OpenTelemetry Go packages and some basic configuration.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Unlike NodeJs which has Auto Instrumentation, the corresponding Go OpenTelemetry initiative is still a work in progress. As a result, it will be a bit technical but not difficulty. So follow closely.

We will be using this [Greetings API Repo](https://github.com/danielAsaboro/go_echo_test) as our Starter project.

It has two branches;

- _main_: [Without OpenTelemetry]
- _with_otel_: [With OpenTelemetry Integrated]

This tutorial will guide you on how to move from are Uninstrumented service to an Instrumented one.

### 1. Add OpenTelemetry Instrumentation

Kindly run the command below to install the required packages and dependencies.We will be using this [Opensource Greetings Project](https://github.com/danielAsaboro/go_echo_test.git) as our Starter project.

It has two branches;

- _main_: [Without OpenTelemetry]
- _with_otel_: [With OpenTelemetry Integrated]

This tutorial will guide you on how to move from are Uninstrumented service to an Instrumented one.

### 1. Add OpenTelemetry Instrumentation

Kindly run the command below to install the required packages and dependencies.

```sh
go get go.opentelemetry.io/otel
go get go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc
go get go.opentelemetry.io/otel/sdk/resource
go get go.opentelemetry.io/otel/sdk/trace
```

### 2. Initialize the OpenTelemetry SDK

This is required for any application that exports telemetry data.

Create an `otel.go` file with OpenTelemetry SDK bootstrapping code for good separation of concern and for ease of continuous improvement. The content of this file would look like this:

```go

package main

import (
	"context"
	"log"
	"os"

	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
	"go.opentelemetry.io/otel/sdk/resource"
	sdktrace "go.opentelemetry.io/otel/sdk/trace"
	semconv "go.opentelemetry.io/otel/semconv/v1.20.0"
)

var (
	otlpEndpoint = os.Getenv("OTEL_EXPORTER_OTLP_ENDPOINT")
	serviceName = os.Getenv("OTEL_SERVICE_NAME")
)

// InitTracerProvider initializes and returns a trace provider
func InitTracerProvider() *sdktrace.TracerProvider {
	exporter, err := otlptracegrpc.New(context.Background(),
		otlptracegrpc.WithEndpoint(otlpEndpoint),
		otlptracegrpc.WithInsecure(),
	)
	if err != nil {
		log.Fatal(err)
	}

	res, err := resource.New(
		context.Background(),
		resource.WithAttributes(
			semconv.ServiceNameKey.String(serviceName),
		),
	)
	if err != nil {
		log.Fatalf("unable to initialize resource due: %v", err)
	}

	return sdktrace.NewTracerProvider(
		sdktrace.WithSampler(sdktrace.AlwaysSample()),
		sdktrace.WithBatcher(exporter),
		sdktrace.WithResource(res),
	)
}

```

What's happening above:

- This function sets up the OpenTelemetry tracer provider with an OTLP gRPC exporter.
- It configures the service name and ensures all spans are sampled.

### 3. Instrument your application

Now that we have the OpenTelemetry SDK initializer set up, we can instrument our HTTP server.

Modify your `main.go` file to include code that initializes OpenTelemetry SDK and instruments the HTTP server using the otelhttp instrumentation library:

```go

package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/labstack/echo/v4"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/propagation"
	semconv "go.opentelemetry.io/otel/semconv/v1.4.0"
	"go.opentelemetry.io/otel/trace"
)

var tracer trace.Tracer

// todo

func main() {

	// Initialize tracer (replace "your-service-name" with your actual service name)
	tracer = otel.Tracer("simple go echo project")

	// Initialize trace provider
	tp := InitTracerProvider()
	defer func() {
		if err := tp.Shutdown(context.Background()); err != nil {
			log.Printf("Error shutting down tracer provider: %v", err)
		}
	}()
	// Set global tracer provider & text propagators
	otel.SetTracerProvider(tp)
	otel.SetTextMapPropagator(propagation.NewCompositeTextMapPropagator(propagation.TraceContext{}, propagation.Baggage{}))

	e := echo.New()
	e.GET("/hello", Greetings)
	e.Logger.Fatal(e.Start(":3000"))
}

func Greetings(c echo.Context) error {
	// Create a background context for tracing
	ctx := context.Background()
	startTime := time.Now()

	// Start a new span for tracing
	_, span := tracer.Start(ctx, "Greetings")
	defer span.End()

	// Extract request data from Echo context
	r := c.Request()

	method := r.Method
	scheme := "http"
	statusCode := http.StatusOK
	host := r.Host
	port := r.URL.Port()
	if port == "" {
		port = "8081"
	}

	// Set span status
	span.SetStatus(codes.Ok, "")

	// Use semantic conventions for common attributes
	span.SetAttributes(
		semconv.HTTPMethodKey.String(method),
		semconv.HTTPSchemeKey.String(scheme),
		semconv.HTTPStatusCodeKey.Int(statusCode),
		semconv.HTTPTargetKey.String(r.URL.Path),
		semconv.HTTPURLKey.String(r.URL.String()),
		semconv.HTTPHostKey.String(host),
		semconv.NetHostPortKey.String(port),
		semconv.HTTPUserAgentKey.String(r.UserAgent()),
		semconv.HTTPRequestContentLengthKey.Int64(r.ContentLength),
		semconv.NetPeerIPKey.String(c.RealIP()),
	)

	// Custom attributes that don't have semantic conventions
	span.SetAttributes(
		attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
		attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
		attribute.String("parent_id", ""), // Optionally extract from context
		attribute.String("referer", r.Referer()),
		attribute.String("request_type", "Incoming"),
		attribute.String("sdk_type", "echo"),
		attribute.String("service_version", ""), // Optionally fill this
		attribute.StringSlice("tags", []string{}),
	)

	// Set nested fields (these don't have direct semconv equivalents)
	span.SetAttributes(
		attribute.String("path_params", r.URL.Path),
		attribute.String("query_params", fmt.Sprintf("%v", r.URL.Query())),
		attribute.String("request_body", "{}"), // Assuming empty body for GET request
		attribute.String("request_headers", fmt.Sprintf("%v", r.Header)),
		attribute.String("response_body", "{}"),
		attribute.String("response_headers", "{}"),
	)

	return c.JSON(http.StatusOK, HelloWorld{
		Message: "Hello World",
	})
}


```

### 4. Add Custom Instrumentation

Instrumentation libraries capture telemetry at the edges of your systems, such as inbound and outbound HTTP requests, but they don’t capture what’s going on in your application. For that you’ll need to write some custom manual instrumentation.

Modify the `Greetings` function to include custom instrumentation using OpenTelemetry API:

```go

func Greetings(c echo.Context) error {
    // Create a background context for tracing
    ctx := context.Background()
    startTime := time.Now()

    // Start a new span for tracing
    _, span := tracer.Start(ctx, "Greetings")
    defer span.End()

    // Extract request data from Echo context
    r := c.Request()

    method := r.Method
    scheme := "http"
    statusCode := http.StatusOK
    host := r.Host
    port := r.URL.Port()
    if port == "" {
        port = "8081"
    }

    // Set span status
    span.SetStatus(codes.Ok, "")

    // Use semantic conventions for common attributes
    span.SetAttributes(
        semconv.HTTPMethodKey.String(method),
        semconv.HTTPSchemeKey.String(scheme),
        semconv.HTTPStatusCodeKey.Int(statusCode),
        semconv.HTTPTargetKey.String(r.URL.Path),
        semconv.HTTPURLKey.String(r.URL.String()),
        semconv.HTTPHostKey.String(host),
        semconv.NetHostPortKey.String(port),
        semconv.HTTPUserAgentKey.String(r.UserAgent()),
        semconv.HTTPRequestContentLengthKey.Int64(r.ContentLength),
        semconv.NetPeerIPKey.String(c.RealIP()),
    )

    // Custom attributes that don't have semantic conventions
    span.SetAttributes(
        attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
        attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
        attribute.String("parent_id", ""), // Optionally extract from context
        attribute.String("referer", r.Referer()),
        attribute.String("request_type", "Incoming"),
        attribute.String("sdk_type", "echo"),
        attribute.String("service_version", ""), // Optionally fill this
        attribute.StringSlice("tags", []string{}),
    )

    // Set nested fields (these don't have direct semconv equivalents)
    span.SetAttributes(
        attribute.String("path_params", r.URL.Path),
        attribute.String("query_params", fmt.Sprintf("%v", r.URL.Query())),
        attribute.String("request_body", "{}"), // Assuming empty body for GET request
        attribute.String("request_headers", fmt.Sprintf("%v", r.Header)),
        attribute.String("response_body", "{}"),
        attribute.String("response_headers", "{}"),
    )

    return c.JSON(http.StatusOK, HelloWorld{
        Message: "Hello World",
    })
}

```

#### Set Your Environment Variables

Before running your application, set the following environment variables:

```sh
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="otelcol.apitoolkit.io:4317"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="my go echo project test"
export OTEL_RESOURCE_ATTRIBUTES=at-project-key="z6BJfZVEOSozztMfhqZsGTpG9DiXT9Weurvk1bpe9mwF8orB"
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"
export OTEL_PROPAGATORS="baggage,tracecontext"
```

##### Quick overview of the configuration parameters

{class="docs-table"}
:::
| Attribute | Description |
| --------- | ----------- |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | Specifies the endpoint URL for the OpenTelemetry collector. In this case, it's set to "otelcol.apitoolkit.io:4317". |
| `OTEL_NODE_RESOURCE_DETECTORS` | Defines which resource detectors to use. Here, it's set to detect environment variables, host information, and operating system details. |
| `OTEL_SERVICE_NAME` | Sets the name of your service. You should replace "your-service-name" with the actual name of your service. |
| `OTEL_RESOURCE_ATTRIBUTES` | Specifies additional resource attributes. In this case, it's setting an API Toolkit project key. |
| `OTEL_EXPORTER_OTLP_PROTOCOL` | Defines the protocol used for exporting telemetry data. It's set to "grpc" (gRPC protocol). |
| `OTEL_PROPAGATORS` | Specifies which context propagators to use. Here, it's set to use both "baggage" and "tracecontext". |
:::

### 5. Run the application to Ensure Everything works

Build and run the application with the following command:

```sh

go mod tidy
go run .

```

The server will start on port 8081. You can test it by sending a request:

```sh
curl http://localhost:3000/hello
```

This should return: `{"message":"Hello World"}`

With this setup, your application will send traces to APItoolkit for visualization and analysis.

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tips</b></p>
  <ol>
  <li>
  Remember to keep your APIToolkit project key (`at-project-key`) secure and not expose it in public repositories or logs.
  </li>
   <li>
  Ensure you don't make the mistake of adding the http scheme `http` or `https` to your OTLP Endpoint
  </li>
  </ul>

</div>
