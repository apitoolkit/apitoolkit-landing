---
title: Adonis Js
date: 2023-12-11
publishdate: 2023-12-11
weight: 1
menu:
  main:
    weight: 1
---

The APIToolkit integration guide for AdonisJS provides a streamlined process to capture incoming traffic data. It collects request information and efficiently forwards it to the APIToolkit servers.


## APIToolkit Adonisjs integration.

The Adonisjs SDK integration guide for APIToolkit. It monitors incoming traffic, gathers the requests, and sends the request to the API toolkit servers.

### Installation

Run the following command to install the package from your projects root:

```sh
npm install apitoolkit-adonis

```

### Configure the adonis package using ace

After installing the `apitoolkit-adonis` SDK, run the following command to configure it in your adonis project

```bash
node ace configure apitoolkit-adonis
```

### Register the middleware

Then add `@ioc:APIToolkit` to your global middlewares list in the `start/kernel.ts` file

```js

Server.middleware.register([
    () => import('@ioc:Adonis/Core/BodyParser'),
    () => import("@ioc:APIToolkit")
])

```

### Configuration

To configure the sdk first create an `apitoolkit.ts` file in the `/conf` directory
and export a `apitoolkitConfig` object with the following properties

- **apiKey**: `required` This API key can be generated from your [APIToolkit acount](https://app.apitoolkit.io)
- **redactHeaders**: `optional` This is an array of request and response headers that should be omited by APIToolkit
- **redactRequestBody**: `optional` An array of request body keypaths to be redacted (i.e should not leave your servers)
- **redactResponseBody**: `optional` An array of reponse body keypaths to be redacted
- **serviceVersion**: `optional` A string service version to help you monitor different versions of your deployments
- **tags**: `optional` An array of tags to be associated with a request
- **debug**: `optional` A boolean to enable debug mode (ie print debug information)

To configure, the default export of `/conf/apitoolkit` should contain all necessary properties eg:

```js
export const apitoolkitConfig = {
    apiKey: "<YOUR_API_KEY>",
}
```
After configuring the sdk, all incoming request will now be send to APIToolkit.


## Redacting Senstive Fields and Headers

While it's possible to mark a field as redacted from the apitoolkit dashboard, this client also supports redacting at the client side. Client side redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

To mark fields that should be redacted, simply add them to the `conf/apitoolkit.(js,ts)` default export object. Eg:

```js
export const apitoolkitConfig = {
    apiKey: "<YOUR_API_KEY>",
    redactHeaders: ["Content-Type", "Authorization", "Cookies"], // Specified headers will be redacted
    redactRequestBody: ["$.credit-card.cvv", "$.credit-card.name"], // Specified request bodies fields will be redacted
    redactResponseBody: ["$.message.error"], // Specified response body fields will be redacted
}
```

It is important to note that while the `redactHeaders` config field accepts a list of headers(case insensitive), the `redactRequestBody` and `redactResponseBody` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in descibing which fields within your responses are sensitive. Also note that these list of items to be redacted will be aplied to all endpoint requests and responses on your server. To learn more about jsonpath to help form your queries, please take a look at this cheatsheet: https://lzone.de/cheat-sheet/JSONPath


