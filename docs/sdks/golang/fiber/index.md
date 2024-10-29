---
title: Go Fiber
ogTitle: Go Fiber SDK Guide
date: 2022-03-23
updatedDate: 2024-10-22
menuWeight: 3
---

# Go Fiber OpenTelemetry Integration Guide

This guide demonstrates how to integrate APItoolkit with your Go Chi application for distributed tracing using OpenTelemetry. We'll walk through the code and explain each part of the integration process.

To get started, you'll need to install OpenTelemetry Go packages and some basic configuration.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Unlike NodeJs which has Auto Instrumentation, the corresponding Go OpenTelemetry initiative is still a work in progress. As a result, it will be a bit technical but not difficulty. So follow closely.

e will be using this [Opensource User profile repo](https://github.com/danielAsaboro/go_fiber_test.git) as our Starter project.

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
	"fiber_sample/routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/propagation"
)


func main() {
	// first we must setup new Instance of FIber
	app := fiber.New()

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
	// then we must define our routes function
	routes.Routes(app)

	// create http connection for this api
	app.Listen(":3000")
}

```

### 4. Add Custom Instrumentation

Instrumentation libraries capture telemetry at the edges of your systems, such as inbound and outbound HTTP requests, but they don’t capture what’s going on in your application. For that you’ll need to write some custom manual instrumentation.

Go to the `handlers` directory and Modify the `handlers.go` file to include custom instrumentation using OpenTelemetry API:

```go

package handlers

import (
	"fiber_sample/data"
	"fmt"
	"strconv"
	"time"

	"github.com/gofiber/fiber/v2"
	"go.opentelemetry.io/otel"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
	semconv "go.opentelemetry.io/otel/semconv/v1.4.0"
	oteltrace "go.opentelemetry.io/otel/trace"
)

var tracer oteltrace.Tracer

// ReadData handles reading all data
func ReadData(ctx *fiber.Ctx) error {
	tracer = otel.Tracer("fiber test server")
	startTime := time.Now()
	_, span := tracer.Start(ctx.UserContext(), "getUser")
	defer span.End()

	// Fiber-specific methods to get request data
	method := ctx.Method()
	scheme := ctx.Protocol()
	statusCode := fiber.StatusOK
	host := ctx.Hostname()
	url := ctx.OriginalURL()

	// Set span status
	span.SetStatus(codes.Ok, "")

	contentLengthStr := ctx.Get(fiber.HeaderContentLength)
	contentLength, err := strconv.Atoi(contentLengthStr)
	if err != nil {
		contentLength = 0
	}

	// Use semantic conventions for common attributes
	span.SetAttributes(
		semconv.HTTPMethodKey.String(method),
		semconv.HTTPSchemeKey.String(scheme),
		semconv.HTTPStatusCodeKey.Int(statusCode),
		semconv.HTTPTargetKey.String(ctx.Path()),
		semconv.HTTPURLKey.String(url),
		semconv.HTTPHostKey.String(host),
		semconv.NetHostPortKey.String(ctx.Port()),
		semconv.HTTPUserAgentKey.String(ctx.Get(fiber.HeaderUserAgent)),
		semconv.HTTPRequestContentLengthKey.Int(contentLength),
		semconv.NetPeerIPKey.String(ctx.IP()),
	)

	// Custom attributes
	span.SetAttributes(
		attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
		attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
		attribute.String("referer", ctx.Get(fiber.HeaderReferer)),
		attribute.String("request_type", "Incoming"),
		attribute.String("sdk_type", "go-fiber"),
		attribute.String("service_version", ""),
		attribute.StringSlice("tags", []string{}),
	)

	span.SetAttributes(
		attribute.String("query_params", fmt.Sprintf("%v", ctx.Queries())),
		attribute.String("request_body", "{}"),
		attribute.String("request_headers", fmt.Sprintf("%v", ctx.GetReqHeaders())),
		attribute.String("response_body", "{}"),
		attribute.String("response_headers", "{}"),
	)

	dataService := data.InitData()
	return ctx.JSON(dataService.GetData())
}

// DeleteData handles deleting a record by ID
func DeleteData(ctx *fiber.Ctx) error {
	tracer = otel.Tracer("fiber test server")
	startTime := time.Now()
	_, span := tracer.Start(ctx.UserContext(), "deleteUser")
	defer span.End()

	id, _ := strconv.Atoi(ctx.Params("id"))
	dataService := data.InitData()

	span.SetAttributes(
		attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
		attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
		attribute.String("request_type", "Incoming"),
		attribute.String("id", strconv.Itoa(id)),
	)

	return ctx.JSON(dataService.DeleteData(id))
}

// InsertData handles inserting new data
func InsertData(ctx *fiber.Ctx) error {
	tracer = otel.Tracer("fiber test server")
	startTime := time.Now()
	_, span := tracer.Start(ctx.UserContext(), "insertUser")
	defer span.End()

	dataService := data.InitData()
	user := new(data.UserModel)

	if err := ctx.BodyParser(user); err != nil {
		span.SetStatus(codes.Error, "Body parsing error")
		return err
	}

	users := dataService.InsertData(data.UserModel{
		Name:   user.Name,
		Gender: user.Gender,
		Age:    user.Age,
	})
	// Set span status
	span.SetStatus(codes.Ok, "")

	span.SetAttributes(
		attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
		attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
		attribute.String("request_body", fmt.Sprintf("%v", user)),
	)

	return ctx.JSON(users)
}

// ReadDataById handles fetching a record by ID
func ReadDataById(ctx *fiber.Ctx) error {
	tracer = otel.Tracer("fiber test server")
	startTime := time.Now()
	_, span := tracer.Start(ctx.UserContext(), "getUserById")
	defer span.End()

	id, _ := strconv.Atoi(ctx.Params("id"))
	dataService := data.InitData()

	// Set span status
	span.SetStatus(codes.Ok, "")
	span.SetAttributes(
		attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
		attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
		attribute.String("id", strconv.Itoa(id)),
	)

	return ctx.JSON(dataService.GetDataById(id))
}

// PatchData handles updating a record by ID
func PatchData(ctx *fiber.Ctx) error {
	tracer = otel.Tracer("fiber test server")
	startTime := time.Now()
	_, span := tracer.Start(ctx.UserContext(), "updateUser")
	defer span.End()

	id, _ := strconv.Atoi(ctx.Params("id"))
	dataService := data.InitData()
	user := new(data.UserModel)

	if err := ctx.BodyParser(user); err != nil {
		span.SetStatus(codes.Error, "Body parsing error")
		return err
	}

	users := dataService.UpdateDataById(
		id,
		data.UserModel{
			Name:   user.Name,
			Gender: user.Gender,
			Age:    user.Age,
		},
	)
	// Set span status
	span.SetStatus(codes.Ok, "")
	span.SetAttributes(
		attribute.String("created_at", startTime.Format(time.RFC3339Nano)),
		attribute.Float64("duration_ns", float64(time.Since(startTime).Nanoseconds())),
		attribute.String("request_body", fmt.Sprintf("%v", user)),
	)

	return ctx.JSON(users)
}

```

#### Set Your Environment Variables

Before running your application, set the following environment variables:

```sh
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="otelcol.apitoolkit.io:4317"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="my go fiber project test"
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

The server will start on port 3000. You can test it by sending a request:

```sh
curl http://localhost:3000
```

This should return: 

```

[{"id":1,"name":"A","age":18,"gender":"Male"},{"id":2,"name":"Chi","age":17,"gender":"Female"},{"id":3,"name":"Shintaro","age":18,"gender":"Male"},{"id":4,"name":"Ayano","age":18,"gender":"Female"}]

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
