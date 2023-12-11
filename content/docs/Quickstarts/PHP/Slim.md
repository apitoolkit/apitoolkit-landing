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


### Sensitive Field Redaction

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