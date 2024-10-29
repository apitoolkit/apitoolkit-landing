---
title: ExpressJs
ogTitle: ExpressJs Integration Guide
date: 2022-03-23
updatedDate: 2024-06-15
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
npm install --save @opentelemetry/api @opentelemetry/auto-instrumentations-node
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
node --require @opentelemetry/auto-instrumentations-node/register server.js

```

### 2. Using the `export` keyword

```sh
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
export OTEL_SERVICE_NAME="<YOUR_SERVICE_NAME>"
export OTEL_RESOURCE_ATTRIBUTES=at-project-key="z6BJfZVEOSozztMfhqZsGTpG9DiXT9Weurvk1bpe9mwF8orB"
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_LOGS_EXPORTER="otlp"
export OTEL_PROPAGATORS="baggage,tracecontext"
export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"
node server.js
```

If you are wondering what the difference is, it's this:

- The first method, `env` sets them only for the immediate command execution.
- The second method, `exports`, sets the variables globally for the current terminal session.

#### Quick overview of the configuration parameters

{class="docs-table"}
:::
| Attribute | Description |
| --------- | ----------- |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | Specifies the endpoint URL for the OpenTelemetry collector. In this case, it's set to "http://otelcol.apitoolkit.io:4317". |
| `OTEL_NODE_RESOURCE_DETECTORS` | Defines which resource detectors to use. Here, it's set to detect environment variables, host information, and operating system details. |
| `OTEL_SERVICE_NAME` | Sets the name of your service. You should replace "your-service-name" with the actual name of your service. |
| `OTEL_RESOURCE_ATTRIBUTES` | Specifies additional resource attributes. In this case, it's setting an API Toolkit project key. |
| `OTEL_EXPORTER_OTLP_PROTOCOL` | Defines the protocol used for exporting telemetry data. It's set to "grpc" (gRPC protocol). |
| `OTEL_PROPAGATORS` | Specifies which context propagators to use. Here, it's set to use both "baggage" and "tracecontext". |
| `NODE_OPTIONS` | Sets Node.js options. In this case, it's requiring the OpenTelemetry auto-instrumentation module for Node.js. |
:::

## Monitoring HTTP requests with APIToolkit Express Middleware

APIToolkit Express Middleware is a middleware that can be used to monitor HTTP requests. It is a wrapper around the Express.js middleware and provides additional functionalities on top of the open telemetry instrumentation which creates a custom span for each request capturing details about the request including request and response bodies.

### Installation

Run the following command to install the express js package from your projects root:

```sh
npm install apitoolkit-express
```

### Project setup

Intialize apitoolkit into your project by providing `apikey` and `serviceName` like so:

```js
import express from "express";
import {expressMiddleware, expressErrorHandler} from "apitoolkit-express";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressMiddleware());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Report uncaught errors, must come after all route hanndlers
app.use(expressErrorHandler);

app.listen(3000, () => { console.log("Example app listening on port 3000")});
```

#### Quick overview of the configuration parameters

An object with the following optional fields can be passed to the middleware function to configure it:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `debug` | Set to `true` to enable debug mode. |
| `tags` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `serviceName` | A defined string name of your application |
| `serviceVersion` | A defined string version of your application (used for further debugging on the dashboard). |
| `redactHeaders` | A list of HTTP header keys to redact. |
| `redactResponseBody` | A list of JSONPaths from the response body to redact. |
| `redactRequestBody` | A list of JSONPaths from the request body to redact. |
| `captureRequestBody` | default `false`, set to true if you want to capture the request body. |
| `captureResponseBody` | default `false`, set to true if you want to capture the response body. |
:::


## Reporting errors to APIToolkit

APIToolkit detects a lot of API issues automatically, but it's also valuable to report and track errors. This helps you associate more details about the backend with a given failing request.
If you've used sentry, or rollback, or bugsnag, then you're likely aware of this functionality.

To enable automatic error reporting, add the APIToolkit `expressErrorHandler` middleware immediately after your app's controllers and APIToolkit will handle all uncaught errors that happened during a request and associate the error to that request.

```typescript
import express from "express";
import {expressMiddleware, expressErrorHandler} from "apitoolkit-express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressMiddleware());

app.get("/", (req, res) => {});

// The error handler must be before any other error middleware and after all controllers
app.use(expressErrorHandler);

app.listen(3000, () => { console.log("Example app listening on port 3000")});
```

Or manually report errors within the context of a web request, by calling the ReportError function.

```typescript
import express from "express";
import {expressMiddleware, expressErrorHandler, reportError} from "apitoolkit-express";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressMiddleware);

app.get("/", (req, res) => {
  try {
    throw new Error("Something went wrong");
    res.send("hello world");
  } catch (error) {
    reportError(error);
    res.send("Something went wrong");
  }
});

app.listen(3000, () => { console.log("Example app listening on port 3000")});
```

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
