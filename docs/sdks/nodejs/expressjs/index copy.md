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

## Redacting Sensitive Data

For all examples, let's assume we start with the following span data based on the Conduit API:

```json
{
  "name": "create_article",
  "attributes": {
    "http.method": "POST",
    "http.url": "https://api.example.com/api/articles",
    "http.status_code": 200,
    "user.email": "user@example.com",
    "user.token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "article.title": "How to train your dragon",
    "article.description": "Ever wonder how?",
    "article.body": "Very carefully.",
    "article.tagList": ["dragons", "training"],
    "db.query": "INSERT INTO articles (title, description, body, author_id) VALUES (...)"
  }
}
```

### 1. Attributes Processor

Attributes Processor can be used for straightforward additions, modifications, or removals of specific attributes. It's particularly useful when you need to target individual fields for privacy or security reasons.

Say we apply the following configuration:

```yaml
processors:
  attributes/update:
    actions:
      - key: http.status_code
        action: delete
      - key: user.email
        value: "anonymous@example.com"
        action: update
      - key: http.url
        action: hash
      - key: user.token
        action: delete

service:
  pipelines:
    traces:
      processors: [attributes/update]
    metrics:
      processors: [..., attributes/update, ...]
    logs:
      processors: [..., attributes/update, ...]
```

The json sent to APIToolkit server would look like this:

```json
{
  "name": "create_article",
  "attributes": {
    "http.method": "POST",
    "http.url": "f58e3be3f5f8692cee4ebe0e4f888150", // Hashed value
    "user.email": "anonymous@example.com",
    "article.title": "How to train your dragon",
    "article.description": "Ever wonder how?",
    "article.body": "Very carefully.",
    "article.tagList": ["dragons", "training"],
    "db.query": "INSERT INTO articles (title, description, body, author_id) VALUES (...)"
  }
}
```

What we did:

- We deleted the `http.status_code` attribute to reduce unnecessary information.
- We updated the `user.email` to a generic "anonymous@example.com" to protect user privacy.
- We hashed the `http.url` to obscure the exact endpoint while still allowing for unique identification.
- We deleted the `user.token` to prevent potential security risks.

These changes demonstrate how the Attributes Processor can be used for straightforward additions, modifications, or removals of specific attributes. It's particularly useful when you need to target individual fields for privacy or security reasons.

### 2. Redaction Processor

This approach is ideal when you have a clear list of safe attributes and want to ensure that nothing else gets through. It's particularly useful for maintaining compliance with data protection regulations or for implementing strict security policies.

Say we apply the following configuration:

```yaml
processors:
  redaction:
    allow_all_keys: false
    allowed_keys:
      - http.method
      - article.title
      - article.description
      - article.tagList
    blocked_values:
      - "INSERT INTO.*" # Our DB query pattern

service:
  pipelines:
    traces:
      processors: [redaction]
```

The json sent to APIToolkit server would look like this:

```json
{
  "name": "create_article",
  "attributes": {
    "http.method": "POST",
    "article.title": "How to train your dragon",
    "article.description": "Ever wonder how?",
    "article.tagList": ["dragons", "training"],
    "db.query": "**REDACTED**"
  }
}
```

Here, we're using the Redaction Processor to implement a strict filtering policy:

- We set `allow_all_keys: false`, which means we're starting with a "deny all" approach.
- We then specifically allowed only non-sensitive fields: `http.method`, `article.title`, `article.description`, and `article.tagList`.
- We added a rule to block (redact) any values matching a database query pattern.


### 3. Transform Processor

This processor can do more than just modifying existing data - it can also derive new, potentially useful information from your spans. It's particularly powerful for enriching your data or implementing complex privacy rules that might depend on the content of your attributes.

Say we apply the following configuration:

```yaml
processors:
  transform:
    trace_statements:
      - context: span
        statements:
          - set(attributes["api.endpoint"], Concat([attributes["http.method"], " ", ParseJSON(attributes["http.url"]).path]))
          - set(attributes["article.word_count"], len(Split(attributes["article.body"], " ")))
          - replace_all_patterns(attributes["user.email"], "(?<=.{3}).(?=[^@]*?@)", "*")
          - delete_key(attributes, "user.token")
          - set(attributes["article.tags"], Join(", ", attributes["article.tagList"]))

service:
  pipelines:
    traces:
      processors: [transform]
```

The json sent to APIToolkit server would look like this:

```json
{
  "name": "create_article",
  "attributes": {
    "http.method": "POST",
    "http.url": "https://api.example.com/api/articles",
    "http.status_code": 200,
    "user.email": "use****@example.com",
    "article.title": "How to train your dragon",
    "article.description": "Ever wonder how?",
    "article.body": "Very carefully.",
    "article.tagList": ["dragons", "training"],
    "db.query": "INSERT INTO articles (title, description, body, author_id) VALUES (...)",
    "api.endpoint": "POST /api/articles",
    "article.word_count": 3,
    "article.tags": "dragons, training"
  }
}
```

The Transform Processor allows for more complex operations:

- We created a new `api.endpoint` attribute by combining the HTTP method and the URL path.
- We added an `article.word_count` by counting the words in the article body.
- We partially masked the user's email address, preserving the first three characters.
- We removed the sensitive `user.token` completely.
- We created a comma-separated string of tags from the `article.tagList` array.


Using OTTL scripts, you can process telemetry data in real time and create custom data structures that enable powerful analytics and monitoring capabilities. Visit the following OpenTelemetry’s GitHub resources to learn more:

- [OTTL Syntax](https://github.com/open-telemetry/opentelemetry-collector-contrib/blob/main/pkg/ottl/README.md)
- [OTTL Functions](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/pkg/ottl/ottlfuncs)
- [OTTL Contexts](https://github.com/open-telemetry/opentelemetry-collector-contrib/tree/main/pkg/ottl/contexts)

### Key Differences Between Each Processor

1. **Attributes Processor**: Best for simple, direct modifications to specific attributes. It's straightforward but limited in complexity.

2. **Redaction Processor**: Focused on security and compliance. It's ideal for blanket policies like "remove all except these" or "mask anything matching this pattern".

3. **Transform Processor**: Most powerful and flexible. It can perform complex operations, conditional logic, and create new attributes based on existing data. However, it requires learning OTTL syntax.

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

## Error Reporting

Every application, regardless of its complexity, is susceptible to various types of errors:

- Network connectivity issues
- Invalid user inputs
- Hidden bugs within the application code
- Integration challenges with third-party libraries

So anticipating and handling errors is crucial for creating robust, user-friendly applications.

This is especially true when integrating third-party libraries or frameworks into your existing systems. You can significantly enhance your application's error tracking and reporting capabilities by leveraging OpenTelemetry with APIToolkit.

To effectively record errors and exceptions using OpenTelemetry, follow these key steps:

1. **Retrieve the Active Span**: Obtain the currently active span in your application context.

2. **Record the Error**: Utilize OpenTelemetry's `recordError` function to log the error details.

3. **Set Span Status (Optional)**: Update the span's status code and message to provide additional context.

4. **Integrate with APIToolkit**: Ensure the recorded errors are properly forwarded to APIToolkit for comprehensive analysis and visualization.

<!-- TODO [Report All Errors] -->

### Reporting All Errors

To capture and report all errors in your application, you can use OpenTelemetry's API to record exceptions and update span statuses. Here's a basic example:

```js
const otel = require("@opentelemetry/api");

function performOperation() {
  const span = otel.trace.getSpan(otel.context.active());

  try {
    // Your operation code here
    // ...
  } catch (exc) {
    // Record the exception and update the span status
    span.recordException(exc);
    span.setStatus({
      code: otel.SpanStatusCode.ERROR,
      message: String(exc),
    });

    // You can also add custom attributes for more context
    span.setAttribute("error.type", exc.name);
    span.setAttribute("error.message", exc.message);
  }
}
```

<!-- TODO [Report Specific Errors] -->

### Reporting Specific Errors

In some cases, you might want to report specific types of errors differently. Here's an example of how you can customize error reporting based on error types:

```javascript
const otel = require("@opentelemetry/api");

function handleAPIRequest() {
  const span = otel.trace.getSpan(otel.context.active());

  try {
    // API request code here
    // ...
  } catch (error) {
    if (error instanceof NetworkError) {
      span.setAttribute("error.type", "network");
      span.setAttribute("error.connection", error.connectionDetails);
    } else if (error instanceof ValidationError) {
      span.setAttribute("error.type", "validation");
      span.setAttribute("error.fields", JSON.stringify(error.invalidFields));
    } else {
      span.setAttribute("error.type", "unknown");
    }

    span.recordException(error);
    span.setStatus({
      code: otel.SpanStatusCode.ERROR,
      message: error.message,
    });
  }
}
```

This approach allows you to:

1. Differentiate between various error types
2. Add specific attributes based on the error type
3. Provide more detailed context for each kind of error

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tips</b></p>
  <ol>
  <li>
You can track and report different kind of anomalies such as unhandled/uncaught errors, API issues in your application. It doesn't matter if they occurred at different parts in your application.
  </li>
 <li>
  It's essential to create a robust error handling system that not only catches issues but also provides the detailed insights necessary for quick resolution and continuous improvement of your application.
 </li>
  </ul>
</div>

## Monitoring Outgoing Requests

Outgoing requests are external API calls made from your application. OpenTelemetry provides powerful tools to monitor these requests which gives you insights into your application's interactions with external services.

This guide will show you how to set up monitoring for outgoing requests using OpenTelemetry.

Outgoing requests are external API calls you make from your API. By default, APItoolkit monitors all requests users make from your application and they will all appear in the [API Log Explorer](/docs/dashboard/dashboard-pages/api-log-explorer/){target="\_blank"} page. However, you can separate outgoing requests from others and explore them in the [Outgoing Integrations](/docs/dashboard/dashboard-pages/outgoing-integrations/){target="\_blank"} page, alongside the incoming request that triggered them.

<section class="tab-group" data-tab-group="group2">
  <button class="tab-button" data-tab="tab1"> All Outgoing Requests</button>
  <button class="tab-button" data-tab="tab2"> Specific Outgoing Requests</button>
  <button class="tab-button" data-tab="tab3"> Outgoing Requests [Background Jobs] </button>
  <div id="tab1" class="tab-content">

<!-- TODO [All Outgoing Request] -->

### Global Monitoring of All Outgoing Requests

To enable global monitoring of all outgoing HTTP requests, you can use the `@opentelemetry/instrumentation-http` package. This will automatically instrument all HTTP clients in your Node.js application.

```js
const opentelemetry = require("@opentelemetry/api");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const { registerInstrumentations } = require("@opentelemetry/instrumentation");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");

// Set up the tracer provider
const provider = new NodeTracerProvider();
provider.register();

// Register the HTTP instrumentation
registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation({
      // You can add custom hooks or configuration here
    }),
  ],
});

// Your application code goes here
```

This setup will automatically create spans for all outgoing HTTP requests made using Node.js's built-in http and https modules, as well as popular libraries like Axios that use these modules under the hood.

<!-- TODO [Specific Outgoing Request] -->

</div>

<div id="tab2" class="tab-content">

### Monitoring Specific Outgoing Requests

If you want more control over which requests are monitored or how they are instrumented, you can manually create spans for specific outgoing requests. Here's an example using Axios:

```js
const opentelemetry = require("@opentelemetry/api");
const axios = require("axios");

async function makeRequest(url) {
  const tracer = opentelemetry.trace.getTracer("my-service-tracer");

  const span = tracer.startSpan("outgoing_request");
  span.setAttribute("http.url", url);

  try {
    const response = await axios.get(url, {
      headers: {
        traceparent: opentelemetry.propagation.inject(
          {},
          {
            // This injects the current context into the headers
            set: (carrier, key, value) => {
              carrier[key] = value;
            },
          }
        )["traceparent"],
      },
    });

    span.setAttribute("http.status_code", response.status);
    span.end();

    return response;
  } catch (error) {
    span.recordException(error);
    span.setStatus({ code: opentelemetry.SpanStatusCode.ERROR });
    span.end();
    throw error;
  }
}
```

</div>
<div id="tab3" class="tab-content">

<!-- TODO [Specific Outgoing Request (Background Job)] -->

### Monitoring Outgoing Requests in Background Jobs

For background jobs or any context where you're not within a web request handler, you can still create spans for outgoing requests. The process is similar to the previous example:

```js
const opentelemetry = require("@opentelemetry/api");
const axios = require("axios");

async function backgroundJobWithRequest(url) {
  const tracer = opentelemetry.trace.getTracer("background-job-tracer");

  const span = tracer.startSpan("background_job_outgoing_request");
  span.setAttribute("http.url", url);

  try {
    const response = await axios.get(url, {
      headers: {
        traceparent: opentelemetry.propagation.inject(
          {},
          {
            set: (carrier, key, value) => {
              carrier[key] = value;
            },
          }
        )["traceparent"],
      },
    });

    span.setAttribute("http.status_code", response.status);
    span.end();

    return response;
  } catch (error) {
    span.recordException(error);
    span.setStatus({ code: opentelemetry.SpanStatusCode.ERROR });
    span.end();
    throw error;
  }
}
```

</div>

This is how to effectively monitor outgoing requests in various contexts using OpenTelemetry. I hope that following this guide will provide you with valuable insights into your application's external interactions, and help you identify and troubleshoot issues more effectively.