---
title: Integrating APItoolkit on Linux
ogTitle: How to Integrate APItoolkit on Linux Systems using OpenTelemetry
faLogo: linux
date: 2024-06-14
updatedDate: 2024-06-14
linkTitle: "Linux"
menuWeight: 30
---

# Integrating APItoolkit on Linux

This guide covers how to integrate APItoolkit with applications running on Linux systems using OpenTelemetry.

## Prerequisites

- Linux server (Ubuntu, Debian, CentOS, etc.)
- Root or sudo access
- APItoolkit account with an API key

## Setting Up OpenTelemetry Environment Variables

### 1. Configure System-Wide Environment Variables

You can set OpenTelemetry environment variables system-wide by adding them to `/etc/environment` or `/etc/profile.d/`:

Create a new file `/etc/profile.d/otel-apitoolkit.sh`:

```bash
#!/bin/bash

# Specifies the endpoint URL for the OpenTelemetry collector
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"

# Specifies the name of the service
export OTEL_SERVICE_NAME="your-service-name"

# Adds your API KEY to the resource
export OTEL_RESOURCE_ATTRIBUTES="at-project-key=YOUR_API_KEY"

# Specifies the protocol to use for the OpenTelemetry exporter
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"
```

Make it executable and apply changes:

```bash
sudo chmod +x /etc/profile.d/otel-apitoolkit.sh
source /etc/profile.d/otel-apitoolkit.sh
```

### 2. Configure Environment Variables for a Specific User

Add the OpenTelemetry environment variables to the user's profile:

```bash
echo '# APItoolkit OpenTelemetry Configuration
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"
export OTEL_SERVICE_NAME="your-service-name"
export OTEL_RESOURCE_ATTRIBUTES="at-project-key=YOUR_API_KEY"
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"' >> ~/.bashrc

source ~/.bashrc
```

## Setting Up as a Systemd Service

If your application runs as a systemd service, you can add the environment variables to your service definition:

1. Create or edit your service file (e.g., `/etc/systemd/system/your-app.service`):

```ini
[Unit]
Description=Your Application Service
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/path/to/your/app
ExecStart=/path/to/your/app/start-command

# OpenTelemetry Configuration
Environment="OTEL_EXPORTER_OTLP_ENDPOINT=http://otelcol.apitoolkit.io:4317"
Environment="OTEL_SERVICE_NAME=your-service-name"
Environment="OTEL_RESOURCE_ATTRIBUTES=at-project-key=YOUR_API_KEY"
Environment="OTEL_EXPORTER_OTLP_PROTOCOL=grpc"

Restart=always

[Install]
WantedBy=multi-user.target
```

2. Reload systemd and restart your service:

```bash
sudo systemctl daemon-reload
sudo systemctl restart your-app.service
```

## Using OpenTelemetry Collector on Linux

For more control, you can install the OpenTelemetry Collector on your Linux system:

1. Download the OpenTelemetry Collector:

```bash
wget https://github.com/open-telemetry/opentelemetry-collector-releases/releases/download/v0.88.0/otelcol-contrib_0.88.0_linux_amd64.tar.gz
tar -xzf otelcol-contrib_0.88.0_linux_amd64.tar.gz
sudo mv otelcol-contrib /usr/local/bin/
```

2. Create a configuration file at `/etc/otel-collector-config.yaml`:

```yaml
receivers:
  otlp:
    protocols:
      grpc:
      http:

processors:
  batch:
    timeout: 1s

exporters:
  otlp:
    endpoint: "otelcol.apitoolkit.io:4317"
    tls:
      insecure: true
    headers:
      "X-APItoolkit-Key": "YOUR_API_KEY"

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

3. Create a systemd service for the collector:

```bash
sudo tee /etc/systemd/system/otel-collector.service > /dev/null << 'EOF'
[Unit]
Description=OpenTelemetry Collector
After=network.target

[Service]
ExecStart=/usr/local/bin/otelcol-contrib --config=/etc/otel-collector-config.yaml
Restart=always
User=root
Group=root

[Install]
WantedBy=multi-user.target
EOF
```

4. Start the service:

```bash
sudo systemctl daemon-reload
sudo systemctl enable otel-collector
sudo systemctl start otel-collector
```

5. Configure your application to send telemetry to the local collector:

```bash
export OTEL_EXPORTER_OTLP_ENDPOINT="http://localhost:4317"
export OTEL_SERVICE_NAME="your-service-name"
```

## Verifying the Setup

To verify that your setup is working correctly:

1. Check the status of the OpenTelemetry Collector (if installed):
   ```bash
   sudo systemctl status otel-collector
   ```

2. View collector logs:
   ```bash
   sudo journalctl -u otel-collector
   ```

3. Verify your application logs for any OpenTelemetry-related messages.

4. Check your APItoolkit dashboard to see incoming data.

## Next Steps

- Set up automated system-level monitoring alongside API monitoring
- Create cron jobs to periodically verify the collector is running
- Implement log forwarding to correlate system logs with API telemetry