---
title: Go Fiber
ogTitle: Go Fiber SDK Guide
date: 2022-03-23
updatedDate: 2024-10-22
menuWeight: 3
---

# Go Fiber OpenTelemetry Integration Guide

## Installation

Install the APIToolkit fiber SDK using the following command `go get` command:

```sh
go get github.com/apitoolkit/apitoolkit-go/fiber
```

## Configuration

Before configuration open telemetery and setting up the APItoolkit middleware, you need to configure a few environment variables. These variables provide essential information for setting up openTelemetry and APItoolkit.

```sh
OTEL_RESOURCE_ATTRIBUTES="at-project-key=YOUR_API_KEY" # Your apitoolkit API key
OTEL_SERVICE_NAME="apitoolkit-otel-go-demo" # Service name for your the service you're integrating in
OTEL_SERVICE_VERSION="0.0.1" # Your application's service version
```

## Usage

After setting up the environment variables, you can configure the OpenTelemetry SDK and APItoolkit middleware like so:

```go
package main

import (
	"log"

	apitoolkit "github.com/apitoolkit/apitoolkit-go/fiber"
	"github.com/gofiber/fiber/v2"
  _ "github.com/joho/godotenv/autoload" // autoload .env file for otel configuration

)

func main() {
  // Configure OpenTelemetry
	shutdown, err := apitoolkit.ConfigureOpenTelemetry()
	if err != nil {
		log.Printf("error configuring openTelemetry: %v", err)
	}
	defer shutdown()

	app := fiber.New()
	// Register APItoolkit's middleware
	app.Use(apitoolkit.Middleware(apitoolkit.Config{
		RedactHeaders:       []string{"Authorization", "X-Api-Key"}, // Example headers to redact
		RedactRequestBody:   []string{"$.password", "$.account.credit_card"}, // Example request body fields to redact (in jsonpath)
		RedactResponseBody:  []string{"$.password", "$.user.credit_card"}, // Example response body fields to redact (in jsonpath)
	}))

	// Define a route for Hello World
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello, World!",
		})
	})

	app.Listen(":3000")
}
```

### All Middleware Configuration Fields

The middleware configuration specifies how the APItoolkit SDK should handle requests and responses. Below are the available fields:

{class="docs-table"}
:::
| Field Name | Type | Description | Default Value | Example |
| --------------------- | ---------- | ----------------------------------------------- | ------------- | ----------------------------------------- |
| `Debug` | `bool` | Enable detailed logs during development | `false` | `true` |
| `ServiceName` | `string` | Name of the service being monitored | - | `"example-chi-server"` |
| `ServiceVersion` | `string` | Version of the service | - | `"0.0.1"` |
| `Tags` | `[]string` | Additional tags for contextual information | `[]` | `[]string{"env:dev", "team:backend"}` |
| `CaptureRequestBody` | `bool` | Enable capturing of request body | `false` | `true` |
| `CaptureResponseBody` | `bool` | Enable capturing of response body | `false` | `true` |
| `RedactHeaders` | `[]string` | List of headers to redact | `[]` | `[]string{"Authorization", "X-Api-Key"}` |
| `RedactRequestBody` | `[]string` | JSONPath list of request body fields to redact | `[]` | `[]string{"$.password", "$.credit_card"}` |
| `RedactResponseBody` | `[]string` | JSONPath list of response body fields to redact | `[]` | `[]string{"$.password", "$.credit_card"}` |
:::

```=html
<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tips</b></p>
  <ol>
  <li>
  Remember to keep your APIToolkit project key (<code>at-project-key</code>) secure and not expose it in public repositories or logs.
  </li>
  </ul>
</div>
```
