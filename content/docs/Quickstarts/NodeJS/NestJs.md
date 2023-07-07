---
title: Nest Js
date: 2023-07-06
publishdate: 2023-07-06
weight: 1
menu:
  main:
    weight: 1
---

Nest.js is a powerful framework for building scalable and efficient server-side applications with TypeScript. It is known for its modular architecture, dependency injection, and support for various HTTP platforms. Nest.js allows you to choose between two popular HTTP platforms: Express and Fastify. It provides seamless integration with both platforms, allowing developers to take advantage of the features offered by each.

APIToolkit provides SDKs for both Express and Fastify, enabling developers to easily integrate their APIs into Nest.js applications. These SDKs offer a simplified and efficient way to send data to APIToolkit's servers.

In the following sections, we will walk you through the process of integrating APIToolkit's Express SDK and Fastify SDK into your Nest.js application, starting with Express and then proceeding with Fastify.

# Integrating APIToolkit into Nest.js (Express Platform or Default)

### Installation

Run the following command to install the package from your projects root:

```sh
npm install apitoolkit-express

```

### Project setup

Intialize apitoolkit into your project is as simple as :

```js
const apitoolkitClient = await APIToolkit.NewClient({ apikey: '<API-KEY>' });
```

where <API-KEY> is the apikey which can be generated from your [apitoolkit.io](apitoolkit.io) account.

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
  const apiToolkitClient = await APIToolkit.NewClient({ apikey: '<API-KEY>' });
  const app = await NestFactory.create(AppModule);
  app.use(apiToolkitClient.expressMiddleware);
  await app.listen(3000);
}

bootstrap();
```

# Integrating APIToolkit into Nest.js (Fastify)

### Installation

Run the following command to install the fastify SDK from your project's root:

```sh
npm install apitoolkit-fastify
```

### Project setup

Initialize APIToolkit into your project by following these steps:

Import the required dependencies:

```javascript
import  APIToolkit  from apitoolkit-fastify
import { NestFactory } from '@nestjs/core'
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
  const client = await APIToolkit.NewClient({
    apiKey: '<YOUR API KEY>',
    fastify: fastifyInstance,
  });
  client.init();
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
import APIToolkit from './apitoolkit';

async function bootstrap() {
  const fastifyInstance = fastify();
  const app = await NestFactory.create(
    AppModule,
    new FastifyAdapter(fastifyInstance)
  );
  const client = await APIToolkit.NewClient({
    apiKey: '<YOUR API KEY>',
    fastify: fastifyInstance,
  });
  client.init();
  await app.listen(3000);
}
bootstrap();
```

In this Fastify integration, the APIToolkit Fastify SDK allows you to seamlessly integrate your APIToolkit into your fastify based NestJs app. Don't forget to replace `<API-KEY>` with your actual API key obtained from your APIToolkit dashboard [learn how](https://apitoolkit.io/docs/dashboard/generating-api-keys/) account.

Now you have successfully integrated APIToolkit's Fastify SDK into your Nest.js application.

## Redacting Senstive Fields

While it's possible to mark a field as redacted from the apitoolkit dashboard, both express and fastify SDKs provide a way to redact sensitive fields from the request and response data sent to APIToolkit servers on the client side. Client side redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

#### Redacting fields using Express SDK

You can redact `headers`, `requestBody` and `responseBody` fields using the Express SDK by providing a list of headers and fields to redact when initializing the SDK:

```js
import { APIToolkit } from 'apitoolkit-express';

async function bootstrap() {
  const redactHeaders = ['Authorization', 'X-Secret-Token'];
  const redactRequestBody = ['$.password', '$.user.creditcard.cvv'];
  const redactResponseBody = ['$.apikeys[*]', '$.message.type'];
  const client = APIToolkit.NewClient({
    apikey: '<API-KEY>',
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
import APIToolkit from 'apitoolkit-fastify';
import Fastify from 'fastify';
const fastify = Fastify();
async function bootstrap() {
  const redactHeaders = ['Authorization', 'X-Secret-Token'];
  const redactRequestBody = ['$.password', '$.user.creditcard.cvv'];
  const redactResponseBody = ['$.apikeys[*]', '$.message.type'];

  const apittoolkitClient = APIToolkit.NewClient({
    apiKey: '<YOUR API KEY>',
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

Hopefully, this documentation has everything you need to get APIToolkit app and runing in both your fastify and express based Nest.js application.
