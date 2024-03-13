---
title: "REST APIs are the Future: Compared to RPC, GraphQL, etc"
featured_image: scalability.png
date: 2023-08-05T08:05:56+02:00
author: anthony 
categories: 
  - APIs
description: "Discover the incredible advantages of REST APIs compared to RPC and GraphQL. Learn how REST APIs are shaping the future of web development, offering flexibility, scalability, and ease of use. Find out why embracing REST APIs is essential for your business success."
---

![REST is the future](./scalability.png)

In recent years there has been a lot of hype around new technologies such as GraphQL and RPCs. These technologies are supposed to replace REST as the defacto transports. They all come with a lot of advantages or so it seems. But I argue that they are and remain the future. And in most of the cases, the benefits which the new technologies offer, could equaly be gotten from REST APIs as well, with a little bit of creativity.

## Understanding REST APIs

We've explored and described what REST is in previous articles, so I would point you [there](https://apitoolkit.io/blog/rest-api-scalability/) if you want to learn what REST is. 
But there are some benefits which we get out of the bat from using REST APIs:


## 1. The Power of Simplicity

REST as a specification is simple. And so are REST based APIs. Endpoint, Query params, a method type, headers, a body, etc. Very few concepts are required to understand REST APIs especially compared to RPC and other protocols. 
The simplicity allows developers to focus on how they should model their business relationships and domain. 

```
HTTP GET /devices/{id}/configurations
```

## 2. Versatility and Flexibility

You can accept or return JSON, XML, HTML, TEXT, files, etc from the same RESTFUL service if you like. Sometimes even from the same endpoint, usually using the 'Content-Type' header to switch between response content types. 

## 3. Statelessness and hence Scalability

REST APIs are inherently stateless, meaning that each request from a client to the server must contain all the information needed to understand and process the request. This statelessness allows for better [scalability](https://apitoolkit.io/blog/api-logs-and-metrics/), as servers do not need to retain session information between requests. This has mapped very nicely to the age of containers and Docker. And even PHP. Especially if you think about how PHP was unable to maintain any state between requests without passing it through a database.  

## Comparison with RPC like GRPC and TRPC

Remote Procedure Call (RPC) is an alternative to REST APIs that has been used for a long time. RPC allows programs to execute code on remote systems, providing a way for applications to communicate with each other. However, when compared to REST APIs, RPC falls short in several aspects. GRPC is just a form of RPC popularized by google and relying on protocol buffer files for specification. TRPC is the same, but especially from the javascript world.

### 1. Complexity

RPC is often criticized for its complexity. The various protocols and specifications involved can make implementation and maintenance a daunting task. In contrast, REST APIs, as we have seen, are much simpler to understand and use. Using GRPC for example, you need to create a protocol buffer file, and then use that file to generate clients which you must then use to make requests to the server. The server also needs to have code generated with that same protobuf file. So you can't send data that wasn't already specified in the file. This creates complexity in keeping clients and servers in sync via sharing the same protobuf files between teams.

Here's an example of what a protobuf file looks like:
```protobuf
syntax = "proto2";

package tutorial;

option java_package = "protobuf.examples.tutorial";
option java_outer_classname = "AddressBookProtos";

message Person {
  required string name = 1;
  required int32 id = 2;
  optional string email = 3;

  enum PhoneType {
    mobile = 0;
    home = 1;
    work = 2;
  }

  message PhoneNumber {
    required string number = 1;
    optional PhoneType type = 2 [default = HOME];
  }

  repeated PhoneNumber phones = 4;
}

message AddressBook {
  repeated Person people = 1;
}
```

### 2. Tight Coupling

If a server and a client have to depend on the same protobuf file to generate their code, then it's clear that RPC can lead to tight coupling between different components of an application. Changes in one part of the system can have a ripple effect on other parts, making it challenging to evolve and update the application. REST APIs, on the other hand, promote loose coupling and modularity.


### 3. Lack of Scalability

RPC might struggle to handle large-scale applications due to its stateful nature. As the number of clients increases, the overhead of maintaining session information can become a bottleneck. REST APIs' statelessness, as previously discussed, makes them more scalable and better suited for high-traffic scenarios.

### 4. New challenges that didn't exist before

When I used to maintain grpc servers, it was common that we would run into issues making the grpc servers work with our existing load balancer. So clients would end up hitting the same docker container, instead of being load balanced between all the containers. This is a solved problem now, in the ecosystem. But the point is that we ended up having to find solutions to problems which didnt exist otherwise. 

## GraphQL and REST: A Healthy Competition

GraphQL is a more recent addition to the API landscape and has gained significant attention for its unique approach to querying data. Unlike REST, which relies on multiple endpoints for different resources, GraphQL allows clients to request exactly the data they need, and nothing more, through a single endpoint. While GraphQL has its merits, it still coexists with REST rather than replacing it entirely.

### 1. Query Efficiency

GraphQL excels in reducing over-fetching and under-fetching of data. Clients can specify their data requirements precisely, eliminating the need to parse through unnecessary information. However, REST APIs can also address this issue through proper design and versioning.

### 2. Caching

REST APIs benefit from well-established caching mechanisms provided by HTTP, which can significantly improve performance and reduce server load. Although GraphQL introduces some caching capabilities, it is still catching up in this area.

### 3. Learning Curve

GraphQL introduces a learning curve for developers, especially those accustomed to REST APIs. The shift to a new paradigm can slow down development initially. REST APIs, being more widely adopted, have a wealth of documentation, tutorials, and community support available.

```graphql
type Tweet {
    id: ID!
    # The tweet text. No more than 140 characters!
    body: String
    # When the tweet was published
    date: Date
    # Who published the tweet
    Author: User
    # Views, retweets, likes, etc
    Stats: Stat
}

type User {
    id: ID!
    username: String
    first_name: String
    last_name: String
    full_name: String
    name: String @deprecated
    avatar_url: Url
}

scalar Url
scalar Date

type Query {
    Tweet(id: ID!): Tweet
    Tweets(limit: Int, skip: Int, sort_field: String, sort_order: String): [Tweet]
    TweetsMeta: Meta
    User(id: ID!): User
    Notifications(limit: Int): [Notification]
    NotificationsMeta: Meta
}

type Mutation {
    createTweet (
        body: String
    ): Tweet
    deleteTweet(id: ID!): Tweet
    markTweetRead(id: ID!): Boolean
}
```

## The Future of REST APIs

Despite the rise of alternatives like GraphQL, REST APIs remain the de facto standard for building web applications and services. Their simplicity, flexibility, and widespread adoption have solidified their position in the industry. As the tech landscape continues to evolve, REST APIs are evolving too, integrating best practices and addressing shortcomings to maintain their dominance.

Another interesting observation is that you could get some of the benefits of the other channels, with JSON REST APIs as well. 

1. **RPC: Performance and Latency**: Use a very efficient JSON marshalling library with gzip or brotli compression. And use HTTP 2. GRPC is basically binary transferred over HTTP 2 in most cases. So using a very efficient JSON marshalling library can get you pretty close. You could also use a binary serialization library instead of json for extra benefits. But a faster JSON library can be all you need. Your programming language of choice probably has a library which is probably not the de-factor library, but many times faster.
2. **RPC: Feeling of calling Remote Functions**: Use OpenAPI specification (Swagger) to generate HTTP clients for your API, and the developer experience would be similar to if you used protocol buffers to generate a client library for RPC calls. 
3. **RPC: Bidirectional Streaming**: You can replicate this via the websocket protocol, which doesn't count as REST anymore, but is still part of the default browser stack. Otherwise polling is still an option, where you hit the server at repeated intervals.
4. **GraphQL: Dynamically request fields**: You can specify exactly what fields should be returned by your graphql server, But it's fairly easy to do the same in a REST endpoint, especially via accepting a query parameter where you accept a comma separated list of fields which should be returned to the client. So this feature is not unique ot GraphQL and has been done by many endpoints in the wild for years. 
5. **GraphQL: Strongly Typed:** GraphQL endpoints are schema first and strongly typed. But this can be remedied by designing your REST apis schema first. So the schema then represents the type of the APIs, and hence sort of strongly typed. 


## Conclusion

In conclusion, REST APIs are undoubtedly the future of web development. Their simplicity, versatility, scalability, and standardization set them apart from other alternatives like RPC and GraphQL. While other approaches may have their use cases and merits, REST APIs' widespread adoption and continuous improvements make them the go-to choice for developers and companies alike.

If you're building APIs, then you might appreciate the tools which [APIToolkit](https://apitoolkit.io/) offers, to help you with different tasks when working on your APIs. Namely, testing, [monitoring](https://apitoolkit.io/blog/api-documentation-and-observability-the-truth-you-must-know/) and debugging APIs. Also Documentation. Check it out. 

**Keep Reading**

[How to Generate utomated API Documentation](https://apitoolkit.io/blog/how-to-generate-automated-api-documentation/)
[Ultimate Guide to API Testing Automation](https://apitoolkit.io/blog/api-testing-automation)

[How to Generate Automated API Documentation](https://apitoolkit.io/blog/how-to-generate-automated-api-documentation/)

[API Observability and Monitoring: What's the Difference](https://apitoolkit.io/blog/api-observability-and-api-monitoring/)
