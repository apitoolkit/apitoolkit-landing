---
title: Golang
date: 2023-09-18
publishdate: 2023-09-18
weight: 20
menu:
  main:
    weight: 20
---


The APIToolkit Flask SDK is designed to seamlessly integrate Flask applications with APIToolkit's monitoring and analytics services. With this SDK, you can effortlessly collect and analyze key metrics from your Flask application.

## Installation

### Prerequisites

1. **Python Version**: Make sure Python 3.6 or higher is installed.
  
2. **Virtual Environment**: It's advisable to use a Python virtual environment for better dependency management.

3. **Flask**: If Flask is not already installed, you can install it with:
    ```bash
    pip install Flask
    ```

### Installation Steps

1. **Install via pip**: Use pip to install the APIToolkit Flask SDK.
    ```bash
    pip install apitoolkit-flask
    ```

2. **Verify Installation**: You can verify the SDK installation by importing it in a Python shell.
    ```python
    import apitoolkit_flask
    ```

### Troubleshooting

1. **Installation Fails**: Try upgrading pip and setuptools, then attempt the installation again.

2. **Import Errors**: Make sure you're working within the Python environment where the SDK was installed.

---

## Usage

### Importing the SDK

1. **Locate Main File**: Navigate to the main Python file where your Flask application is defined.

2. **Import SDK**: Import the APIToolkit Flask SDK.
    ```python
    from apitoolkit_flask import APIToolkit
    ```

### Initialization

1. **Create Flask App**: If you haven't already, instantiate your Flask application.

    ```python
    from Flask import Flask
    app = Flask(__name__)
    ```

2. **Initialize SDK**: Initialize the APIToolkit SDK with your Flask app and API key.

    ```python
    apitoolkit_client = APIToolkit(api_key='YOUR_API_KEY', flask_app=app)
    ```


## Configuration Options

Customizing the APIToolkit Flask SDK to your specific needs is straightforward. You can pass various options when initializing the SDK to tailor its behavior.

### Required Parameters

1. **`api_key`**: Your unique API key provided by APIToolkit, essential for authentication.

    ```python
    api_key="YOUR_API_KEY"
    ```

2. **`flask_app`**: The Flask application instance that the SDK will monitor.

    ```python
    flask_app=app
    ```

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

### Example Configuration

Here's how you might set these options when initializing the SDK:

```python
from Flask import Flask
from apitoolkit_flask import APIToolkit

app = Flask(__name__)

# Initialize SDK with options
apitoolkit_client = APIToolkit(
    api_key="YOUR_API_KEY",
    flask_app=app,
    redact_headers=["Authorization", "Cookie"],
    redact_request_body=["$.user.password"],
    redact_response_body=["$.api_key"]
)
```

## Redacting Sensitive Information

Protecting sensitive information is a crucial aspect of any application. The APIToolkit Flask SDK offers various options for redacting sensitive data from your API requests and responses.

### Redacting Headers

To redact specific headers from being sent to APIToolkit's servers, you can use the `redact_headers` option. Specify the headers to be redacted as a list:

```python
redact_headers = ["Authorization", "X-Secret-Token"]
```

### Redacting Request and Response Fields

For redacting specific fields in the request and response bodies, you can use the `redact_request_body` and `redact_response_body` options. Provide JSONPath expressions to specify which fields should be redacted:

```python
redact_request_body = ["$.password", "$.user.credit_card"]
redact_response_body = ["$.token", "$.user.ssn"]
```

### Example: Full Redaction Configuration

Here's how you can include all redaction options in your SDK initialization:

```python
from Flask import Flask
from apitoolkit_flask import APIToolkit

app = Flask(__name__)

# Initialize APIToolkit with redaction options
apitoolkit_client = APIToolkit(
    api_key="YOUR_API_KEY",
    flask_app=app,
    redact_headers=["Authorization", "X-Secret-Token"],
    redact_request_body=["$.password", "$.user.credit_card"],
    redact_response_body=["$.token", "$.user.ssn"]
)
```

By incorporating these redaction options, you can ensure that sensitive data is protected before it leaves your server.


## Conclusion

This documentation has aimed to provide a comprehensive guide for integrating the APIToolkit Flask SDK into your Flask applications. From installation and basic usage to advanced features and troubleshooting, the SDK offers a range of functionalities designed to make monitoring and analytics as straightforward as possible.

By leveraging the APIToolkit Flask SDK, you can enhance the reliability, security, and performance of your Flask applications. Whether you're running a small project or an enterprise-level service, APIToolkit provides the tools you need to maintain optimal operation and gain valuable insights into your application's behavior.