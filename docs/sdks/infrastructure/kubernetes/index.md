---
title: Integrating APItoolkit with Kubernetes
ogTitle: How to Integrate APItoolkit with Kubernetes using OpenTelemetry Collector
faLogo: cube
date: 2024-06-14
updatedDate: 2024-06-14
linkTitle: "Kubernetes"
menuWeight: 10
---

# Integrating APItoolkit with Kubernetes

This guide demonstrates how to integrate APItoolkit with Kubernetes using the OpenTelemetry Collector for infrastructure-level API monitoring and observability without requiring code changes to your applications.

```=html
<hr>
```

## Prerequisites

- A Kubernetes cluster
- `kubectl` CLI tool installed
- Helm (optional, but recommended)
- APItoolkit account with an API key

## Deploying the OpenTelemetry Collector

There are several approaches to deploy the OpenTelemetry Collector in Kubernetes. We'll cover the most common ones.

### Option 1: Using the OpenTelemetry Operator

The OpenTelemetry Operator provides a Kubernetes-native way to deploy and manage the OpenTelemetry Collector.

1. Install the OpenTelemetry Operator:

```bash
kubectl apply -f https://github.com/open-telemetry/opentelemetry-operator/releases/latest/download/opentelemetry-operator.yaml
```

2. Create a file named `otel-collector.yaml`:

```yaml
apiVersion: opentelemetry.io/v1alpha1
kind: OpenTelemetryCollector
metadata:
  name: apitoolkit-collector
spec:
  mode: deployment
  config: |
    receivers:
      # Kubernetes metrics receiver
      k8s_cluster:
        collection_interval: 10s
      
      # OTLP receiver for any instrumented services
      otlp:
        protocols:
          grpc:
            endpoint: 0.0.0.0:4317
          http:
            endpoint: 0.0.0.0:4318
      
      # Prometheus receiver for scraping Kubernetes metrics
      prometheus:
        config:
          scrape_configs:
            - job_name: 'kubernetes-apiservers'
              kubernetes_sd_configs:
              - role: endpoints
              scheme: https
              tls_config:
                ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
                insecure_skip_verify: true
              bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
              relabel_configs:
              - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
                action: keep
                regex: default;kubernetes;https

    processors:
      batch:
      memory_limiter:
        check_interval: 1s
        limit_mib: 4000
        spike_limit_mib: 800
      resourcedetection:
        detectors: [env, k8s]
        override: false
      resource:
        attributes:
          - key: at-project-key
            value: YOUR_API_KEY
            action: upsert

    exporters:
      otlp:
        endpoint: "otelcol.apitoolkit.io:4317"
        tls:
          insecure: true

    service:
      pipelines:
        traces:
          receivers: [otlp]
          processors: [memory_limiter, batch, resourcedetection, resource]
          exporters: [otlp]
        metrics:
          receivers: [otlp, k8s_cluster, prometheus]
          processors: [memory_limiter, batch, resourcedetection, resource]
          exporters: [otlp]
        logs:
          receivers: [otlp]
          processors: [memory_limiter, batch, resourcedetection, resource]
          exporters: [otlp]
```

Replace `YOUR_API_KEY` with your actual APItoolkit project key.

3. Apply the collector configuration:

```bash
kubectl apply -f otel-collector.yaml
```

### Option 2: Using Helm

1. Add the OpenTelemetry Helm repository:

```bash
helm repo add open-telemetry https://open-telemetry.github.io/opentelemetry-helm-charts
helm repo update
```

2. Create a `values.yaml` file:

```yaml
mode: deployment

config:
  receivers:
    k8s_cluster:
      collection_interval: 10s
    
    otlp:
      protocols:
        grpc:
          endpoint: 0.0.0.0:4317
        http:
          endpoint: 0.0.0.0:4318
    
    prometheus:
      config:
        scrape_configs:
          - job_name: 'kubernetes-apiservers'
            kubernetes_sd_configs:
            - role: endpoints
            scheme: https
            tls_config:
              ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
              insecure_skip_verify: true
            bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
            relabel_configs:
            - source_labels: [__meta_kubernetes_namespace, __meta_kubernetes_service_name, __meta_kubernetes_endpoint_port_name]
              action: keep
              regex: default;kubernetes;https
  
  processors:
    batch: {}
    memory_limiter:
      check_interval: 1s
      limit_mib: 4000
      spike_limit_mib: 800
    resourcedetection:
      detectors: [env, k8s]
      override: false
    resource:
      attributes:
        - key: at-project-key
          value: YOUR_API_KEY
          action: upsert
  
  exporters:
    otlp:
      endpoint: "otelcol.apitoolkit.io:4317"
      tls:
        insecure: true
  
  service:
    pipelines:
      traces:
        receivers: [otlp]
        processors: [memory_limiter, batch, resourcedetection, resource]
        exporters: [otlp]
      metrics:
        receivers: [otlp, k8s_cluster, prometheus]
        processors: [memory_limiter, batch, resourcedetection, resource]
        exporters: [otlp]
      logs:
        receivers: [otlp]
        processors: [memory_limiter, batch, resourcedetection, resource]
        exporters: [otlp]

serviceAccount:
  create: true
  annotations:
    {}
  name: "otel-collector"

rbac:
  create: true
```

3. Install the OpenTelemetry Collector using Helm:

```bash
helm install apitoolkit-collector open-telemetry/opentelemetry-collector --values values.yaml
```

## Monitoring Kubernetes API Services

To monitor your Kubernetes API services without code changes, you can deploy the collector with service monitoring capabilities:

### Using a DaemonSet for Infrastructure Monitoring

Create a file named `otel-daemonset.yaml`:

```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: otel-collector
  labels:
    app: otel-collector
spec:
  selector:
    matchLabels:
      app: otel-collector
  template:
    metadata:
      labels:
        app: otel-collector
    spec:
      serviceAccountName: otel-collector
      containers:
      - name: otel-collector
        image: otel/opentelemetry-collector-contrib:latest
        args:
        - "--config=/conf/otel-collector-config.yaml"
        volumeMounts:
        - name: otel-collector-config
          mountPath: /conf
        - name: varlogpods
          mountPath: /var/log/pods
          readOnly: true
        - name: varlibdockercontainers
          mountPath: /var/lib/docker/containers
          readOnly: true
        env:
        - name: K8S_NODE_NAME
          valueFrom:
            fieldRef:
              fieldPath: spec.nodeName
        - name: APITOOLKIT_API_KEY
          valueFrom:
            secretKeyRef:
              name: apitoolkit-secrets
              key: api-key
      volumes:
      - name: otel-collector-config
        configMap:
          name: otel-collector-config
      - name: varlogpods
        hostPath:
          path: /var/log/pods
      - name: varlibdockercontainers
        hostPath:
          path: /var/lib/docker/containers
```

Create a ConfigMap for the collector configuration:

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: otel-collector-config
data:
  otel-collector-config.yaml: |
    receivers:
      # Collect Kubernetes logs
      filelog:
        include: [/var/log/pods/*/*/*/*.log]
        exclude: []
        start_at: beginning
        operators:
          - type: regex_parser
            regex: '^(?P<time>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d+Z) (?P<stream>stdout|stderr) (?P<logtag>[^ ]*) ?(?P<log>.*)$'
            timestamp:
              parse_from: time
              layout: '%Y-%m-%dT%H:%M:%S.%LZ'
            output: extract_metadata_from_filepath
          - type: regex_parser
            id: extract_metadata_from_filepath
            regex: '^.*\/(?P<namespace>[^_]+)_(?P<pod_name>[^_]+)_(?P<uid>[a-f0-9\-]+)\/(?P<container_name>[^\._]+)\/(?P<restart_count>\d+).log$'
            parse_from: attributes["log.file.path"]
          - type: resource
            resource:
              k8s.namespace.name: EXPR(attributes.namespace)
              k8s.pod.name: EXPR(attributes.pod_name)
              k8s.container.name: EXPR(attributes.container_name)
            output: extract_metadata_to_body

      # Collect Kubernetes API server metrics
      k8s_cluster:
        collection_interval: 10s
        node_conditions_to_report: [Ready, MemoryPressure, DiskPressure, NetworkUnavailable]
        allocatable_types_to_report: [cpu, memory, storage]
      
      # Collect metrics from kubelet
      kubeletstats:
        collection_interval: 10s
        auth_type: "serviceAccount"
        endpoint: "${K8S_NODE_NAME}:10250"
        insecure_skip_verify: true
        metric_groups:
          - container
          - pod
          - node
        extra_metadata_labels:
          - container.id
          - k8s.volume.type
      
      # Standard OTLP receiver for any instrumented applications
      otlp:
        protocols:
          grpc:
            endpoint: 0.0.0.0:4317
          http:
            endpoint: 0.0.0.0:4318

    processors:
      batch:
      memory_limiter:
        check_interval: 1s
        limit_mib: 4000
        spike_limit_mib: 800
      k8sattributes:
        auth_type: "serviceAccount"
        passthrough: false
        filter:
          node_from_env_var: K8S_NODE_NAME
        extract:
          metadata:
            - k8s.pod.name
            - k8s.pod.uid
            - k8s.deployment.name
            - k8s.namespace.name
            - k8s.node.name
            - k8s.container.name
            - container.image.name
      resourcedetection:
        detectors: [env, k8s]
        override: false
      resource:
        attributes:
          - key: at-project-key
            value: ${env:APITOOLKIT_API_KEY}
            action: upsert

    exporters:
      otlp:
        endpoint: "otelcol.apitoolkit.io:4317"
        tls:
          insecure: true

    service:
      pipelines:
        traces:
          receivers: [otlp]
          processors: [k8sattributes, memory_limiter, batch, resourcedetection, resource]
          exporters: [otlp]
        metrics:
          receivers: [otlp, kubeletstats, k8s_cluster]
          processors: [k8sattributes, memory_limiter, batch, resourcedetection, resource]
          exporters: [otlp]
        logs:
          receivers: [filelog, otlp]
          processors: [k8sattributes, memory_limiter, batch, resourcedetection, resource]
          exporters: [otlp]
```

Create the required RBAC permissions:

```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: otel-collector
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: otel-collector
rules:
- apiGroups: [""]
  resources:
  - nodes
  - nodes/stats
  - nodes/metrics
  - services
  - endpoints
  - pods
  verbs: ["get", "list", "watch"]
- apiGroups: ["extensions", "apps"]
  resources:
  - deployments
  - replicasets
  - daemonsets
  - statefulsets
  verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: otel-collector
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: otel-collector
subjects:
- kind: ServiceAccount
  name: otel-collector
  namespace: default
```

Apply the configurations:

```bash
kubectl apply -f otel-collector-config.yaml
kubectl apply -f otel-collector-rbac.yaml
kubectl apply -f otel-daemonset.yaml
```

Create a secret for the APItoolkit API key:

```bash
kubectl create secret generic apitoolkit-secrets --from-literal=api-key=YOUR_API_KEY
```

## Monitoring API Gateways and Ingresses

For monitoring Kubernetes API gateways (like Kong, Istio, or Ambassador) or Ingress controllers:

1. Deploy the OpenTelemetry Collector as shown above

2. Configure your API gateway to emit metrics or logs in a format the collector can ingest

For example, with Nginx Ingress Controller, add these annotations:

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: example-ingress
  annotations:
    nginx.ingress.kubernetes.io/enable-opentelemetry: "true"
    nginx.ingress.kubernetes.io/opentelemetry-collector-host: "otel-collector.default.svc.cluster.local"
    nginx.ingress.kubernetes.io/opentelemetry-collector-port: "4317"
```

## Verifying the Setup

After deploying the OpenTelemetry Collector:

1. Check that the collector pods are running:
   ```bash
   kubectl get pods -l app=otel-collector
   ```

2. Check the collector logs:
   ```bash
   kubectl logs -l app=otel-collector
   ```

3. Verify in your APItoolkit dashboard that telemetry data is being received

## Next Steps

- Configure alerts in APItoolkit based on Kubernetes API metrics
- Set up custom dashboards to monitor your Kubernetes cluster health
- Correlate API performance issues with container resource usage
- Use APItoolkit insights to optimize your Kubernetes deployments and resource allocation