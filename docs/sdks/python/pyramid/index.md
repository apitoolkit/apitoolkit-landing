---
title: Pyramid
ogTitle: Pyramid SDK Guide
date: 2022-03-23
updatedDate: 2024-06-17
menuWeight: 4
---

# Pyramid SDK Guide

To integrate your FastAPI application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **Pyramid SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
pip install apitoolkit-pyramid
```

## Configuration

Next, add the `APITOOLKIT_KEY` variable to your settings or `development.ini` or `production.ini` file, like so:

<section class="tab-group" data-tab-group="group1">
  <button class="tab-button" data-tab="tab1">settings</button>
  <button class="tab-button" data-tab="tab2">.ini file</button>
    <div id="tab1" class="tab-content">

```python
settings = {
  "APITOOLKIT_KEY": "{ENTER_YOUR_API_KEY_HERE}",
  "APITOOLKIT_DEBUG": False,
  "APITOOLKIT_TAGS": ["environment: production", "region: us-east-1"],
  "APITOOLKIT_SERVICE_VERSION": "v2.0",
  "APITOOLKIT_ROUTES_WHITELIST": ["/api/first", "/api/second"],
  "APITOOLKIT_IGNORE_HTTP_CODES": [404, 429]
}
```

  </div>
  <div id="tab2" class="tab-content">

```sh
APITOOLKIT_KEY = "{ENTER_YOUR_API_KEY_HERE}"

APITOOLKIT_DEBUG = False
APITOOLKIT_TAGS = environment: production, region: us-east-1
APITOOLKIT_SERVICE_VERSION = "v2.0"
APITOOLKIT_ROUTES_WHITELIST = /api/first, /api/second
APITOOLKIT_IGNORE_HTTP_CODES = 404, 429
```

  </div>
</section>

Then, initialize APItoolkit in your application's entry point (e.g., `app.py`), like so:

```python
from wsgiref.simple_server import make_server
from pyramid.config import Configurator
from pyramid.response import Response
from pyramid.view import view_config

@view_config(route_name='home')
def home(request):
  return Response('Welcome!')

if __name__ == '__main__':
  settings = {
    "APITOOLKIT_KEY": "{ENTER_YOUR_API_KEY_HERE}"
  }
  with Configurator(settings=settings) as config:
    # Initialize APItoolkit
    config.add_tween("apitoolkit_pyramid.APIToolkit")
    # END Initialize APItoolkit
    config.add_route('home', '/')
    config.scan()
    app = config.make_wsgi_app()
  server = make_server('0.0.0.0', 6543, app)
  server.serve_forever()
```

In the configuration above, **only the `APITOOLKIT_KEY` option is required**, but you can add the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `APITOOLKIT_DEBUG` | Set to `true` to enable debug mode. |
| `APITOOLKIT_TAGS` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `APITOOLKIT_SERVICE_VERSION` | A defined string version of your application (used for further debugging on the dashboard). |
| `APITOOLKIT_ROUTES_WHITELIST` | A list of route prefixes that should be captured (only capture specific incoming requests that match these prefixes). |
| `APITOOLKIT_IGNORE_HTTP_CODES` | A list of HTTP status codes that should NOT be captured (ignore status codes you're not interested in or are spamming your logs). |
| `APITOOLKIT_REDACT_HEADERS` | A list of HTTP header keys to redact. |
| `APITOOLKIT_REDACT_REQ_BODY` | A list of JSONPaths from the request body to redact. |
| `APITOOLKIT_REDACT_RES_BODY` | A list of JSONPaths from the response body to redact. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional fields to your `development.ini` or `production.ini` file or settings with paths to the fields that should be redacted. There are three variables you can provide to configure what gets redacted, namely:

1. `APITOOLKIT_REDACT_HEADERS`: A list of HTTP header keys.
2. `APITOOLKIT_REDACT_REQ_BODY`: A list of JSONPaths from the request body.
3. `APITOOLKIT_REDACT_RES_BODY`: A list of JSONPaths from the response body.

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
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"} or use this [JSONPath Evaluator](https://jsonpath.com?utm_source=apitoolkit){target="_blank"} to validate your JSONPath expressions. </p>
  <p>**You can also use our [JSON Redaction Tool](/tools/json-redacter/) <i class="fa-regular fa-screwdriver-wrench"></i> to preview what the final data sent from your API to APItoolkit will look like, after redacting any given JSON object**.</p>
</div>
<hr />

Here's an example of what the configuration would look like with redacted fields:

<section class="tab-group" data-tab-group="group1">
  <button class="tab-button" data-tab="tab1">settings</button>
  <button class="tab-button" data-tab="tab2">.ini file</button>
  <div id="tab1" class="tab-content">

```python
settings = {
  "APITOOLKIT_REDACT_HEADERS": ["content-type", "Authorization", "HOST"],
  "APITOOLKIT_REDACT_REQ_BODY": ["$.user.email", "$.user.addresses"],
  "APITOOLKIT_REDACT_RES_BODY": ["$.users[*].email", "$.users[*].credit_card"]
}
```

  </div>
  <div id="tab2" class="tab-content">

```sh
APITOOLKIT_REDACT_HEADERS: content-type, Authorization, HOST
APITOOLKIT_REDACT_REQ_BODY: $.user.email, $.user.addresses
APITOOLKIT_REDACT_RES_BODY: $.users[*].email, $.users[*].credit_card
```

  </div>
</section>

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `APITOOLKIT_REDACT_HEADERS` variable expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `APITOOLKIT_REDACT_REQ_BODY` and `APITOOLKIT_REDACT_RES_BODY` variables expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>


## Error Reporting

APItoolkit automatically detects different unhandled errors, API issues, and anomalies but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To report all uncaught errors and service exceptions that happened during a web request, use the `report_error()` function from the `apitoolkit_pyramid` module, passing in the `request` and `error` arguments, like so:

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

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

To monitor outgoing HTTP requests from your application, use the `observe_request()` function from the `apitoolkit_pyramid` module, passing in the `request` argument, like so:

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

The `observe_request()` function accepts a **required `request` argument**, and the following optional arguments:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `url_wildcard` | The `url_path` string for URLs with path parameters. |
| `redact_headers` | A list of HTTP header keys to redact. |
| `redact_response_body` | A list of JSONPaths from the request body to redact. |
| `redact_request_body` | A list of JSONPaths from the response body to redact. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `observe_request()` function wraps an [HTTPX](https://python-httpx.org?utm_source=apitoolkit){target="\_blank"} client and you can use it just like you would normally use HTTPX for any request.</p>
</div>

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-pyramid" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Pyramid SDK
</a>
```