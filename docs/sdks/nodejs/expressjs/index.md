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

Run the command below to install the APIToolkit express sdk and Open telemetery API, SDK, and auto instrumentation tools.

```sh
npm install --save apitoolkit-express @opentelemetry/api @opentelemetry/auto-instrumentations-node
# Or
yarn add apitoolkit-express @opentelemetry/api @opentelemetry/auto-instrumentations-node
```

## Open Telemetery Configuration

This module is highly configurable by setting environment variables. So many aspects of the auto instrumentation’s behavior such as Resource detectors, Exporters, Trace context propagation headers,
and many more can be configured based on your needs.

```sh
# Specifies the endpoint URL for the OpenTelemetry collector.
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"
# Defines which resource detectors to use. detect environment variables, host info, and operating system details.
export OTEL_NODE_RESOURCE_DETECTORS="env,host,os"
# Specifies the name of the service.
export OTEL_SERVICE_NAME="<YOUR_SERVICE_NAME>"
# Specifies the attributes to be added to the resource.
export OTEL_RESOURCE_ATTRIBUTES=at-project-key="z6BJfZVEOSozztMfhqZsGTpG9DiXT9Weurvk1bpe9mwF8orB"
# Specifies the protocol to use for the OpenTelemetry exporter.
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"
export OTEL_TRACES_EXPORTER="otlp"
export OTEL_LOGS_EXPORTER="otlp"
# Specifies which context propagators to use.
export OTEL_PROPAGATORS="baggage,tracecontext"
export NODE_OPTIONS="--require @opentelemetry/auto-instrumentations-node/register"
node server.js
```

## Setup APIToolkit Express Middleware

APIToolkit Express Middleware is a middleware that can be used to monitor HTTP requests. It is a wrapper around the Express.js middleware and provides additional functionalities on top of the open telemetry instrumentation which creates a custom span for each request capturing details about the request including request and response bodies.

```js
import express from "express";
import { APIToolkit } from "apitoolkit-express";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  APIToolkit.middleware({
    serviceName: "my-service",
    redactHeaders: ["authorization", "cookie"],
    redactResponseBody: ["$.creditCardNumber"], // jsonpath to redact credit card number from response body
    redactRequestBody: ["$.password"], // jsonpath to redact password from request body
    captureRequestBody: true, // capture request body and send it to your apitoolkit dashboard
    captureResponseBody: true, // capture response body and send it to your apitoolkit dashboard
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Report uncaught errors, must come after all route hanndlers
app.use(APIToolkit.errorMiddleware());

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
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

To enable automatic error reporting, add the APIToolkit `errorMiddleware` function immediately after your app's controllers and APIToolkit will handle all uncaught errors that happened during a request and associate the error to that request.

```typescript
import express from "express";
import { APIToolkit } from "apitoolkit-express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  APIToolkit.expressMiddleware({
    /* options */
  })
);

app.get("/", (req, res) => {});

// The error handler must be before any other error middleware and after all controllers
app.use(APIToolkit.errorMiddleware());

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
```

Or manually report errors within the context of a web request, by calling the ReportError function.

```typescript
import express from "express";
import { APIToolkit } from "apitoolkit-express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  APIToolkit.expressMiddleware({
    /* options */
  })
);

app.get("/", (req, res) => {
  try {
    throw new Error("Something went wrong");
    res.send("hello world");
  } catch (error) {
    APIToolkit.reportError(error);
    res.send("Something went wrong");
  }
});

app.listen(3000, () => {
  console.log("Example app listening on port 3000");
});
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
