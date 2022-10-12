---
title: "Resource Modeling in Rest API Design"
date: 2022-10-05T08:05:56+02:00
author: jessica
categories: 
  - APIs
---

![Resource-modeling](./api-modeling.jpg)


In Rest API any information that can be named can be a resource. Resources in Rest can either be a sigleton or a collection. Resource modeling is a concept for resource management that lets you see resource data visually. With this, you can effectively plan how your resources are distributed over the course of several projects. Additionally, you can build models to evaluate different situations, which is a crucial tool for scenario prediction.

## Guidlines to Designing Your Resource-Model
While designing a resource model for Rest APIs using a top-down, upfront approach yields the best outcomes, this approcah makes your API easy to read and less ambigious and brings in a more consistency. The Design Guide advises the following actions be taken when creating resource-oriented APIs:

1. **Identify the resources that an API offers**: The first process is to determine the type of resources that API will provide and what it entails. This forms the bedrock of every decision you will make in the long run. By defining your RESTful resources and their representations top-down, you may accomplish the previously mentioned goal of developing a resource model that is independent of the application domain model. This strategy, also known as contract-first API design, involves creating an API from scratch rather than reversing engineering it from the application's existing object model. It offers the chance to develop a collection of assets and representations that, in terms of complexity, consistency, and performance, are best for the API service and its API clients. Additionally, it enables you to model resource meta-data that isn't included in the domain model, including hyperlinks that describe resource linkages.
   
2. **Decide on the resource name**: A resource name system should be chosen based on the categories and relationships to avoid confusions and complexities as it has to do with other resources. When designing a model, it is crucial to choose the appropriate resources name and model them with the appropriate level of detail to ensure that the APIs perform as intended, act properly, and are maintained.
   
3. **Establish the resource schemas**: The capabilities of the connector and the resource are specified by the resource schema. Schema for resources can change over time. In reality, it is never actually written by the system administrator but rather is frequently generated on demand by the connection. It is virtually completely unrelated to the midPoint setup.
   
4. **Add a bare minimum of techniques to resources**: There are few techniques that are currently in vogue to favor evolutionary design over planned design. This is useful for creating many different types of software, but it is inappropriate for creating any form of public API. To make it easier for customers to construct API clients and to save ongoing maintenance costs, public web APIs must offer a reliable and consistent user interface to a service. This contradicts the principles of evolutionary design. Before publishing any of the APIs, design as much of your resource model as you can. This will increase your APIs' consistency and help them last longer, reducing the need to update your API / resource version or deprecate APIs. 


