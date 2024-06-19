---
title: FastifyJs
ogTitle: FastifyJs SDK Guide
date: 2022-03-23
updatedDate: 2024-06-11
menuWeight: 3
---

# FastifyJs SDK Guide

To integrate your FastifyJs application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **FastifyJs SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
npm install apitoolkit-fastify

# Or

yarn add apitoolkit-fastify
```

## Configuration

Next, initialize APItoolkit in your application's entry point (e.g., `index.js`), like so:

```js
import Fastify from "fastify";
import APIToolkit from "apitoolkit-fastify";

const fastify = Fastify();

// Initialize the APItoolkit client
const apitoolkitClient = APIToolkit.NewClient({
  fastify,
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
  debug: false,
  tags: ["environment: production", "region: us-east-1"],
  serviceVersion: "v2.0",
});
apitoolkitClient.init();
// END Initialize the APItoolkit client

fastify.get("/hello", function (request, reply) {
  reply.send({ hello: "world" });
});

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
```

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
  <ul>
    <li>The `fastify` instance is required to configure the SDK.</li>
    <li>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</li>
  </ul>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional arguments to the `apitoolkitClient` configuration options with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

1. `redactHeaders`: A list of HTTP header keys.
2. `redactRequestBody`: A list of JSONPaths from the request body.
3. `redactResponseBody`: A list of JSONPaths from the response body.

<hr />
JSONPath is a query language used to select and extract data from JSON files. For example, given the following sample user data JSON object:

```JSON
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
      },
      ...
    ],
    "credit_card": {
      "number": "4111111111111111",
      "expiration": "12/28",
      "cvv": "123"
    }
  },
  ...
}
```

Examples of valid JSONPaths would be:

- `$.user.credit_card` (In this case, APItoolkit will replace the `addresses` field inside the `user` object with the string `[CLIENT_REDACTED]`).
- `$.user.addresses[*].zip` (In this case, APItoolkit will replace the `zip` field in all the objects of the `addresses` list inside the `user` object with the string `[CLIENT_REDACTED]`).

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>To learn more about JSONPaths, please take a look at the [official docs](https://github.com/json-path/JsonPath/blob/master/README.md){target="_blank"}. You can also use this [JSONPath Evaluator](https://jsonpath.com?utm_source=apitoolkit){target="_blank"} to validate your JSONPaths.</p>
</div>
<hr />

Here's an example of what the configuration would look like with redacted fields:

```js
import Fastify from "fastify";
import APIToolkit from "apitoolkit-fastify";

const fastify = Fastify();

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

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
```

## Error Reporting

APItoolkit automatically detects different unhandled errors, API issues, and anomalies but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To manually report errors within the context of a web request handler, use the `ReportError()` function, passing in the `error` argument, like so:

```js
import Fastify from "fastify";
import axios from "axios";
import APIToolkit, { ReportError } from "apitoolkit-fastify";

const fastify = Fastify();

const apitoolkitClient = APIToolkit.NewClient({
  fastify,
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
});
apitoolkitClient.init();

app.get("/", async (request, reply) => {
  try {
    const response = await observeAxios(axios).get(
      baseURL + "/non-existing-endpoint"
    );
  } catch (error) {
    // Report the error to APItoolkit
    ReportError(error);
  }
});
```

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

<section class="tab-group" data-tab-group="group4">
  <button class="tab-button" data-tab="tab1">All Requests</button>
  <button class="tab-button" data-tab="tab2">Specific Requests</button>
  <div id="tab1" class="tab-content">
    To enable global monitoring of all axios requests (**for only Adonis v6**), add `monitorAxios` to the `defineConfig` configuration options in the `config/apitoolkit.js|ts` file, like so:

```js
import Fastify from "fastify";
import axios from "axios";
import APIToolkit from "apitoolkit-fastify";

const fastify = Fastify();

const apitoolkitClient = APIToolkit.NewClient({
  fastify,
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
  monitorAxios: axios,
});
apitoolkitClient.init();

app.get("/", async (request, reply) => {
  // This axios request get's monitored
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
  return res.data;
});
```

  </div>
  <div id="tab2" class="tab-content">
    To monitor a specific axios request within the context of a web request handler (**for both Adonis v6 and v5**), wrap your axios instance with the `observeAxios()` function, like so:

```js
import Fastify from "fastify";
import axios from "axios";
import APIToolkit, { observeAxios } from "apitoolkit-fastify";

const fastify = Fastify();

const apitoolkitClient = APIToolkit.NewClient({
  fastify,
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
});
apitoolkitClient.init();

app.get("/", async (request, reply) => {
  const res = await observeAxios(axios).get(baseURL + "/users/user1234");
  return res.data;
});
```

The `observeAxios` function above accepts a **required `axios` instance** and the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `pathWildCard` | The `url_path` for URLs with path parameters. |
| `redactHeaders` | A list of HTTP header keys to redact. |
| `redactResponseBody` | A list of JSONPaths from the request body to redact. |
| `redactRequestBody` | A list of JSONPaths from the response body to redact. |
:::

  </div>
</section>

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-fastify" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the FastifyJS SDK
</a>
```
