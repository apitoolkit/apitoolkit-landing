---
title: PHP (Slim)
date: 2023-12-11
publishdate: 2023-12-11
weight: 1
menu:
  main:
    weight: 1
---

## Introduction

The APIToolkit PHP Slim SDK designed to provide seamless integration with the APIToolkit service. This middleware captures and logs API requests and responses, redacting sensitive information as configured, and publishes the logs to Google Cloud Pub/Sub for further analysis.

## Installation

To install the APIToolkit PHP Middleware, you can use Composer:

```bash
composer require apitoolkit/apitoolkit-slim
```

## Usage
Create a new instance of the APIToolkitMiddleware class and register the middleware with Slim Framework, add it to the Slim app:

Example:
```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$APIToolkitMiddleware = new APIToolkitMiddleware("<API_KEY>");

$app->add($APIToolkitMiddleware);

$app->get('/', function ($request, $response) {
    $response->getBody()->write('Hello, World!');
    return $response;
});

$app->run();
```

### Configuration Options

The middleware supports several configuration options during initialization:

- `$redactHeaders`: An array of headers to redact in the logs.
- `$redactRequestBody`: An array of JSON paths to redact in the request body.
- `$redactResponseBody`: An array of JSON paths to redact in the response body.
- `$debug`: Enable or disable debugging mode (default is `false`).
- `$serviceVersion`: Specify the service version in the logs.
- `$tags`: An array of custom tags to include in the logs.


### Redaction

Sensitive information in headers, request bodies, and response bodies can be redacted using the specified configuration options. Redacted fields are replaced with `[CLIENT_REDACTED]`.

### Example

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$APIToolkitMiddleware = new APIToolkitMiddleware("<API_KEY>", redactHeaders = ["Authorization"], redactRequestBody = ["$.password"], redactResponseBody = ["$.password"]);

$app->add($APIToolkitMiddleware);

$app->get('/', function ($request, $response) {
    $response->getBody()->write('Hello, World!');
    return $response;
});

$app->run();
```

## Observing Outgoing Requests with Guzzle in APIToolkit-Slim SDK

The `APIToolkit-Slim` SDK facilitates the observation of outgoing requests within your application using Guzzle middleware. This feature allows you to monitor and track details about your API calls, aiding in debugging and performance analysis.

### Getting Started

To observe outgoing requests, utilize the `observeGuzzle` method of the middleware. Pass the Slim `$request` object to this method, and it will configure Guzzle with monitoring capabilities.

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$APIToolkitMiddleware = new APIToolkitMiddleware("<API_KEY>");

$app->add($APIToolkitMiddleware);

$app->get('/', function (Request $request, Response $response) {
    $guzzleClient = APIToolkitMiddleware::observeGuzzle($request);
    $responseFromGuzzle = $guzzleClient->request('GET', 'https://api.example.com/resource');
    $response->getBody()->write($responseFromGuzzle->getBody()->getContents());
    return $response;
});

$app->run();
```

### Observing Requests with Path Params

If your requests include path parameters, specify a wildcard URL for the path. This ensures proper grouping on the APIToolkit dashboard.

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$APIToolkitMiddleware = new APIToolkitMiddleware("<API_KEY>");

$app->add($APIToolkitMiddleware);

$app->get('/', function (Request $request, Response $response) {
    $guzzleClient = APIToolkitMiddleware::observeGuzzle($request, ["pathPattern" => "/repos/{owner}/{repo}"]);
    $responseFromGuzzle = $guzzleClient->request('GET', 'https://api.github.com/repos/guzzle/guzzle');
    $response->getBody()->write($responseFromGuzzle->getBody()->getContents());
    return $response;
});

$app->run();
```

### Field Redaction with `observeGuzzle`

You can redact headers and fields in the request and response bodies using `observeGuzzle`. Specify the headers and field keypaths you want to redact.

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$APIToolkitMiddleware = new APIToolkitMiddleware("<API_KEY>");

$app->add($APIToolkitMiddleware);

$app->get('/', function (Request $request, Response $response) {
    $options = [
        "pathPattern" => "/repos/{owner}/{repo}",
        "redactHeaders" => ["Server"],
        "redactRequestBody" => ["$.password"],
        "redactResponseBody" => ["$.password"]
    ];

    $guzzleClient = APIToolkitMiddleware::observeGuzzle($request, $options);
    $responseFromGuzzle = $guzzleClient->request('GET', 'https://api.github.com/repos/guzzle/guzzle?foobar=123');
    
    $response->getBody()->write($responseFromGuzzle->getBody()->getContents());
    return $response;
});

$app->run();
```

## Reporting Errors to APIToolkit

APIToolkit can automatically detect API issues, but reporting errors manually provides additional details. To report errors, call the `reportError` method within the context of a web request.

```php
use Slim\Factory\AppFactory;
use APIToolkit\APIToolkitMiddleware;

require __DIR__ . '/vendor/autoload.php';

$app = AppFactory::create();

$APIToolkitMiddleware = new APIToolkitMiddleware("<API_KEY>");

$app->add($APIToolkitMiddleware);

$app->get('/', function (Request $request, Response $response) {
    try {
        throw new Exception("Custom user error");
        return $response;
    } catch (Exception $e) {
        // Report the error to APIToolkit
        APIToolkitMiddleware::reportError($e, $request);
        $response->getBody()->write($e->getMessage());
        return $response;
    }
});

$app->run();
```

And that's it!
Happy hacking.