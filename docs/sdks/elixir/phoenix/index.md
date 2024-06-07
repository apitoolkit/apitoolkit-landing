---
title: Elixir Phoenix
date: 2022-03-23
updatedDate: 2024-06-07
menuWeight: 1
---

# Elixir SDK Guide

To integrate your Elixir Phoenix application with APItoolkit, you need to use this SDK to monitor incoming traffic, aggregate the requests, and then send them to APItoolkit's servers. Kindly follow this guide to get started and learn about all the supported features of this **Elixir SDK**.

```=html
<hr>
```

## Prerequisites

Ensure you have already completed the first three steps of the [onboarding guide](/docs/onboarding/){target="_blank"}.

## Installation

To install the SDK, kindly add `apitoolkit_phoenix` to your list of dependencies in the `mix.exs` file like so:

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
    # Other plugs
    plug ApitoolkitPhoenix,
      config: %{
        api_key: "<YOUR_API_KEY>",
      }
  end
end
```

## Redacting Sensitive Data

Some information is best kept private. Our Phoenix client supports redaction right on your servers.

This means sensitive data like passwords or credit card numbers never leave your premises.

To mark fields that should be redacted, add them to the APIToolkit config map. Here’s how you do it:

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
        api_key: "<YOUR_API_KEY>",
        redact_headers: ["accept-language", "cookie", "x-csrf-token"] # list of headers to be redacted
        redact_request_body: [".user.password", ".user.credit_card"] # list of json paths to redact from request body
        redact_response_body: [".users[*].email"] # list of json paths to redact from response body

      }
  end
end
```

## Reporting Errors

If you’ve used Sentry, Bugsnag, or Rollbar, then you’re already familiar with this use case. But you can report an error to APIToolkit.

The difference is that errors are always associated with a parent request, helping you query and associate the errors which occurred while serving a given customer request.

To report errors to APIToolkit, use the `report_error` method of the `ApitoolkitPhoenix` module.

To automatically report all uncaught exceptions, call the `report_error` function passing it the connection and the error in the `handle_errors` function.

```elixir
@impl Plug.ErrorHandler
def handle_errors(conn, err) do
  conn = report_error(conn, err)
  json(conn, %{message: "Something went wrong"})
end
```

You can also report errors manually by calling `report_error` from anywhere within a controller, also passing it the connection, the error and `__STACKTRACE__`.

Example

```elixir
defmodule HelloWeb.PageController do
  use HelloWeb, :controller
  import ApitoolkitPhoenix

  def home(conn, _params) do
    try do
      raise("Oops, something went wrong")
    rescue
      err ->
        report_error(conn, err, __STACKTRACE__)
    end

    json(conn, %{message: "Hello, world!"})
  end
end
```
