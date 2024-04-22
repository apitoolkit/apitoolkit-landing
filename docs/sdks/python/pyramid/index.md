---
title: Pyramid
date: 2024-04-03
publishdate: 2024-04-03
weight: 20
toc: true
imageurl: /assets/img/framework-logos/pyramid-logo.png
menu:
  main:
    weight: 20
---

# API Toolkit Python Pyramid SDK

The API Toolkit Pyramid client is an sdk used to integrate Pyramid web applications with APIToolkit.
It monitors incoming traffic, gathers the requests and sends the request to the apitoolkit servers.

## How to Integrate

First install the apitoolkit pyramid sdk:
`pip install apitoolkit-pyramid`

Add your APIToolkit API key `APITOOLKIT_KEY` to your `development.ini` or `production.ini` files or in your settings:

```python
APITOOLKIT_KEY = "<YOUR_API_KEY>"
```

Then add apitoolkit pyramid tween in your server's config:

```python
from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config


@view_config(
    route_name='home'
)
def home(request):
    return Response('Welcome!')

if __name__ == '__main__':
    setting = {"APITOOLKIT_KEY": "<YOUR_API_KEY>"}
    with Configurator(settings=setting) as config:
        # add aptoolkit tween
        config.add_tween("apitoolkit_pyramid.APIToolkit")
        config.add_route('home', '/')
        config.scan()
        app = config.make_wsgi_app()
    server = make_server('0.0.0.0', 6543, app)
    server.serve_forever()
```

This will monitor all requests and send them to the APIToolkit's servers.

## Configuration

You can add more configurations in your settings to customize behavior, such as redacting senstive fields, printing values to help with debugging and so on.

### Configuration Parameters

`APITOOLKIT_KEY`: `required` API key for accessing the APIToolkit service.

`APITOOLKIT_REDACT_HEADERS`: `optional` List of headers to redact in requests.

`APITOOLKIT_DEBUG`: `optional` Flag to enable debug mode.

`APITOOLKIT_REDACT_REQ_BODY`: `optional` List of fields to redact in request bodies.

`APITOOLKIT_REDACT_RES_BODY`: `optional` List of fields to redact in response bodies.

`APITOOLKIT_SERVICE_VERSION`: `optional` Version of the service (helps in monitoring different versions of your deployments).

`APITOOLKIT_TAGS`: `optional` Tags associated with the service.

## Client Redacting fields

The SDK provides a way for customers to redact senstive fields from data it sends to APIToolkit servers, redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

To mark fields that should be redacted, add them to your application's settings.
Eg:

```python
settings = {
"APITOOLKIT_KEY": "<YOUR_API_KEY>",
"APITOOLKIT_REDACT_HEADERS": ["Authorization", "Cookie","Content-Length", "Content-Type"],
"APITOOLKIT_REDACT_REQ_BODY": ["$.password", "$.credit_card"],
"APITOOLKIT_REDACT_RES_BODY": ["$.credentials", "$.social_security_number"]
}

```

It is important to note that while the `APITOOLKIT_REDACT_HEADERS` config field accepts a list of headers(case insensitive),
the `APITOOLKIT_REDACT_REQ_BODY` and `APITOOLKIT_REDACT_RES_BODY` expects a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in descibing which fields within your responses are sensitive.
Also note that these list of items to be redacted will be aplied to all endpoint requests and responses on your server.
To learn more about jsonpath to help form your queries, please take a look at this cheatsheet:
[https://lzone.de/cheat-sheet/JSONPath](https://lzone.de/cheat-sheet/JSONPath)

## Whitelisting Routes and Patterns

Define the specific routes and patterns you want to capture by configuring the required prefixes and patterns.

```python
settings = {
    "APITOOLKIT_ROUTES_WHITELIST": ["/api/first", "/api/second", "/api/user/{name}/profile"],
}
```

Requests matching these prefixes and patterns, such as `/api/first/customer/1` or `/user/johndoe/profile`, will be captured, while others like `/api/health` will not.

## Debugging

You can add `APITOOLKIT_DEBUG` to your app's settings and set it to `True` to enable debug logging from the SDK. This will print out logs for each request/response captured by the tween. APITOOLKIT_DEBUG defaults to `False`.

# Outgoing Requests

To monitor outgoing HTTP requests from your Pyramid application, you can use the `observe_request` function from the `apitoolkit_pyramid` module. This allows you to capture and send copies of all outgoing requests to an apitoolkit server for monitoring and analysis. All outgoing request are associated with the incoming request that trigger them.

### Example

```python
from pyramid.response import Response
from pyramid.view import view_config
from apitoolkit_pyramid import observe_request

@view_config(route_name='home')
def home(request):
    resp = observe_request(request).get(
        "https://jsonplaceholder.typicode.com/todos/2")
    return Response(resp.read())
```

The `observe_request` function wraps an httpx client and you can use it just like you would normally use httpx for any request you need.

# Error Reporting

If you’ve used sentry, or bugsnag, or rollbar, then you’re already familiar with this usecase.
But you can report an error to apitoolkit. A difference, is that errors are always associated with a parent request, and helps you query and associate the errors which occured while serving a given customer request. Unhandled errors are reported automatically but you can also report errors to APIToolkit by using the `report_error` function from the `apitoolkit_pyramid` module to report an error you can report as many errors you want during a request

### Example

```python
from pyramid.response import Response
from pyramid.view import view_config
from apitoolkit_pyramid import observe_request, report_error


@view_config(route_name='home')
def home(request):
  try:
    resp = observe_request(request).get(
        "https://jsonplaceholder.typicode.com/todos/2")
    return Response(resp.read())
  except Exception as e:
    report_error(request, e)
    return Response("something went wrong")
```
