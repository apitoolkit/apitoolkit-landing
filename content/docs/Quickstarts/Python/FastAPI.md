---
title: FastAPI
date: 2023-09-16
toc: true
publishdate: 2023-09-16
weight: 20
imageurl: /assets/img/framework-logos/fastapi-logo.png
menu:
  main:
    weight: 20
---

The API Toolkit FastAPI client is an sdk used to integrate FastAPI web services with APIToolkit.
It monitors incoming traffic, gathers the requests and sends the request to the apitoolkit servers.

## Design decisions:

- Use the gcp SDK to send real time traffic from REST APIs to the gcp topic

## How to Integrate:

First install the apitoolkit Go sdk:
`pip install apitoolkit-fastapi`

Then add apitoolkit to your app like so (Gin example):

```python
from fastapi import FastAPI
from apitoolkit_fastapi import APIToolkit

app = FastAPI()

# Initialize apitoolkit
apitoolkit = APIToolkit(api_key='<API_KEY goes here>')

app.middleware('http')(apitoolkit.middleware)


@app.get("/")
def read_root():
    return {"Hello": "World"}
```

### Other Optional Parameters

1. **`redact_headers`**: This is an array of HTTP header field names that you want to redact from the data sent to APIToolkit. This is useful for removing sensitive data like authentication tokens.

   ```python
   redact_headers=["Authorization", "Cookie"]
   ```

2. **`redact_request_body`**: An array of JSONPath expressions specifying which fields should be redacted from the request body. This helps in eliminating sensitive data making sure it doesn't get sent to APIToolkit.

   ```python
   redact_request_body=["$.user.password", "$.creditCard.number"]
   ```

3. **`redact_response_body`**: Similar to `redact_request_body`, but for the response body. This ensures that sensitive data is not sent to APIToolkit.

   ```python
   redact_response_body=["$.api_key", "$.user.social_security_number"]
   ```

4. **`debug`**: Set this to `True` to enable debug logging.

## Client Redacting fields

While it's possible to mark a field as redacted from the apitoolkit dashboard, this client also supports redacting at the client side.
Client side redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

To mark fields that should be redacted, simply add them to the apitoolkit config struct.
#### Example

```python
from fastapi import FastAPI
from apitoolkit_fastapi import APIToolkit

app = FastAPI()

# A list of fields to redact from response body
redact_res = ["$.api_key", "$.password"]
# A list of fields to redact from request body
redact_req = ["$.credit-card.cvv", "$.credit-card.name"]
# A list of fields to redact from request and repsonse headers
redact_headers = ["Authorization", "Cookie"]

# Initialize apitoolkit
apitoolkit = APIToolkit(
    api_key="<API_KEY>", debug=True,redact_response_body=redact_res,
    redact_request_body=redact_req,redact_headers=redact_headers
)

app.middleware('http')(apitoolkit.middleware)

@app.get("/")
def read_root():
    return {"Hello": "World"}
```

It is important to note that while the `redact_headers` config field accepts a list of headers(case insensitive),
the `redact_request_body` and `redact_response_body` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in descibing which fields within your responses are sensitive.
Also note that these list of items to be redacted will be aplied to all endpoint requests and responses on your server.
To learn more about jsonpath to help form your queries,please take a look at thes JSONPATH resources:
1. [Query expressions for JSONPATH](https://ietf-wg-jsonpath.github.io/draft-ietf-jsonpath-base/draft-ietf-jsonpath-base.html)
2. [JSONPATH Cheet Sheet](https://lzone.de/cheat-sheet/JSONPath)

## Tags and Service Versions

Enhance your request monitoring in APIToolkit by including tags and specifying service versions in the APIToolkit class constructor.

#### Example

```python
apitoolkit = APIToolkit(api_key="<API_KEY>", debug=True, service_version="3.0.0", tags=["prod", "eu"])
```

## Outgoing Requests

Efficiently monitor outgoing HTTP requests from your FastAPI application using the `observe_request` function from the `apitoolkit_fastapi` module. This function allows you to capture and forward copies of both incoming and outgoing requests to an APIToolkit server for thorough monitoring and analysis.

### Example

```python
from fastapi import FastAPI, Request
from apitoolkit_fastapi import observe_request, report_error

app = FastAPI()

@app.get('/sample/{subject}')
async def sample_route(subject: str, request: Request):
    # Observe the request and send it to the APIToolkit server
    resp = observe_request(request).get("https://jsonplaceholder.typicode.com/todos/2")
    return resp.read()
```

The `observe_request` function wraps an HTTPX client, allowing you to use it seamlessly for any request, just like you would with HTTPX.

## Error Reporting

If you're familiar with sentry, bugsnag, or rollbar, you'll easily grasp this use case. However, with APIToolkit, errors are always linked to a parent request, enabling you to query and associate errors that occurred while serving a specific customer request. To report errors to APIToolkit, utilize the `report_error` function from the `apitoolkit_fastapi` module. You can report as many errors as needed during a single request.

### Example

```python
from fastapi import FastAPI, Request
from apitoolkit_fastapi import observe_request, report_error

app = FastAPI()

@app.get('/sample/{subject}')
async def sample_route(subject: str, request: Request):
    try:
        resp = observe_request(request).get("https://jsonplaceholder.typicode.com/todos/2")
        return resp.read()
    except Exception as e:
        # Report the error to APIToolkit
        report_error(request, e)
        return "Something went wrong"
```
