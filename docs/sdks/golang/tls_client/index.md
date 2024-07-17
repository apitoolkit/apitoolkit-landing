---
title: Go TLS Client
ogTitle: Go TLS Client Guide
date: 2022-03-23
updatedDate: 2024-06-08
menuWeight: 6
---

# Go TLS Client Guide

If you are using a TLS client for your HTTP requests, you will need to use the [apitoolkit-go/tls_client](https://github.com/apitoolkit/apitoolkit-go/tls_client){target="\_blank" rel="noopener noreferrer"} package to monitor those requests. To use the package, you must first install it using the command below:

```sh
go get github.com/apitoolkit/apitoolkit-go/tls_client
```

Here's an example of the configuration with a TLS client:

```go
package main

import (
  "context"
  "log"
  "net/http"

  fhttp "github.com/bogdanfinn/fhttp"
  tls_client "github.com/bogdanfinn/tls-client"

  apitoolkit "github.com/apitoolkit/apitoolkit-go/native"
  apitoolkitTlsClient "github.com/apitoolkit/apitoolkit-go/tls_client"
)

func main() {
  ctx := context.Background()

  apitoolkitClient, err := apitoolkit.NewClient(
    ctx,
    apitoolkit.Config{APIKey: "{ENTER_YOUR_API_KEY_HERE}"},
  )
  if err != nil {
    panic(err)
  }

  jar := tls_client.NewCookieJar()
  options := []tls_client.HttpClientOption{
    tls_client.WithTimeoutSeconds(30),
    tls_client.WithNotFollowRedirects(),
    tls_client.WithCookieJar(jar), // create cookieJar instance and pass it as argument
  }

  clientTLS, err := tls_client.NewHttpClient(tls_client.NewNoopLogger(), options...)
  if err != nil {
    panic(err)
  }

  http.HandleFunc("/test", apitoolkit.Middleware(apitoolkitClient)(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {

    tclient := apitoolkitTlsClient.NewHttpClient(r.Context(), clientTLS, apitoolkitClient)
    req, err := fhttp.NewRequest(http.MethodGet, "https://jsonplaceholder.typicode.com/posts/1", nil)
    if err != nil {
      panic(err)
    }

    resp, err := tclient.Do(req)
    if err != nil {
      panic(err)
    }

    log.Printf("status code: %d", resp.StatusCode)

    // Respond to the request
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("Hello, World!"))
  })))

  http.ListenAndServe(":8080", nil)
}
```

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-go/tls_client" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Golang TLS Client SDK
</a>
```
