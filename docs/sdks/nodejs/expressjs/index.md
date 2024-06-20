---
title: ExpressJs
ogTitle: ExpressJs SDK Guide
date: 2022-03-23
updatedDate: 2024-06-10
menuWeight: 2
---

# ExpressJs SDK Guide

To integrate your ExpressJs application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **ExpressJs SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
npm install apitoolkit-express

# Or

yarn add apitoolkit-express
```

## Configuration

Next, initialize APItoolkit in your application's entry point (e.g., `index.js`), like so:

<section class="tab-group" data-tab-group="group1">
  <button class="tab-button" data-tab="tab1">ESM</button>
  <button class="tab-button" data-tab="tab2">CommonJs</button>
  <div id="tab1" class="tab-content">

```js
import { APIToolkit } from "apitoolkit-express";
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

// IMPORTANT: apitoolkitClient must be declared
// BEFORE all controllers and middleware in your application.
const apitoolkitClient = APIToolkit.NewClient({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
  debug: false,
  tags: ["environment: production", "region: us-east-1"],
  serviceVersion: "v2.0",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apitoolkitClient.expressMiddleware);

app.get("/", (req, res) => {
  res.json({ hello: "Hello world!" });
});

// IMPORTANT: apitoolkitClient.errorHandler must be declared
// AFTER declaring apitoolkitClient.expressMiddleware
// and all controllers and BEFORE any other error middleware.
app.use(apitoolkitClient.errorHandler);

app.listen(port, () => console.log("App running on port: " + port));
```

</div>
  <div id="tab2" class="tab-content">

```js
const express = require("express");
const APIToolkit = require("apitoolkit-express").default;

const app = express();
const port = 3000;

// IMPORTANT: apitoolkitClient must be declared
// BEFORE all controllers and middleware in your application.
const apitoolkitClient = APIToolkit.NewClient({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
  debug: false,
  tags: ["environment: production", "region: us-east-1"],
  serviceVersion: "v2.0",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apitoolkitClient.expressMiddleware);

app.get("/", (req, res) => {
  res.json({ hello: "Hello world!" });
});

// IMPORTANT: apitoolkitClient.errorHandler must be declared
// AFTER declaring apitoolkitClient.expressMiddleware
// and all controllers and BEFORE any other error middleware.
app.use(apitoolkitClient.errorHandler);

app.listen(port, () => {
  console.log("App running on port: " + port);
});
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
| `ignoreEndpoints` | A list of endpoints to exclude from monitoring eg `["/products", "POST /categories", "GET /user/:name"]`. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

<div class="callout callout-red">
  <p><i class="fa-solid fa-triangle-exclamation"></i> <b>Warning</b></p>
  <ul>
    <li>`apitoolkitClient` must be declared BEFORE all controllers and middleware in your application.</li>
    <li>`apitoolkitClient.errorHandler` must be declared AFTER `apitoolkitClient.expressMiddleware` and all other controllers and BEFORE any other error middleware.</li>`
  </ul>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional arguments to the `apitoolkitClient` configuration object with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

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
    ],
    "credit_card": {
      "number": "4111111111111111",
      "expiration": "12/28",
      "cvv": "123"
    }
  },
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
import express from "express";
import { APIToolkit } from "apitoolkit-express";

const app = express();
const port = 3000;

const apiKey = "{ENTER_YOUR_API_KEY_HERE}";
const redactHeaders = ["content-type", "Authorization", "HOST"];
const redactRequestBody = ["$.user.email", "$.user.addresses"];
const redactResponseBody = ["$.users[*].email", "$.users[*].credit_card"];

const apitoolkitClient = await APIToolkit.NewClient({
  apiKey,
  redactHeaders,
  redactRequestBody,
  redactResponseBody,
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apitoolkitClient.expressMiddleware);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(apitoolkitClient.errorHandler);

app.listen(port, () => {
  console.log("App running on port " + port);
});
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `redactHeaders` config field expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `redactRequestBody` and `redactResponseBody` config fields expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Handling File Uploads

If you handling file uploads in your application using a framework, you might need to add some extra configuration to ensure that the request object contains all the parsed data, enabling accurate monitoring of file uploads across your application.

Working with file uploads using [multer](https://npmjs.com/package/multer){target="\_blank" rel="noopener noreferrer"} for example requires no extra work since the parsed data (`fields` and `files`) are attached to the request object in multipart/form-data requests. However, if you're using [formidable](https://npmjs.com/package/formidable){target="\_blank" rel="noopener noreferrer"}, you need to attach the parsed data yourself to ensure accurate monitoring. Here's an example:

```js
import express from "express";
import { APIToolkit } from "apitoolkit-express";
import formidable from "formidable";

const app = express();
const port = 3000;

const client = APIToolkit.NewClient({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(client.expressMiddleware);

app.post("/upload-formidable", (req, res, next) => {
  const form = formidable({});
  form.parse(req, (err, fields, files) => {
    // Attach fields to request body
    req.body = fields;
    // Attach files to request body
    req.files = files;

    res.json({ message: "Uploaded successfully!" });
  });
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
```

## Error Reporting

APItoolkit automatically detects different unhandled errors, API issues, and anomalies but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

<section class="tab-group" data-tab-group="group2">
  <button class="tab-button" data-tab="tab1"> Report All Errors</button>
  <button class="tab-button" data-tab="tab2">Report Specific Errors</button>
  <div id="tab1" class="tab-content">
To report all uncaught errors and service exceptions that happened during a request, use the `errorHandler` middleware **immediately after** your app's controllers, like so:

```js
import { APIToolkit, ReportError } from "apitoolkit-express";
import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const apitoolkitClient = APIToolkit.NewClient({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apitoolkitClient.expressMiddleware);

// All controllers
app.get("/", (req, res) => {});
// Other controllers...

// Add the error handler
// to automatically report all uncaught errors to APItoolkit
app.use(apitoolkitClient.errorHandler);

app.listen(port, () => {
  console.log("App running on port " + port);
});
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>Ensure to add the `apitoolkitClient.errorHandler` after all controllers and before any other error middleware.</p>
</div>
  </div>
  <div id="tab2" class="tab-content">
To manually report errors within the context of a web request handler, use the `ReportError()` function, passing in the `error` argument, like so:

```js
import { APIToolkit, ReportError } from "apitoolkit-express";
import express from "express";

const app = express();
const port = 3000;

const apitoolkitClient = APIToolkit.NewClient({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(apitoolkitClient.expressMiddleware);

app.get("/", (req, res) => {
  try {
    throw new Error("Deliberate error");
    res.send("Hello");
  } catch (error) {
    // Report the error to APItoolkit
    ReportError(error);
    res.send("Something went wrong...");
  }
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
```

  </div>
</section>

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

<section class="tab-group" data-tab-group="group3">
  <button class="tab-button" data-tab="tab1">All Requests</button>
  <button class="tab-button" data-tab="tab2">Specific Requests</button>
  <button class="tab-button" data-tab="tab3">Specific Requests (Background Job)</button>
  <div id="tab1" class="tab-content">
To enable global monitoring of all axios requests, add `monitorAxios` to the `apitoolkitClient` configuration options, like so:

```js
import APIToolkit from "apitoolkit-express";
import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

const apitoolkitClient = APIToolkit.NewClient({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
  monitorAxios: axios,
});

app.use(apitoolkitClient.expressMiddleware);

app.get("/", async (req, res) => {
  // This outgoing axios request will be monitored
  const response = await axios.get(baseURL + "users/123");
  res.send(response.data);
});

app.listen(port, () => {
  console.log("App running on port " + port);
});
```

  </div>
  <div id="tab2" class="tab-content">
To monitor a specific axios request within the context of a web request handler, wrap your axios instance with the `observeAxios()` function, like so:

```js
import APIToolkit, { observeAxios } from "apitoolkit-express";
import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

const apitoolkitClient = APIToolkit.NewClient({ apiKey: "{ENTER_YOUR_API_KEY_HERE}" });

app.use(apitoolkitClient.expressMiddleware);

app.get("/", (req, res) => {
  const response = await observeAxios(axios).get(baseURL + "/users/user1234");
  res.send(response.data);
});

app.listen(port, () => {
  console.log("App running on port " + port);
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
  <div id="tab3" class="tab-content">
If your outgoing request is called from a background job for example (outside the web request handler and hence, not wrapped by APItoolkit's middleware), using the imported `observeAxios` directly from `apitoolkit-express` will not be available. Instead, call `observeAxios` directly from `apitoolkitClient`, like so:

```js
import axios from "axios";
import { APIToolkit } from "apitoolkit-express";

const apitoolkitClient = APIToolkit.NewClient({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
});

const response = await apitoolkitClient
  .observeAxios(axios)
  .get("http://localhost:8080/ping");
console.log(response.data);
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
<a href="https://github.com/apitoolkit/apitoolkit-express" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the ExpressJS SDK
</a>
```
