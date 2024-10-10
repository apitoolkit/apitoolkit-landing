---
title: ExpressJs, OpenTelemetry
ogTitle: ExpressJs SDK Guide
date: 2022-03-23
updatedDate: 2024-10-10
menuWeight: 2
---

# OpenTelemetry, Express.js, and APIToolkit Integration

You can combine OpenTelemetry with your ExpressJs application and integrate it with APIToolkit to collect and export telemetry data. This integration provides valuable insights into your application's behavior and performance through traces, metrics, and logs.

Adding distributed tracing capabilities to your ExpressJs applications is straightforward. You'll need the OpenTelemetry Node.js library and a few configuration to get started.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="\_blank"}.

## Installation

First, install the OpenTelemetry Node.js SDK and its instrumentations:

```sh
npm install @opentelemetry/sdk-node \
  @opentelemetry/api \
  @opentelemetry/auto-instrumentations-node \
  @opentelemetry/sdk-metrics \
  @opentelemetry/sdk-trace-node


# Or

yarn add @opentelemetry/sdk-node \
  @opentelemetry/api \
  @opentelemetry/auto-instrumentations-node \
  @opentelemetry/sdk-metrics \
  @opentelemetry/sdk-trace-node

```

## Configuration

Next, configure the OpenTelemetry SDK to export data to an OpenTelemetry backend like APIToolkit for storage and visualization. Create a configuration file named `otel.js` for this purpose.

<section class="tab-group" data-tab-group="group1">
  <button class="tab-button" data-tab="tab1">ESM</button>
  <button class="tab-button" data-tab="tab2">CommonJs</button>
  <div id="tab1" class="tab-content">

```js
"use strict";

// Import required OpenTelemetry modules
const otel = require("@opentelemetry/api");
const { NodeSDK } = require("@opentelemetry/sdk-node");
const { Resource } = require("@opentelemetry/resources");
const { BatchSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const { OTLPTraceExporter } = require("@opentelemetry/exporter-trace-otlp-grpc");
const { ExpressInstrumentation } = require("@opentelemetry/instrumentation-express");

// Environment variables and configuration
const dsn = process.env.UPTRACE_DSN || "Warning: not set yet";
console.log("using dsn:", dsn);
const serviceName = process.env.OTEL_SERVICE_NAME || "myservice";
const projectKey = process.env.OTEL_RESOURCE_ATTRIBUTES?.split("=")?.[1] || "";

// Create an OTLP exporter for sending traces
// This uses gRPC as the transport protocol
const exporter = new OTLPTraceExporter({
  url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT, // The endpoint where traces will be sent
  headers: { "uptrace-dsn": dsn }, // Include the Uptrace DSN in headers
  compression: "gzip", // Use gzip compression for efficiency
});

// Create a batch span processor
// This batches spans before sending them to the exporter
const batchSpanProcessor = new BatchSpanProcessor(exporter, {
  maxExportBatchSize: 1000, // Maximum number of spans to send in one batch
  maxQueueSize: 1000, // Maximum number of spans to buffer in memory
});

// Initialize the OpenTelemetry SDK
const sdk = new NodeSDK({
  traceExporter: exporter, // The exporter to use for sending traces
  spanProcessor: batchSpanProcessor, // The span processor to use
  resource: new Resource({
    "service.name": serviceName, // Name of your service
    "service.version": "1.0.0", // Version of your service
    "at-project-key": projectKey, // APIToolkit project key
  }),
  instrumentations: [
    new HttpInstrumentation(), // Automatically instrument HTTP requests
    new ExpressInstrumentation(), // Automatically instrument Express.js
  ],
});

// Start the OpenTelemetry SDK
sdk.start();

// Handle shutdown of the SDK on application exit
process.on("SIGTERM", () => {
  sdk
    .shutdown()
    .then(() => console.log("SDK shut down successfully"))
    .catch(error => console.log("Error shutting down SDK", error))
    .finally(() => process.exit(0));
});
```

</div>
  <div id="tab2" class="tab-content">
  
```js
// Import required OpenTelemetry modules
import otel from "@opentelemetry/api";
import { NodeSDK } from "@opentelemetry/sdk-node";
import { Resource } from "@opentelemetry/resources";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-base";
import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { ExpressInstrumentation } from "@opentelemetry/instrumentation-express";

// Environment variables and configuration
const dsn = process.env.UPTRACE_DSN || "Warning: not set yet";
console.log("using dsn:", dsn);
const serviceName = process.env.OTEL_SERVICE_NAME || "myservice";
const projectKey = process.env.OTEL_RESOURCE_ATTRIBUTES?.split("=")?.[1] || "";

// Create an OTLP exporter for sending traces
// This uses gRPC as the transport protocol
const exporter = new OTLPTraceExporter({
url: process.env.OTEL_EXPORTER_OTLP_ENDPOINT, // The endpoint where traces will be sent
headers: { "uptrace-dsn": dsn }, // Include the Uptrace DSN in headers
compression: "gzip", // Use gzip compression for efficiency
});

// Create a batch span processor
// This batches spans before sending them to the exporter
const batchSpanProcessor = new BatchSpanProcessor(exporter, {
maxExportBatchSize: 1000, // Maximum number of spans to send in one batch
maxQueueSize: 1000, // Maximum number of spans to buffer in memory
});

// Initialize the OpenTelemetry SDK
const sdk = new NodeSDK({
traceExporter: exporter, // The exporter to use for sending traces
spanProcessor: batchSpanProcessor, // The span processor to use
resource: new Resource({
"service.name": serviceName, // Name of your service
"service.version": "1.0.0", // Version of your service
"at-project-key": projectKey, // APIToolkit project key
}),
instrumentations: [
new HttpInstrumentation(), // Automatically instrument HTTP requests
new ExpressInstrumentation(), // Automatically instrument Express.js
],
});

// Start the OpenTelemetry SDK
sdk.start();

// Handle shutdown of the SDK on application exit
process.on("SIGTERM", () => {
sdk
.shutdown()
.then(() => console.log("SDK shut down successfully"))
.catch((error) => console.log("Error shutting down SDK", error))
.finally(() => process.exit(0));
});

export default sdk;

````
  </div>
</section>


## Environment Variables

Your `.env` file will typically contain the following environment variables:

```.env
OTEL_SERVICE_NAME={YOUR_SERVICE_NAME}
OTEL_TRACES_EXPORTER={EXPORTER_TYPE}
OTEL_LOGS_EXPORTER={EXPORTER_TYPE}
OTEL_RESOURCE_ATTRIBUTES={YOUR_PROJECT_KEY}
OTEL_EXPORTER_OTLP_PROTOCOL={PROTOCOL}
OTEL_EXPORTER_OTLP_ENDPOINT=http://otelcol.apitoolkit.io:4317
OTEL_PROPAGATORS={PROPAGATORS_LIST}
````

## Best Practices

In the configuration above, **only the `apiKey` option is required**, but you can add the following optional fields:

{class="docs-table"}
:::
| Option | Description |
| ------ | ----------- |
| `debug` | Set to `true` to enable debug mode. |
| `tags` | A list of defined tags for your services (used for grouping and filtering data on the dashboard). |
| `serviceVersion` | A defined string version of your application (used for further debugging on the dashboard). |
| `ignoreEndpoints` | A list of endpoints that should not be captured. |
| `redactHeaders` | A list of HTTP header keys to redact. |
| `redactResponseBody` | A list of JSONPaths from the request body to redact. |
| `redactRequestBody` | A list of JSONPaths from the response body to redact. |
:::

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <ul>
  <li> 
   Place the OpenTelemetry initialization code in a separate file (e.g., `otel.js`) for better organization and maintainability 
  </li>
  </ul>
</div>

<div class="callout callout-red">
  <p><i class="fa-solid fa-triangle-exclamation"></i> <b>Warning</b></p>
  <ul>
  <li> - Use the `--require` flag to load the tracing code before the application code:

For JavaScript:

```bash
node --require ./otel.js app.js
```

For TypeScript:

```bash
ts-node --require ./otel.ts app.ts
```

  <li>
  </ul>
</div>

## APIToolkit

APIToolkit is a monitoring and observability software that helps you find production issues so you can fix them before your customers notice. You can use it to observe, debug, and monitor backend systems or any third-party APIs with advanced error and breaking change detection in APIs.

By integrating OpenTelemetry with Express.js and APIToolkit, you gain comprehensive insights into your application's performance, making it easier to identify and resolve issues quickly.
