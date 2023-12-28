---
title: Express Js
date: 2022-03-23
publishdate: 2022-03-24
weight: 1
toc: true
menu:
  main:
    weight: 1
---

The APIToolkit integration guide for ExpressJS provides a streamlined process to capture incoming traffic data. It collects request information and efficiently forwards it to the APIToolkit servers.

## Integrating in an ExpressJS server

1. **Install the necessary packages**:

   Use npm or yarn to install `express` and `apitoolkit-express`.

   ```bash
   npm install express apitoolkit-express
   ```

2. **Setup your server**:

   **ESM example**

   ```javascript
   import express from 'express';
   import { APIToolkit } from 'apitoolkit-express';

   const app = express();
   const port = 3000;

   const apitoolkitClient = APIToolkit.NewClient({ apiKey: '<API-KEY>' });
   app.use(apitoolkitClient.expressMiddleware);

   app.get('/', (req, res) => {
     res.json({ hello: 'Hello world!' });
   });

   app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
   });
   ```

   **CommonJs Example**

   ```javascript
   const express = require('express');
   const APIToolkit = require('apitoolkit-express').default;

   const app = express();
   const port = 3000;

   const apitoolkitClient = APIToolkit.NewClient({
     apiKey: '<API_KEY>',
   });

   app.use(apitoolkitClient.expressMiddleware);

   app.get('/', (req, res) => {
     res.json({ hello: 'Hello world!' });
   });

   app.listen(port, () => {
     console.log(`Example app listening on port ${port}`);
   });
   ```

   **Note**: Replace `<API-KEY>` with your unique key from your [APIToolkit account](apitoolkit.io)

## Redacting Sensitive Fields and Headers

While it's possible to mark a field as redacted from the apitoolkit dashboard, this client also supports redacting at the client side. Client side redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

To mark fields that should be redacted, simply add them to the apitoolkit config object. Eg:

```js
import express from 'express';
import { APIToolkit } from 'apitoolkit-express';
const app = express();
const port = 3000;

const apitoolkitClient = await APIToolkit.NewClient({
  apiKey: '<API-KEY>',
  redactHeaders: ['Content-Type', 'Authorization', 'Cookies'], // Specified headers will be redacted
  redactRequestBody: ['$.credit-card.cvv', '$.credit-card.name'], // Specified request bodies fields will be redacted
  redactResponseBody: ['$.message.error'], // Specified response body fields will be redacted
});
app.use(apitoolkitClient.expressMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

It is important to note that while the `redactHeaders` config field accepts a list of headers(case insensitive), the `redactRequestBody` and `redactResponseBody` expect a list of JSONPath strings as arguments.

The choice of JSONPath was selected to allow you have great flexibility in describing which fields within your responses are sensitive. Also note that these list of items to be redacted will be applied to all endpoint requests and responses on your server. To learn more about jsonpath to help form your queries, please take a look at this [cheat-sheet.](https://lzone.de/cheat-sheet/JSONPath)

## Handling File Uploads with Formidable

Working with file uploads using the `multer` package is quite straightforward and requires no manual intervention, making it seamless to send multipart/form-data requests to APIToolkit.

However, if you choose to employ `formidable` for managing file uploads, a more hands-on approach becomes necessary to ensure proper data transmission to APIToolkit. Without manual intervention, no data is dispatched, potentially hindering the accurate monitoring of the endpoint. To enable this functionality, developers must attach both the `fields` and `files` extracted from the `form.parse` method to the request object.

For instance:

```js
import express from 'express';
import { APIToolkit } from 'apitoolkit-express';
import formidable from 'formidable';

const app = express();
const client = APIToolkit.NewClient({
  apiKey: '<API_KEY>',
});

app.use(client.expressMiddleware);

app.post('/upload-formidable', (req, res, next) => {
  const form = formidable({});
  form.parse(req, (err, fields, files) => {
    // Attach fields to request body
    req.body = fields;
    // Attach files
    req.files = files;

    res.json({ message: 'Uploaded successfully' });
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

By executing this procedure, APIToolkit gains access to non-redacted fields and files, thereby enhancing the precision of monitoring and documentation processes. This method ensures that all necessary data is accessible and correctly relayed to APIToolkit for thorough analysis and documentation.

## Using apitoolkit to observe an axios based outgoing request

Simply wrap your axios instance with the APIToolkit observeAvios function.

```typescript
import { observeAxios } from 'apitoolkit-express';
import axios from "axios"

const response = await observeAxios(axios).get(`${baseURL}/user_list/active`);
```

If you're making requests to endpoints which have variable urlPaths, you should include a wildcard url of the path, so that apitoolkit groups the endpoints correctly for you on the dashboardL:

```typescript
import { observeAxios } from 'apitoolkit-express';
import axios from "axios"

const response = await observeAxios(axios, '/users/{user_id}').get(
  `${baseURL}/users/user1234`
);
```

There are other optional arguments you could pass on to the observeAxios function, eg:

```typescript
import { observeAxios } from 'apitoolkit-express';
import axios from "axios"

const redactHeadersList = ['Content-Type', 'Authorization'];
const redactRequestBodyList = ['$.body.bla.bla'];
const redactResponseBodyList = undefined;
const response = await observeAxios(
  axios,
  '/users/{user_id}',
  redactHeadersList,
  redactRequestBodyList,
  redactResponseBodyList
).get(`${baseURL}/users/user1234`);
```

Note that you can ignore any of these arguments except the first argument which is the axios instance to observe.
For the other arguments, you can either skip them if at the end, or use undefined as a placeholder.

## Reporting errors to APIToolkit

APIToolkit detects a lot of API issues automatically, but it's also valuable to report and track errors. This helps you associate more details about the backend with a given failing request.
If you've used sentry, or rollback, or bugsnag, then you're likely aware of this functionality.

Within the context of a web request, reporting error is as simple as calling the apitoolkit ReportError function.

```typescript
import { ReportError, observeAxios } from 'apitoolkit-express';

try {
  const response = await observeAxios(axios).get(`${baseURL}/ping`);
} catch (error) {
  ReportError(error);
}
```

This works automatically from within a web request which is wrapped by the apitoolkit middleware. But if called from a background job, ReportError will not know how to actually Report the Error.
In that case, you can call ReportError, but on the apitoolkit client, instead.

```js
import { APIToolkit, observeAxios } from 'apitoolkit-express';

const apitoolkitClient = APIToolkit.NewClient({ apiKey: '<API-KEY>' });

try {
  const response = await observeAxios(axios).get(`${baseURL}/ping`);
} catch (error) {
  apitoolkitClient.ReportError(error);
}
```
