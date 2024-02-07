---
title: Elixir Phoenix
date: 2024-05-2
publishdate: 2024-05-2
toc: true
weight: 20
menu:
  main:
    weight: 20
---

APIToolkit SDK for Elixir Phoenix.

## Installation

Install the SDK by adding `apitoolkit_phoenix` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:apitoolkit_phoenix, "~> 0.1.1"}
  ]
end
```

Run `mix deps.get` to install the `apitoolkit_phoenix` dependency.

Import and initialize the `ApitoolkitPhoenix` Plug in your `router.ex` file.

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

Some information is best kept private. Our Phoenix client supports redaction right on your servers. This means sensitive data like passwords or credit card numbers never leave your premises. To mark fields that should be redacted, add them to the APIToolkit config map. Here’s how you do it:

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
        redact_headers: ["accept-language", "cookie", "x-csrf-token"]
      }
  end
end
```

## Redacting Request and Response bodies

The phoenix sdk doesn't support redacting request and response bodies yet. You can however redact request and response bodies from you APIToolkit dashboard
by going to app.apitoolkit.io/p/<YOUR_PROJECT_ID>/redacted_fields

## Reporting Errors

If you’ve used Sentry, Bugsnag, or Rollbar, then you’re already familiar with this use case. But you can report an error to APIToolkit. A difference is that errors are always associated with a parent request, helping you query and associate the errors which occurred while serving a given customer request. To report errors to APIToolkit, use the `report_error` method of the `ApitoolkitPhoenix` module.

To automatically report all uncaught exceptions, call the `report_error` function passing it the connection and the error in the `handle_errors` function.

```elixir
@impl Plug.ErrorHandler
def handle_errors(conn, err) do
  conn = report_error(conn, err)
  json(conn, %{message: "Something went wrong"})
end
```

You can also report errors manually by calling `report_error` from anywhere within a controller, also passing it the connection, the error and `__STACKTRACE__`.

Example:

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
