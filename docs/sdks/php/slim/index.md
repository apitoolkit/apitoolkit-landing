---
title: Slim
ogTitle: Slim SDK Guide
date: 2022-03-23
updatedDate: 2024-06-17
menuWeight: 2
---

# Slim SDK Guide

APIToolkit Slim Middleware allows you to monitor HTTP requests in your Slim applications. It builds upon OpenTelemetry instrumentation to create custom spans for each request, capturing key details such as request and response bodies, headers, and status codes. Additionally, it offers robust support for monitoring outgoing requests and reporting errors automatically.

To get started, you'll need the OpenTelemetry Node.js library and some basic configuration.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the apitoolkit-slim sdk and required opentelemetry packages:

```sh
composer require \
    open-telemetry/sdk \
    open-telemetry/exporter-otlp \
    open-telemetry/opentelemetry-auto-slim \
    open-telemetry/opentelemetry-auto-psr18 \
    apitoolkit/apitoolkit-slim
```

## Setup Open Telemetry

Setting up open telemetry allows you to send traces, metrics and logs to the APIToolkit platform.
To setup open telemetry First install the open telemetry php extension:

```sh
pecl install opentelemetry
```

Then add it to your `php.ini` file like so.

```ini
[opentelemetry]
extension=opentelemetry.so
```

Then configure the following environment variables:

```sh
export OTEL_PHP_AUTOLOAD_ENABLED=true
export OTEL_SERVICE_NAME=your-service-name
export OTEL_TRACES_EXPORTER=otlp
export OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
export OTEL_EXPORTER_OTLP_ENDPOINT=http://otelcol.apitoolkit.io:4318
export OTEL_RESOURCE_ATTRIBUTES="at-project-key={ENTER_YOUR_API_KEY_HERE}"
export OTEL_PROPAGATORS=baggage,tracecontext
```

```=html
<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>
```

## Setup APItoolkit Middleware

Next, create a new instance of the APIToolkitMiddleware class and register the middleware with the Slim Framework in the app/middleware.php file. This creates a customs spans which captures and sends http request info such as headers, requests and repsonse bodies, matched route etc. for each request

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

// Initialize the APItoolkit client
$apitoolkitMiddleware = new APIToolkitMiddleware([
  'debug' => false,
  'tags' => ["environment: production", "region: us-east-1"],
  'captureRequestBody' => true,
  'serviceVersion' => "v2.0",
]);

$app->add($apitoolkitMiddleware);
// END Initialize the APItoolkit client

$app->get('/', function ($request, $response) {
  $response->getBody()->write('Hello, World!');
  return $response;
});

$app->run();
```

Middleware configuration options:

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
| `$captureRequestBody` | default `false`, set to true if you want to capture the request body. |
| `$captureResponseBody` | default `false`, set to true if you want to capture the response body. |
:::

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional arguments to the configuration object with paths to the fields that should be redacted. There are three variables you can provide to configure what gets redacted, namely:

1. `$redactHeaders`: A list of HTTP header keys.
2. `$redactRequestBody`: A list of JSONPaths from the request body.
3. `$redactResponseBody`: A list of JSONPaths from the response body.

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

Here's what the configuration would look like with redacted fields:

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$apitoolkitMiddleware = new APIToolkitMiddleware([
  'redactHeaders' => [],
  'redactRequestBody' => [],
  'redactResponseBody' => [],
]);

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

With APItoolkit, you can track and report different unhandled or uncaught errors, API issues, and anomalies at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To manually report specific errors at different parts of your application, use the `reportError` method of the `APIToolkitSlim` class, passing in the `error` and the `request` as arguments, like so:

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;
use APIToolkit\APIToolkitSlim;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$apitoolkitMiddleware = new APIToolkitMiddleware([]);
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

$apitoolkitMiddleware = new APIToolkitMiddleware([]);
$app->add($apitoolkitMiddleware);

$app->get('/user', function (Request $request, Response $response) {
  $options = [
    "pathPattern" => "/repos/{owner}/{repo}",
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

The `$options` associative array accepts the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `pathPattern` | The `url_path` string for URLs with path parameters. |
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
