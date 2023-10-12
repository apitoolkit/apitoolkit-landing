---
title: Go Gin
date: 2022-03-23
publishdate: 2022-03-24
weight: 20
menu:
  main:
    weight: 20
---

Integrating your Golang web services with API Toolkit doesn't have to be complicated. With the golang client for API Toolkit, you're not just hooking up systems; you're empowering your web service to handle data efficiently, enhance security, and provide real-time insights.

## Design decisions:

- The SDK relies on google cloud pubsub over grpc behind the scenes, to ensure that your traffic is communicated to APIToolkit for processing in the most efficient ways.
- Processing the live traffic in this way, allows :
  1. APIToolkit to perform all kinds of analysis and anomaly detection and monitoring on your APIs in real time.
  2. Users to explore their API live, via the api log explorer.

## How to Integrate with Golang Gin router:

1. Sign up / Sign in to the [API dashboard](https://app.apitoolkit.io)
   ![Sign up / Sign in](/signin.png)
2. [Create a project](/docs/dashboard/creating-a-project/)
3. [Generate an API key for your project](/docs/dashboard/generating-api-keys), and include a brief description of your work. And to prevent losing your key after it has been generated, remember to make a copy of it.
   ![API key generation](/api-keys-generation.png)
4. Installl APItoolkit and initialize the middleware with the APItoolkit API key you generated above. Integrating only takes 3 lines of Go code:

## Installation

First, run this command:

```
go get github.com/apitoolkit/apitoolkit-go
```

Now you can initialize APIToolkit in your application’s entry point (eg main.go)

```go
package main

import (
  	// Import the apitoolkit golang sdk
    "context"
  	apitoolkit "github.com/apitoolkit/apitoolkit-go"
    "github.com/gin-gonic/gin"
)

func main() {

	// Initialize the client using your apitoolkit.io generated apikey
	apitoolkitClient, err := apitoolkit.NewClient(context.Background(), apitoolkit.Config{APIKey: "YOUR GENERATED API KEY"})
	if err != nil {
		panic(err)
	}

	router := gin.New()

	// Register with the corresponding middleware of your choice. For Gin router, we use the GinMiddleware method.
	router.Use(apitoolkitClient.GinMiddleware)

	// Register your handlers as usual and run the gin server as usual.
	router.POST("/:slug/test", func(c *gin.Context) { c.String(200, "ok") })

}
```

## Redacting Sensitive Fields

Some information is best kept private. You can hide sensitive data fields directly in your dashboard, but for an extra layer of security, our client supports redaction right on your servers. This means sensitive data like passwords or credit card numbers never leave your premises. To mark fields that should be redacted, Add them to the `apitoolkit` config struct. Here's how you do it:

Imagine you have a request that looks like this:

```json
{
  "user": {
    "id": 123456789,
    "name": "John Doe",
    "password": "secretpassword123",
    "creditCard": {
      "number": "1234567890123456",
      "expiry": "12/25"
    }
  }
}
```

You might not wnat to trust us with John Doe's password or credit card number, right? So, you'll tell apitoolkit to hide these details. Add `$.user.password` and `$.user.creditCard.number` the `RedactRequestBody` array, like this:

```go
func main() {
    apitoolkitCfg := apitoolkit.Config{
        RedactHeaders: []string{"Content-Type", "Authorization", "Cookies"}, // Redacting both request and response headers
        RedactRequestBody: []string{"$.user.password", "$.user.creditCard.number"},
        RedactResponseBody: []string{"$.message.error"},
        APIKey: "<APIKEY>",
    }

    // Initialize the client using your apitoolkit.io generated apikey
    apitoolkitClient, _ := apitoolkit.NewClient(context.Background(), apitoolkitCfg)

    router := gin.New()
    // Register with the corresponding middleware of your choice. For Gin router, we use the GinMiddleware method.
    router.Use(apitoolkitClient.GinMiddleware)
    // Register your handlers as usual and run the gin server as usual.
    router.POST("/:slug/test", func(c *gin.Context) {c.String(200, "ok")})
    router.Run(":8080")
}
```

It is important to note that while the `RedactHeaders` config field accepts a list of headers (case insensitive), the `RedactRequestBody` and `RedactResponseBody` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you to have great flexibility in describing which fields within your responses are sensitive. Also, note that this list of items to be redacted will be applied to all endpoint requests and responses on your server. To learn more about JSONPath to help form your queries, please take a look at this cheatsheet: [JSONPath Cheatsheet](https://lzone.de/cheat-sheet/JSONPath)

## Outgoing Requests

```go
    ctx := context.Background()
    HTTPClient := http.DefaultClient
    HTTPClient.Transport = apitoolkitClient.WrapRoundTripper(
        ctx, HTTPClient.Transport,
        WithRedactHeaders([]string{}),
    )

```

The code above shows how to use the custom roundtripper to replace the transport in the default http client.
The resulting HTTP client can be used for any purpose, but will send a copy of all incoming and outgoing requests
to the apitoolkit servers. So to allow monitoring outgoing request from your servers use the `HTTPClient` to make http requests.

## Report Errors

If you've used sentry, or bugsnag, or rollbar, then you're already familiar with this usecase.
But you can report an error to apitoolkit. A difference, is that errors are always associated with a parent request, and helps you query and associate the errors which occured while serving a given customer request. To request errors to APIToolkit use call the `ReportError` method of `apitoolkit` not the client returned by `apitoolkit.NewClient` with the request context and the error to report
Example:

```go
package main

import (
    "github.com/gin-gonic/gin"
    "context"
  	apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
    r := gin.Default()
	apitoolkitClient, err := apitoolkit.NewClient(context.Background(), apitoolkit.Config{APIKey: "<APIKEY>"})
	if err != nil {
    	panic(err)
	}

    r.Use(apitoolkitClient.GinMiddleware)

    r.GET("/", func(c *gin.Context) {
		file, err := os.Open("non-existing-file.txt")
		if err!= nil {
			// Report an error to apitoolkit
			apitoolkit.ReportError(c.Request.Context(), err)
		}
        c.String(http.StatusOK, "Hello, World!")
    })

    r.Run(":8080")
}
```

## Next Steps

1. Deploy your application or send test http requests to your service
2. Check API log explorer or Endpoints pages on the APIToolkit dashboard to see if your test request was processed correctly
   ![Endpoint-after-integration](/endpoint-screenshot.png)
3. Enjoy having our API comanage your backends and APIs with you.
