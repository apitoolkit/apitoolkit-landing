---
title: Java Springboot
date: 2024-05-28
updatedDate: 2024-05-28
menuWeight: 1
ogImage: /assets/img/framework-logos/golang-logo.png
---

# Java Springboot

## Overview

The APItoolkit Spring Boot SDK allows seamless integration of APItoolkit with your Spring Boot applications.

## Installation

To install the APItoolkit Spring Boot SDK, add the following dependency to your `pom.xml` file within the `&lt;dependencies&gt;` section:

```xml
&lt;dependency&gt;
    &lt;groupId&gt;io.apitoolkit.springboot&lt;/groupId&gt;
    &lt;artifactId&gt;apitoolkit-springboot&lt;/artifactId&gt;
    &lt;version&gt;1.0.4&lt;/version&gt;
&lt;/dependency&gt;
```

## Configuration

Before integrating APItoolkit, add your APItoolkit `API_KEY` to the `application.properties` file as shown below:

```sh
apitoolkit.apikey=&lt;YOUR_API_KEY&gt;

## Other configuation options
apitoolkit.debug=false # Set to true to enable debug mode
apitoolkit.redactHeaders=Authorization,Cookie,accept,accept-encoding # list of headers to redact
apitoolkit.redactRequestBody=$.password,$.account_number # jsonpath list of request body fields to redact
apitoolkit.redactResponseBody=$.cvv,$.email # jsonpath list of response body fields to redact
```

## Integration

After installing the SDK and configuring the properties for your application, integrate APItoolkit into your Spring Boot server as follows:

```java
package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.apitoolkit.springboot.annotations.EnableAPIToolkit;

import org.springframework.web.bind.annotation.*;

@SpringBootApplication
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

## Error monitoring

The Spring Boot SDK includes robust error reporting capabilities. Errors are linked with requests, enabling developers to easily reproduce and resolve bugs. While uncaught errors are automatically reported along with requests, you also have the option to manually report errors to APIToolkit as well.

```java
package io.apitoolkit.demo;

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
            System.out.print(1 / 0);
        } catch (Exception e) {
            // Report errors to APIToolkit
            APErrors.reportError(request, e);
        }
        return String.format("Hello %s!", name);
    }
}

```

## Outgoing Requests Monitoring

Monitoring outgoing requests helps identify and troubleshoot performance issues effectively. The Spring Boot SDK provides the `ObserveRequest` class for monitoring outgoing requests using the Apache HTTP client. This guide will walk you through setting it up and using it in your application.

### Create an Instance of `ObserveRequest`

First, create an instance of the `ObserveRequest` class. You can pass optional parameters to redact headers and JSONPath expressions to redact parts of the request and response bodies before they are sent to APIToolkit.

```java
ObserveRequest observingClient = new ObserveRequest(
    List.of("cookies", "authorization"),
    List.of("$.title", "$.id"),
    List.of("$.body")
);
```

### Use `ObserveRequest` to Create an HTTP Client

Use the `observingClient` to create a new HTTP client. Pass the current request context and an optional path pattern if the route has dynamic parameters. This setup allows you to monitor HTTP calls made within your server, linking them to the incoming requests that triggered them in the APIToolkit log explorer.

### Full Example of Outgoing Request Monitoring

Below is a complete example demonstrating how to set up and use `ObserveRequest` in a Spring Boot application.

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

    private ObserveRequest observingClient = new ObserveRequest(
        List.of("cookies", "authorization", "x-api-key"),
        List.of("$.title", "$.id"),
        List.of("$.body")
    );

    @GetMapping("/hello")
    public String hello(HttpServletRequest request) {
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
