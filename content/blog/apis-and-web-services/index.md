---
title: "Apis and Web Services"
date: 2022-05-20T07:34:16+02:00
author: irhose
description: "What are the differences between APIs and Web services? When should you use either? Find out in this deep dive into these two critical concepts"
categories:
  - APIs
---

![Oriental battle](./image1.jpg)

Developers tend to be finicky about describing things they work with. There are developer debates as old as time itself (maybe not that old, but yunno…). For instance, is HTML a programming language? I’m not getting into that, don’t bother. 

What I do want to describe are the differences between APIs and Web services. It’s a more straightforward and clearly defined topic, so I know I won’t be attacked for this article. Let’s jump right into it!

Bear in mind that a web service and an API are two very similar concepts, so it can be difficult to understand the similarities and differences.

## What’s an API?
An Application Programming Interface (API) is an intermediary that enables two applications or systems to communicate with one another. APIs work via standardized protocols and functions that determine what data can be transferred from or modified within a system, and how this process occurs.

Generally speaking, when developers reference APIs, they're likely describing web APIs (APIs that are accessible over the internet). Albeit, this isn't always the case. APIs can be expressed through local files (such as a JAR file in a Java program, .H file in C/C++ programs, etc.) to allow two local applications to communicate with each other. This doesn’t require a network as the two applications are communicating within a single device.

I should probably declare this right now. All web services are APIs, but not all APIs are web services. This is important to note especially when you’re testing APIs.

## What’s a Web Service?
A web service is a way for two machines to communicate with each other over a network.

The key difference between a web service and an API is that a web service is dependent on a network for communication between two systems. 

A web server running on a computer listens for requests from other computers. When a request from another computer is received, over a network, the Web service returns the requested resources. This resource could be JSON, XML, an HTML file, Images, Audio Files, etc.

It’s important to note the requirement of the request being made over a network.

## What Is the Key Difference Between APIs and Web Services?
From everything I've said so far, it's clear that APIs and web services have more similarities than differences. Of course, this is the case because web services are a subset of APIs.

Web services can be referred to as XML-centered data exchange systems that use the internet for A2A (application-to-application) communication and interfacing. These processes involve programs, messages, documents, and/or objects.

Unlike APIs in general, web services require a network (the internet) in order for communication to be possible. 

## What Are The Different Types of Web Services?
The different types of central web services are REST, SOAP, XML-RPC, and UDDI. 


**REST**: Rest stands for Representational State Transfer. A REST service uses HTTP and supports several HTTP methods such as GET, POST, PUT, or DELETE. It provides communication and connectivity between devices and the internet for API-based tasks. 

**SOAP**: SOAP is an acronym for Simple Object Access Protocol. It's an XML-based web service protocol that facilitates the exchange of data and documents over HTTP or SMTP (Simple Mail Transfer Protocol). It allows independent processes operating on different systems to communicate using XML.

**XML-RPC (Remote Procedure Call)**: This is the most basic XML protocol. It allows for data exchange between a wide variety of devices on a given network. It uses HTTP to quickly and easily transfer data and other information from client to server. 

**UDDI**: an abbreviation for Universal Description, Discovery, and Integration, is an XML-based standard for detailing, publishing, and discovering web services. 

It’s essentially an internet registry for businesses around the world. The goal is to streamline digital transactions and e-commerce among company systems.

### Other Types of Web Services

- Web template
- JSON-WSP
- JSON-RPC
- Web Services Conversation Language (WSCL)
- Web Services Description Language (WSDL)
- Web Services Metadata Exchange (WS-MetadataExchange)
- Web Services Flow Language (WSFL)
- XML Interface for Network Services (XINS)

A defining feature of web services is that they are language agnostic. Meaning that applications written in various languages are still able to communicate by exchanging data with one another via a web service between clients and servers. 

A client summons a web service by sending a request via XML, and the service then responds with an XML response. 

## SOAP vs REST

Of course, I couldn’t go over such a topic without touching on some age-old developer debate. SOAP and REST, which is better. Here are a few points for both sides. Bear in mind, that I don’t think there’s a clear-cut winner.

Facts about the RESTful web service:
- Easier to build
- Roy Fielding designed it; one of the leading authors of HTTP
- Offers simple CRUD-oriented (Create, Read, Update, and Delete) services

Facts about the SOAP web service
- Great for building a service with multiple, non-CRUD methods
- Easier to consume
- It has more standards

## Closing Thoughts

If things got a little confusing when reading about APIs and web services, here is a quick summary of what I covered above.

APIs are application interfaces, meaning that one application is able to interact with another application in a standardized way.

Web services are a type of API, which must be accessed through a network connection.
REST APIs are a standardized architecture for building web APIs using HTTP methods.

I hope that this article has helped you sort through the differences and general information you may need to know for an API and web service.

Lastly, [APIToolkit](https://apitoolkit.io) is one platform where you can [monitor your APIs and web services](https://apitoolkit.io/blog/why-you-need-an-api-monitoring-tool/). [Click here to find out how](https://apitoolkit.io).

