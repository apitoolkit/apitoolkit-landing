---
title: .Net Core SDK
date: 2022-03-23
updatedDate: 2024-05-30
menuWeight: 1
---

# .Net Core SDK Guide

To integrate .Net web services with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of this **.Net Core SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.

## Installation

Kindly run the command below to install the [package](https://nuget.org/packages/ApiToolkit.Net){target="_blank"}:

```sh
dotnet add package ApiToolkit.Net
```

## Configuration

Next, initialize APItoolkit in your application's entry point (e.g `Program.cs`) like so:

```csharp
using ApiToolkit.Net;

var config = new Config
{
    Debug = true, # Set debug flags to false in production
    ApiKey = "{ENTER_YOUR_API_KEY_HERE}"
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

<div class="callout">
  <i class="fa-regular fa-lightbulb"></i>
  <ul>
    <li>Please make sure the APItoolkit middleware is added before `UseEndpoint` and other middleware are initialized.</li>
    <li>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</li>
  </ul>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted in two ways:

1. This client SDK (the fields will never leave your servers in the first place).
2. The APItoolkit dashboard (the fields will be transported from your servers first and then redacted on the edge before further processing).

To mark a field for redacting via this SDK, you need to provide additional arguments to the `config` variable with paths to the fields that should be redacted. There are three potential arguments that you can provide to configure what gets redacted.

1. `RedactHeaders`:  A list of HTTP header keys (e.g., `COOKIE`, `CONTENT-TYPE`, etc.).
2. `RedactRequestBody`: A list of JSONPaths from the request body (if the request body is a valid JSON).
3. `RedactResponseBody`: A list of JSONPaths from the response body (if the response body is a valid JSON).

<div class="callout">
  <i class="fa-regular fa-lightbulb"></i>
  <p>JSONPath is a query language used to select and extract data from JSON files.</p>
</div>

For example, given the following JSON object:

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

- `$.store.books` (In this case, APItoolkit will replace the `books` field inside the `store` object with the string `[CLIENT_REDACTED]`).
- `$.store.books[*].author` (In this case, APItoolkit will replace the `author` field in all the objects of the `books` list inside the `store` object with the string `[CLIENT_REDACTED]`).

<div class="callout">
  <i class="fa-regular fa-lightbulb"></i>
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"} or [this cheat sheet](https://lzone.de/#/LZone%20Cheat%20Sheets/Languages/JSONPath?utm_source=apitoolkit){target="_blank"}. You can also use this [JSONPath Evaluator](https://jsonpath.com?utm_source=apitoolkit){target="_blank"} to validate your JSONPaths.</p>
</div>

Here's an example of what the configuration in your application's entry point (e.g., `Program.cs`) would look like with redacted fields:

```csharp
using ApiToolkit.Net;

var config = new Config
{
    Debug = true, # Set debug flags to false in production
    ApiKey = "{ENTER_YOUR_API_KEY_HERE}",
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

<div class="callout">
  <i class="fa-regular fa-lightbulb"></i>
  <ul>
    <li>The `RedactHeaders` config field accepts a list of case-insensitive headers.</li>
    <li>The `RedactRequestBody` and `RedactResponseBody` fields <b>expect a list of JSONPath strings as arguments.</b></li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit detects different API issues and anomalies automatically but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing request.

To report errors, simply use the `ReportError()` handler like so:


```csharp
using ApiToolkit.Net;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var config = new Config
{
    ApiKey = "{ENTER_YOUR_API_KEY_HERE}"
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
        using (var fileStream = System.IO.File.OpenRead("non_existing_file.txt"))
        {
            // File opened successfully, do something if needed.
        }
        await context.Response.WriteAsync($"Hello");
    }
    catch (Exception error)
    {
        // Report error to APItoolkit (associated with the request)
        client.ReportError(context, error);
        await context.Response.WriteAsync("Error reported!");
    }
});
```

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="_blank"} page. However, you can separate outgoing requests from others using the `APIToolkitObservingHandler()` handler and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="_blank"} page. APItoolkit will also return logged outgoing requests in association with the incoming request that triggered them.

Here's an example of configuring outgoing requests with the SDK on a sample `/monitor-requests` endpoint that makes an asynchronous `HttpClient` GET request to a sample `https://jsonplaceholder.typicode.com/posts/1` public endpoint URL.


```csharp
using ApiToolkit.Net;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

var config = new Config
{
    ApiKey = "{ENTER_YOUR_API_KEY_HERE}"
};
var client = await APIToolkit.NewClientAsync(config);

app.Use(async (context, next) =>
{
    var apiToolkit = new APIToolkit(next, client);
    await apiToolkit.InvokeAsync(context);
});

app.MapGet("/monitor-requests", async (context) =>
{
    var observingHandlerOptions = new ATOptions
    {
        PathWildCard = "/posts/{id}",
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
<div class="callout">
  <i class="fa-regular fa-lightbulb"></i>
  <p class="mt-6">The `client.APIToolkitObservingHandler` handler accepts a required `context` field and the following optional fields:</p>
  <ul>
    <li>`PathWildCard`: The `url_path` for URLs with path parameters.</li>
    <li>`RedactHeaders`: A string list of headers to redact.</b></li>
    <li>`RedactResponseBody`: A string list of JSONPaths to redact from the response body.</li>
    <li>`RedactRequestBody`: A string list of JSONPaths to redact from the request body.</li>
  </ul>
</div>

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-dotnet" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore and Contribute to the SDK
</a>
```