---
title: Golang
date: 2022-03-23
publishdate: 2022-03-24
weight: 20
menu:
  main:
    weight: 20
---

To integrate golang web services with API Toolkit, an SDK called the golang client for API Toolkit is utilized. It keeps track of incoming traffic, aggregates the requests, and then delivers them to the apitoolkit servers. We'll concentrate on providing a step-by-step instruction for integrating an API toolkit into our Golang web service in this tutorial.

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

Run the following command to install the package into your Go application

```
go get github.com/apitoolkit/apitoolkit-go
```

Now you can initialize APIToolkit in your application’s entry point (main.go)

```go
package main

import (
  	// Import the apitoolkit golang sdk
  	apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
    ctx := context.Background()

  	// Initialize the client using your apitoolkit.io generated apikey
  	apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "<APIKEY>"})
    ...

  	router := gin.New()

  	// Register with the corresponding middleware of your choice. For Gin router, we use the GinMiddleware method.
  	router.Use(apitoolkitClient.GinMiddleware)

  	// Register your handlers as usual and run the gin server as usual.
  	router.POST("/:slug/test", func(c *gin.Context) {c.Text(200, "ok")})
 	...
}
```

## Next Steps

1. Deploy your application or send test http requests to your service
2. Check API log explorer or Endpoints pages on the APIToolkit dashboard to see if your test request was processed correctly
   ![Endpoint-after-integration](/endpoint-screenshot.png)
3. Enjoy having our API comanage your backends and APIs with you.
