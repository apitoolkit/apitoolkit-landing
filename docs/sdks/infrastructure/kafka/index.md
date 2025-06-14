---
title: Integrating APItoolkit with Kafka
ogTitle: How to Monitor Kafka Producers and Consumers with APItoolkit using OpenTelemetry
faLogo: message-lines
date: 2024-06-14
updatedDate: 2024-06-14
linkTitle: "Kafka"
menuWeight: 40
---

# Integrating APItoolkit with Kafka

This guide demonstrates how to integrate APItoolkit with Kafka producers and consumers using OpenTelemetry for comprehensive API monitoring.

```=html
<hr>
```

## Prerequisites

- Apache Kafka cluster
- Kafka client application (producer/consumer)
- APItoolkit account with an API key

## Setting Up OpenTelemetry for Kafka

### 1. Configure Environment Variables

Set up OpenTelemetry environment variables in your Kafka client application environment:

```bash
# Specifies the endpoint URL for the OpenTelemetry collector
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"

# Specifies the name of the service
export OTEL_SERVICE_NAME="kafka-client-service"

# Adds your API KEY to the resource
export OTEL_RESOURCE_ATTRIBUTES="at-project-key=YOUR_API_KEY"

# Specifies the protocol to use for the OpenTelemetry exporter
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"
```

Replace `YOUR_API_KEY` with your actual APItoolkit project key.

### 2. Instrument Kafka Producers

#### Java Example

```java
import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import org.apache.kafka.clients.producer.*;

public class KafkaProducerExample {
    private final Tracer tracer = GlobalOpenTelemetry.getTracer("kafka-producer-instrumentation");
    private final Producer<String, String> producer;

    public KafkaProducerExample() {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("key.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        props.put("value.serializer", "org.apache.kafka.common.serialization.StringSerializer");
        
        producer = new KafkaProducer<>(props);
    }

    public void sendMessage(String topic, String key, String value) {
        Span span = tracer.spanBuilder("kafka.produce").startSpan();
        try {
            span.setAttribute("messaging.system", "kafka");
            span.setAttribute("messaging.destination", topic);
            span.setAttribute("messaging.destination_kind", "topic");
            span.setAttribute("messaging.kafka.key", key);
            
            ProducerRecord<String, String> record = new ProducerRecord<>(topic, key, value);
            
            producer.send(record, (metadata, exception) -> {
                if (exception != null) {
                    span.recordException(exception);
                } else {
                    span.setAttribute("messaging.kafka.partition", metadata.partition());
                    span.setAttribute("messaging.kafka.offset", metadata.offset());
                }
            });
        } finally {
            span.end();
        }
    }
}
```

### 3. Instrument Kafka Consumers

#### Java Example

```java
import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import org.apache.kafka.clients.consumer.*;

public class KafkaConsumerExample {
    private final Tracer tracer = GlobalOpenTelemetry.getTracer("kafka-consumer-instrumentation");
    private final Consumer<String, String> consumer;

    public KafkaConsumerExample() {
        Properties props = new Properties();
        props.put("bootstrap.servers", "localhost:9092");
        props.put("group.id", "test-group");
        props.put("key.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        props.put("value.deserializer", "org.apache.kafka.common.serialization.StringDeserializer");
        
        consumer = new KafkaConsumer<>(props);
        consumer.subscribe(Arrays.asList("test-topic"));
    }

    public void consumeMessages() {
        while (true) {
            ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100));
            
            for (ConsumerRecord<String, String> record : records) {
                Span span = tracer.spanBuilder("kafka.consume").startSpan();
                try {
                    span.setAttribute("messaging.system", "kafka");
                    span.setAttribute("messaging.destination", record.topic());
                    span.setAttribute("messaging.destination_kind", "topic");
                    span.setAttribute("messaging.kafka.key", record.key());
                    span.setAttribute("messaging.kafka.partition", record.partition());
                    span.setAttribute("messaging.kafka.offset", record.offset());
                    
                    // Process the record
                    processRecord(record);
                } catch (Exception e) {
                    span.recordException(e);
                    throw e;
                } finally {
                    span.end();
                }
            }
        }
    }

    private void processRecord(ConsumerRecord<String, String> record) {
        // Your message processing logic here
    }
}
```

## Using Kafka Interceptors with OpenTelemetry

Kafka also supports interceptors that can be used to automatically add OpenTelemetry instrumentation:

### Producer Interceptor

```java
import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import org.apache.kafka.clients.producer.ProducerInterceptor;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;

import java.util.Map;

public class OpenTelemetryProducerInterceptor implements ProducerInterceptor<String, String> {
    private Tracer tracer;

    @Override
    public void configure(Map<String, ?> configs) {
        tracer = GlobalOpenTelemetry.getTracer("kafka-producer-interceptor");
    }

    @Override
    public ProducerRecord<String, String> onSend(ProducerRecord<String, String> record) {
        Span span = tracer.spanBuilder("kafka.produce").startSpan();
        span.setAttribute("messaging.system", "kafka");
        span.setAttribute("messaging.destination", record.topic());
        span.setAttribute("messaging.kafka.key", record.key());
        
        // Store span context in record headers
        // Implementation details omitted for brevity
        
        span.end();
        return record;
    }

    @Override
    public void onAcknowledgement(RecordMetadata metadata, Exception exception) {
        // Handle acknowledgment with metrics
    }

    @Override
    public void close() {
        // Cleanup resources
    }
}
```

Add the interceptor to your Kafka producer configuration:

```java
Properties props = new Properties();
// ... other configuration
props.put("interceptor.classes", "com.example.OpenTelemetryProducerInterceptor");
```

## Using the OpenTelemetry Kafka Instrumentation Library

For automatic instrumentation, you can use the OpenTelemetry Kafka instrumentation library:

### Maven Dependency

```xml
<dependency>
    <groupId>io.opentelemetry.instrumentation</groupId>
    <artifactId>opentelemetry-kafka-clients-2.6</artifactId>
    <version>1.29.0-alpha</version>
</dependency>
```

### Gradle Dependency

```groovy
implementation 'io.opentelemetry.instrumentation:opentelemetry-kafka-clients-2.6:1.29.0-alpha'
```

## Verifying the Setup

After setting up OpenTelemetry with your Kafka applications:

1. Send and receive a few test messages through your Kafka topics

2. Check your APItoolkit dashboard to see the incoming telemetry data from your Kafka clients

3. Look for metrics such as:
   - Message production and consumption rates
   - Message processing time
   - Error rates

## Next Steps

- Set up alerting in APItoolkit for Kafka performance issues
- Configure custom metrics for specific Kafka monitoring needs
- Correlate Kafka telemetry with other services in your architecture