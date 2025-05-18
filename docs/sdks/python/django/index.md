---
title: Django
ogTitle: Django SDK Guide
date: 2022-03-23
updatedDate: 2024-06-17
menuWeight: 1
---

# Django SDK Guide

In this guide, you’ll learn how to integrate OpenTelemetry into your Django application and install the APItoolkit SDK to enhance its functionalities. By combining OpenTelemetry’s robust tracing and metrics capabilities with the APItoolkit SDK, you’ll be able to monitor incoming and outgoing requests, report errors, and gain deeper insights into your application’s performance. This setup provides comprehensive observability, helping you track requests and troubleshoot issues effectively.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the apitoolkit django sdks and necessary opentelemetry packages:

```sh
pip install apitoolkit-django opentelemetry-distro opentelemetry-exporter-otlp
opentelemetry-bootstrap -a install
```

## Setup Open Telemetry

Setting up open telemetry allows you to send traces, metrics and logs to the APIToolkit platform.
To setup open telemetry, you need to configure the following environment variables:

```sh
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"
export OTEL_SERVICE_NAME="my-service" # Specifies the name of the service.
export OTEL_RESOURCE_ATTRIBUTES="at-project-key={ENTER_YOUR_API_KEY_HERE}" # Adds your API KEY to the resource.
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc" # Specifies the protocol to use for the OpenTelemetry exporter.
export DJANGO_SETTINGS_MODULE={YOUR_DJANGO_ROJECT_NAME}.settings # Specifies the Django settings module to use.
```

Then run the command below to start your server with opentelemetry instrumented:

```sh
opentelemetry-instrument python3 manage.py runserver --noreload
```

Or run using `gunicorn`

```sh
opentelemetry-instrument gunicorn myapp.wsgi
```

Or using `daphne`

```sh
opentelemetry-instrument daphne myapp.asgi:application
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
  <p>The `{YOUR_DJANGO_ROJECT_NAME}` demo string should be replaced with the name of your django project</p>
</div>

## Configuration

After setting up open telemetry, you can now configure the apitoolkit django middleware.
By adding the following APItoolkit variables to your Django settings (`settings.py`) file:

```python
from pathlib import Path
from dotenv import load_dotenv
import os

load_dotenv()

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Add the APItoolkit configuration options
APITOOLKIT_CAPTURE_REQUEST_BODY = True
APITOOLKIT_CAPTURE_RESPONSE_BODY = True

# Application definition
INSTALLED_APPS = [
  'django.contrib.admin',
  'django.contrib.auth',
  'django.contrib.sessions',
]
```

Then add the `apitoolkit_django.APIToolkit` middleware into the `settings.py` middleware list, like so:

```python
MIDDLEWARE = [
  'apitoolkit_django.APIToolkit',  # Initialize APItoolkit
  'django.middleware.security.SecurityMiddleware',
  'django.contrib.sessions.middleware.SessionMiddleware',
  'django.middleware.common.CommonMiddleware',
  # Add other middleware as needed
]
```

In the configuration above, **only the `APITOOLKIT_KEY` option is required**, but you can add the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `APITOOLKIT_SERVICE_NAME` | A defined string name of your application |
| `APITOOLKIT_DEBUG` | Set to `true` to enable debug mode. |
| `APITOOLKIT_TAGS` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `APITOOLKIT_SERVICE_VERSION` | A defined string version of your application (used for further debugging on the dashboard). |
| `APITOOLKIT_REDACT_HEADERS` | A list of HTTP header keys to redact. |
| `APITOOLKIT_REDACT_REQUEST_BODY` | A list of JSONPaths from the request body to redact. |
| `APITOOLKIT_REDACT_RESPONSE_BODY` | A list of JSONPaths from the response body to redact. |
| `APITOOLKIT_CAPTURE_REQUEST_BODY` | Set to `true` to capture the request body. |
| `APITOOLKIT_CAPTURE_RESPONSE_BODY` | Set to `true` to capture the response body. |
:::

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional configuration options to the `settings.py` file with paths to the fields that should be redacted. There are three variables you can provide to configure what gets redacted, namely:

1. `APITOOLKIT_REDACT_HEADERS`: A list of HTTP header keys.
2. `APITOOLKIT_REDACT_REQUEST_BODY`: A list of JSONPaths from the request body.
3. `APITOOLKIT_REDACT_RESPONSE_BODY`: A list of JSONPaths from the response body.

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
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"} or use this [JSONPath Evaluator](https://jsonpath.com?ref=apitoolkit){target="_blank"} to validate your JSONPath expressions. </p>
  <p>**You can also use our [JSON Redaction Tool](/tools/json-redacter/) <i class="fa-regular fa-screwdriver-wrench"></i> to preview what the final data sent from your API to APItoolkit will look like, after redacting any given JSON object**.</p>
</div>
<hr />

Here's an example of what the `settings.py` file would look like with redacted fields:

```python
APITOOLKIT_REDACT_HEADERS = ["content-type", "Authorization", "HOST"]
APITOOLKIT_REDACT_REQUEST_BODY = ["$.user.email", "$.user.addresses"]
APITOOLKIT_REDACT_RESPONSE_BODY = ["$.users[*].email", "$.users[*].credit_card"]
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `APITOOLKIT_REDACT_HEADERS` variable expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `APITOOLKIT_REDACT_REQUEST_BODY` and `APITOOLKIT_REDACT_RESPONSE_BODY` variables expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit automatically detects different unhandled errors, API issues, and anomalies but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To manually report specific errors at different parts of your application, use the `report_error` function from the `apitoolkit_django` module, passing in the `request` and `error`, like so:

```python
from django.http import JsonResponse
from apitoolkit_django import observe_request, report_error

def hello_world(request, name):
  try:
    value = 1/0
    return JsonResponse({"hello": value})
  except Exception as e:
    report_error(request, e)
    return JsonResponse({"Error": "Something went wrong..."})
```

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

To monitor outgoing HTTP requests from your application, use the `observe_request` function from the `apitoolkit_django` module, passing in the `request` argument, like so:

```python
from django.http import JsonResponse
from apitoolkit_django import observe_request, report_error

def hello_world(request, name):
  resp = observe_request(request).get(
      "https://jsonplaceholder.typicode.com/todos/2")
  resp.read()
  return JsonResponse({"data": resp.read()})
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

```=html
<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `observe_request()` function wraps an <a href="https://github.com/apitoolkit/apitoolkit-pyramid" target="_blank" rel="noopener noreferrer" class="">HTTPX</a>

 client and you can use it just like you would normally use HTTPX for any request.</p>
</div>
```

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-django" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Django SDK
</a>
```
