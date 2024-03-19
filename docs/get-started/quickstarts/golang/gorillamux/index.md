---
title: Go Gorilla Mux
date: 2022-09-24
publishdate: 2022-09-24
weight: 20
toc: true
imageurl: /assets/img/framework-logos/mux-logo.png
menu:
  main:
    weight: 20
---
# Go Gorilla Mux integration
This is how to integrate APItoolkit Go Gorilla Mux SDK into your application. This enhances your application's capabilities in managing routes, middleware, and request handling, ensuring smooth communication between your application components and external APIs.

### Prerequisites

1. Sign up / Sign in to the [API dashboard](https://app.apitoolkit.io)
2. [Create a project](/docs/documentation/dashboard/creating-a-project/)
3. [Generate an API key for your project](/docs/documentation/dashboard/generating-api-keys), and include a brief description of your work. And to prevent losing your key after it has been generated, remember to make a copy of it.

**Integrate with Gorilla Mux in Go**

Assuming you've already set up Go and wish to integrate with Gorilla Mux

a. Install necessary packages

```bash
go get -u github.com/gorilla/mux
```

b. Create a new Go file, for instance, `main.go`

c.In your main.go file, initialize Gorilla Mux router and define your routes as needed. Below is a basic setup example

```go
package main

import (
	"github.com/gorilla/mux"
	"net/http"
)

func main() {
	r := mux.NewRouter()

	// Define your routes here...

	http.Handle("/", r)
	http.ListenAndServe(":8080", r)
}
```

d. Integrate with APITOOLKIT
To integrate with APITOOLKIT, follow these steps:
- Import necessary packages and initialize the APITOOLKIT client with your API key.
- Register APITOOLKIT middleware with Gorilla Mux router.
- Implement your routes, ensuring that APITOOLKIT middleware is applied.
Let's go ahead and write the code to initialize `apitoolkit` with `gorilla/mux`:
```go
package main

import (
	"context"
	"net/http"
	"github.com/gorilla/mux"
	apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
	ctx := context.Background()

	// Initialize the client using your generated apikey
	apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "<APIKEY>"})
	if err != nil {
		panic(err)
	}

	r := mux.NewRouter()
	// Register middleware
	r.Use(apitoolkitClient.GorillaMuxMiddleware)
	r.HandleFunc("/{slug}/test",func(w http.ResponseWriter, r *http.Request) {
		w.WriteHeader(http.StatusOK)
		w.Write([]byte("ok"))
	})

	http.ListenAndServe(":8080", r)
}
```

Replace `"YOUR_GENERATED_API_KEY"` with your actual API key.

**Test the Integration**
This code sets up a basic HTTP server using `gorilla/mux` and integrates the `apitoolkit` middleware. When you run this code and make a request to `http://localhost:8080/{some_slug}/test`, it should go through the `apitoolkit` middleware before responding with "ok".

## Redacting Sensitive Fields with Gorilla Mux and APIToolkit

It's possible to mark fields as redacted directly on the API Toolkit dashboard. However, you also have the option to handle redaction on the client side. By opting for client-side redaction, you're ensuring these sensitive fields won't leave your server, enhancing data privacy.

Suppose you're dealing with a request body like:

```json
{
  "user": {
    "id": 123456789,
    "name": "Precious John",
    "password": "secretpassword123",
    "creditCard": {
      "number": "1234567890123456",
      "expiry": "12/25"
    }
  }
}
```

To redact the `password` and credit card `number` fields, you would configure the `apitoolkit` config struct in this manner:

```go
package main

import (
	"net/http"
	"github.com/gorilla/mux"
	apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
	r := mux.NewRouter()

	apitoolkitCfg := apitoolkit.Config{
        RedactHeaders: []string{"Content-Type", "Authorization", "Cookies"}, // Redacting both request and response headers
        RedactRequestBody: []string{"$.user.password", "$.user.creditCard.number"},
        RedactResponseBody: []string{"$.message.error"},
        APIKey: "<APIKEY>",
    }

	// Initialize the APIToolkit client using your generated API key
	apitoolkitClient, _ := apitoolkit.NewClient(apitoolkitCfg)

	r.Use(apitoolkitClient.GorillaMuxMiddleware)

	r.HandleFunc("/:slug/test", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("ok"))
	}).Methods("POST")

	http.Handle("/", r)
	http.ListenAndServe(":8080", r)
}
```

It's important to note that while the `RedactHeaders` config field will take the header names (which are case insensitive), `RedactRequestBody` and `RedactResponseBody` work with JSONPath strings.

Using JSONPath allows for flexibility when determining which fields in your responses are sensitive. This configuration is global and impacts all endpoint requests and responses. 

To get a better grasp of JSONPath and how to draft these queries, look into: [JSONPath Cheatsheet](https://lzone.de/cheat-sheet/JSONPath)

## Outgoing Requests

To monitor outgoing HTTP requests from your Go application, you can replace the default HTTP client transport with a custom roundtripper.

This allows you to capture and send copies of all incoming and outgoing requests to an apitoolkit server for monitoring and analysis.

Example

```go
package main

import (
	"net/http"
	"github.com/gorilla/mux"
  	 apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {

 	apitoolkitClient, err := apitoolkit.NewClient(context.Background(), apitoolkit.Config{APIKey: "<API KEY>"})
	if err != nil {
		panic(err)
	}

	handlerFn := func(w http.ResponseWriter, r *http.Request) {
		HTTPClient := http.DefaultClient
		HTTPClient.Transport = client.WrapRoundTripper(
			r.Context(), HTTPClient.Transport,
			WithRedactHeaders([]string{}),
		)
		_, _ = HTTPClient.Get("http://localhost:3000/test-outgoing")

		w.WriteHeader(http.StatusAccepted)
		w.Write([]byte("Hello world"))
	}
	r := mux.NewRouter()
	r.Use(client.GorillaMuxMiddleware)
	r.HandleFunc("/:slug/test", handlerFn).Methods(http.MethodPost)
}
```

The provided code demonstrates how to set up the custom roundtripper to replace the default HTTP client's transport. 

The resulting HTTP client, `HTTPClient`, is configured to send copies of all incoming and outgoing requests to the apitoolkit servers. 

You can use this modified HTTP client for any HTTP requests you need to make from your server, ensuring they are monitored by apitoolkit.

## Report Errors

If you've used sentry, or bugsnag, or rollbar, then you're already familiar with this usecase.
But you can report an error to apitoolkit. A difference, is that errors are always associated with a parent request, and helps you query and associate the errors which occured while serving a given customer request. To request errors to APIToolkit use call the `ReportError` method of `apitoolkit` not the client returned by `apitoolkit.NewClient` with the request context and the error to report
Example:

**Gorilla mux**

```go
import (
   //... other imports
  	apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
	r := mux.NewRouter()
	ctx := context.Background()

	apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "<API_KEY>"})
	if err != nil {
		panic(err)
	}
	r.Use(apitoolkitClient.GorillaMuxMiddleware)
	r.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		_, err := os.Open("non-existing-file.json")
		if err != nil {
			// Report the error to apitoolkit
			apitoolkit.ReportError(r.Context(), err)
		}
		fmt.Fprintln(w, "Hello, World!")
	})

	server := &http.Server{Addr: ":8080", Handler: r}
	err = server.ListenAndServe()
	if err != nil {
		fmt.Println(err)
	}
}
```
