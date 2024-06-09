---
title: Phoenix
ogTitle: Phoenix SDK Guide
date: 2022-03-23
updatedDate: 2024-06-08
menuWeight: 1
---

# Phoenix SDK Guide

To integrate your Elixir Phoenix application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of APItoolkit's **Phoenix SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.

## Installation

To install the SDK, kindly add `apitoolkit_phoenix` to the list of dependencies in the `mix.exs` file like so:

```elixir
def deps do
  [
    {:apitoolkit_phoenix, "~> 0.1.1"}
  ]
end
```

Then, run the `mix deps.get` command to install the `apitoolkit_phoenix` dependency.

## Configuration

Next, import and initialize the `ApitoolkitPhoenix` Plug in your `router.ex` file like so:

```elixir
defmodule HelloWeb.Router do
  use HelloWeb, :router
  use Plug.ErrorHandler
  import ApitoolkitPhoenix

  pipeline :api do
    plug :accepts, ["json"]
    plug ApitoolkitPhoenix,
      config: %{
        api_key: "{ENTER_YOUR_API_KEY_HERE}",
      }
    # Other plugs...
  end
end
```

<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>The `{ENTER_YOUR_API_KEY_HERE}` demo string should be replaced with the API key generated from the APItoolkit dashboard.</p>
</div>

## Redacting Sensitive Data

If you have fields that are sensitive and should not be sent to APItoolkit servers, you can mark those fields to be redacted  (the fields will never leave your servers).

To mark a field for redacting via this SDK, you need to provide additional arguments to the `config` key with paths to the fields that should be redacted. There are three arguments you can provide to configure what gets redacted, namely:

1. `redact_headers`:  A list of HTTP header keys.
2. `redact_request_body`: A list of JSONPaths from the request body.
3. `redact_response_body`: A list of JSONPaths from the response body.

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

```elixir
defmodule HelloWeb.Router do
  use HelloWeb, :router
  use Plug.ErrorHandler
  import ApitoolkitPhoenix

  pipeline :api do
    plug :accepts, ["json"]
    # Other plugs
    plug ApitoolkitPhoenix,
      config: %{
        api_key: "{ENTER_YOUR_API_KEY_HERE}",
        redact_headers: ["accept-language", "cookie", "x-csrf-token"]
        redact_request_body: ["$.user.email", "$.user.addresses"]
        redact_response_body: ["$.users[*].email", "$.users[*].credit_card"]
      }
  end
end
```

<div class="callout">
  <p><i class="fa-regular fa-circle-info"></i> <b>Note</b></p>
  <ul>
    <li>The `redact_headers` config field expects a list of <b>case-insensitive headers as strings</b>.</li>
    <li>The `redact_request_body` and `redact_response_body` config fields expect a list of <b>JSONPaths as strings</b>.</li>
    <li>The list of items to be redacted will be applied to all endpoint requests and responses on your server.</li>
  </ul>
</div>

## Error Reporting

APItoolkit detects different API issues and anomalies automatically but you can report and track specific errors at different parts of your application. This will help you associate more detail and context from your backend with any failing customer request.

To report errors and uncaught exceptions, use the `report_error()` method, passing in the `connection` and `error` arguments in the `handle_errors` function like so:

```elixir
@impl Plug.ErrorHandler
def handle_errors(conn, err) do
  conn = report_error(conn, err)
  json(conn, %{message: "Something went wrong!"})
end
```

To report errors manually, call the `report_error()` method anywhere within a controller, also passing in the `connection`, `error`, and `__STACKTRACE__` arguments like so:

```elixir
defmodule HelloWeb.PageController do
  use HelloWeb, :controller
  import ApitoolkitPhoenix

  def home(conn, _params) do
    try do
      raise("Oops, something went wrong!")
    rescue
      err ->
        # Report the error to APItoolkit
        report_error(conn, err, __STACKTRACE__)
    end

    json(conn, %{message: "Hello, world!"})
  end
end
```

```=html
<hr />
<a href="https://github.com/apitoolkit/apitoolkit-phoenix" target="_blank" rel="noopener noreferrer" class="w-full btn btn-outline link link-hover">
    <i class="fa-brands fa-github"></i>
    Explore the Phoenix SDK
</a>
```