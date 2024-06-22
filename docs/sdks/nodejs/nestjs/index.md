---
title: NestJs
ogTitle: NestJs SDK Guide
date: 2022-03-23
updatedDate: 2024-06-17
menuWeight: 4
---

# NestJs SDK Guide

To integrate your NestJs application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **NestJs SDK**.

```=html
<hr>
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <p class="mt-6">
NestJs is a progressive NodeJs framework for building efficient, reliable, and scalable server-side applications. **With NestJs, you can choose between two popular HTTP server frameworks: Express (the default) and Fastify**. With this, developers have the freedom to use the numerous third-party modules that are available for any of the frameworks selected.

APItoolkit already provides SDKs for both Express and Fastify, hence you can integrate any into your NestJs application. In the following sections of this guide, we will walk you through the process of integrating APIToolkit's [ExpressJS SDK](/docs/sdks/nodejs/expressjs/){target="\_blank"} or [FastifyJS SDK](/docs/sdks/nodejs/fastifyjs/){target="\_blank"} into your NestJs application.</p>

</div>

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the SDK:

<section class="tab-group" data-tab-group="group1">
  <button class="tab-button" data-tab="tab1">Express (Default)</button>
  <button class="tab-button" data-tab="tab2">Fastify</button>
  <div id="tab1" class="tab-content">

```sh
npm install apitoolkit-express

# Or

yarn add apitoolkit-express
```

  </div>
  <div id="tab2" class="tab-content">

```sh
npm install apitoolkit-fastify

# Or

yarn add apitoolkit-fastify
```

  </div>
</section>

## Configuration

Next, initialize APItoolkit in your application's entry point (e.g., `index.js`), like so:

<section class="tab-group" data-tab-group="group2">
  <button class="tab-button" data-tab="tab1">Express (Default)</button>
  <button class="tab-button" data-tab="tab2">Fastify</button>
  <div id="tab1" class="tab-content">

```js
import { NestFactory } from "@nestjs/core";
import { APIToolkit } from "apitoolkit-express";
import { AppModule } from "./app.module";

async function bootstrap() {
  const apiToolkitClient = APIToolkit.NewClient({
    apiKey: "{ENTER_YOUR_API_KEY_HERE}",
    debug: false,
    tags: ["environment: production", "region: us-east-1"],
    serviceVersion: "v2.0",
  });

  const app = await NestFactory.create(AppModule);
  // Initialize the APItoolkit client
  app.use(apiToolkitClient.expressMiddleware);
  // END Initialize the APItoolkit client

  await app.listen(3000);
}

bootstrap();
```

  </div>
  <div id="tab2" class="tab-content">

```js
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import fastify from "fastify";
import APIToolkit from "apitoolkit-fastify";

async function bootstrap() {
  const fastifyInstance = fastify();
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(fastifyInstance)
  );

  // Initialize the APItoolkit client
  const apiToolkitClient = await APIToolkit.NewClient({
    fastify: fastifyInstance,
    apiKey: "{ENTER_YOUR_API_KEY_HERE}",
    debug: false,
    tags: ["environment: production", "region: us-east-1"],
    serviceVersion: "v2.0",
  });
  apiToolkitClient.init();
  // END Initialize the APItoolkit client

  await app.listen(3000);
}

bootstrap();
```

  </div>
</section>

In the configuration above, **only the `apiKey` option is required**, but you can add the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `debug` | Set to `true` to enable debug mode. |
| `tags` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `serviceVersion` | A defined string version of your application (used for further debugging on the dashboard). |
| `redactHeaders` | A list of HTTP header keys to redact. |
| `redactResponseBody` | A list of JSONPaths from the request body to redact. |
| `redactRequestBody` | A list of JSONPaths from the response body to redact. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional arguments to the `apitoolkitClient` configuration object with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

1. `redactHeaders`: A list of HTTP header keys.
2. `redactRequestBody`: A list of JSONPaths from the request body.
3. `redactResponseBody`: A list of JSONPaths from the response body.

<hr />
JSONPath is a query language used to select and extract data from JSON files. For example, given the following sample user data JSON object:

```json
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
      }
    ],
    "credit_card": {
      "number": "4111111111111111",
      "expiration": "12/28",
      "cvv": "123"
    }
  }
}
```

Examples of valid JSONPath expressions would be:

{class="docs-table"}
:::
| JSONPath | Description |
| -------- | ----------- |
| `$.user.addresses[*].zip` | In this case, APItoolkit will replace the `zip` field in all the objects of the `addresses` list inside the `user` object with the string `[CLIENT_REDACTED]`. |
| `$.user.credit_card` | In this case, APItoolkit will replace the entire `credit_card` object inside the `user` object with the string `[CLIENT_REDACTED]`. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"} or use this [JSONPath Evaluator](https://jsonpath.com?utm_source=apitoolkit){target="_blank"} to validate your JSONPath expressions. </p>
  <p>**You can also use our [JSON Redaction Tool](/tools/json-redacter/) <i class="fa-regular fa-screwdriver-wrench"></i> to preview what the final data sent from your API to APItoolkit will look like, after redacting any given JSON object**.</p>
</div>
<hr />

Here's an example of what the configuration would look like with redacted fields:

<section class="tab-group" data-tab-group="group3">
  <button class="tab-button" data-tab="tab1">Express (Default)</button>
  <button class="tab-button" data-tab="tab2">Fastify</button>
  <div id="tab1" class="tab-content">

```js
import { NestFactory } from "@nestjs/core";
import { APIToolkit } from "apitoolkit-express";

async function bootstrap() {
  const redactHeaders = ["Content-Type", "Authorization", "HOST"];
  const redactRequestBody = ["$.user.email", "$.user.addresses"];
  const redactResponseBody = ["$.users[*].email", "$.users[*].credit_card"];

  const apiToolkitClient = APIToolkit.NewClient({
    apiKey: "{ENTER_YOUR_API_KEY_HERE}",
    redactHeaders,
    redactRequestBody,
    redactResponseBody,
  });
  
  const app = await NestFactory.create(AppModule);
  app.use(apiToolkitClient.expressMiddleware);

  await app.listen(3000);
}

bootstrap();
```

  </div>
  <div id="tab2" class="tab-content">

```js
import { NestFactory } from "@nestjs/core";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import APIToolkit from "apitoolkit-fastify";
import Fastify from "fastify";
import { AppModule } from "./app.module";

async function bootstrap() {
  const fastify = fastify();
  const app = await NestFactory.create(AppModule, new FastifyAdapter(fastify));

  const apiKey = "{ENTER_YOUR_API_KEY_HERE}";
  const redactHeaders = ["content-type", "Authorization", "HOST"];
  const redactRequestBody = ["$.user.email", "$.user.addresses"];
  const redactResponseBody = ["$.users[*].email", "$.users[*].credit_card"];

  const apitoolkitClient = APIToolkit.NewClient({
    fastify,
    apiKey,
    redactHeaders,
    redactRequestBody,
    redactResponseBody,
  });
  apitoolkitClient.init();

  await app.listen(3000);
}

bootstrap();
```

  </div>
</section>

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `redactHeaders` config field expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `redactRequestBody` and `redactResponseBody` config fields expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit automatically detects different unhandled errors, API issues, and anomalies but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

Since the configuration process is the same with our ExpressJS and FastifyJS SDK, you can read their respective documentation by clicking any of the buttons below:

<section class="tab-group" data-tab-group="group4">
  <button class="tab-button" data-tab="tab1">Express (Default)</button>
  <button class="tab-button" data-tab="tab2">Fastify</button>
  <div id="tab1" class="tab-content">
    <a href="/docs/sdks/nodejs/expressjs/#error-reporting" target="_blank" rel="noopener noreferrer" class="w-full btn glass">
      ExpressJS Error Reporting Guide <i class="fa-regular fa-arrow-right"></i>
    </a>
  </div>
  <div id="tab2" class="tab-content">
    <a href="/docs/sdks/nodejs/fastifyjs/#error-reporting" target="_blank" rel="noopener noreferrer" class="w-full btn glass">
      FastifyJS Error Reporting Guide <i class="fa-regular fa-arrow-right"></i>
    </a>
  </div>
</section>

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

Since the configuration process is the same with our ExpressJS and FastifyJS SDK, you can read their respective documentation by clicking any of the buttons below:

<section class="tab-group" data-tab-group="group4">
  <button class="tab-button" data-tab="tab1">Express (Default)</button>
  <button class="tab-button" data-tab="tab2">Fastify</button>
  <div id="tab1" class="tab-content">
    <a href="/docs/sdks/nodejs/expressjs/#monitoring-outgoing-requests" target="_blank" rel="noopener noreferrer" class="w-full btn glass">
      ExpressJS Monitoring Outgoing Requests Guide <i class="fa-regular fa-arrow-right"></i>
    </a>
  </div>
  <div id="tab2" class="tab-content">
    <a href="/docs/sdks/nodejs/fastifyjs/#monitoring-outgoing-requests" target="_blank" rel="noopener noreferrer" class="w-full btn glass">
      FastifyJS Monitoring Outgoing Requests Guide <i class="fa-regular fa-arrow-right"></i>
    </a>
  </div>
</section>

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-express" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the ExpressJS SDK
</a>

<br /><br />

<a href="https://github.com/apitoolkit/apitoolkit-fastify" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the FastifyJS SDK
</a>
```
