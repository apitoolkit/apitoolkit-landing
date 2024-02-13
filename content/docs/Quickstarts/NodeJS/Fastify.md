---
title: Fastify Js
date: 2023-07-06
publishdate: 2023-07-06
weight: 1
toc: true
imageurl: /assets/img/framework-logos/fastify-logo.png

menu:
  main:
    weight: 1
---

The APIToolkit Fastify SDK is a library that enables seamless integration of Fastify applications with APIToolkit's monitorin. By utilizing this SDK, you can effortlessly collect and publish relevant data about incoming requests and outgoing responses to APIToolkit's servers.

## Installation

To install the APIToolkit Fastify SDK, you need to add it as a dependency in your project:

```bash
npm install apitoolkit-fastify
```

## Usage

### Importing the SDK

To use the Fastify SDK, you need to import it into your application:

```javascript
import APIToolkit from 'apitoolkit-fastify';
```

### Adding the SDK to a fastify project

To begin collecting and publishing request/response data to APIToolkit's servers, it is essential to initialize the SDK. This entails creating an instance of the `APIToolkit` class and configuring it with necessary parameters. These parameters include your app's Fastify instance and an APIToolkit API key. You can learn how to generate API keys by visiting this [link](https://apitoolkit.io/docs/dashboard/generating-api-keys/). Finally, invoke the init method of the instance to complete the initialization process.

```javascript
import APIToolkit from 'apitoolkit-fastify';
import Fastify from 'fastify';
const fastify = Fastify();

// Create and initialize an instance of the APIToolkit
const apittoolkitClient = APIToolkit.NewClient({
  apiKey: 'YOUR_API_KEY',
  fastify,
});
apitoolkitClient.init();

//Rest of your app
fastify.get('/hello', function (request, reply) {
  reply.send({ hello: 'world' });
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
```

The NewClient method initializes the SDK with the provided configuration. It requires the following parameters (others are optional):

- apiKey: Your APIToolkit API key.
- fastify: An instance of Fastify.

### Configuration Options

The NewClient method accepts an optional configuration object with the following properties:

- apiKey (required): Your APIToolkit API key.
- fastify (required): An instance of Fastify.
- redactHeaders (optional): An array of header names to redact from the captured request headers (case insensitive).
- redactRequestBody (optional): An array of JSONPath expressions specifying fields to redact from the request body.
- redactResponseBody (optional): An array of JSONPath expressions specifying fields to redact from the response body.

### Redacting Sensitive Information

If you have fields which are too sensitive and should not be sent to APIToolkit servers, you can mark those fields to be redacted either via the APIToolkit dashboard, or via this client SDK. Redacting fields via the SDK means that those fields never leave your servers in the first place, compared to redacting it via the APIToolkit dashboard, which would redact the fields on the edge before further processing. But then the data still needs to be transported from your servers before they are redacted.

To mark a field for redacting via this SDK, you simply need to provide additional arguments to the APIToolkitService with the paths to the fields that should be redacted. There are 3 potential arguments which you can provide to configure what gets redacted

#### Redacting Headers

To redact specific headers, provide an array of case insensitive list of HTTP header keys to be redacted before data is sent out. eg COOKIE(redacted by default), CONTENT-TYPE, etc to the `redactHeaders` configuration option:

```javascript
import APIToolkit from 'apitoolkit-fastify';
import Fastify from 'fastify';
const fastify = Fastify();

const redactHeaders = ['Authorization', 'X-Secret-Token'];
const apittoolkitClient = APIToolkit.NewClient({
  apiKey: '<YOUR API KEY>',
  fastify,
  redactHeaders,
});

apitoolkitClient.init();

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
```

Any headers specified in the `redactHeaders` array will be replaced with `"[CLIENT_REDACTED]"` in the captured data and will never leave your servers.

#### Redacting Request and Response Fields

To redact specific fields in the request and response bodies, provide an array of JSONPath expressions to the `redactRequestBody` and `redactResponseBody` configuration options.
Examples of valid jsonpaths would be:
`$.store.book`: Will replace the books field inside the store object with the string [CLIENT_REDACTED]
`$.store.books[*].author`: Will redact the author field in all the objects in the books list, inside the store object.
To learn more about jsonpath to help form your queries [read this](https://support.smartbear.com/alertsite/docs/monitors/api/endpoint/jsonpath.html).

```javascript
import APIToolkit from 'apitoolkit-fastify';
import Fastify from 'fastify';
const fastify = Fastify();

const redactRequestBody = ['$.password', '$.user.creditcard.cvv'];
const redactResponseBody = ['$.apikeys[*]', '$.message.type'];

const apittoolkitClient = APIToolkit.NewClient({
  apiKey: '<YOUR API KEY>',
  fastify,
  redactRequestBody,
  redactResponseBody,
});

apitoolkitClient.init();

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
```

## Using apitoolkit to observe an axios based outgoing request

Simply wrap your axios instance with the APIToolkit observeAxios function.

```typescript
import APIToolkit, { observeAxios } from "apitoolkit-fastify";
import axios from "axios"
import Fastify from 'fastify';
const fastify = Fastify();


const apittoolkitClient = APIToolkit.NewClient({
  apiKey: '<YOUR API KEY>',
  fastify,
});
apitoolkitClient.init();
app.get('/', async (request, reply) => {
    try {
        const res = await observeAxios(axios).get("/hello");
        return res.data
    } catch (err) {
      return {error: "Something went wreong"}
    }
});
```

If you're making requests to endpoints which have variable urlPaths, you should include a wildcard url of the path, so that apitoolkit groups the endpoints correctly for you on the dashboardL:

```typescript
import APIToolkit, { observeAxios } from "apitoolkit-fastify";
import axios from "axios"
import Fastify from 'fastify';
const fastify = Fastify();


const apittoolkitClient = APIToolkit.NewClient({
    apiKey: '<YOUR API KEY>',
    fastify,
});
apitoolkitClient.init();
app.get('/', async (request, reply) => {
    try {
        const res = await observeAxios(axios, "/todos/{todo_id}").get("https://jsonplaceholder.typicode.com/todos/1");
        return res.data
    } catch (err) {
        return { error: "Something went wreong" }
    }
});
```

There are other optional arguments you could pass on to the observeAxios function, eg:

```typescript
import APIToolkit, { observeAxios } from "apitoolkit-fastify";
import axios from "axios"
import Fastify from 'fastify';
const fastify = Fastify();

const redactHeadersList = ["Content-Type", "Authorization"];
const redactRequestBodyList = ["$.body.bla.bla"];
const redactResponseBodyList = undefined;

const apittoolkitClient = APIToolkit.NewClient({
    apiKey: '<YOUR API KEY>',
    fastify,
});
apitoolkitClient.init();

app.get('/', async (request, reply) => {
    try {
        const res = await observeAxios(axios, "/todos/{todo_id}",
            redactHeadersList,
            redactRequestBodyList,
            redactResponseBodyList,
        ).get("https://jsonplaceholder.typicode.com/todos/1");
        return res.data
    } catch (err) {
        return { error: "Something went wreong" }
    }
});
```

Note that you can ignore any of these arguments except the first argument which is the axios instance to observe.
For the other arguments, you can either skip them if at the end, or use undefined as a placeholder.

## Reporting errors to APIToolkit

APIToolkit detects a lot of API issues automatically, but it's also valuable to report and track errors. This helps you associate more details about the backend with a given failing request.
If you've used sentry, or rollback, or bugsnag, then you're likely aware of this functionality.

Within the context of a web request, reporting error is as simple as calling the apitoolkit ReportError function.

```typescript
import APIToolkit, { ReportError } from "apitoolkit-fastify";
import axios from "axios"
import Fastify from 'fastify';
const fastify = Fastify();

const apittoolkitClient = APIToolkit.NewClient({
  apiKey: '<YOUR API KEY>',
  fastify,
});
apitoolkitClient.init();
app.get('/', async (request, reply) => {
    try {
      const response = await observeAxios(axios).get(`${baseURL}/non-exisiting-endpoint`);
    } catch (error) {
      ReportError(error);
    }
});
```

This works automatically from within a web request which is wrapped by the apitoolkit middleware. But if called from a background job, ReportError will not know how to actually Report the Error.
In that case, you can call ReportError, but on the apitoolkit client, instead.

```js
import APIToolkit from "apitoolkit-fastify";
import axios from "axios"

const apitoolkitClient = APIToolkit.NewClient({ apiKey: "<API-KEY>" });

try {
  const response = await observeAxios(axios).get(`${baseURL}/ping`);
} catch (error) {
  apitoolkitClient.ReportError(error);
}
```

