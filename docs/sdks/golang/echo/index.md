---
title: Go Echo
ogTitle: Go Echo OpenTelemetry Integration
date: 2022-03-23
updatedDate: 2024-10-22
menuWeight: 2
---

# Go Echo OpenTelemetry Integration Guide

## Installation

Install the APIToolkit echo SDK using the following command `go get` command:

```sh
go get github.com/apitoolkit/apitoolkit-go/echo
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

	apitoolkit "github.com/apitoolkit/apitoolkit-go/echo"
	"github.com/labstack/echo/v4"
  _ "github.com/joho/godotenv/autoload" // autoload .env file for otel configuration

)


func main() {
  // Configure OpenTelemetry
	shutdown, err := apitoolkit.ConfigureOpenTelemetry()
	if err != nil {
		log.Printf("error configuring openTelemetry: %v", err)
	}
	defer shutdown()

	router := echo.New()
	// Register APItoolkit's middleware
	router.Use(apitoolkit.Middleware(apitoolkit.Config{
		RedactHeaders:       []string{"Authorization", "X-Api-Key"},
		RedactRequestBody:   []string{"password", "credit_card"},
		RedactResponseBody:  []string{"password", "credit_card"},
	}))

	router.GET("/:slug/test", func(c echo.Context) error {
		return c.String(http.StatusOK, "Ok, success!")
	})

	router.Start(":8000")
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
