---
title: Springboot
ogTitle: Springboot SDK Guide
date: 2024-05-28
updatedDate: 2024-06-10
menuWeight: 1
---

# Springboot SDK Guide

To integrate your Springboot Java application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **Springboot SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.

## Installation

To install the SDK, kindly add the following dependency to your `pom.xml` file within the `&lt;dependencies&gt;` section like so:

```xml
&lt;dependency&gt;
    &lt;groupId&gt;io.apitoolkit.springboot&lt;/groupId&gt;
    &lt;artifactId&gt;apitoolkit-springboot&lt;/artifactId&gt;
    &lt;version&gt;1.0.5&lt;/version&gt;
&lt;/dependency&gt;
```

## Configuration

First, add your APItoolkit API key to the `application.properties` file like so:

```sh
apitoolkit.apikey={ENTER_YOUR_API_KEY_HERE}

# Other configuation options
apitoolkit.debug=false # Set to true to enable debug mode
# ...
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

Then, initialize the SDK like so:

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
// Import APItoolkit annotation
import io.apitoolkit.springboot.annotations.EnableAPIToolkit;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
// Class declaration for the annotation
@EnableAPIToolkit
@RestController
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	@GetMapping("/user/{name}")
	public User getUser(@PathVariable String name) {
		return new User("Jon Doe", "example@gmail.com");
	}
}
```

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted  (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to provide additional configuration options to the `application.properties` file with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

1. `redactHeaders`:  A list of HTTP header keys.
2. `redactRequestBody`: A list of JSONPaths from the request body.
3. `redactResponseBody`: A list of JSONPaths from the response body.

<hr />
JSONPath is a query language used to select and extract data from JSON files. For example, given the following sample user data JSON object:

```JSON
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
      },
      ...
    ],
    "credit_card": {
      "number": "4111111111111111",
      "expiration": "12/28",
      "cvv": "123"
    }
  },
  ...
}
```

Examples of valid JSONPaths would be:

- `$.user.credit_card` (In this case, APItoolkit will replace the `addresses` field inside the `user` object with the string `[CLIENT_REDACTED]`).
- `$.user.addresses[*].zip` (In this case, APItoolkit will replace the `zip` field in all the objects of the `addresses` list inside the `user` object with the string `[CLIENT_REDACTED]`).

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"}. You can also use this [JSONPath Evaluator](https://jsonpath.com?utm_source=apitoolkit){target="_blank"} to validate your JSONPaths.</p>
</div>
<hr />

Here's an example of what the configuration would look like with redacted fields:

```sh
apitoolkit.apikey={ENTER_YOUR_API_KEY_HERE};

apitoolkit.redactHeaders=content-type,Authorization,HOST
apitoolkit.redactRequestBody=$.user.email,$.user.addresses
apitoolkit.redactResponseBody=$.users[*].email,$.users[*].credit_card
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `redactHeaders` config field expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `redactRequestBody` and `redactResponseBody` config fields expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit detects different API issues and anomalies automatically but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To report errors, use the `reportError()` method, passing in the `request` and `exception` parameters like so:

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;
import jakarta.servlet.http.HttpServletRequest;

import io.apitoolkit.springboot.APErrors;
import io.apitoolkit.springboot.annotations.EnableAPIToolkit;

@EnableAPIToolkit
@SpringBootApplication
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    @GetMapping("/hello")
    public String hello(@RequestParam(value = "name", defaultValue = "World") String name, HttpServletRequest request) {
        try {
            System.out.print(1 / 0); // This will throw an ArithmeticException
        } catch (Exception e) {
            // Report the error to APItoolkit
            APErrors.reportError(request, e);
        }
        return String.format("Hello %s!", name);
    }
}
```

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="_blank"} page, alongside the incoming request that triggered them.

The Spring Boot SDK provides the `ObserveRequest` class for monitoring outgoing requests using the Apache HTTP client. First, you will create an instance of the `ObserveRequest` class (you can also pass optional parameters to redact headers and request/response body). Then use the `observingClient` to create a new HTTP client, passing in the current request context and an optional path pattern if the route has dynamic parameters. Here's an example of outgoing requests configuration with this SDK:

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import javax.servlet.http.HttpServletRequest;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.util.EntityUtils;

@SpringBootApplication
@EnableAPIToolkit
@RestController
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }

    // Create an Instance of ObserveRequest
    private ObserveRequest observingClient = new ObserveRequest(
        List.of("cookies", "authorization", "x-api-key"),
        List.of("$.title", "$.id"),
        List.of("$.body")
    );

    @GetMapping("/hello")
    public String hello(HttpServletRequest request) {
        // Use observingClient to Create an HTTP Client
        CloseableHttpClient httpClient = observingClient.createHttpClient(request, "/posts/{post_id}");
        try {
            HttpGet httpGet = new HttpGet("https://jsonplaceholder.typicode.com/posts/1");
            CloseableHttpResponse response = httpClient.execute(httpGet);
            String responseStr = EntityUtils.toString(response.getEntity());
            return responseStr;
        } catch (Exception e) {
            e.printStackTrace();
            return "Error occurred while processing the request";
        }
    }
}
```

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-springboot" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Springboot SDK
</a>
```