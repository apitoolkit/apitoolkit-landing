---
title: Go Native
ogImage: /assets/img/framework-logos/golang-logo.png
---

## How to Integrate with Golang Native

While frameworks like Echo provide a structured way to build web applications in Go, there's an undeniable charm in using Go's native net/http package.

It's simple, powerful, and gives you a closer feel of the language's capabilities.

## Prerequisites

1. Sign up / Sign in to the [API dashboard](https://app.apitoolkit.io)
2. [Create a project](/docs/documentation/dashboard/creating-a-project/)
3. [Generate an API key for your project](/docs/documentation/dashboard/generating-api-keys), and include a brief description of your work. And to prevent losing your key after it has been generated, remember to make a copy of it.

### Integrating with Go's Native HTTP Package

Assuming you have Go set up

a. Create a new Go file, for instance, `main.go`.

b. Set up your basic HTTP server

```go
package main

import (
 "net/http"
)

func main() {
 http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
  w.Write([]byte("Hello, World!"))
 })

 http.ListenAndServe(":8080", nil)
}
```

c. Integrate with APIToolkit

```go
package main

import (
 "net/http"
 "context"
 apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
 // Initialize APIToolkit client with your generated API key
 ctx := context.Background()
 apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "YOUR_GENERATED_API_KEY"})
 if err != nil {
  panic(err)
 }

 http.Handle("/", apitoolkitClient.Middleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
  w.Write([]byte("Hello, World!"))
 })))

 http.ListenAndServe(":8080", nil)
}
```

Replace `"YOUR_GENERATED_API_KEY"` with your actual API key.

### Redacting Sensitive Information

APIToolkit provides a convenient dashboard for marking fields as redacted. However, for an added layer of security, you can perform this redaction natively within your Go application. This ensures that sensitive data never leaves your server, offering a robust safeguard for data privacy. Here's a native approach to redacting sensitive fields using Go and APIToolkit:

---

Consider the following request body

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

To redact the `password` and `number` fields from the credit card, you can set up the `apitoolkit` configuration struct like this:

```go
package main

import (
 "context"
 "net/http"
 apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {

 apitoolkitCfg := apitoolkit.Config{
        RedactHeaders: []string{"Content-Type", "Authorization", "Cookies"}, // Redacting both request and response headers
        RedactRequestBody: []string{"$.user.password", "$.user.creditCard.number"}, // Redacting both request and response body
        RedactResponseBody: []string{"$.message.error"}, // Redacting only response body
        APIKey: "<APIKEY>", // Your API key
    }
 ctx := context.Background()
 apitoolkitClient, _ := apitoolkit.NewClient(ctx,apitoolkitCfg)

 http.HandleFunc("/:slug/test", apitoolkitClient.Middleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
  w.Write([]byte("Hello, World!"))
 })))

 http.ListenAndServe(":8080", nil)
}
```

It's crucial to note that while the `RedactHeaders` config field accepts header names (case insensitive), `RedactRequestBody` and `RedactResponseBody` utilize JSONPath strings.

JSONPath offers a flexible method to pinpoint sensitive fields in your responses. This configuration will be applied across all endpoint requests and responses.

For a deeper dive into JSONPath and its query crafting, refer to: [JSONPath Cheatsheet](https://lzone.de/cheat-sheet/JSONPath).

## Outgoing Requests

To monitor outgoing HTTP requests from your Go application, you can replace the default HTTP client transport with a custom roundtripper.

This allows you to capture and send copies of all incoming and outgoing requests to an apitoolkit server for monitoring and analysis.

Example

```go
package main

import (
 "context"
 "net/http"
 apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
  apitoolkitClient, err := apitoolkit.NewClient(context.Background(), apitoolkit.Config{APIKey: "<API KEY>"})
 if err != nil {
  panic(err)
 }

 http.HandleFunc("/:slug/test", apitoolkitClient.Middleware(http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
        // Create a new HTTP client
        HTTPClient := http.DefaultClient

        // Replace the transport with the custom roundtripper
        HTTPClient.Transport = client.WrapRoundTripper(
            r.Context(),
            HTTPClient.Transport,
            WithRedactHeaders([]string{}),
        )

        // Make an outgoing HTTP request using the modified HTTPClient
        resp, err = HTTPClient.Get("http://localhost:3000/monitored-outgoing-request")
  w.Write([]byte("Hello, World!"))
 })))
}
```

The provided code demonstrates how to set up the custom roundtripper to replace the default HTTP client's transport.

The resulting HTTP client, `HTTPClient`, is configured to send copies of all incoming and outgoing requests to the apitoolkit servers.

You can use this modified HTTP client for any HTTP requests you need to make from your server, ensuring they are monitored by apitoolkit.

## Report Errors

If you've used sentry, or bugsnag, or rollbar, then you're already familiar with this usecase.But you can report an error to apitoolkit.

The difference, is that errors are always associated with a parent request, and helps you query and associate the errors which occured while serving a given customer request.

To request errors to APIToolkit use call the `ReportError` method of `apitoolkit` not the client returned by `apitoolkit.NewClient` with the request context and the error to report

Examples

**Native Go**

```go
package main

import (
 "fmt"
 "net/http"
 apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
 ctx := context.Background()
 apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "<API_KEY>"})
 if err != nil {
  panic(err)
 }

 helloHandler := func(w http.ResponseWriter, r *http.Request) {
  file, err := os.Open("non-existing-file.txt")
  if err!= nil {
   // Report the error to apitoolkit
   apitoolkit.ReportError(r.Context(), err)
  }
  fmt.Fprintln(w, "{\"Hello\": \"World!\"}")
 }

 http.Handle("/", apitoolkitClient.Middleware(http.HandlerFunc(helloHandler)))

 if err := http.ListenAndServe(":8089", nil); err != nil {
  fmt.Println("Server error:", err)
 }
}

```
