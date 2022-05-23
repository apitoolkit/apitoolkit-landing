---
title: Golang 
date: 2022-03-23
publishdate: 2022-03-24
weight: 20
menu:
  main:
    weight: 20
---

The API Toolkit golang client is an sdk used to integrate golang web services with APIToolkit. It monitors incoming traffic, gathers the requests and sends the request to the apitoolkit servers.

## Design decisions:
- The SDK relies on google cloud pubsub over grpc behind the scenes, to ensure that your traffic is communicated to APIToolkit for processing in the most efficient ways.
- Processing the live traffic in this way, allows :
  1. APIToolkit to perform all kinds of analysis and anomaly detection and monitoring on your APIs in real time.
  2. Users to explore their API live, via the api log explorer.

## How to Integrate with Gin router:
1. Generate the APIToolkit API key 
2. Initialize the middleware with the APItoolkit API key like you see below:

``` go
package main

import (
  	// Import the apitoolkit golang sdk
  	apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
  	// Initialize the client using your apitoolkit.io generated apikey
  	apitoolkitClient, err := apitoolkit.NewClient(
      context.Background(), apitoolkit.Config{APIKey: "<APIKEY>"},
    )
    if err != nil {
          panic(err)
    }

  	router := gin.New()

  	// Register with the corresponding middleware of your choice. For Gin router, we use the GinMiddleware method.
  	router.Use(apitoolkitClient.GinMiddleware)

  	// Register your handlers as usual and run the gin server as usual.
  	router.POST("/:slug/test", func(c *gin.Context) {c.Text(200, "ok")})
 	...
}
```
3. Deploy your application and enjoy exploring and managing your API via the APIToolkit dashboards and API log explorer
