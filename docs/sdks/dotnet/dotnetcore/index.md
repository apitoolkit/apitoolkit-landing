---
title: .Net Core
ogTitle: .Net Core SDK Guide
date: 2022-03-23
updatedDate: 2024-05-30
menuWeight: 1
---

# .Net Core SDK Guide

To integrate .Net web services with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **.Net Core SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
dotnet add package ApiToolkit.Net
```

## Configuration

Next, initialize APItoolkit in your application's entry point (e.g., `Program.cs`) like so:

```csharp
using ApiToolkit.Net;

var config = new Config
{
    Debug = true, # Set debug flags to false in production
    ApiKey = "{ENTER_YOUR_API_KEY_HERE}"
};
# Initialize the client
var client = await APIToolkit.NewClientAsync(config);

# Register APItoolkit's middleware
app.Use(async (context, next) =>
{
    var apiToolkit = new APIToolkit(next, client);
    await apiToolkit.InvokeAsync(context);
});

# app.UseEndpoint(...) 
# Other middleware and logic
# ...
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <ul>
    <li>Please make sure the APItoolkit middleware is added before `UseEndpoint` and other middleware are initialized.</li>
    <li>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</li>
  </ul>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted  (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to provide additional arguments to the `config` variable with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

1. `RedactHeaders`:  A list of HTTP header keys.
2. `RedactRequestBody`: A list of JSONPaths from the request body.
3. `RedactResponseBody`: A list of JSONPaths from the response body.

<hr />
JSONPath is a query language used to select and extract data from JSON files. For example, given the following sample user data JSON object:

```JSON
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
      },
      ...
    ],
    "credit_card": {
      "number": "4111111111111111",
      "expiration": "12/28",
      "cvv": "123"
    }
  },
  ...
}
```

Examples of valid JSONPaths would be:

- `$.user.credit_card` (In this case, APItoolkit will replace the `addresses` field inside the `user` object with the string `[CLIENT_REDACTED]`).
- `$.user.addresses[*].zip` (In this case, APItoolkit will replace the `zip` field in all the objects of the `addresses` list inside the `user` object with the string `[CLIENT_REDACTED]`).

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"}. You can also use this [JSONPath Evaluator](https://jsonpath.com?utm_source=apitoolkit){target="_blank"} to validate your JSONPaths.</p>
</div>
<hr />

Here's an example of what the configuration would look like with redacted fields:

```csharp
using ApiToolkit.Net;

var config = new Config
{
    Debug = true, # Set debug flags to false in production
    ApiKey = "{ENTER_YOUR_API_KEY_HERE}",
    RedactHeaders = new List<string> { "content-type", "Authorization", "HOST" },
    RedactRequestBody = new List<string> { "$.user.email", "$.user.addresses" },
    RedactResponseBody = new List<string> { "$.users[*].email", "$.users[*].credit_card" }
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
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `RedactHeaders` config field expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `RedactRequestBody` and `RedactResponseBody` config fields expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit detects different API issues and anomalies automatically but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To report errors, use the `ReportError()` handler, passing in the `context` and `error` arguments like so:

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
        // Report the error to APItoolkit
        client.ReportError(context, error);
        await context.Response.WriteAsync("Error reported!");
    }
});
```

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="_blank"} page, alongside the incoming request that triggered them.

To monitor outgoing HTTP requests from your application, we provide the `APIToolkitObservingHandler()` handler. Here's an example of the outgoing requests configuration with this SDK on a sample `/monitor-requests` endpoint that makes an asynchronous `HttpClient` GET request to a sample public endpoint URL.

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
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
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
    Explore the .Net Core SDK
</a>
```