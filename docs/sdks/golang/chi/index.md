---
title: Go Chi
ogTitle: Go Chi OpenTelemetry Integration
date: 2022-03-23
updatedDate: 2024-06-10
menuWeight: 1
---

# Go Chi OpenTelemetry Integration Guide

This guide demonstrates how to integrate APItoolkit with your Go Chi application for distributed tracing using OpenTelemetry. We'll walk through the code and explain each part of the integration process.

To get started, you'll need the following OpenTelemetry Go packages and some basic configuration.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Unlike NodeJs which has Auto Instrumentation, the corresponding Go OpenTelemetry initiative is still a work in progress. As a result, it will be a bit technical but not difficulty. So follow closely.

We will be using this [Opensource User profile getter](https://github.com/danielAsaboro/go_chi_test) as our Starter project.

It has two branches;

- _main_: [Without OpenTelemetry]
- _with_otel_: [With OpenTelemetry Integrated]

This tutorial will guide you on how to move from are Uninstrumented service to an Instrumented one.

### 1. Add OpenTelemetry Instrumentation

Kindly run the command below to install the required packages and dependencies.

```sh
go get github.com/riandyrn/otelchi
go get go.opentelemetry.io/otel
go get go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc
go get go.opentelemetry.io/otel/sdk/resource
go get go.opentelemetry.io/otel/sdk/trace
```

Ensure they are installed correctly

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

// TODO
 package main

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"time"

	"github.com/go-chi/chi/v5"
	"github.com/riandyrn/otelchi"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	"go.opentelemetry.io/otel/propagation"
	semconv "go.opentelemetry.io/otel/semconv/v1.4.0"
	oteltrace "go.opentelemetry.io/otel/trace"
)

var tracer oteltrace.Tracer

func main() {
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

	// Initialize tracer
	tracer = otel.Tracer("chi-server")

	// Define router
	r := chi.NewRouter()
	r.Use(otelchi.Middleware("go chi test", otelchi.WithChiRoutes(r)))

	r.HandleFunc("/users/{id:[0-9]+}", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		startTime := time.Now()
		ctx := r.Context()
		id := chi.URLParam(r, "id")
		name := getUser(ctx, id, r, startTime)

		if name == "unknown" {
			http.Error(w, "User not found", http.StatusNotFound)
			return
		}

		reply := fmt.Sprintf("user %s (id %s)\n", name, id)
		w.Write([]byte(reply))
	}))

	// Serve router
	log.Println("Starting server on :8081")
	if err := http.ListenAndServe(":8081", r); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}

func getUser(ctx context.Context, id string, r *http.Request, startTime time.Time) string {

	if id == "123" {
		return "otelchi tester"
	}
	return "unknown"
}

```

### 4. Add Custom Instrumentation

Instrumentation libraries capture telemetry at the edges of your systems, such as inbound and outbound HTTP requests, but they don’t capture what’s going on in your application. For that you’ll need to write some custom manual instrumentation.

Modify the `getUser` function to include custom instrumentation using OpenTelemetry API:

```go

// preceeding code remains the same
func getUser(ctx context.Context, id string, r *http.Request, startTime time.Time) string {
	_, span := tracer.Start(ctx, "getUser")
	defer span.End()

	method := r.Method
	scheme := "http"
	statusCode := 200
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
		semconv.NetPeerIPKey.String(r.RemoteAddr),
	)

	// Custom attributes that don't have semantic conventions
	span.SetAttributes(
		attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
		attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
		attribute.String("parent_id", ""), // You might need to extract this from the context
		attribute.String("referer", r.Referer()),
		attribute.String("request_type", "Incoming"),
		attribute.String("sdk_type", "go-chi"),
		attribute.String("service_version", ""), // Fill in your service version if available
		attribute.StringSlice("tags", []string{}),
	)

	// Set nested fields (these don't have direct semconv equivalents)
	span.SetAttributes(
		attribute.String("query_params", fmt.Sprintf("%v", r.URL.Query())),
		attribute.String("request_body", "{}"), // Assuming empty body for GET request
		attribute.String("request_headers", fmt.Sprintf("%v", r.Header)),
		attribute.String("response_body", "{}"),
		attribute.String("response_headers", "{}"),
	)

	if id == "123" {
		return "otelchi tester"
	}
	return "unknown"
}

```

#### Set Your Environment Variables

Before running your application, set the following environment variables:

```sh
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="otelcol.apitoolkit.io:4317"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="my go chi project test"
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
curl http://localhost:8081/users/123
```

This should return: `user otelchi tester (id 123)`

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
