---
title: Django
date: 2023-09-17
publishdate: 2023-09-17
weight: 20
menu:
  main:
    weight: 20
---

The APIToolkit Django SDK is a specialized library designed to facilitate the integration of Django applications with APIToolkit's monitoring and analytics services. This SDK enables developers to easily collect, analyze, and visualize important API metrics, thereby enhancing application performance and security.

## Installation

### Prerequisites

1. **Python Version**: Ensure that Python 3.6 or higher is installed.

2. **Virtual Environment (Optional)**: Consider using a Python virtual environment for dependency isolation.

3. **Django**: Ensure Django is installed. If not, you can install it with:
   ```bash
   pip install django
   ```

### Installation Steps

1. **Install via pip**: Install the APIToolkit Django SDK package using pip.

   ```bash
   pip install apitoolkit-django
   ```

### Troubleshooting

1. **Installation Fails**: Upgrade pip and setuptools, then try the installation again.

2. **Import Errors**: Ensure you're using the Python environment where the SDK is installed.

---

## Usage

1. **Add Middleware**: Add APIToolkit's middleware to the `MIDDLEWARE` list in `settings.py`.

   ```python
   MIDDLEWARE = [
       # ...
       'apitoolkit-django.APIToolkit',
       # ...
   ]
   ```

2. **API Key**: Add your APIToolkit API key to `settings.py`.

   ```python
   APITOOLKIT_KEY = 'YOUR_API_KEY'
   ```

---

## Redacting Sensitive Information

In any application, safeguarding sensitive data is paramount. The APIToolkit Django SDK allows you to redact certain types of information before they are sent to APIToolkit's servers.

### Redacting Headers

HTTP headers often contain sensitive data like authentication tokens. To redact specific headers, you can use the `APITOOLKIT_REDACT_HEADERS` setting in your `settings.py` file:

```python
APITOOLKIT_REDACT_HEADERS = ['Authorization', 'X-Secret-Token']
```

### Redacting Request and Response Fields

The SDK also allows you to redact specific fields in the request and response bodies using JSONPath expressions. Configure the `APITOOLKIT_REDACT_REQUEST_BODY` and `APITOOLKIT_REDACT_RESPONSE_BODY` settings in your `settings.py` file to specify which fields to redact.

```python
APITOOLKIT_REDACT_REQUEST_BODY = ['$.password', '$.user.credit_card']
APITOOLKIT_REDACT_RESPONSE_BODY = ['$.token', '$.user.ssn']
```

### Full Configuration Example

Combining header and body redaction, your `settings.py` file might include:

```python
# APIToolkit Configuration for Redacting Information
APITOOLKIT_REDACT_HEADERS = ['Authorization', 'X-Secret-Token']
APITOOLKIT_REDACT_REQUEST_BODY = ['$.password', '$.user.credit_card']
APITOOLKIT_REDACT_RESPONSE_BODY = ['$.token', '$.user.ssn']
```

By utilizing these redaction options, you can ensure that sensitive data is adequately protected and never leaves your server.

It is important to note that while the `APITOOLKIT_REDACT_HEADERS` config field accepts a list of headers(case insensitive),
the `APITOOLKIT_REDACT_REQ_BODY` and `APITOOLKIT_REDACT_RES_BODY` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in descibing which fields within your responses are sensitive.
Also note that these list of items to be redacted will be aplied to all endpoint requests and responses on your server.
To learn more about jsonpath to help form your queries, please take a look at this cheatsheet:
[https://lzone.de/cheat-sheet/JSONPath](https://lzone.de/cheat-sheet/JSONPath)

---

## Degugging

You can add `APITOOLKIT_DEBUG` to your app settings file and set it to `True` to enable debug logging from the SDK. This will print out logs for each request/response captured by the middleware. APITOOLKIT_DEBUG defaults to `False`.

Eg:

```python
APITOOLKIT_DEBUG = True
```

## Conclusion

Integrating APIToolkit into your Django project provides you with powerful tools for API observability and monitoring. In this guide, we walked through the steps to set up a Django project, integrate APIToolkit, and make monitored API calls. We also discussed best practices for handling responses and errors. By following these steps, you can build a more robust, scalable, and maintainable application. APIToolkit's features will help you keep a close eye on your API interactions, ensuring optimal performance and quick troubleshooting.
