---
title: PHP (Laravel) 
date: 2022-03-23
publishdate: 2022-03-24
weight: 1
menu:
  main:
    weight: 1
---


The PHP/Laravel SDK integration guide for APIToolkit. It monitors incoming traffic, gathers the requests and sends the request to the apitoolkit servers.

## Installation

Run the following command to install the package:

```bash
composer require apitoolkit/apitoolkit-php
```

Set the `APITOOLKIT_KEY` environment variable to your API key in you `.env` file, should look like this:

```
APITOOLKIT_KEY=xxxxxx-xxxxx-xxxxxx-xxxxxx-xxxxxx
```

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

# Requirements
- For laravel, apitoolkit uses the cache to prevent reinitializing the sdk with each request. So make sure you have laravel cache setup for your service
