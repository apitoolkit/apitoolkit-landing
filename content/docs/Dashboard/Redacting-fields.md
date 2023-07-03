---
title: Redacting Fields
date: 2023-07-03
publishdate: 2023-07-03
weight: 10
menu:
  main:
    weight: 20
---

API Toolkit is a powerful tool that sits in front of your application, capturing and recording all incoming traffic to the API. With API Toolkit, developers can gain valuable insights into the API usage and diagnose potential issues effectively. However, it is essential to ensure the privacy and security of sensitive information transmitted through the API.

To address this concern, On top of autoamtically redacting sensitive fields API Toolkit also offers a robust mechanism for redacting specific fields from the captured traffic using JSONPath on your APIToolkit dashboard (you can also redact fields using any of our SDKs). This means that sensitive data, such as passwords and credit card details, can be selectively excluded from the recorded information, enhancing the overall data protection and compliance measures.

## Redacted Field Value: JSONPath

API Toolkit leverages JSONPath, a widely adopted query language, to specify the fields that need to be redacted. JSONPath allows you to navigate and query the JSON data structure effectively, enabling precise control over which fields should be redacted. [lean more about JSONPath](https://lzone.de/cheat-sheet/JSONPath). Redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

To redact a specific field, you need to specify the JSONPath expression representing that field. For example, consider a JSON object representing a user's data:

```json
{
  "user": {
    "id": 123456789,
    "name": "John Doe",
    "password": "secretpassword123",
    "creditCard": {
      "number": "1234567890123456",
      "expiry": "12/25"
    }
  }
}
```

To redact the password field, you would use the following JSONPath expression: `$.user.password`. Similarly, to redact the number field within the creditCard object, you would use `$.user.creditCard.number`. By specifying these JSONPath expressions, API Toolkit will exclude these fields from the captured traffic, ensuring sensitive information remains protected.

## Redacting Fields On The Dashboard: Step-by-Step Guide

Now that we understand the basic concept of using JSONPath to redact fields, let's go through a step-by-step guide on how to achieve this in API Toolkit. After Identify the sensitive fields Follow these steps to redact them on the APIToolkit dashboard.

1. After Identify the sensitive fields, Login to your APIToolkit dashboard and click on `Redacted fields` on the side menu.

2. Identify JSONPath expressions: Use JSONPath expressions to identify the specific fields you want to redact. Refer to the JSON structure of your API payload and craft the JSONPath expression accordingly.

3. Click `Add new field`: Click the `Add new field` button and enter the JSONPath expression in the field path input box. you can also add optional description of the redacted field as well.

4. Click `Submit`: After submitting successfully, the specified field would be redacted and excluded from all captured traffic moving forward.

5. Add as many fields as you want: You can add as many sensitive fields as required by repeating steps 2 to 4. This ensures all sensitive data remains protected while still capturing useful insights from the API traffic.

By following these steps, you can effectively redact sensitive fields and those fields never leave your servers, enhancing data privacy and compliance within your application.

## Conclusion

Data security and privacy are crucial considerations when working with APIs. API Toolkit provides a powerful solution for capturing and analyzing API traffic, but it's essential to protect sensitive information. Redacting fields using JSONPath expressions enables you to selectively exclude sensitive data from the captured traffic, ensuring confidentiality and compliance.
