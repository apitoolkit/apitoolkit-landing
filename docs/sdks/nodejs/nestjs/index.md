---
title: Nest Js
date: 2023-07-06
publishdate: 2023-07-06
toc: true
imageurl: /assets/img/framework-logos/nestjs-logo.png

weight: 1
menu:
  main:
    weight: 1
---

# Nest JS integration guide

Nest.js is a powerful framework for building scalable and efficient server-side applications with TypeScript. It is known for its modular architecture, dependency injection, and support for various HTTP platforms. Nest.js allows you to choose between two popular HTTP platforms: Express and Fastify. It provides seamless integration with both platforms, allowing developers to take advantage of the features offered by each.

APIToolkit provides SDKs for both Express and Fastify, enabling developers to easily integrate their APIs into Nest.js applications. These SDKs offer a simplified and efficient way to send data to APIToolkit's servers.

In the following sections, we will walk you through the process of integrating APIToolkit's Express SDK and Fastify SDK into your Nest.js application, starting with Express and then proceeding with Fastify.

## Integrating APIToolkit into Nest.js (Express Platform or Default)

### Installation

Run the following command to install the package from your projects root:

```sh
npm install apitoolkit-express

```

### Project setup

Intialize apitoolkit into your project is as simple as :

```js
const apitoolkitClient = await APIToolkit.NewClient({ apikey: '&lt;API_KEY&gt;' });
```

where &lt;API_KEY&gt; is the apikey which can be generated from your [apitoolkit.io](apitoolkit.io) account.

### Configuration Options

The NewClient method accepts an optional configuration object with the following properties:

- apiKey (required): Your APIToolkit API key.
- redactHeaders (optional): An array of header names to redact from the captured request headers (case insensitive).
- redactRequestBody (optional): An array of JSONPath expressions specifying fields to redact from the request body.
- redactResponseBody (optional): An array of JSONPath expressions specifying fields to redact from the response body.

Next, you can use the apitoolkit middleware into your nestjs app.

```js
app.use(apitoolkitClient.expressMiddleware);
```

where app is your nestjs application instance.

Your final could might look something like this:

```js
import { NestFactory } from '@nestjs/core';
import { APIToolkit } from 'apitoolkit-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const apiToolkitClient = APIToolkit.NewClient({ apikey: '&lt;API_KEY&gt;' });
  const app = await NestFactory.create(AppModule);
  app.use(apiToolkitClient.expressMiddleware);
  await app.listen(3000);
}

bootstrap();
```

## Integrating APIToolkit into Nest.js (Fastify)

### Installation

Run the following command to install the fastify SDK from your project's root:

```sh
npm install apitoolkit-fastify
```

### Project setup

Initialize APIToolkit into your project by following these steps:

Import the required dependencies:

```javascript
import  APIToolkit  from 'apitoolkit-fastify';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
```

Create and initialize an APIToolkit instance with your API key and fastify instance:

```javascript
async function bootstrap() {
  const fastifyInstance = fastify();
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(fastifyInstance)
  );
  const apiToolkitClient = APIToolkit.NewClient({
    apiKey: '<YOUR API KEY>',
    fastify: fastifyInstance,
  });
  apiToolkitClient.init();
}
```

### Configuration Options

The NewClient method accepts an optional configuration object with the following properties:

- apiKey (required): Your APIToolkit API key.
- fastify (required): An instance of Fastify.
- redactHeaders (optional): An array of header names to redact from the captured request headers (case insensitive).
- redactRequestBody (optional): An array of JSONPath expressions specifying fields to redact from the request body.
- redactResponseBody (optional): An array of JSONPath expressions specifying fields to redact from the response body.

Your final code should look something like this:

```js
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import fastify from 'fastify';
import APIToolkit from 'apitoolkit-fastify';

async function bootstrap() {
  const fastifyInstance = fastify();
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(fastifyInstance)
  );
  const apiToolkitClient = await APIToolkit.NewClient({
    apiKey: '<YOUR API KEY>',
    fastify: fastifyInstance,
  });
  apiToolkitClient.init();
  await app.listen(3000);
}
bootstrap();
```

In this Fastify integration, the APIToolkit Fastify SDK allows you to seamlessly integrate your APIToolkit into your fastify based NestJs app. Don't forget to replace `&lt;API_KEY&gt;` with your actual API key obtained from your APIToolkit dashboard [learn how](https://apitoolkit.io/docs/get-started/dashboard/generating-api-keys/).

Now you have successfully integrated APIToolkit's Fastify SDK into your Nest.js application.

## Redacting Senstive Fields

While it's possible to mark a field as redacted from the apitoolkit dashboard, both express and fastify SDKs provide a way to redact sensitive fields from the request and response data sent to APIToolkit servers on the client side. Client side redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

#### Redacting fields using Express SDK

You can redact `headers`, `requestBody` and `responseBody` fields using the Express SDK by providing a list of headers and fields to redact when initializing the SDK:

```js
import { NestFactory } from '@nestjs/core';
import { APIToolkit } from 'apitoolkit-express';

async function bootstrap() {
  const redactHeaders = ['Authorization', 'X-Secret-Token'];
  const redactRequestBody = ['$.password', '$.user.creditcard.cvv'];
  const redactResponseBody = ['$.apikeys[*]', '$.message.type'];
  const apiToolkitClient = APIToolkit.NewClient({
    apikey: '&lt;API_KEY&gt;',
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

#### Redacting fields using Fastify SDK

You can redact `headers`, `requestBody` and `responseBody` fields using the fastify SDK by providing a list of headers and fields to redact when initializing the SDK:

```js
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import APIToolkit from 'apitoolkit-fastify';
import Fastify from 'fastify';
import { AppModule } from './app.module';

const fastify = Fastify();
async function bootstrap() {
  const redactHeaders = ['Authorization', 'X-Secret-Token'];
  const redactRequestBody = ['$.password', '$.user.creditcard.cvv'];
  const redactResponseBody = ['$.apikeys[*]', '$.message.type'];

  const apittoolkitClient = APIToolkit.NewClient({
    apiKey: '&lt;API_KEY&gt;',
    fastify,
    redactHeaders,
    redactRequestBody,
    redactResponseBody,
  });
  apitoolkitClient.init();
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(fastifyInstance)
  );
  await app.listen(3000);
}
bootstrap();
```

It is important to note that while the RedactHeaders config field accepts a list of headers (case insensitive), the RedactRequestBody and RedactResponseBody expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you to have great flexibility in describing which fields within your responses are sensitive. Also, note that this list of items to be redacted will be applied to all endpoint requests and responses on your server. To learn more about JSONPath to help form your queries, please take a look at this cheatsheet: [JSONPath Cheatsheet](https://lzone.de/cheat-sheet/JSONPath)

Hopefully, this documentation has everything you need to get APIToolkit app and runing in both your fastify and express based Nest.js application.

### Using apitoolkit to observe an axios based outgoing request

[Learn how to observe requests with express adapter ](/docs/get-started/quickstarts/nodejs/expressjs#using-apitoolkit-to-observe-an-axios-based-outgoing-request).
[Learn hot to observe requests with fastify adapter](/docs/get-started/quickstarts/nodejs/fastify#using-apitoolkit-to-observe-an-axios-based-outgoing-request).

### Reporting errors to APIToolkit

[Reporting errors using express adapter](/docs/get-started/quickstarts/nodejs/expressjs#reporting-errors-to-apitoolkit).
[Reporting errors using fastify adapter](/docs/get-started/quickstarts/nodejs/fastify#reporting-errors-to-apitoolkit).
