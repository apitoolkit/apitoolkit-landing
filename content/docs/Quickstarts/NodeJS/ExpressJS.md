---
title: Express Js
date: 2022-03-23
publishdate: 2022-03-24
weight: 1
menu:
  main:
    weight: 1
---
## Easy Steps to Set Up APIToolkit with Your Node.js Project

APIToolkit helps keep an eye on the data traffic coming into your project. It's like a security camera for your project's data requests, making sure everything's recorded and sent safely to APIToolkit's servers.

Getting Started:

1. Putting Things Together:
   - First, open your project and initialize APIToolkit by running this command:

```sh
npm install apitoolkit-express
```

  - Now, let's set up APIToolkit in your project. It's as easy as adding these lines:

```js
import APIToolkit from 'apitoolkit-express';
const apitoolkitClient = await APIToolkit.NewClient({ apiKey: '<API-KEY>' });
```

Replace ```<API-KEY>```  with your unique key from your [APIToolkit account](apitoolkit.io)

2. Connecting APIToolkit to Your Project:
   - If you're using Express.js, start by adding the following line to integrate the 'apitoolkit' middleware

```js
app.use(apitoolkitClient.expressMiddleware);
```
Here, 'app' is your Express.js setup.

3. Example of a Basic Setup
   - Here's how your code might look with everything in place:

```js
import express from 'express';
import APIToolkit from 'apitoolkit-express';

const app = express();
const port = 3000;

const apitoolkitClient = await APIToolkit.NewClient({ apiKey: '<API-KEY>' });
app.use(apitoolkitClient.expressMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

## Redacting Senstive Fields and Headers

While it's possible to mark a field as redacted from the apitoolkit dashboard, this client also supports redacting at the client side. Client side redacting means that those fields would never leave your servers at all. So you feel safer that your sensitive data only stays on your servers.

To mark fields that should be redacted, simply add them to the apitoolkit config object. Eg:

```js
import express from 'express';
import APIToolkit from 'apitoolkit-express';
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

The choice of JSONPath was selected to allow you have great flexibility in descibing which fields within your responses are sensitive. Also note that these list of items to be redacted will be aplied to all endpoint requests and responses on your server. To learn more about jsonpath to help form your queries, please take a look at this cheatsheet: https://lzone.de/cheat-sheet/JSONPath

## Handling File Uploads with Formidable

Working with file uploads using the `multer` package is quite straightforward and requires no manual intervention, making it seamless to send multipart/form-data requests to APIToolkit.

However, if you choose to employ `formidable` for managing file uploads, a more hands-on approach becomes necessary to ensure proper data transmission to APIToolkit. Without manual intervention, no data is dispatched, potentially hindering the accurate monitoring of the endpoint. To enable this functionality, developers must attach both the `fields` and `files` extracted from the `form.parse` method to the request object.

For instance:

```js
import express from 'express';
import APIToolkit from 'apitoolkit-express';
import formidable from 'formidable';

const app = express();
const client = await APIToolkit.NewClient({
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
