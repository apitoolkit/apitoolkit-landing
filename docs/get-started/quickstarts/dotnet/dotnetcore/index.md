---
title: .Net Core
date: 2022-03-23
publishdate: 2022-03-24
weight: 20
toc: true
imageurl: /assets/img/framework-logos/net-logo.png
menu:
  main:
    weight: 20
---

# .Net SDK integration

To integrate .Net web services with API Toolkit, an SDK called the `ApiToolkit.Net` client for API Toolkit is utilized.

It keeps track of incoming traffic, aggregates the requests, and then delivers them to the apitoolkit servers.

## Design decisions

- APItoolkit SDK relies on google cloud pubsub over grpc behind the scenes, to ensure that your traffic is communicated to APIToolkit for processing in the most efficient ways.
- Processing the live traffic in this way, allows:
  
  1. APIToolkit to perform all kinds of analysis and anomaly detection and monitoring on your APIs in real time.
  2. Users to explore their API live, via the api log explorer.

### Prerequisites

- Sign up / Sign in to the [API dashboard](https://app.apitoolkit.io)
   
-  [Create a project](/docs/dashboard/creating-a-project/)
   
-  [Generate an API key for your project](/docs/dashboard/generating-api-keys), and include a brief description of your work. And to prevent losing your key after it has been generated, remember to make a copy of it.
   
## Installation

Kindly run the following command to install the package:

```sh
dotnet add package ApiToolkit.Net
```

## Configuration

Now you can initialize APItoolkit in your application's entry point (e.g `Program.cs`) like so:

```csharp
var config = new Config
{
    Debug = true, # Set debug flags to false in production
    ApiKey = "{Your_APIKey}"
};
var client = await APIToolkit.NewClientAsync(config);

# Register the middleware to use the initialized client
app.Use(async (context, next) =>
{
    var apiToolkit = new APIToolkit(next, client);
    await apiToolkit.InvokeAsync(context);
});

# app.UseEndpoint(..) 
# other middleware and logic
# ...
```

> [!NOTE]
> 
> Please make sure the APItoolkit middleware is added before `UseEndpoint` and other middleware are initialized.

> [!IMPORTANT]
> 
> The `{Your_APIKey}` field should be replaced with the API key generated from the APItoolkit dashboard. 


## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted in two ways:
- This client SDK (the fields will never leave your servers in the first place).
- The APItoolkit dashboard (the fields will be transported from your servers first and then redacted on the edge before further processing).

To mark a field for redacting via this SDK, you need to provide additional arguments to the `config` variable with paths to the fields that should be redacted. There are three (3) potential arguments that you can provide to configure what gets redacted.
1. `RedactHeaders`:  A list of HTTP header keys (e.g., `COOKIE` (redacted by default), `CONTENT-TYPE`, etc.).
2. `RedactRequestBody`: A list of JSONPaths from the request body (if the request body is a valid JSON).
3. `RedactResponseBody`: A list of JSONPaths from the response body (if the response body is a valid JSON).

### JSONPath Example

Given the following JSON object:

```JSON
{
    "store": {
        "books": [
            {
                "category": "reference",
                "author": "Nigel Rees",
                "title": "Sayings of the Century",
                "price": 8.95
            },
            {
                "category": "fiction",
                "author": "Evelyn Waugh",
                "title": "Sword of Honour",
                "price": 12.99
            },
            ...
        ],
        "bicycle": {
            "color": "red",
            "price": 19.95
        }
    },
    ...
}
```

Examples of valid JSONPaths would be:

- `$.store.books` (In this case, APItoolkit will replace the `books` field inside the store object with the string `[CLIENT_REDACTED]`).
- `$.store.books[*].author` (In this case, APItoolkit will replace the `author` field in all the objects in the `books` list inside the `store` object with the string `[CLIENT_REDACTED]`).

For more examples and a detailed introduction to JSONPath, please take a look at [this guide](https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html) or [this cheatsheet](https://lzone.de/#/LZone%20Cheat%20Sheets/Languages/JSONPath).

### Configuration Example

Here's an example of what the configuration in your entry point (`Program.cs`) would look like with the redacted fields configured:

```csharp
var config = new Config
{
    Debug = true, # Set debug flags to false in production
    ApiKey = "{Your_APIKey}",
    RedactHeaders = new List<string> { "HOST", "CONTENT-TYPE" },
    RedactRequestBody = new List<string> { "$.password", "$.payment.credit_cards[*].cvv", "$.user.addresses[*]" },
    RedactResponseBody = new List<string> { "$.title", "$.store.books[*].author" }
};
var client = await APIToolkit.NewClientAsync(config);

# Register the middleware to use the initialized client
app.Use(async (context, next) =>
{
    var apiToolkit = new APIToolkit(next, client);
    await apiToolkit.InvokeAsync(context);
})
```

> [!NOTE]
> 
> While the `RedactHeaders` config field accepts a list of case-insensitive headers, `RedactRequestBody` and `RedactResponseBody` expect a list of JSONPath strings as arguments. Also, the list of items to be redacted will be applied to all endpoint requests and responses on your server.


## Monitoring Outgoing Requests

Apitoolkit allows your to monitor request you make from your application just like request that come into your app. Outgoing request are associated with the request that triggers them when the request context is passed otherwise they appear as a standalone log in the APIToolkit log explorer.
To monitor outgoing request

Example

```csharp
using ApiToolkit.Net;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var config = new Config
{
    ApiKey = "{YOUR_API_KEY}"
};
var client = await APIToolkit.NewClientAsync(config);

app.Use(async (context, next) =>
{
    var apiToolkit = new APIToolkit(next, client);
    await apiToolkit.InvokeAsync(context);
});

app.MapGet("/monitor-requets", async (context) =>
{
    using var httpClient = new HttpClient(client.APIToolkitObservingHandler(context));
    var response = await httpClient.GetAsync("https://jsonplaceholder.typicode.com/posts/1");
    var body = await response.Content.ReadAsStringAsync();
    await context.Response.WriteAsync(body);
});
```


The observing handler also take and optional configuration options which include the following fields

`PathWildCard`: For urls with path params setting PathWildCard will be used as the url_path 
`RedactHeaders`: A string list of headers to redact
`RedactResponseBody`: A string list of json paths to redact from response body
`RedactRequestBody`: A string list of json paths to redact from request body 

### Full configuration example
```csharp
using ApiToolkit.Net;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var config = new Config
{
    ApiKey = "{YOUR_API_KEY}"
};
var client = await APIToolkit.NewClientAsync(config);

app.Use(async (context, next) =>
{
    var apiToolkit = new APIToolkit(next, client);
    await apiToolkit.InvokeAsync(context);
});


app.MapGet("/monitor-requets", async (context) =>
{
    var observingHandlerOptions = new ATOptions
    {
        PathWildCard = "/posts/{id}", // url_path will be /posts/{id} instead of /posts/1
        RedactHeaders = ["User-Agent"],
        RedactRequestBody = ["$.user.password"],
        RedactResponseBody = ["$.user.data.email"]
    };

    using var httpClient = new HttpClient(client.APIToolkitObservingHandler(context, observingHandlerOptions));
    var response = await httpClient.GetAsync("https://jsonplaceholder.typicode.com/posts/1");
    var body = await response.Content.ReadAsStringAsync();
    await context.Response.WriteAsync(body);
});
```

## Error Reporting

APIToolkit detects a lot of API issues automatically, but it's also valuable to report and track errors.

This helps you associate more details about the backend with a given failing request. If you've used sentry, or rollback, or bugsnag, then you're likely aware of this functionality.

To report errors, simply call `ReportError` method of the APIToolkit client

Example

```csharp

using ApiToolkit.Net;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var config = new Config
{
    ApiKey = "{YOUR_API_KEY}"
};

var client = await APIToolkit.NewClientAsync(config);

app.Use(async (context, next) =>
{
    var apiToolkit = new APIToolkit(next, client);
    await apiToolkit.InvokeAsync(context);
});

app.MapGet("/error-tracking", async context =>
{
    try
    {
        // Attempt to open a non-existing file
        using (var fileStream = System.IO.File.OpenRead("nonexistingfile.txt"))
        {
            // File opened successfully, do something if needed
        }
        await context.Response.WriteAsync($"Hello");
    }
    catch (Exception error)
    {
        // Report error to apitoolkit (associated with the request)
        client.ReportError(context, error);
        await context.Response.WriteAsync("Error reported!");
    }
});

```