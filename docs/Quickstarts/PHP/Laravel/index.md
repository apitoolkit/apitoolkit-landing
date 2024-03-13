---
title: PHP (Laravel)
date: 2022-03-23
publishdate: 2022-03-24
toc: true
imageurl: /assets/img/framework-logos/laravel-logo.png
weight: 1
menu:
  main:
    weight: 1
---

# PHP Laravel Integration guide

A PHP/Laravel SDK Wrapper for APIToolkit. It monitors incoming traffic, gathers the requests and sends the request to the apitoolkit servers.

## Installation

Run the following command to install the package:

```bash
composer require apitoolkit/apitoolkit-laravel
```

Set the `APITOOLKIT_KEY` environment variable to your API key in you `.env` file, should look like this:

```
APITOOLKIT_KEY=xxxxxx-xxxxx-xxxxxx-xxxxxx-xxxxxx
```

# Requirements

- For laravel, apitoolkit uses the cache to prevent reinitializing the sdk with each request. So make sure you have laravel cache setup for your service.
  Read on [ PHP Laravel Cache Setup for Apitoolkit to Avoid SDK Reinit](https://apitoolkit.io/blog/how-to-setup-php-laravel-cache-for-apitoolkit-to-avoid-sdk-reinitialization/).

## Usage

Register the middleware in the `app/Http/Kernel.php` file under the correct middleware group eg `api`, or at the root:

```php
<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    ...
    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        ...
        'api' => [
            ...
            \APIToolkit\Http\Middleware\APIToolkit::class,
            ...
        ],
    ];
    ...
}
```

Alternatively, if you want to monitor specific routes, you can register the middleware, like this:

```php
    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        ...
        'apitoolkit' => \APIToolkit\Http\Middleware\APIToolkit::class,
    ];
```

Then you can use the `apitoolkit` middleware in your routes:

```php
Route::get('/', function () {
    return response()->json([
        'message' => 'Welcome to your new application!'
    ]);
})->middleware('apitoolkit');
```

### Configuration Options

Other optional environment variables to configure APIToolkit with

`APITOOLKIT_TAGS`:_array_ A list of tags for your services
`APITOOLKIT_SERVICE_VERSION`: _string_ The version of your application.
`APITOOLKIT_REDACT_HEADERS`:_array_ A list of headers to be redacted.
`APITOOLKIT_REDACT_REQUEST_BODY`: _array_ A list of request body fields (jsonpaths) to be redacted
`APITOOLKIT_REDACT_RESPONSE_BODY`: _array_ A list of response body fields (jsonpaths) to be redacted
`APITOOLKIT_DEBUG`: _boolean_ Set to true to enable debug

## Observing Outgoing Requests with Guzzle in APIToolkit-Slim SDK

The SDK facilitates the observation of outgoing requests within your application using Guzzle middleware. This feature allows you to monitor and track details about your API calls, aiding in debugging and performance analysis.

To observe outgoing requests, utilize the `observeGuzzle` method of the `APIToolkitLaravel` class. Pass the `$request` object to this method, and it will configure Guzzle with monitoring capabilities.

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use APIToolkit\APIToolkitLaravel;

Route::get('/user', function (Request $request) {
    $options = [
        "pathPattern" => "/repos/{owner}/{repo}", # For observing Requests with Path Params
        "redactHeaders" => ["Server"], # headers redaction
        "redactRequestBody" => ["$.password"],
        "redactResponseBody" => ["$.password"]
    ];
    $guzzleClient = APIToolkitLaravel::observeGuzzle($request, $options);
    $responseFromGuzzle = $guzzleClient->request('GET', 'https://api.github.com/repos/guzzle/guzzle?foobar=123');
    $response = $responseFromGuzzle->getBody()->getContents();

    return $response;
}
```

## Reporting Errors to APIToolkit

APIToolkit is capable of detecting API issues, but for more detailed insight, reporting server errors associated with a request is invaluable. To accomplish this, utilize the `reportError` method of `APIToolkitLaravel` by passing both the error and the request.

To streamline error reporting, consider integrating it into your Laravel Exceptions handler, enabling automatic error reporting, or handle exceptions manually when necessary.

For manual error reporting, implement the following code snippet:

```php
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use APIToolkit\APIToolkitLaravel;

Route::get('/user', function (Request $request) {
    try {
        throw new Exception("Custom user error");
        return response()->json(["hello" => "world"]);
    } catch (Exception $e) {
        // Report the error to APIToolkit
        APIToolkitLaravel::reportError($e, $request);
        return response()->json(["error" => $e->getMessage()]);
    }
});
```

For automatic reporting of all uncaught exceptions within a request, modify your Laravel Exceptions handler as follows:

```php
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use APIToolkit\APIToolkitLaravel;
use Throwable;

class Handler extends ExceptionHandler
{
    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            // Report the error to APIToolkit
            $request = request();
            APIToolkitLaravel::reportError($e, $request);
        });
    }
}
```

Remember, you can report as many errors as necessary for each request, ensuring comprehensive error tracking and resolution.
