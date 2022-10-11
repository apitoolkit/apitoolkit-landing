---
title: "What You Need to Know About REST APIs"
date: 2022-06-04T01:21:39+02:00
author: irhose
categories:
  - APIs
---

![sleeping cat](./image1.jpg)

A concise review of the basics of REST APIs

Let's say you work for a candy shop and you’re trying to build an application to show the variety of candy in stock and allow the workers to make updates.

The communication can be done via a rest API

## What Are REST APIs?

REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style. Because of this, REST APIs are sometimes referred to RESTful APIs.

RESTAPIs are all about Communication between client and server.

## What Are The Benefits of REST APIs?

1. They are a simple and standardized approach to communication. You don’t have to worry about what data is being used or how to format your requests

2. They are scalable and stateless
As your service grows in complexity, you can easily make modifications. Also, you don’t have to concern yourself with what data is in which state and keep track of data across client and server.

3. High performance. In large part due to the fact that they support caching. As your service gets more complex, your performance stays high.

## What Are REST Design Principles?

The [framework for some APIs](https://apitoolkit.io/blog/web-service-apis-structures-and-protocols/), such as [SOAP](http://apitoolkit.io/blog/everything-about-soap-apis) and XML-RPC, is rigid. However, REST APIs can be developed using virtually any programming language and support a variety of data formats. All they need to do is adhere to the following six REST design principles - also known as architectural constraints:

**Layered system architecture**. In REST APIs, the calls and responses go through different layers. As a rule of thumb, don’t assume that the client and server applications connect directly to each other. There may be a number of different intermediaries in the communication loop. REST APIs need to be designed so that neither the client nor the server can tell whether it communicates with the end application or an intermediary.

**Uniform interface**. All API requests for the same resource should look the same, no matter where the request comes from. The REST API should ensure that the same piece of data, such as the name or email address of a user, belongs to only one uniform resource identifier (URI). Resources shouldn’t be too large but should contain every piece of information that the client might need.

**Statelessness**. REST APIs are stateless, meaning that each request needs to include all the information necessary for processing it. In other words, REST APIs do not require any server-side sessions. Server applications aren’t allowed to store any data related to a client request.

**Client-server decoupling**. In REST API design, client and server applications must be completely independent of each other. The only information the client application should know is the URI of the requested resource; it can't interact with the server application in any other way. Similarly, a server application shouldn't modify the client application other than passing it to the requested data via HTTP.

**Cacheability**. When possible, resources should be cacheable on the client or server side. Server responses also need to contain information about whether caching is allowed for the delivered resource. The goal is to improve performance on the client side, while increasing scalability on the server side.

**Code on demand (optional)**. REST APIs usually send static resources, but in certain cases, responses can also contain executable code (such as Java applets). In these cases, the code should only run on-demand.

## How do REST APIs Work?

REST APIs communicate using [HTTP requests](https://developer.mozilla.org/en-US/docs/Web/HTTP) to perform standard database functions like creating, reading, updating, and deleting records (CRUD) within a resource. 

For instance, a REST API would use a GET request to retrieve a record, a POST request to create one, a PUT request to update a record, and a DELETE request to delete one. All HTTP methods can be used in API calls. A well-designed REST API is similar to a website running in a web browser with built-in HTTP functionality.

The state of a resource at any particular instant, or timestamp, is known as the resource representation. This information can be delivered to a client in virtually any format including JavaScript Object Notation (JSON), HTML, XLT, Python, PHP, or plain text.

JSON is popular because it’s readable by both humans and machines—and it is programming language-agnostic.

### Structure of a REST Request

**The Endpoint**: This is a unique URL that represents an object or group of objects of data. Each API request has its own endpoint, which is what the HTTP client is directed at in order to interact with data resources.

**The Method**: HTTP methods (which will be explained in further detail below) are an integral part of a RESTful API request. These methods – GET, POST, PUSH, PATCH, and DELETE – correspond to create, read, update, and delete resources.

**The Headers**: REST headers contain information that represents metadata associated with every single REST API request. A REST header indicates the format of the request and response. This provides information about the status of the request.

**The Data**: A REST API request also consists of data (also referred to as a “body”) that usually works with the POST, PUT, and PATCH HTTP commands and contains the information and representation of the resource that will be created.

## Conclusion
Although flexibility is a big advantage of REST API design, that same flexibility makes it easy to design an API that’s broken or performs poorly. For this reason, professional developers have supportive communities where they share best practices for building with REST. 

Finally, to be sure you’re building APIs that won’t break, you can compare [API observability tools here](https://apitoolkit.io/blog/best-api-monitoring-and-observability-tools/).
