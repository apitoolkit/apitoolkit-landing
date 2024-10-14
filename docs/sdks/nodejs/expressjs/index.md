---
title: ExpressJs
ogTitle: ExpressJs Integration Guide
date: 2022-03-23
updatedDate: 2024-06-10
menuWeight: 2
---

# ExpressJs Integration Guide

You can integrate your Express.js application with APIToolkit using OpenTelemetry. This allows you to send logs, metrics, and traces to APIToolkit for monitoring and analytics. 

To get started, you'll need the OpenTelemetry Node.js library and some basic configuration.

```=html
<hr>
```

## Prerequisites

Ensure you have completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

Run the command below to install the API, SDK, and Instrumentation tools.

```sh

npm install --save @opentelemetry/api \
    @opentelemetry/auto-instrumentations-node

# Or

yarn add @opentelemetry/api @opentelemetry/auto-instrumentations-node

```

## Configuration

This module is highly configurable by setting environment variables. So many aspects of the auto instrumentation’s behavior such as Resource detectors, Exporters, Trace context propagation headers,
and many more can be configured based on your needs.

There are generally two ways to go about this from the command line:

1. Using the `env` keyword
2. Using the `export` keyword

For demonstration, I will be using the [OpenSource Bookshelf ExpressJs project on GitHub](https://github.com/apitoolkit/express-bookshelf-realworld-example-app) as an example.



### 1. Using the `env` keyword

```sh
env OTEL_TRACES_EXPORTER=otlp \
    OTEL_EXPORTER_OTLP_ENDPOINT=http://otelcol.apitoolkit.io:4317 \
    OTEL_SERVICE_NAME=your-service-name \
    OTEL_LOGS_EXPORTER=otlp \
    OTEL_RESOURCE_ATTRIBUTES=at-project-key=z6BJfZVEOSozztMfhqZsGTpG9DiXT9Weurvk1bpe9mwF8orB \
    OTEL_EXPORTER_OTLP_PROTOCOL=grpc \
    OTEL_PROPAGATORS=baggage,tracecontext \
node --require @opentelemetry/auto-instrumentations-node/register app.js

```

### 2. Using the `export` keyword


```sh
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="your-service-name"
export OTEL_RESOURCE_ATTRIBUTES=at-project-key="z6BJfZVEOSozztMfhqZsGTpG9DiXT9Weurvk1bpe9mwF8orB"
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"
export OTEL_PROPAGATORS="baggage,tracecontext"
export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"
node lib/server.js
```

If you are wondering what the difference is, it's this:

 - The first method, `env` sets them only for the immediate command execution.
 - The second method, `exports`, sets the variables globally for the current terminal session.






<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tips</b></p>
  <ol>
  <li>
  At the moment, only Traces are supported for environment variable configuration. See the open issues for [Metrics](https://github.com/open-telemetry/opentelemetry-js/issues/4551) and [Logs](https://github.com/open-telemetry/opentelemetry-js/issues/4552) to learn more.
  </li>
 <li>
  By default, all SDK [resource detectors](https://opentelemetry.io/docs/languages/js/resources/) are enabled. However, you can customize this by setting the `OTEL_NODE_RESOURCE_DETECTORS` environment variable to activate specific detectors or disable them entirely. 
 </li>
  </ul>
  
</div>


## Handling File Uploads

If you handle file uploads in your application using a framework, you might need to add extra configurations to ensure that the request object contains all the parsed data for accurate monitoring of file uploads across your application.

File uploads using [multer](https://npmjs.com/package/multer){target="\_blank" rel="noopener noreferrer"} for example requires no extra work since the parsed data (`fields` and `files`) are attached to the request object in multipart/form-data requests.

However, if you're using a framework like [formidable](https://npmjs.com/package/formidable){target="\_blank" rel="noopener noreferrer"} for example, you need to attach the parsed data yourself to ensure accurate monitoring.

This is one way to go about it:

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