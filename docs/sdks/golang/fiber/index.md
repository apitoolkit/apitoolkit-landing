---
title: Go Fiber
ogTitle: Go Fiber SDK Guide
date: 2022-03-23
updatedDate: 2024-06-10
menuWeight: 3
---

# Go Fiber SDK Guide

To integrate your Golang Fiber application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **Golang SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
go get github.com/apitoolkit/apitoolkit-go
```

Then add `github.com/apitoolkit/apitoolkit-go` to the list of imports like so:

```go
package main

import (
  apitoolkit "github.com/apitoolkit/apitoolkit-go"
)
```

## Configuration

Next, initialize APItoolkit in your application's entry point (e.g., `main.go`) like so:

```go
package main

import (
	"context"

	apitoolkit "github.com/apitoolkit/apitoolkit-go"
	"github.com/gofiber/fiber/v2"
)

func main() {
	ctx := context.Background()

	// Initialize the client
	apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "{ENTER_YOUR_API_KEY_HERE"})
	if err != nil {
		panic(err)
	}

	router := fiber.New()

	// Register APItoolkit's middleware
	router.Use(apitoolkitClient.FiberMiddleware)

	// router.Use(...)
	// Other middleware

	router.Get("/greet", func(c *fiber.Ctx) error {
		name := c.Query("name", "jon")
		return c.SendString("Hello " + name)
	})

	router.Listen(":3000")
}
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to provide additional arguments to the `apitoolkitCfg` variable with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

1. `RedactHeaders`: A list of HTTP header keys.
2. `RedactRequestBody`: A list of JSONPaths from the request body.
3. `RedactResponseBody`: A list of JSONPaths from the response body.

<hr />
JSONPath is a query language used to select and extract data from JSON files. For example, given the following sample user data JSON object:

```JSON
{
  "user": {
    "name": "John Martha",
    "email": "john.martha@example.com",
    "addresses": [
      {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345"
      },
      {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip": "12345"
      },
      ...
    ],
    "credit_card": {
      "number": "4111111111111111",
      "expiration": "12/28",
      "cvv": "123"
    }
  },
  ...
}
```

Examples of valid JSONPaths would be:

- `$.user.credit_card` (In this case, APItoolkit will replace the `addresses` field inside the `user` object with the string `[CLIENT_REDACTED]`).
- `$.user.addresses[*].zip` (In this case, APItoolkit will replace the `zip` field in all the objects of the `addresses` list inside the `user` object with the string `[CLIENT_REDACTED]`).

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"}. You can also use this [JSONPath Evaluator](https://jsonpath.com?utm_source=apitoolkit){target="_blank"} to validate your JSONPaths.</p>
</div>
<hr />

Here's an example of what the configuration would look like with redacted fields:

```go
package main

import (
	"context"
	"os"

	apitoolkit "github.com/apitoolkit/apitoolkit-go"
	"github.com/gofiber/fiber/v2"
)

func main() {
	ctx := context.Background()
	apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "{ENTER_YOUR_API_KEY_HERE}"})
	if err != nil {
		panic(err)
	}

	router := fiber.New()
	router.Use(apitoolkitClient.FiberMiddleware)

	router.Get("/", hello)

	router.Listen(":3000")
}

func hello(c *fiber.Ctx) error {
	// Attempt to open a non-existing file
	file, err := os.Open("non-existing-file.txt")
	if err != nil {
		// Report the error to APItoolkit
		apitoolkit.ReportError(c.Context(), err)
		return c.SendString("Something went wrong")
	}
	return c.SendString("Hello file, " + file.Name())
}
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `RedactHeaders` config field expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `RedactRequestBody` and `RedactResponseBody` config fields expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit detects different API issues, anomalies and unhandled errors automatically but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To report errors, use the `ReportError()` method, passing in the `context` and `error` arguments like so:

```go
package main

import (
  "context"
  "net/http"
  "os"
  "github.com/gofiber/fiber/v2"
  apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
  ctx := context.Background()
  apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "{ENTER_YOUR_API_KEY_HERE}"})
  if err != nil {
    panic(err)
  }

  router := fiber.New()
  router.Use(apitoolkitClient.FiberMiddleware)

  router.GET("/", hello)

  router.Listen(":3000")
}

func hello(c *fiber.Ctx) error {
  // Attempt to open a non-existing file
  file, err := os.Open("non-existing-file.txt")
  if err != nil {
    // Report the error to APItoolkit
    apitoolkit.ReportError(c.Context(), err)
    return c.SendString("Something went wrong")
  }
  return c.SendString("Hello file, ", file.Name())
}
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `ReportError()` method mentioned above is imported from `apitoolkit` and not `apitoolkitClient`.</p>
</div>

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

To monitor outgoing HTTP requests from your application, replace the default HTTP client transport with a custom RoundTripper. This allows you to capture and send copies of all incoming and outgoing requests to APItoolkit. Here's an example of outgoing requests configuration with this SDK:

```go
package main

import (
	"context"
	"net/http"

	apitoolkit "github.com/apitoolkit/apitoolkit-go"
	"github.com/gofiber/fiber/v2"
)

func main() {
	ctx := context.Background()
	apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "{ENTER_YOUR_API_KEY_HERE}"})
	if err != nil {
		panic(err)
	}

	router := fiber.New()
	router.Use(apitoolkitClient.FiberMiddleware)

	router.Get("/test", func(c *fiber.Ctx) error {
		// Create a new HTTP client
		HTTPClient := http.DefaultClient

		// Replace the transport with the custom RoundTripper
		HTTPClient.Transport = apitoolkitClient.WrapRoundTripper(
			c.Context(),
			HTTPClient.Transport,
			apitoolkit.WithRedactHeaders("Authorization", "..."),
			apitoolkit.WithRedactRequestBody("$.password", "..."),
			apitoolkit.WithRedactResponseBody("$.account_number", "..."),
		)

		// Make an outgoing HTTP request using the modified HTTPClient
		_, _ = HTTPClient.Get("https://jsonplaceholder.typicode.com/posts/1")

		// Respond to the request
		return c.SendString("Ok, success!")
	})

	router.Listen(":3000")
}
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p class="mt-6">You can also redact data with the custom RoundTripper for outgoing requests.</p>
</div>

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-go" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Golang SDK
</a>
```