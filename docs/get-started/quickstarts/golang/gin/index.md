---
title: Go Gin
date: 2022-03-23
publishdate: 2022-03-24
toc: true
imageurl: /assets/img/framework-logos/gin-logo.png
weight: 20
menu:
  main:
    weight: 20
---
# Go Gin integration
To integrate APIToolkit with Go Gin, first install it using the 'go get' command, then initialize the client in the application's main function with the generated API key from apitoolkit.io. 

## How to Integrate with Golang Gin

1. Sign up / Sign in to the [API dashboard](https://app.apitoolkit.io)
2. [Create a project](/docs/documentation/dashboard/creating-a-project/)
3. [Generate an API key for your project](/docs/documentation/dashboard/generating-api-keys), and include a brief description of your work. And to prevent losing your key after it has been generated, remember to make a copy of it.
4. Installl APItoolkit and initialize the middleware with the APItoolkit API key you generated above. Integrating only takes 3 lines of Go code:

## Installation

To install run this command

```go
go get github.com/apitoolkit/apitoolkit-go
```

Now you can initialize APIToolkit in your application’s entry point (eg main.go)

Import the necessary packages into your Go application

```go
package main

import (
    "context"
    apitoolkit "github.com/apitoolkit/apitoolkit-go"
    "github.com/gin-gonic/gin"
)
```
In your application's main function, initialize the APIToolkit client using your API key generated from your dashboard

```go
func main() {
    apitoolkitClient, err := apitoolkit.NewClient(context.Background(), apitoolkit.Config{APIKey: "YOUR GENERATED API KEY"})
    if err != nil {
        panic(err)
    }
```
Create a Gin router instance
 ```go  
    router := gin.New()
```
Register the APIToolkit middleware with your chosen middleware framework. For Gin router, use the 'GinMiddleware' method

```go
    router.Use(apitoolkitClient.GinMiddleware)
```
Register your application's handlers as usual and run the Gin server

```go
    router.POST("/:slug/test", func(c *gin.Context) { c.String(200, "ok") })
```

## Redacting Sensitive Fields

Some information is best kept private. You can hide sensitive data fields directly in your dashboard, but for an extra layer of security, our client supports redaction right on your servers. 

This means sensitive data like passwords or credit card numbers never leave your premises. To mark fields that should be redacted, Add them to the `apitoolkit` config struct. 

Here's how you do it:

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

The choice of JSONPath was selected to allow you to have great flexibility in describing which fields within your responses are sensitive. Also, note that this list of items to be redacted will be applied to all endpoint requests and responses on your server. 

To learn more about JSONPath to help form your queries, please take a look at this cheatsheet: [JSONPath Cheatsheet](https://lzone.de/cheat-sheet/JSONPath)

## Outgoing Requests

To monitor outgoing HTTP requests from your Go application, you can replace the default HTTP client transport with a custom roundtripper. 

This allows you to capture and send copies of all incoming and outgoing requests to an apitoolkit server for monitoring and analysis.

Example

```go
package main

import (
    "context"
    "github.com/gin-gonic/gin"
  	 apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {

 	apitoolkitClient, err := apitoolkit.NewClient(context.Background(), apitoolkit.Config{APIKey: "<API KEY>"})
	if err != nil {
		panic(err)
	}

	router := gin.New()

	// Register with the corresponding middleware of your choice. For Gin router, we use the GinMiddleware method.
	router.Use(apitoolkitClient.GinMiddleware)
  router.POST("/:slug/test", func(c *gin.Context) (err error) {
        // Create a new HTTP client
        HTTPClient := http.DefaultClient

        // Replace the transport with the custom roundtripper
        HTTPClient.Transport = client.WrapRoundTripper(
            c.Request().Context(),
            HTTPClient.Transport,
            WithRedactHeaders([]string{}),
        )

        // Make an outgoing HTTP request using the modified HTTPClient
        _, _ = HTTPClient.Get("http://localhost:3000/monitored-outgoing-request")

        // Respond to the request
        c.String(http.StatusOK, "ok")
    })
}
```

The provided code demonstrates how to set up the custom roundtripper to replace the default HTTP client's transport.

The resulting HTTP client, `HTTPClient`, is configured to send copies of all incoming and outgoing requests to the apitoolkit servers. 

You can use this modified HTTP client for any HTTP requests you need to make from your server, ensuring they are monitored by apitoolkit.

## Report Errors

If you've used sentry, or bugsnag, or rollbar, then you're already familiar with this usecase. But you can report an error to apitoolkit. 

The difference is that errors are always associated with a parent request, and helps you query and associate the errors which occured while serving a given customer request. To request errors to APIToolkit use call the `ReportError` method of `apitoolkit` not the client returned by `apitoolkit.NewClient` with the request context and the error to report

Example

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
