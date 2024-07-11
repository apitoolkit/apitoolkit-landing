---
title: Go Gorilla Mux
ogTitle: Go Gorilla Mux SDK Guide
date: 2022-03-23
updatedDate: 2024-06-08
menuWeight: 5
---

# Go Gorilla Mux SDK Guide

To integrate your Golang Gorilla Mux application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **Golang SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
go get github.com/apitoolkit/apitoolkit-go/gorilla
```

Then add `github.com/apitoolkit/apitoolkit-go/gorilla` to the list of imports, like so:

```go
package main

import (
  apitoolkit "github.com/apitoolkit/apitoolkit-go/gorilla"
)
```

## Configuration

Next, initialize APItoolkit in your application's entry point (e.g., `main.go`), like so:

```go
package main

import (
  "context"
  "net/http"

  "github.com/gorilla/mux"
  apitoolkit "github.com/apitoolkit/apitoolkit-go/gorilla"
)

func main() {
  ctx := context.Background()

  // Initialize the APItoolkit client
  apitoolkitClient, err := apitoolkit.NewClient(
    ctx,
    apitoolkit.Config{
      APIKey: "{ENTER_YOUR_API_KEY_HERE}",
      Debug = false,
      Tags = []string{"environment: production", "region: us-east-1"},
      ServiceVersion: "v2.0",
    },
  )
  if err != nil {
    panic(err)
  }

  router := mux.NewRouter()

  // Register APItoolkit's middleware
  router.Use(apitoolkit.GorillaMuxMiddleware(apitoolkitClient))

  // router.Use(...)
  // Other middleware

  router.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("ok"))
  })

  http.Handle("/", router)
  http.ListenAndServe(":8080", router)
}
```

In the configuration above, **only the `APIKey` option is required**, but you can add the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `Debug` | Set to `true` to enable debug mode. |
| `Tags` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `ServiceVersion` | A defined string version of your application (used for further debugging on the dashboard). |
| `RedactHeaders` | A list of HTTP header keys to redact. |
| `RedactResponseBody` | A list of JSONPaths from the request body to redact. |
| `RedactRequestBody` | A list of JSONPaths from the response body to redact. |
:::

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

```json
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
      }
    ],
    "credit_card": {
      "number": "4111111111111111",
      "expiration": "12/28",
      "cvv": "123"
    }
  }
}
```

Examples of valid JSONPath expressions would be:

{class="docs-table"}
:::
| JSONPath | Description |
| -------- | ----------- |
| `$.user.addresses[*].zip` | In this case, APItoolkit will replace the `zip` field in all the objects of the `addresses` list inside the `user` object with the string `[CLIENT_REDACTED]`. |
| `$.user.credit_card` | In this case, APItoolkit will replace the entire `credit_card` object inside the `user` object with the string `[CLIENT_REDACTED]`. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"} or use this [JSONPath Evaluator](https://jsonpath.com?ref=apitoolkit){target="_blank"} to validate your JSONPath expressions. </p>
  <p>**You can also use our [JSON Redaction Tool](/tools/json-redacter/) <i class="fa-regular fa-screwdriver-wrench"></i> to preview what the final data sent from your API to APItoolkit will look like, after redacting any given JSON object**.</p>
</div>
<hr />

Here's an example of what the configuration would look like with redacted fields:

```go
package main

import (
  "context"
  "net/http"

  "github.com/gorilla/mux"
  apitoolkit "github.com/apitoolkit/apitoolkit-go/gorilla"
)

func main() {
  ctx := context.Background()

  apitoolkitCfg := apitoolkit.Config{
    APIKey:             "{ENTER_YOUR_API_KEY_HERE}",
    RedactHeaders:      []string{"content-type", "Authorization", "HOST"},
    RedactRequestBody:  []string{"$.user.email", "$.user.addresses"},
    RedactResponseBody: []string{"$.users[*].email", "$.users[*].credit_card"},
  }
  apitoolkitClient, _ := apitoolkit.NewClient(ctx, apitoolkitCfg)

  router := mux.NewRouter()
  router.Use(apitoolkit.GorillaMuxMiddleware(apitoolkitClient))

  router.HandleFunc("/test", func(w http.ResponseWriter, r *http.Request) {
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("Ok, success!"))
  })

  http.Handle("/", router)
  http.ListenAndServe(":8080", router)
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

With APItoolkit, you can track and report different unhandled or uncaught errors, API issues, and anomalies at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To manually report specific errors at different parts of your application, use the `ReportError()` method, passing in the `context` and `error` arguments, like so:

```go
package main

import (
  "context"
  "fmt"
  "net/http"
  "os"
  "log"

  "github.com/gorilla/mux"
  apitoolkit "github.com/apitoolkit/apitoolkit-go/gorilla"
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

  router := mux.NewRouter()
  router.Use(apitoolkit.GorillaMuxMiddleware(apitoolkitClient))

  router.HandleFunc("/", hello)

  http.Handle("/", router)
  log.Fatal(http.ListenAndServe(":8080", nil))
}

func hello(w http.ResponseWriter, r *http.Request) {
  // Attempt to open a non-existing file
  _, err := os.Open("non-existing-file.txt")
  if err != nil {
    // Report the error to APItoolkit
    apitoolkit.ReportError(r.Context(), err)
  }
  fmt.Fprintln(w, "Hello, World!")
}
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `ReportError()` method mentioned above is imported directly from `apitoolkit` and not `apitoolkitClient`.</p>
</div>

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

<section class="tab-group" data-tab-group="group1">
  <button class="tab-button" data-tab="tab1">Custom RoundTripper</button>
  <button class="tab-button" data-tab="tab2">TLS Client</button>
  <div id="tab1" class="tab-content">
  To monitor outgoing HTTP requests from your application, replace the default HTTP client transport with a custom RoundTripper. This allows you to capture and send copies of all incoming and outgoing requests to APItoolkit.
  
  Here's an example of the configuration with a custom RoundTripper:

```go
package main

import (
  "context"
  "log"
  "net/http"

  "github.com/gorilla/mux"
  apitoolkit "github.com/apitoolkit/apitoolkit-go/gorilla"
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

  router := mux.NewRouter()
  router.Use(apitoolkit.GorillaMuxMiddleware(apitoolkitClient))

  router.HandleFunc("/{slug}/test", func(w http.ResponseWriter, r *http.Request) {
    // Create a new HTTP client
    HTTPClient := apitoolkit.HTTPClient(
      r.Context(),
      apitoolkit.WithRedactHeaders("content-type", "Authorization", "HOST"),
      apitoolkit.WithRedactRequestBody("$.user.email", "$.user.addresses"),
      apitoolkit.WithRedactResponseBody("$.users[*].email", "$.users[*].credit_card"),
    )

    // Make an outgoing HTTP request using the modified HTTPClient
    _, _ = HTTPClient.Get("https://jsonplaceholder.typicode.com/posts/1")

    // Respond to the request
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("Ok, success!"))
  }).Methods(http.MethodPost)

  log.Fatal(http.ListenAndServe(":8080", router))
}
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p class="mt-6">You can also redact data with the custom RoundTripper for outgoing requests.</p>
</div>

  </div>
  <div id="tab2" class="tab-content">
  If you are using a TLS client for your HTTP requests, you will need to use the [apitoolkit-go/tls_client](https://github.com/apitoolkit/apitoolkit-go-tlsclient){target="_blank" rel="noopener noreferrer"} package to monitor those requests. To use the package, you must first install it using the command below:

```sh
go get github.com/apitoolkit/apitoolkit-go-tlsclient
```

  Here's an example of the configuration with a TLS client:

```go
package main

import (
  "context"
  "log"
  "net/http"

  "github.com/gorilla/mux"
  fhttp "github.com/bogdanfinn/fhttp"
  tls_client "github.com/bogdanfinn/tls-client"

  apitoolkit "github.com/apitoolkit/apitoolkit-go/gorilla"
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

  router := mux.NewRouter()
  router.Use(apitoolkit.GorillaMuxMiddleware(apitoolkitClient))

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

  router.HandleFunc("/{slug}/test", func(w http.ResponseWriter, r *http.Request) {
    // Get the custom apitoolkit tls client
    tclient := apitoolkitTlsClient.NewHttpClient(r.Context(), clientTLS, apitoolkitClient)
    req, err := fhttp.NewRequest(http.MethodGet, "https://jsonplaceholder.typicode.com/posts/1", nil)
    if err != nil {
      panic(err)
    }

    // Use the custom apitoolkit tls client to make requests
    resp, err := tclient.Do(req)
    if err != nil {
      panic(err)
    }

    log.Printf("status code: %d", resp.StatusCode)

    // Respond to the request
    w.WriteHeader(http.StatusOK)
    w.Write([]byte("Ok, success!"))
  }).Methods(http.MethodPost)

  log.Fatal(http.ListenAndServe(":8080", router))
}
```
  </div>
</section>

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-go" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Golang SDK
</a>
```
