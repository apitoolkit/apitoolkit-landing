---
title: PHP (Laravel) 
date: 2022-03-23
publishdate: 2022-03-24
weight: 1
menu:
  main:
    weight: 1
---


APIToolkit is a handy tool that watches over the data requests coming into your website, kind of like a traffic guard. It makes sure all the data goes safely and quickly to APIToolkit's servers for you to check out.

## Step 1: Add APIToolkit to Your Project

1. First, you need to get APIToolkit onto your project. Open up your command line and type in this magic spell:

```bash
composer require apitoolkit/apitoolkit-php
```

This command asks Composer, PHP's tool manager, to download APIToolkit for you.

2. Set the `APITOOLKIT_KEY` environment variable to your API key in you `.env` file, should look like this:

```
APITOOLKIT_KEY=xxxxxx-xxxxx-xxxxxx-xxxxxx-xxxxxx
```
Make sure to replace "your-unique-key-goes-here" with your actual APIToolkit key.

## Step 2: Set Up APIToolkit's Traffic Guard

Now, we're going to tell Laravel (that's your PHP framework) to use APIToolkit to watch over your website's data traffic. Register the middleware in the `app/Http/Kernel.php` file under the correct middleware group eg `api`, or at the root and add APIToolkit to the list like this:

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
- For laravel, APIToolkit uses the cache to prevent reinitializing the sdk with each request. So make sure you have laravel cache setup for your service

And that's it! APIToolkit is now set up and ready to guard your project's data traffic. Enjoy your safer, more organized digital roads!