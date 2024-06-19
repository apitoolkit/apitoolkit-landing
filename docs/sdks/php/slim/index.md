---
title: Slim
ogTitle: Slim SDK Guide
date: 2022-03-23
updatedDate: 2024-06-17
menuWeight: 2
---

# Slim SDK Guide

To integrate your Slim application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **Slim SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
composer require apitoolkit/apitoolkit-slim
```

## Configuration

Next, create a new instance of the `APIToolkitMiddleware` class and register the middleware with the Slim Framework in the `app/middleware.php` file, like so:

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$apitoolkitMiddleware = new APIToolkitMiddleware(
    "{ENTER_YOUR_API_KEY_HERE}",
    $debug=false
    $tags=["environment: production", "region: us-east-1"],
    $serviceVersion="v2.0"
);

// Initialize the APItoolkit client
$app->add($apitoolkitMiddleware);
// END Initialize the APItoolkit client

$app->get('/', function ($request, $response) {
    $response->getBody()->write('Hello, World!');
    return $response;
});

$app->run();
```

In the configuration above, **only the API key option is required**, but you can add the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `$debug` | Set to `true` to enable debug mode. |
| `$tags` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `$serviceVersion` | A defined string version of your application (used for further debugging on the dashboard). |
| `$redactHeaders` | A list of HTTP header keys to redact. |
| `$redactRequestBody` | A list of JSONPaths from the request body to redact. |
| `$redactResponseBody` | A list of JSONPaths from the response body to redact. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional arguments to the configuration object with paths to the fields that should be redacted. There are three variables you can provide to configure what gets redacted, namely:

1. `$redactHeaders`: A list of HTTP header keys.
2. `$redactRequestBody`: A list of JSONPaths from the request body.
3. `$redactResponseBody`: A list of JSONPaths from the response body.

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

Here's what the configuration would look like with redacted fields:

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$apitoolkitMiddleware = new APIToolkitMiddleware(
    "{ENTER_YOUR_API_KEY_HERE}",
    redactHeaders = ["content-type", "Authorization", "HOST"],
    redactRequestBody = ["$.user.email", "$.user.addresses"],
    redactResponseBody = ["$.users[*].email", "$.users[*].credit_card"]
);

$app->add($apitoolkitMiddleware);

$app->get('/', function ($request, $response) {
    $response->getBody()->write('Hello, World!');
    return $response;
});

$app->run();
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `redactHeaders` variable expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `redactRequestBody` and `redactResponseBody` variables expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit automatically detects different unhandled errors, API issues, and anomalies but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To report all uncaught errors and service exceptions that happened during a web request, use the `reportError` method of the `APIToolkitSlim` class, passing in the `error` and the `request` as arguments, like so:

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;
use APIToolkit\APIToolkitSlim;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$apitoolkitMiddleware = new APIToolkitMiddleware("{ENTER_YOUR_API_KEY_HERE}");

$app->add($apitoolkitMiddleware);

$app->get('/', function (Request $request, Response $response) {
    try {
        throw new Exception("Custom user error...");
        return $response;
    } catch (Exception $e) {
        // Report the error to APItoolkit
        APIToolkitSlim::reportError($e, $request);
        $response->getBody()->write($e->getMessage());
        return $response;
    }
});

$app->run();
```

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

To monitor outgoing HTTP requests from your application, use the `observeGuzzle` method of the `APIToolkitSlim` class, passing in the `$request` and `$options` object, like so:

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;
use APIToolkit\APIToolkitSlim;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$apitoolkitMiddleware = new APIToolkitMiddleware("{ENTER_YOUR_API_KEY_HERE}");

$app->add($apitoolkitMiddleware);

$app->get('/user', function (Request $request, Response $response) {
    $options = [
        "pathWildCard" => "/repos/{owner}/{repo}",
        "redactHeaders" => ["Content-Type", "Authorization", "HOST"],
        "redactRequestBody" => ["$.users[*].email", "$.users[*].credit_card"],
        "redactResponseBody" => ["$.users[*].email", "$.users[*].credit_card"]
    ];

    $guzzleClient = APIToolkitSlim::observeGuzzle($request, $options);
    $responseFromGuzzle = $guzzleClient->request('GET', 'https://api.github.com/repos/apitoolkit/apitoolkit-slim?foobar=123');
    $response->getBody()->write($responseFromGuzzle->getBody()->getContents());
    return $response;
});

$app->run();
```

The `$options` list accepts the following optional fields:

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
<a href="https://github.com/apitoolkit/apitoolkit-slim" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Slim SDK
</a>
```
