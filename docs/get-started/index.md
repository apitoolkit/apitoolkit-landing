---
title: Get Started
date: 2022-03-23
fa-logo: circle-play 
publishdate: 2022-03-24
weight: 1
---

# Get Started

**To get you started, you might find some of these links useful**

- No account yet? You can sign up for one at [apitoolkit.io](https://apitoolkit.io/)

- Stuck? Feel free to [Contact Support.](hello@apitoolkit.io)

- Installing the APItoolkit yourself? Check out our Quickstart page.


This guide will walk you through the initial setup process for APItoolkit.  

APItoolkit has been designed with simplicity in mind, allowing you to get up and running quickly while providing ample room to scale as your needs grow.

**Get started with APItoolkit in three steps**

- Sign up for an account

- Install your prefer SDK
  
- Configure SDK

## SDKs in APItoolkit

APItoolkit leverages platform-specific Software Development Kits (SDKs) to capture data from your application. These SDKs provide a critical bridge between your application and APItoolkit, enabling a deeper understanding of your application's behavior and facilitating comprehensive API monitoring.

Each SDK is designed to seamlessly integrate with its respective development environment. If your development environment utilizes a non-standard tech stack or has highly customized configurations, we recommend contacting our customer support.

## Integration

To integrate APItoolkit into your project it is assumed that you already have an account. 

Go ahead to create a project and get your api key. 

## Configure SDK

**SDK Installation**

To get started select your preferred SDk per your chosen tech stack. Check out our supported tech stack.

Install the required SDK using a package manager like pip or npm.

```js
npm install apitoolkit-express
```

**SDK Initialization**

This is how to Initialize apitoolkit into your project

```js
import { APIToolkit } from 'apitoolkit-express';
const apitoolkitClient = APIToolkit.NewClient({ apiKey: '<API-KEY>' });
```
Replace <API_KEY> with your unique API key obtained from your dashboard.

