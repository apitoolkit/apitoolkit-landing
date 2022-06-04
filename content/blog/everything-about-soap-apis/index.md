---
title: "Everything You Need to Know About SOAP API"
date: 2022-06-03T00:35:25+02:00
---

![Caramel bars](./image1.jpg)

A review of the principal points to note about SOAP API

Among the many benefits of SOAP is that it helped introduce Web Service APIs to the world. Devs use SOAP quite frequently. Maybe not as often as they use REST, but SOAP is used enough to deserve an article to itself

In this guide, we will introduce SOAP, discuss how to call SOAP APIs, how to describe them, and a few other important things about it.

## What Is SOAP?

SOAP stands for Simple Object Access Protocol. It’s a web service protocol that uses XML to facilitate transferring data and documents over HTTP or SMTP (Simple Mail Transfer Protocol). 
SOAP was designed for Microsoft back in 1998. Today, it’s mostly used to expose web services and transmit data over HTTP/HTTPS.

The built-in functionality to create web-based services allows SOAP to handle communications and make responses language- and platform-independent.

### The Anatomy of a SOAP Message

SOAP messages are constructed of up to four blocks:

*Envelope*: The core and essential component of every message. It starts and concludes messages with its tags, enveloping them, hence the name. The entirety of the SOAP message comes within the envelope, including the other three blocks.

*Header*: This is an optional element that determines the specifics, and extra requirements for the message, e.g. authentication. Although it’s optional, “soap:Header” makes possible SOAP’s extensibility via SOAP Modules. These modules can either be required or optional.

*Body*: The body includes the request or response. Namespaces can be used to describe what data to expect within the body, but are not required. In practice, the name of the procedure, parameters, and data all come through the SOAP Body.

*Fault*: This is an optional element that shows all data about any errors that could emerge throughout the API request and response. There are various possible causes of an error; inaccurate SOAP formatting, a processing error on the server, and mismatched data type.

### How to Call a SOAP API

In order to retrieve a user profile from a fictitious SOAP API, you could make the following request using the Zeep library in python:

```python

from zeep import Client

client = Client('http://www.example.com/exampleapi')
result = client.service.GetUser(007) # request user with ID 007

name = result['Username']

```

In this example, we initiate a SOAP client based upon the SOAP endpoint. Then we call the service, invoking the getuser option with a user ID parameter.

WS standard protocols & SOAP Extensibility
SOAP provides essential structural elements of the message. Albeit, it doesn’t direct what goes into headers and bodies. So, anyone can customize the contents as needed.

Due to the fact that [web applications](https://apitoolkit.io/blog/web-service-apis-structures-and-protocols/) typically solve common sets of problems after the SOAP release, the principal protocol has been augmented by a lot of standard protocols that specify how things work. All these protocols are usually marked WS-(protocol name), e.g. WS-Security, WS-ReliableMessaging. They were contributed by different organizations, including Microsoft, IBM, OASIS, and others.

Standard protocols cover multiple areas and facets of SOAP use:

- Security
- Messaging
- Transactions
- Metadata, etc.

The interesting thing about these protocols is that you can choose which one to use. This is what we refer to as SOAP extensibility. For example, if you need your financial transactions to be secure, you can apply [WS-Atomic Transaction](http://docs.oasis-open.org/ws-tx/wstx-wsat-1.2-spec-os/wstx-wsat-1.2-spec-os.html) that are ACID-compliant.

*Sidebar*: ACID stands for Atomicity, Consistency, Isolation, and Durability. It’s an enterprise-grade transaction quality and one of the reasons why SOAP is still used when exchanging sensitive information in enterprise architectures.

### Some Useful Resources for Beginners with SOAP

As a beginner SOAP engineer, here are the main links you should check:

- [SOAP Documentation](https://www.w3.org/TR/soap12/): the major source of solid information for anyone starting out with SOAP

- [SOAP versions](https://www.w3.org/TR/soap/): you’ll also need to check these versions of SOAP

- [WSDL](https://www.w3.org/TR/wsdl20/): how to use Web Services Description Language and create WSDL documents

- [WS-Addressing](https://www.w3.org/TR/ws-addr-core/): this shows how to add routing information to SOAP headers

- [WS-ReliableMessaging](http://specs.xmlsoap.org/ws/2005/02/rm/ws-reliablemessaging.pdf): this extension makes sure that messages arrive at their destinations. It also helps with making chains of messages

- [WS-Coordination](https://pdfs.semanticscholar.org/dac1/5df5c842195452c25efc7e73ecd3874e32cc.pdf?_ga=2.212038484.1719500171.1582820369-786203862.1582820369): for coordinating actions of distributed applications

- [WS-Security](https://docs.microsoft.com/en-us/previous-versions/ms951257(v=msdn.10)): this describes how to enable message-level protection

- [WS-Atomic Transaction](http://docs.oasis-open.org/ws-tx/wstx-wsat-1.2-spec.html): how to make messages ACID-compliant

## Closing Thoughts

There is still a need for SOAP as a standard for web services, and it is used in many internal systems all over the world. Organizations are moving toward microservices architecture using [REST APIs](http://apitoolkit.io/blog/everything-about-rest-apis) for new projects. Modern techniques do away with the completely standards-based approach of SOAP, but many prefer this more flexible and nimble approach.

Check out our list of [best API monitoring tools](https://apitoolkit.io/blog/best-api-monitoring-and-observability-tools/) to help ensure the integrity of your APIs.




