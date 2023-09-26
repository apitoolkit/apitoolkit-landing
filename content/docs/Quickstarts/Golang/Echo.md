---
title: Golang
date: 2023-09-25
publishdate: 2022-09-25
weight: 20
menu:
  main:
    weight: 20
---
Echo is an efficient web framework for Go, boasting both high performance and adaptability. Its vast array of middleware and plugins facilitate seamless integration into your application, simplifying the enhancement of features and functions. To further streamline your development, here's a guide on integrating the Go Echo SDK with APIToolkit.

**Create an Account or Sign In to APIToolkit to Generate Key**

1. Sign up / Sign in to the [API dashboard](https://app.apitoolkit.io)
   ![sign up/sign in](signin.png)
2. [Create a project](/docs/dashboard/creating-a-project/)
3. [Generate an API key for your project](/docs/dashboard/generating-api-keys), and include a brief description of your work. And to prevent losing your key after it has been generated, remember to make a copy of it.
   ![api key generation](api-key-generation.png)

**Integrate with Go's Echo Framework**

Assuming you have Go and Echo already set up:

a. Install necessary packages (if not):

```go
go get -u github.com/labstack/echo/v4
```

b. Create a new Go file, e.g., `main.go`

c. Begin setting up your Echo server:

```go
package main

import (
	"github.com/labstack/echo/v4"
)

func main() {
	e := echo.New()

	// Define your routes here...

	e.Start(":8080")
}
```

d. Integrate with APIToolkit:
Let's write the code to initialize `apitoolkit` with `echo`:

```go
package main

import (
	"context"
	"github.com/labstack/echo/v4"
	apitoolkit "github.com/apitoolkit/apitoolkit-go"
)

func main() {
	ctx := context.Background()

	// Initialize the client using your apitoolkit.io generated apikey
	apitoolkitClient, err := apitoolkit.NewClient(ctx, apitoolkit.Config{APIKey: "<APIKEY>"})
	if err != nil {
		panic(err)
	}

	e := echo.New()

	// Register with the corresponding middleware of your choice.
	// Assuming apitoolkit provides an EchoMiddleware function for the echo framework.
	e.Use(apitoolkitClient.EchoMiddleware)

	e.POST("/:slug/test", func(c echo.Context) error {
		return c.String(http.StatusOK, "ok")
	})

	e.Start(":8080")
}
```

Replace `"YOUR_GENERATED_API_KEY"` with the API key you generated.

**Test the Integration**
Run your Echo server and access the endpoint to see if the integration works.


## Redacting Sensitive Fields with Go's Echo and APIToolkit

While it's possible to mark fields as redacted directly from the APIToolkit dashboard, this client also offers client-side redacting. By doing this on the client-side, sensitive fields won't leave your server at all, ensuring that your data remains confined to your infrastructure.

For instance, if you have a request body like:

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

And you wish to redact the `password` and credit card `number` fields, you'd configure the `apitoolkit` config struct as follows:

```go
package main

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"apitoolkit"  // Assuming the APIToolkit package is imported as such
)

func main() {
	e := echo.New()

	apitoolkitCfg := apitoolkit.Config{
        RedactHeaders: []string{"Content-Type", "Authorization", "Cookies"}, // Redacting both request and response headers
        RedactRequestBody: []string{"$.user.password", "$.user.creditCard.number"},
        RedactResponseBody: []string{"$.message.error"},
        APIKey: "<APIKEY>",
    }

	// Initialize the client with your apitoolkit.io generated API key
	apitoolkitClient, _ := apitoolkit.NewClient(apitoolkitCfg)

	// Use the APIToolkit middleware with Echo
	e.Use(apitoolkitClient.EchoMiddleware)  // Assuming APIToolkit provides such a middleware. Replace with the actual function if different.

	e.POST("/:slug/test", func(c echo.Context) error {
		return c.String(http.StatusOK, "ok")
	})
	
	e.Start(":8080")
}
```

It's important to emphasize that while the `RedactHeaders` config field accepts header names (case insensitive), `RedactRequestBody` and `RedactResponseBody` expect JSONPath strings.

JSONPath provides a flexible way to define sensitive fields in your responses. This list will be applied across all endpoint requests and responses. For more on JSONPath and how to craft queries, check out: [JSONPath Cheatsheet](https://lzone.de/cheat-sheet/JSONPath)

## Next Steps

1. Deploy your application or send test HTTP requests to your service.
2. Head over to the API log explorer or Endpoints section on the APIToolkit dashboard to confirm that your test request has been processed correctly.
3. Enjoy having our API comanage your backends and APIs with you.