---
title: Integrating APItoolkit with Kubernetes
ogTitle: How to Integrate APItoolkit with Kubernetes using OpenTelemetry
faLogo: cube
date: 2024-06-14
updatedDate: 2024-06-14
linkTitle: "Kubernetes"
menuWeight: 10
---

# Integrating APItoolkit with Kubernetes

This guide demonstrates how to integrate APItoolkit with Kubernetes using OpenTelemetry for API monitoring and observability.

```=html
<hr>
```

## Prerequisites

- A Kubernetes cluster
- `kubectl` CLI tool installed
- APItoolkit account with an API key

## Setup OpenTelemetry in Kubernetes

### 1. Create ConfigMap for OpenTelemetry Environment Variables

Create a file named `otel-configmap.yaml`:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: otel-config
data:
  OTEL_EXPORTER_OTLP_ENDPOINT: "http://otelcol.apitoolkit.io:4317"
  OTEL_SERVICE_NAME: "your-service-name"
  OTEL_RESOURCE_ATTRIBUTES: "at-project-key=YOUR_API_KEY"
  OTEL_EXPORTER_OTLP_PROTOCOL: "grpc"
```

Replace `YOUR_API_KEY` with your actual APItoolkit project key.

### 2. Apply the ConfigMap

```bash
kubectl apply -f otel-configmap.yaml
```

### 3. Update Your Deployment to Use the ConfigMap

Modify your application deployment to include the OpenTelemetry environment variables:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: your-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: your-app
  template:
    metadata:
      labels:
        app: your-app
    spec:
      containers:
      - name: your-app
        image: your-app-image:tag
        envFrom:
        - configMapRef:
            name: otel-config
```

### 4. Apply the Updated Deployment

```bash
kubectl apply -f your-deployment.yaml
```

## OpenTelemetry Collector Sidecar (Alternative Approach)

For more advanced setups, you can deploy the OpenTelemetry Collector as a sidecar container:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: your-app
spec:
  replicas: 1
  selector:
    matchLabels:
      app: your-app
  template:
    metadata:
      labels:
        app: your-app
    spec:
      containers:
      - name: your-app
        image: your-app-image:tag
        env:
        - name: OTEL_EXPORTER_OTLP_ENDPOINT
          value: "http://localhost:4317"
        - name: OTEL_SERVICE_NAME
          value: "your-service-name"
        
      - name: otel-collector
        image: otel/opentelemetry-collector:latest
        args:
        - "--config=/conf/otel-collector-config.yaml"
        volumeMounts:
        - name: otel-collector-config
          mountPath: /conf
        env:
        - name: OTEL_RESOURCE_ATTRIBUTES
          value: "at-project-key=YOUR_API_KEY"
      
      volumes:
      - name: otel-collector-config
        configMap:
          name: otel-collector-config
```

## Verifying the Setup

After deploying your application with OpenTelemetry configuration:

1. Check that your pods are running correctly:
   ```bash
   kubectl get pods
   ```

2. View pod logs to ensure OpenTelemetry is working:
   ```bash
   kubectl logs <pod-name>
   ```

3. Check your APItoolkit dashboard to see incoming data from your Kubernetes application.

## Next Steps

- Set up Kubernetes [Horizontal Pod Autoscaler](https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/) based on API metrics
- Configure alerts in APItoolkit for critical API performance issues
- Explore APItoolkit dashboard to monitor your API performance in real-time