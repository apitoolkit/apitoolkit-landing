---
title: "How to Prevent Sending sensitive Data to APItoolkit during integration"
date: 2024-02-12T06:44:56+02:00
author: elliot
categories:
  - Data Redacting
---

The rise of API-driven development brings immense power and flexibility, but also significant security risks. In this scenario, tools like APIToolkit, with our fast traffic capturing features, can inadvertently expose sensitive data if not handled properly. This post aims to properly guide you to shield your sensitive information and maintain airtight API security.

## Why Protect Sensitive Data in APIToolkit
Imagine unauthorized access to user names, passwords, or financial information captured in API traffic. The consequences can be severe, ranging from privacy breaches and identity theft to financial losses and reputational damage. Protecting sensitive data is not just an option, it's an imperative for ethical and secure API practices.

### Prerequisites

* Sign up for an APItoolkit account and get an API key
* Successfully integrate APIToolkit into your system

## How to Prevent Sensitive Data Exposure(A Multi-Layered Approach)

We understand the importance of safeguarding sensitive data, especially while using our service for API traffic capture. In this guide, we will walk you through several effective techniques to protect critical information and maintain proper API security.

#### 1.  Data Masking by Shield Confidential Fields

* **Built-in Redaction:** We have pre-configured APIToolkit to automatically mask frequently sensitive fields like api_key and password from both request and response bodies. This provides a swift initial layer of protection.

* **Custom Control:** For more granular control, you can tailor which fields get redacted using specific JSONPath expressions. For instance, if your API handles credit card data, you might redact `$.credit-card.cvv` and `$.credit-card.name`.

```python
redact_res = ["$.api_key", "$.password", "$.credit-card.cvv", "$.credit-card.name"]
redact_req = ["$.credit-card.cvv", "$.credit-card.name"]
redact_headers = ["Authorization", "Cookie"]
```

#### 2. Endpoint Filtering by Excluding Sensitive Routes
We have built APIToolkit to selectively exclude capturing traffic from specific endpoints where sensitive data exchange is common, such as `/login` or `/payment`. This ensures potentially risky information isn't recorded in the first place.

```python 
excluded_routes = ["/login", "/payment"]

def should_capture(request):
    return request.path not in excluded_routes

@app.before_request
def before_request():
    if should_capture(request):
        apitoolkit.beforeRequest()
```

#### 3. Encryption by Adding an Extra Security Layer

To mitigate risks even further, we have implemented encryption for highly sensitive data (e.g., social security numbers or financial details) before it reaches APIToolkit. This extra layer protects data confidentiality even if it's inadvertently captured due to misconfiguration or accidental exposure.
```python
from cryptography.fernet import Fernet

key = Fernet.generate_key()
cipher = Fernet(key)

def encrypt_data(data):
    encrypted_data = cipher.encrypt(data.encode())
    return encrypted_data

```
#### 4. Validation and Verifying Effectiveness

 Data protection shouldn't be left to chance. We have incorporated unit tests that regularly verify if redacted fields, excluded routes, and encrypted data are handled correctly as intended, giving you peace of mind about your security measures.

 ```python
 def test_password_redacted():
    response = redact(response, {"$.password": "*"})
    assert "password" not in response["user"]
    assert "[REDACTED]" in response["user"]
````



