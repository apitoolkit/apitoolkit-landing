---
title: FastAPI
ogTitle: FastAPI SDK Guide
date: 2022-03-23
updatedDate: 2024-06-17
menuWeight: 2
---

# FastAPI SDK Guide

To integrate your FastAPI application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **FastAPI SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
pip install apitoolkit-fastapi
```

## Configuration

Next, initialize APItoolkit in your application's entry point (e.g., `main.py`), like so:

```python
from fastapi import FastAPI
from apitoolkit_fastapi import APIToolkit

app = FastAPI()

# Initialize APItoolkit
apitoolkit = APIToolkit(
  api_key="{ENTER_YOUR_API_KEY_HERE}",
  debug=False,
  tags=["environment: production", "region: us-east-1"],
  service_version="v2.0"
)
app.middleware("http")(apitoolkit.middleware)
# END Initialize APItoolkit

@app.get("/")
def read_root():
  return {"Hello": "World"}
```

In the configuration above, **only the `api_key` option is required**, but you can add the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `debug` | Set to `true` to enable debug mode. |
| `tags` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `service_version` | A defined string version of your application (used for further debugging on the dashboard). |
| `redact_headers` | A list of HTTP header keys to redact. |
| `redact_response_body` | A list of JSONPaths from the request body to redact. |
| `redact_request_body` | A list of JSONPaths from the response body to redact. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional fields to the `apitoolkit` configuration object with paths to the fields that should be redacted. There are three variables you can provide to configure what gets redacted, namely:

1. `redact_headers`: A list of HTTP header keys.
2. `redact_response_body`: A list of JSONPaths from the request body.
3. `redact_request_body`: A list of JSONPaths from the response body.

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

```python
from fastapi import FastAPI
from apitoolkit_fastapi import APIToolkit

app = FastAPI()

redact_headers = ["content-type", "Authorization", "HOST"]
redact_response_body = ["$.user.email", "$.user.addresses"]
redact_request_body = ["$.users[*].email", "$.users[*].credit_card"]

apitoolkit = APIToolkit(
  api_key="{ENTER_YOUR_API_KEY_HERE}",
  redact_headers=redact_headers,
  redact_response_body=redact_response_body,
  redact_request_body=redact_request_body
)

app.middleware("http")(apitoolkit.middleware)

@app.get("/")
def read_root():
  return {"Hello": "World"}
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `redact_headers` variable expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `redact_response_body` and `redact_request_body` variables expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit automatically detects different unhandled errors, API issues, and anomalies but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To manually report specific errors at different parts of your application, use the `report_error()` function from the `apitoolkit_fastapi` module, passing in the `request` and `error`, like so:

```python
from fastapi import FastAPI, Request
from apitoolkit_fastapi import report_error

app = FastAPI()

apitoolkit = APIToolkit(api_key="{ENTER_YOUR_API_KEY_HERE}")
app.middleware("http")(apitoolkit.middleware)

@app.get('/')
async def sample_route(request: Request):
  try:
    v = 1 / 0
    return {"zero_division": v}
  except Exception as e:
    # Report the error to APItoolkit
    report_error(request, e)
    return {"message": "Something went wrong"}
```

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

To monitor outgoing HTTP requests from your application, use the `observe_request()` function from the `apitoolkit_fastapi` module, passing in the `request` argument, like so:

```python
from fastapi import FastAPI, Request
from apitoolkit_fastapi import observe_request

app = FastAPI()

apitoolkit = APIToolkit(api_key="{ENTER_YOUR_API_KEY_HERE}")
app.middleware("http")(apitoolkit.middleware)

@app.get('/')
async def sample_route(request: Request):
  resp = observe_request(request).get("https://jsonplaceholder.typicode.com/todos/2")
  return resp.read()
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
<a href="https://github.com/apitoolkit/apitoolkit-fastapi" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the FastAPI SDK
</a>
```
