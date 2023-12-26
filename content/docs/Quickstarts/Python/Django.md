---
title: Django
date: 2023-09-17
publishdate: 2023-09-17
weight: 20
menu:
  main:
    weight: 20
---

# API Toolkit Python Django SDK

The API Toolkit django client is an sdk used to integrate django web applications with APIToolkit.
It monitors incoming traffic, gathers the requests and sends the request to the apitoolkit servers.
## How to Integrate:

First install the apitoolkit django sdk:
`pip install apitoolkit-django`

Add your APIToolkit API key (APITOOLKIT_KEY) to your django settings:

```python
APITOOLKIT_KEY = "<YOUR_API_KEY>"
```

Then add apitoolkit middleware into the settings middleware list:

```python

MIDDLEWARE = [
    ...,
    'apitoolkit_django.APIToolkit',
    ...,
]

```

This will monitor all requests and send them to the APIToolkit's servers.

## Client Redacting fields

While it's possible to mark a field as redacted from the apitoolkit dashboard, this client also supports redacting at the client side.
Client side redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

To mark fields that should be redacted, add them to your application's settings.
Eg:

```python
APITOOLKIT_REDACT_HEADERS = ["Authorization", "Cookie","Content-Length", "Content-Type"]
APITOOLKIT_REDACT_REQ_BODY = ["$.password", "$.credit_card"]
APITOOLKIT_REDACT_RES_BODY = ["$.credentials", "$.social_security_number"]
```

It is important to note that while the `APITOOLKIT_REDACT_HEADERS` config field accepts a list of headers(case insensitive),
the `APITOOLKIT_REDACT_REQ_BODY` and `APITOOLKIT_REDACT_RES_BODY` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in descibing which fields within your responses are sensitive.
Also note that these list of items to be redacted will be aplied to all endpoint requests and responses on your server.
To learn more about jsonpath to help form your queries,please take a look at thes JSONPATH resources:
1. [Query expressions for JSONPATH](https://ietf-wg-jsonpath.github.io/draft-ietf-jsonpath-base/draft-ietf-jsonpath-base.html)
2. [JSONPATH Cheet Sheet](https://lzone.de/cheat-sheet/JSONPath)

## Degugging

You can add `APITOOLKIT_DEBUG` to your app settings file and set it to `True` to enable debug logging from the SDK. This will print out logs for each request/response captured by the middleware. APITOOLKIT_DEBUG defaults to `False`.

#### Example

```python
APITOOLKIT_DEBUG = True
```

## Tags and Service versions

You can also add tags and service versions in your requests monitoring by adding them in your `settings.py` file

#### Example

```python
APITOOLKIT_TAGS = ["PROD", "EU"]
APITTOLKIT_SERVICE_VERSION = "2.0.0"
```

# Outgoing Requests

To monitor outgoing HTTP requests from your Django application, you can use the `observe_request` function from the `apitoolkit_django` module. This allows you to capture and send copies of all incoming and outgoing requests to an apitoolkit server for monitoring and analysis.

### Example

```python
from django.http import JsonResponse
from apitoolkit_django import observe_request, report_error


def hello_world(request, name):
    resp = observe_request(request).get(
        "https://jsonplaceholder.typicode.com/todos/2")
    resp.read()
    return JsonResponse({"data": resp.read()})
```

The `observe_request` function wraps an httpx client and you can use it just like you would normally use httpx for any request you need.

# Error Reporting

If you’ve used sentry, or bugsnag, or rollbar, then you’re already familiar with this usecase.
But you can report an error to apitoolkit. A difference, is that errors are always associated with a parent request, and helps you query and associate the errors which occured while serving a given customer request. To request errors to APIToolkit use the `report_error` function from the `apitoolkit_django` module to report an error you can report as many errors you want during a request

### Example

```python
from django.http import JsonResponse
from apitoolkit_django import observe_request, report_error

def hello_world(request, name):
    try:
        resp = observe_request(request).get(
            "https://jsonplaceholder.typicode.com/todos/2")
        resp.read()
        return JsonResponse({"hello": "world"})
    except Exception as e:
        report_error(request, e)
        return JsonResponse({"Error": "Something went wrong"})
```
