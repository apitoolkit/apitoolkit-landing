---
title: Laravel
ogTitle: Laravel SDK Guide
date: 2022-03-23
updatedDate: 2024-06-17
menuWeight: 1
---

# Laravel SDK Guide

To integrate your Laravel application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **Laravel SDK**.

```=html
<hr>
```

## Prerequisites

- Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.
- APItoolkit uses the Laravel cache to prevent reinitializing the SDK for each request. So, ensure you have [Laravel cache](https://laravel.com/docs/10.x/cache?utm_source=APItoolkit){target="\_blank"} set up in your application.

## Installation

Kindly run the command below to install the SDK:

```sh
composer require apitoolkit/apitoolkit-laravel
```

## Configuration

First, add the `APITOOLKIT_KEY` environment variable to your `.env` file, like so:

```sh
APITOOLKIT_KEY={ENTER_YOUR_API_KEY_HERE}

APITOOLKIT_DEBUG=false
APITOOLKIT_TAGS="environment: production, region: us-east-1"
APITOOLKIT_SERVICE_VERSION=v2.0
```

<section class="tab-group" data-tab-group="group1">
  <button class="tab-button" data-tab="tab1">Middleware (Global)</button>
  <button class="tab-button" data-tab="tab2">Middleware (Specific Routes)</button>
  <div id="tab1" class="tab-content">
    Next, register the middleware in the `app/Http/Kernel.php` file under the correct middleware group (e.g., `api`) or at the root, like so:

```php
&lt;?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $middlewareGroups = [
        'api' => [
            // Other middleware here...
            \APIToolkit\Http\Middleware\APIToolkit::class, // Initialize the APItoolkit client
        ],
    ];
}
```
  </div>
  <div id="tab2" class="tab-content">
    Alternatively, if you want to monitor specific routes, you can register the middleware, like so:

```php
&lt;?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    protected $routeMiddleware = [
        // Other middleware here...
        'apitoolkit' => \APIToolkit\Http\Middleware\APIToolkit::class,
    ];
}
```

  Then you can use the `apitoolkit` middleware in your routes like so:

```php
Route::get('/', function () {
    return response()->json([
        'message' => 'Welcome to your new application!'
    ]);
})->middleware('apitoolkit');
```

  </div>
</section>

In the configuration above, **only the `APITOOLKIT_KEY` option is required**, but you can add the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `APITOOLKIT_DEBUG` | Set to `true` to enable debug mode. |
| `APITOOLKIT_TAGS` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `APITOOLKIT_SERVICE_VERSION` | A defined string version of your application (used for further debugging on the dashboard). |
| `APITOOLKIT_REDACT_HEADERS` | A list of HTTP header keys to redact. |
| `APITOOLKIT_REDACT_REQUEST_BODY` | A list of JSONPaths from the request body to redact. |
| `APITOOLKIT_REDACT_RESPONSE_BODY` | A list of JSONPaths from the response body to redact. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional environmental variables to the `.env` file with paths to the fields that should be redacted. There are three variables you can provide to configure what gets redacted, namely:

1. `APITOOLKIT_REDACT_HEADERS`: A list of HTTP header keys.
2. `APITOOLKIT_REDACT_REQUEST_BODY`: A list of JSONPaths from the request body.
3. `APITOOLKIT_REDACT_RESPONSE_BODY`: A list of JSONPaths from the response body.

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

Here's an example of what the `.env` file would look like with redacted fields:

```sh
APITOOLKIT_REDACT_HEADERS="Content-Type, Authorization, HOST"
APITOOLKIT_REDACT_REQUEST_BODY="$.user.email, $.user.addresses"
APITOOLKIT_REDACT_RESPONSE_BODY="$.users[*].email, $.users[*].credit_card"
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `APITOOLKIT_REDACT_HEADERS` variable expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `APITOOLKIT_REDACT_REQUEST_BODY` and `APITOOLKIT_REDACT_RESPONSE_BODY` variables expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit automatically detects different unhandled errors, API issues, and anomalies but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

<section class="tab-group" data-tab-group="group2">
  <button class="tab-button" data-tab="tab1"> Report All Errors</button>
  <button class="tab-button" data-tab="tab2">Report Specific Errors</button>
  <div id="tab1" class="tab-content">
To report all uncaught errors and service exceptions that happened during a web request, modify your Laravel Exceptions handler, passing in the `error` and the `request` as arguments, like so:

```php
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use APIToolkit\APIToolkitLaravel;
use Throwable;

class Handler extends ExceptionHandler
{
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            // Report the error to APItoolkit
            $request = request();
            APIToolkitLaravel::reportError($e, $request);
        });
    }
}
```

  </div>
  <div id="tab2" class="tab-content">
To report specific errors at different parts of your application, use the `reportError` method of the `APIToolkitLaravel` class, passing in the `error` and the `request` as arguments, like so:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use APIToolkit\APIToolkitLaravel;

Route::get('/user', function (Request $request) {
    try {
        throw new Exception("Custom user error");
        return response()->json(["hello" => "world"]);
    } catch (Exception $e) {
        // Report the error to APItoolkit
        APIToolkitLaravel::reportError($e, $request);
        return response()->json(["error" => $e->getMessage()]);
    }
});
```
  </div>
</section>

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

To monitor outgoing HTTP requests from your application, use the `observeGuzzle` method of the `APIToolkitLaravel` class, passing in the `$request` and `$options` object, like so:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use APIToolkit\APIToolkitLaravel;

Route::get('/user', function (Request $request) {
    $options = [
        "pathWildCard" => "/repos/{owner}/{repo}",
        "redactHeaders" => ["content-type", "Authorization", "HOST"],
        "redactRequestBody" => ["$.user.email", "$.user.addresses"],
        "redactResponseBody" => ["$.users[*].email", "$.users[*].credit_card"]
    ];
    $guzzleClient = APIToolkitLaravel::observeGuzzle($request, $options);
    $responseFromGuzzle = $guzzleClient->request('GET', 'https://api.github.com/repos/apitoolkit/apitoolkit-laravel?foobar=123');
    $response = $responseFromGuzzle->getBody()->getContents();

    return $response;
})
```

The `$options` associative array accepts the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `pathWildCard` | The `url_path` for URLs with path parameters. |
| `redactHeaders` | A list of HTTP header keys to redact. |
| `redactResponseBody` | A list of JSONPaths from the request body to redact. |
| `redactRequestBody` | A list of JSONPaths from the response body to redact. |
:::

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-laravel" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Laravel SDK
</a>
```
