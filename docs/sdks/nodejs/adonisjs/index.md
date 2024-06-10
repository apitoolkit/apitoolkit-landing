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
  debug: false,
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

To mark a field for redacting via this SDK, you need to add some additional arguments to the default export object in the `conf/apitoolkit.js|ts` file with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

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
export const apitoolkitConfig = {
  apiKey: "&lt;YOUR_API_KEY&gt;",
  redactHeaders: ["Content-Type", "Authorization", "Cookies"], // Specified headers will be redacted
  redactRequestBody: ["$.credit-card.cvv", "$.credit-card.name"], // Specified request bodies fields will be redacted
  redactResponseBody: ["$.message.error"], // Specified response body fields will be redacted
};
```

It is important to note that while the `redactHeaders` config field accepts a
list of headers(case insensitive), the `redactRequestBody` and
`redactResponseBody` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in
descibing which fields within your responses are sensitive.

Also note that these list of items to be redacted will be aplied to all endpoint requests and
responses on your server.

To learn more about jsonpath, please take a look at these resources:

1. [Query expressions for JSONPATH](https://ietf-wg-jsonpath.github.io/draft-ietf-jsonpath-base/draft-ietf-jsonpath-base.html)
2. [JSONPATH Cheet Sheet](https://lzone.de/cheat-sheet/JSONPath)

## Using apitoolkit to observe an axios based outgoing request

To monitor outgoing request, you need to first enable asyncLocalStorage in your adonisjs project by setting useAsyncLocalStorage to true in your `config/app.ts` file.

```js
export const http: ServerConfig = {
  useAsyncLocalStorage: true
  // other configs
}
```

After setting asyncLocalStorage to true, simply wrap your axios instance with the APIToolkit observeAxios function.

```ts
import Route from '@ioc:Adonis/Core/Route'
import { observeAxios } from "apitoolkit-adonis"
import axios from "axios"

const redactHeadersList = ["Content-Type", "Authorization"];
const redactRequestBodyList = ["$.body.user.name"];
const redactResponseBodyList = undefined;

Route.get('/observer', async () => {
    const response = await observeAxios(axios).get(baseURL + "/user_list/active");
    return {hello: "hello world"}
})
```

If you're making requests to endpoints which have variable urlPaths, you should
include a wildcard url of the path, so that apitoolkit groups the endpoints
correctly for you on the dashboard:

```js
import { observeAxios } from "apitoolkit-adonis";
import axios from "axios";

Route.get('/observer', async () => {
    const response = await observeAxios(axios, "/users/{user_id}").get(
      baseURL + "/users/user1234",
    );
    return {hello: "hello world"}
})
```

There are other optional arguments you could pass on to the observe Axios
function.

Example

```js
import Route from "@ioc:Adonis/Core/Route";
import axios from "axios";
import { observeAxios } from "apitoolkit-adonis";

const redactHeadersList = ["Content-Type", "Authorization"];
const redactRequestBodyList = ["$.body.user.password"];
const redactResponseBodyList = undefined;

Route.get("/observer", async () => {
  const response = await observeAxios(
    axios,
    "/users/{user_id}",
    redactHeadersList,
    redactRequestBodyList,
    redactResponseBodyList,
  ).get(baseURL + "/users/user1234");
});
```

Note that you can ignore any of these arguments except the first argument which is the axios instance to observe.

For the other arguments, you can either skip them if at the end, or use undefined as a placeholder.

## Reporting errors to APIToolkit

APIToolkit detects a lot of API issues automatically, but it's also valuable to report and track errors.

This helps you associate more details about the backend with a given failing request. If you've used sentry, or rollback, or bugsnag, then you're likely aware of this functionality.

To report errors, you need to first enable asyncLocalStorage in your adonisjs project by setting useAsyncLocalStorage to true in your config/app.ts file.

```js
export const http: ServerConfig = {
  useAsyncLocalStorage: true
  // other configs
}
```

You can then start reporting errors by calling the apitoolkit `reportError`` function.

```js
import Route from "@ioc:Adonis/Core/Route";
import { reportError } from "apitoolkit-adonis";

Route.get("/observer", async () => {
  try {
    throw ("Error occured");
  } catch (error) {
    reportError(error);
  }
  return { hello: "world" };
});
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
