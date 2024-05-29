---
title: Symfony (PHP)
date: 2022-03-23
updatedDate: 2024-05-04
menuWeight: 3
ogImage: /assets/img/framework-logos/php-logo.png
---

# PHP (Symfony) Integration guide

A PHP/Symfony SDK Wrapper for APIToolkit. It monitors incoming traffic, gathers the requests and sends the request to the apitoolkit. The SDK simply registers and event listener and consumes this information via the events.

## Installation

Run the following command to install the package:

```bash
composer require apitoolkit/apitoolkit-symfony
```

add the listener to your service.yaml

```yaml
services:
  APIToolkit\EventSubscriber\APIToolkitService:
    arguments:
      $apiKey: '%env(APITOOLKIT_KEY)%'
    # Optional:  if you want to cache login result add this cache poll instance via setter injection
    calls:
      - setCachePool: ['@PutYourCachePoolServiceHere']
    tags:
      - { name: 'kernel.event_subscriber' }
```

Set the `APITOOLKIT_KEY` environment variable to your API key in you .env file, should look like this:

```
APITOOLKIT_KEY=xxxxxx-xxxxx-xxxxxx-xxxxxx-xxxxxx
```

### Redacting fields

If you have fields which are too sensitive and should not be sent to APIToolkit servers, you can mark those fields to be redacted either via the APIToolkit dashboard, or via this client SDK. Redacting fields via the SDK means that those fields never leave your servers in the first place, compared to redacting it via the APIToolkit dashboard, which would redact the fields on the edge before further processing. But then the data still needs to be transported from your servers before they are redacted.

To mark a field for redacting via this SDK, you simply need to provide additional arguments to the APIToolkitService with the paths to the fields that should be redacted.
There are 3 potential arguments which you can provide to configure what gets redacted.

- `$redactHeaders`: A list of HTTP header keys which should be redacted before data is sent out. eg `COOKIE`(redacted by default), `CONTENT-TYPE`, etc
- `$redactRequestBody`: A list of JSONpaths which will be redacted from the request body, if the request body is a valid json.
- `$redactResponseBody`: A list of JSONpaths which will be redacted from the response body, if the response body is a valid json.

Examples of valid jsonpaths would be:

- `$.store.book`: Will replace the books field inside the store object with the string `[CLIENT_REDACTED]`
- `$.store.books[*].author`: Will redact the author field in all the objects in the books list, inside the store object.

For more examples and introduction to json path, please take a look at: [https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html](https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html)

Here's an example of what your service.yaml file could look like, with the redacted fields configured:

```yaml
services:

  APIToolkit\EventSubscriber\APIToolkitService:
    arguments:
      $apiKey: '%env(APITOOLKIT_KEY)%'
      $redactedHeaders:
        - 'HOST' # Note that you don't need json path syntax for headers
        - 'CONTENT-TYPE'
      $redactRequestBody:
        - `$.password`
        - `$.payment.credit_cards[*].cvv`
        - `$.user.addresses[*]`
      $redactResponseBody:
        - `$.title`
        - `$.store.books[*].author`


```

It is important to note that while the `$redactedHeaders` config field accepts a list of headers(case insensitive),the `$redactRequestBody` and `$redactResponseBody` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in describing which fields within your responses are sensitive. Also note that these list of items to be redacted will be aplied to all endpoint requests and responses on your server. To learn more about jsonpath, please take a look at this cheatsheet:[https://lzone.de/cheat-sheet/JSONPath](https://lzone.de/cheat-sheet/JSONPath)
