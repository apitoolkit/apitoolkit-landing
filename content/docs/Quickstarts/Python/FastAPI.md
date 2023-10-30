---
title: FastAPI
date: 2023-09-16
publishdate: 2023-09-16
weight: 20
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
Eg:

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
To learn more about jsonpath to help form your queries, please take a look at this cheatsheet:
[https://lzone.de/cheat-sheet/JSONPath](https://lzone.de/cheat-sheet/JSONPath)
