---
title: AdonisJs
ogTitle: AdonisJs SDK Guide
date: 2022-03-23
updatedDate: 2024-06-10
menuWeight: 1
---

# AdonisJs SDK Guide

To integrate your AdonisJs application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **AdonisJs SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.

## Installation

Kindly run the command below to install the SDK:

```sh
# For adonis v6 (latest)
npm install apitoolkit-adonis@latest

# For adonis v5
npm install apitoolkit-adonis@v2.2.0
```

## Configuration

First, run the command below to configure the SDK using ace:

```bash
node ace configure apitoolkit-adonis
```

Then, register the middleware like so:

<section>
  <div class="tab-buttons">
      <div class="tab-button active" onclick="openTab(event, 'Tab1')">Adonis v6 (latest)</div>
      <div class="tab-button" onclick="openTab(event, 'Tab2')">Adonis v5</div>
  </div>
  <div id="Tab1" class="tab-content active">
    Add `apitoolkit-adonis` to your global middleware list in the `start/kernel.ts` file like so:
        
```js
server.use([
  () => import('apitoolkit-adonis'),
])
```

    Then, create an `apitoolkit.js|ts` file in the `/conf` directory and export the `defineConfig` object with some properties like so:

```js
import { defineConfig } from 'apitoolkit-adonis'

export default defineConfig({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
  debug: false // Set to true to enable debug mode
})
```
  </div>
  <div id="Tab2" class="tab-content">
    Add `@ioc:APIToolkit` to your global middleware list in the `start/kernel.ts` file like so:
          
```js
Server.middleware.register([
  () => import('@ioc:Adonis/Core/BodyParser'),
  () => import('@ioc:APIToolkit'),
])
```

    Then, create an `apitoolkit.js|ts` file in the `/conf` directory and export an `apitoolkitConfig` object with some properties like so:

```js
export const apitoolkitConfig = {
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
};
```
  </div>
</section>

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted  (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to add some additional arguments to the configuration object in the `conf/apitoolkit.js|ts` file with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

1. `redactHeaders`:  A list of HTTP header keys.
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
export default defineConfig({
  apiKey: "{ENTER_YOUR_API_KEY_HERE}",
  debug: false,

  redactHeaders: ["Content-Type", "Authorization", "HOST"], 
  redactRequestBody: ["$.user.email", "$.user.addresses"],
  redactResponseBody: ["$.users[*].email", "$.users[*].credit_card"]
})
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `redactHeaders` config field expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `redactRequestBody` and `redactResponseBody` config fields expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit detects different API issues and anomalies automatically but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To report errors, you need to first enable [asyncLocalStorage](https://docs.adonisjs.com/guides/concepts/async-local-storage){target="_blank" rel="noopener noreferrer"} in your AdonisJS project by setting `useAsyncLocalStorage` to true in your `config/app.js|ts` file like so:

```js
export const http: ServerConfig = {
  useAsyncLocalStorage: true
  // other configs...
}
```

Then, use the `reportError()` function, passing in the `error` argument like so:

```js
import router from '@adonisjs/core/services/router'
import { reportError } from "apitoolkit-adonis";

router.get("/observer", async () => {
  try {
    throw ("Error occurred!");
  } catch (error) {
    reportError(error);
  }
  return { hello: "world" };
});
```

## Monitoring Outgoing Requests

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="_blank"} page, alongside the incoming request that triggered them.

To monitor outgoing axios-based HTTP requests from your application, first enable [asyncLocalStorage](https://docs.adonisjs.com/guides/concepts/async-local-storage){target="_blank" rel="noopener noreferrer"} in your AdonisJS project by setting `useAsyncLocalStorage` to true in your `config/app.js|ts` file like so:

```js
export const http: ServerConfig = {
  useAsyncLocalStorage: true
  // other configs...
}
```

Then, wrap your axios instance with the APIToolkit `observeAxios` function like so:

```js
import { observeAxios } from "apitoolkit-adonis";
import axios from "axios";

const pathWildCard = "/users/{user_id}";
const redactHeadersList = ["Content-Type", "Authorization", "HOST"];
const redactRequestBodyList = ["Content-Type", "Authorization", "HOST"];
const redactResponseBodyList = ["$.users[*].email", "$.users[*].credit_card"];

Route.get('/observer', async () => {
  const response = await observeAxios(
    axios,
    pathWildCard,
    redactHeadersList,
    redactRequestBodyList,
    redactResponseBodyList,
  ).get(baseURL + "/users/user1234",
);
  return {hello: "hello world"}
})
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p class="mt-6">The `observeAxios` function accepts a required `axios` instance and the following optional fields:</p>
  <ul>
    <li>`pathWildCard`: The `url_path` for URLs with path parameters.</li>
    <li>`redactHeaders`: A string list of headers to redact.</b></li>
    <li>`redactResponseBody`: A string list of JSONPaths to redact from the response body.</li>
    <li>`redactRequestBody`: A string list of JSONPaths to redact from the request body.</li>
  </ul>
</div>

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-adonis" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the AdonisJS SDK
</a>
```

```=html
    <script>
        function openTab(event, tabName) {
            let i, tabcontent, tablinks;

            // Hide all tab content
            tabcontent = document.getElementsByClassName("tab-content");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
                tabcontent[i].classList.remove("active");
            }

            // Remove the active class from all tab buttons
            tablinks = document.getElementsByClassName("tab-button");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }

            // Show the current tab's content and add active class to the button
            document.getElementById(tabName).style.display = "block";
            document.getElementById(tabName).classList.add("active");
            event.currentTarget.classList.add("active");
        }

        // Initialize the first tab to be visible
        document.addEventListener("DOMContentLoaded", function () {
            document.querySelector(".tab-button").click();
        });
    </script>
```