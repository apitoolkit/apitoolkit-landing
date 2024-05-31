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