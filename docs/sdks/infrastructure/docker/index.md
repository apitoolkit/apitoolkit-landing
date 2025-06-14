---
title: Integrating APItoolkit with Docker
ogTitle: How to Integrate APItoolkit with Docker using OpenTelemetry
faLogo: docker
date: 2024-06-14
updatedDate: 2024-06-14
linkTitle: "Docker"
menuWeight: 20
---

# Integrating APItoolkit with Docker

This guide explains how to integrate APItoolkit with Docker containers using OpenTelemetry for API monitoring and observability.

## Prerequisites

- Docker installed on your system
- Docker Compose (optional, but recommended)
- APItoolkit account with an API key

## Integration with Docker

### Option 1: Using Environment Variables in Dockerfile

Add OpenTelemetry environment variables directly to your Dockerfile:

```dockerfile
FROM your-base-image

# ... other Dockerfile instructions

# Configure OpenTelemetry
ENV OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"
ENV OTEL_SERVICE_NAME="your-service-name"
ENV OTEL_RESOURCE_ATTRIBUTES="at-project-key=YOUR_API_KEY"
ENV OTEL_EXPORTER_OTLP_PROTOCOL="grpc"

# ... rest of your Dockerfile
```

Replace `YOUR_API_KEY` with your actual APItoolkit project key.

### Option 2: Using Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: '3'
services:
  app:
    build: .
    environment:
      - OTEL_EXPORTER_OTLP_ENDPOINT=http://otelcol.apitoolkit.io:4317
      - OTEL_SERVICE_NAME=your-service-name
      - OTEL_RESOURCE_ATTRIBUTES=at-project-key=YOUR_API_KEY
      - OTEL_EXPORTER_OTLP_PROTOCOL=grpc
```

Run your application with Docker Compose:

```bash
docker-compose up
```

### Option 3: Using Docker Run Command

If you're running containers with the `docker run` command:

```bash
docker run \
  -e OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317" \
  -e OTEL_SERVICE_NAME="your-service-name" \
  -e OTEL_RESOURCE_ATTRIBUTES="at-project-key=YOUR_API_KEY" \
  -e OTEL_EXPORTER_OTLP_PROTOCOL="grpc" \
  your-image-name
```

## Using OpenTelemetry Collector in Docker

For more advanced setups, you can use the OpenTelemetry Collector in a multi-container deployment:

```yaml
version: '3'
services:
  app:
    build: .
    environment:
      - OTEL_EXPORTER_OTLP_ENDPOINT=http://otel-collector:4317
      - OTEL_SERVICE_NAME=your-service-name
      - OTEL_EXPORTER_OTLP_PROTOCOL=grpc
    depends_on:
      - otel-collector

  otel-collector:
    image: otel/opentelemetry-collector:latest
    command: ["--config=/etc/otel-collector-config.yaml"]
    volumes:
      - ./otel-collector-config.yaml:/etc/otel-collector-config.yaml
    environment:
      - OTEL_RESOURCE_ATTRIBUTES=at-project-key=YOUR_API_KEY
```

Create an `otel-collector-config.yaml` file:

```yaml
receivers:
  otlp:
    protocols:
      grpc:
      http:

processors:
  batch:

exporters:
  otlp:
    endpoint: "otelcol.apitoolkit.io:4317"
    tls:
      insecure: true

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlp]
    metrics:
      receivers: [otlp]
      processors: [batch]
      exporters: [otlp]
```

## Verifying the Setup

After starting your Docker containers:

1. Check container logs to make sure there are no connection errors:
   ```bash
   docker logs <container_id>
   ```

2. Verify that your application is sending data to APItoolkit by checking your APItoolkit dashboard.

## Next Steps

- Configure health checks in your Docker containers
- Set up Docker container monitoring alongside API monitoring
- Use Docker labels to organize and categorize your API services