---
title: Flask
date: 2023-09-18
publishdate: 2023-09-18
weight: 20
toc: true
imageurl: /assets/img/framework-logos/flask-logo.png
menu:
  main:
    weight: 20
---

# API Toolkit Python Flask SDK

The API Toolkit Flask client is an sdk used to integrate flask web services with APIToolkit.
It monitors incoming traffic, gathers the requests and sends the request to the apitoolkit servers.

## Design decisions:

- Use the gcp SDK to send real time traffic from REST APIs to the gcp topic

## How to Integrate:

First install the apitoolkit flask sdk:
`pip install apitoolkit-flask`

Then add apitoolkit to your flask app like so:

```python
from flask import Flask
from apitoolkit_flask import APIToolkit

app = Flask(__name__)

apitoolkit = APIToolkit(api_key="<API_KEY>", debug=True)


@app.before_request
def before_request():
    apitoolkit.beforeRequest()

@app.after_request
def after_request(response):
    apitoolkit.afterRequest(response)
    return response


@app.route('/hello', methods=['GET', 'POST'])
def sample_route(subject):
    return {"Hello": "World"}

app.run(debug=True)

```

This will monitor all requests and send them to the APIToolkit's servers.

### Optional Parameters

1. **`redact_headers`**: A list of HTTP header names you wish to redact from the data sent to APIToolkit.

   ```python
   redact_headers=["Authorization", "Cookie"]
   ```

2. **`redact_request_body`**: A list of JSONPath expressions for specifying which fields in the request body should be redacted.

   ```python
   redact_request_body=["$.user.password", "$.creditCard.number"]
   ```

3. **`redact_response_body`**: Similar to `redact_request_body`, but for the response body.

   ```python
   redact_response_body=["$.api_key", "$.user.social_security_number"]
   ```

4. **`debug`**: A boolean value that enables debug mode.

## Client Redacting fields

While it's possible to mark a field as redacted from the apitoolkit dashboard, this client also supports redacting at the client side.
Client side redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

To mark fields that should be redacted, add them to the APIToolkit constructor.
Eg:

```python
from flask import Flask
from apitoolkit_flask import APIToolkit

app = Flask(__name__)

# A list of fields to redact from response body
redact_res = ["$.api_key", "$.password"]
# A list of fields to redact from request body
redact_req = ["$.credit-card.cvv", "$.credit-card.name"]
# A list of fields to redact from request and repsonse headers
redact_headers = ["Authorization", "Cookie"]

apitoolkit = APIToolkit(api_key="<API_KEY>", debug=True,redact_response_body=redact_res, redact_request_body=redact_req,redact_headers=redact_headers)

@app.before_request
def before_request():
    apitoolkit.beforeRequest()

@app.after_request
def after_request(response):
    apitoolkit.afterRequest(response)
    return response


@app.route('/hello', methods=['GET', 'POST'])
def sample_route(subject):
    return {"Hello": "World"}

app.run(debug=True)
```

It is important to note that while the `redact_headers` config field accepts a list of headers(case insensitive),
the `redact_request_body` and `redact_response_body` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in descibing which fields within your responses are sensitive.

Also note that these list of items to be redacted will be aplied to all endpoint requests and responses on your server.

To learn more about jsonpath, please take a look at these resources:
1. [Query expressions for JSONPATH](https://ietf-wg-jsonpath.github.io/draft-ietf-jsonpath-base/draft-ietf-jsonpath-base.html)
2. [JSONPATH Cheet Sheet](https://lzone.de/cheat-sheet/JSONPath)

## Tags and Service Versions

Enhance your request monitoring in APIToolkit by including tags and specifying service versions in the APIToolkit class constructor.

#### Example

```python
apitoolkit = APIToolkit(api_key="<API_KEY>", debug=True, service_version="3.0.0", tags=["prod", "eu"])
```
## Outgoing Requests

Effectively monitor outgoing HTTP requests from your Flask application using the `observe_request` function from the `apitoolkit_flask` module. This function allows you to capture and forward copies of both incoming and outgoing requests to an APIToolkit server for thorough monitoring and analysis.

### Example

```python
from flask import Flask, request
from apitoolkit_flask import observe_request

@app.route('/sample/<subject>', methods=['GET', 'POST'])
async def sample_route(subject):
    # Observe the request and send it to the APIToolkit server
    resp = observe_request(request).get("https://jsonplaceholder.typicode.com/todos/2")
    return resp.read()
```

The `observe_request` function wraps an HTTPX client, allowing you to use it seamlessly for any request, just like you would with HTTPX.
## Error Reporting

If you're familiar with sentry, bugsnag, or rollbar, you'll easily grasp this use case. However, with APIToolkit, errors are always linked to a parent request, enabling you to query and associate errors that occurred while serving a specific customer request. To report errors to APIToolkit, utilize the `report_error` function from the `apitoolkit_flask` module. You can report as many errors as needed during a request.

### Example

```python
from flask import Flask, request
from apitoolkit_flask import observe_request, report_error

@app.route('/sample/<subject>', methods=['GET', 'POST'])
async def sample_route(subject):
    try:
        resp = observe_request(request).get("https://jsonplaceholder.typicode.com/todos/2")
        return resp.read()
    except Exception as e:
        # Report the error to APIToolkit
        report_error(request, e)
        return "Something went wrong"
```
