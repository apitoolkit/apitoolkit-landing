---
title: Go Gorilla Mux
ogTitle: Go Gorilla Mux SDK Guide
date: 2022-03-23
updatedDate: 2024-06-08
menuWeight: 5
---

# Go Mux OpenTelemetry Integration Guide

This guide demonstrates how to integrate APItoolkit with your Go Chi application for distributed tracing using OpenTelemetry. We'll walk through the code and explain each part of the integration process.

To get started, you'll need to install OpenTelemetry Go packages and some basic configuration.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Unlike NodeJs which has Auto Instrumentation, the corresponding Go OpenTelemetry initiative is still a work in progress. As a result, it will be a bit technical but not difficulty. So follow closely.

We will be using this [Opensource Groceries Service](https://github.com/danielAsaboro/go_mux_test) as our Starter project.

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

Ensure they are installed correctly

### 2. Initialize the OpenTelemetry SDK

This is required for any application that exports telemetry data.

Create an `otel.go` file with OpenTelemetry SDK bootstrapping code for good separation of concern and for ease of continuous improvement. The content of this file would look like this:

```go

package main

import (
	"context"
	"errors"
	"os"
	"time"

	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/exporters/otlp/otlptrace/otlptracegrpc"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/sdk/trace"
)

var (
	otlpEndpoint = os.Getenv("OTEL_EXPORTER_OTLP_ENDPOINT")
)

// setupOTelSDK bootstraps the OpenTelemetry pipeline.
// If it does not return an error, make sure to call shutdown for proper cleanup.
func setupOTelSDK(ctx context.Context) (shutdown func(context.Context) error, err error) {
	var shutdownFuncs []func(context.Context) error

	// shutdown calls cleanup functions registered via shutdownFuncs.
	// The errors from the calls are joined.
	// Each registered cleanup will be invoked once.
	shutdown = func(ctx context.Context) error {
		var err error
		for _, fn := range shutdownFuncs {
			err = errors.Join(err, fn(ctx))
		}
		shutdownFuncs = nil
		return err
	}

	// handleErr calls shutdown for cleanup and makes sure that all errors are returned.
	handleErr := func(inErr error) {
		err = errors.Join(inErr, shutdown(ctx))
	}

	// Set up propagator.
	prop := newPropagator()
	otel.SetTextMapPropagator(prop)

	// Set up trace provider.
	tracerProvider, err := newTraceProvider()
	if err != nil {
		handleErr(err)
		return
	}
	shutdownFuncs = append(shutdownFuncs, tracerProvider.Shutdown)
	otel.SetTracerProvider(tracerProvider)

	return
}

func newPropagator() propagation.TextMapPropagator {
	return propagation.NewCompositeTextMapPropagator(
		propagation.TraceContext{},
		propagation.Baggage{},
	)
}

func newTraceProvider() (*trace.TracerProvider, error) {
	// Set up trace provider
	traceExporter, err := otlptracegrpc.New(context.Background(),
		otlptracegrpc.WithEndpoint(otlpEndpoint),
		otlptracegrpc.WithInsecure(),
	)
	if err != nil {
		return nil, err
	}

	traceProvider := trace.NewTracerProvider(
		trace.WithBatcher(traceExporter,
			// Default is 5s. Set to 1s for demonstrative purposes.
			trace.WithBatchTimeout(time.Second)),
	)
	return traceProvider, nil
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
	"errors"
	"log"
	"net"
	"net/http"
	"os"
	"os/signal"
	"time"

	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
)

func main() {
	if err := run(); err != nil {
		log.Fatalln(err)
	}
}

func run() (err error) {
	// Handle SIGINT (CTRL+C) gracefully.
	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt)
	defer stop()

	// Set up OpenTelemetry.
	otelShutdown, err := setupOTelSDK(ctx)
	if err != nil {
		return
	}
	// Handle shutdown properly so nothing leaks.
	defer func() {
		err = errors.Join(err, otelShutdown(context.Background()))
	}()

	// Start HTTP server.
	srv := &http.Server{
		Addr:         ":8082",
		BaseContext:  func(_ net.Listener) context.Context { return ctx },
		ReadTimeout:  time.Second,
		WriteTimeout: 10 * time.Second,
		Handler:      newHTTPHandler(),
	}
	srvErr := make(chan error, 1)
	go func() {
		srvErr <- srv.ListenAndServe()
	}()

	// Wait for interruption.
	select {
	case err = <-srvErr:
		// Error when starting HTTP server.
		return
	case <-ctx.Done():
		// Wait for first CTRL+C.
		// Stop receiving signal notifications as soon as possible.
		stop()
	}

	// When Shutdown is called, ListenAndServe immediately returns ErrServerClosed.
	err = srv.Shutdown(context.Background())
	return
}

func newHTTPHandler() http.Handler {
	mux := http.NewServeMux()

	// handleFunc is a replacement for mux.HandleFunc
	// which enriches the handler's HTTP instrumentation with the pattern as the http.route.
	handleFunc := func(pattern string, handlerFunc func(http.ResponseWriter, *http.Request)) {
		// Configure the "http.route" for the HTTP instrumentation.
		handler := otelhttp.WithRouteTag(pattern, http.HandlerFunc(handlerFunc))
		mux.Handle(pattern, handler)
	}

	// Register handlers.
	handleFunc("/rolldice/", rolldice)
	handleFunc("/rolldice/{player}", rolldice)

	// Add HTTP instrumentation for the whole server.
	handler := otelhttp.NewHandler(mux, "/")
	return handler
}

```

### 4. Add Custom Instrumentation

Instrumentation libraries capture telemetry at the edges of your systems, such as inbound and outbound HTTP requests, but they don’t capture what’s going on in your application. For that you’ll need to write some custom manual instrumentation.

Go the `handler.go` file and Modify the `AllGroceries` function to include custom instrumentation using OpenTelemetry API:

```go

package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"

	"github.com/gorilla/mux"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	semconv "go.opentelemetry.io/otel/semconv/v1.4.0"
)

var tracer = otel.Tracer("Groceries API")

var groceries = []Grocery{
	{Name: "Almod Milk", Quantity: 2},
	{Name: "Apple", Quantity: 6},
}

func AllGroceries(w http.ResponseWriter, r *http.Request) {
	_, span := tracer.Start(r.Context(), "get all groceries")
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
	startTime := time.Now()
	span.SetAttributes(
		attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
		attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
		attribute.String("parent_id", ""), // You might need to extract this from the context
		attribute.String("referer", r.Referer()),
		attribute.String("request_type", "Incoming"),
		attribute.String("sdk_type", "go-mux"),
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

	fmt.Println("Endpoint hit: returnAllGroceries")
	json.NewEncoder(w).Encode(groceries)
	if span.IsRecording() {
		span.SetAttributes(
			attribute.Int64("enduser.id", 1),
			attribute.String("enduser.email", "user.Email"),
			attribute.String("http.method", "GET"),
			attribute.String("http.route", "/allgroceries"),
		)
	}
}

func SingleGrocery(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	name := vars["name"]

	for _, grocery := range groceries {
		if grocery.Name == name {
			json.NewEncoder(w).Encode(grocery)
		}
	}
}

func GroceriesToBuy(w http.ResponseWriter, r *http.Request) {
	reqBody, _ := ioutil.ReadAll(r.Body)
	var grocery Grocery
	json.Unmarshal(reqBody, &grocery)
	groceries = append(groceries, grocery)

	json.NewEncoder(w).Encode(groceries)

}

func DeleteGrocery(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	name := vars["name"]

	for index, grocery := range groceries {
		if grocery.Name == name {
			groceries = append(groceries[:index], groceries[index+1:]...)
		}
	}

}
func UpdateGrocery(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)

	name := vars["name"]

	for index, grocery := range groceries {
		if grocery.Name == name {
			groceries = append(groceries[:index], groceries[index+1:]...)

			var updateGrocery Grocery

			json.NewDecoder(r.Body).Decode(&updateGrocery)
			groceries = append(groceries, updateGrocery)
			fmt.Println("Endpoint hit: UpdateGroceries")
			json.NewEncoder(w).Encode(updateGrocery)
			return
		}
	}

}

```

#### Set Your Environment Variables

Before running your application, set the following environment variables:

```sh
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="otelcol.apitoolkit.io:4317"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="my go mux project test"
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
curl http://localhost:10000/allgroceries
```

This should return:

```sh
[{"ID":0,"CreatedAt":"0001-01-01T00:00:00Z","UpdatedAt":"0001-01-01T00:00:00Z","DeletedAt":null,"Name":"Almod Milk","Quantity":2},{"ID":0,"CreatedAt":"0001-01-01T00:00:00Z","UpdatedAt":"0001-01-01T00:00:00Z","DeletedAt":null,"Name":"Apple","Quantity":6}]
```

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
