---
title: PHP (Laravel)
date: 2022-03-23
publishdate: 2022-03-24
toc: true
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
	@@ -83,4 +86,6 @@ Route::get('/', function () {
```

## Requirements

- For laravel, apitoolkit uses the cache to prevent reinitializing the sdk with each request. So make sure you have laravel cache setup for your service. Read on [ PHP Laravel Cache Setup for Apitoolkit to Avoid SDK Reinit](https://apitoolkit.io/blog/how-to-setup-php-laravel-cache-for-apitoolkit-to-avoid-sdk-reinitialization/).
