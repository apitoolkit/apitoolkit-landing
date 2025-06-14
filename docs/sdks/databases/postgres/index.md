---
title: Integrating APItoolkit with PostgreSQL
ogTitle: How to Monitor PostgreSQL Database Operations with APItoolkit using OpenTelemetry
faLogo: database
date: 2024-06-14
updatedDate: 2024-06-14
linkTitle: "PostgreSQL"
menuWeight: 10
---

# Integrating APItoolkit with PostgreSQL

This guide demonstrates how to integrate APItoolkit with PostgreSQL database operations using OpenTelemetry to monitor database performance and identify issues.

```=html
<hr>
```

## Prerequisites

- PostgreSQL database server
- Database client application
- APItoolkit account with an API key

## Setting Up OpenTelemetry for PostgreSQL

### 1. Configure Environment Variables

Set up OpenTelemetry environment variables in your application environment:

```bash
# Specifies the endpoint URL for the OpenTelemetry collector
export OTEL_EXPORTER_OTLP_ENDPOINT="http://otelcol.apitoolkit.io:4317"

# Specifies the name of the service
export OTEL_SERVICE_NAME="postgres-service"

# Adds your API KEY to the resource
export OTEL_RESOURCE_ATTRIBUTES="at-project-key=YOUR_API_KEY"

# Specifies the protocol to use for the OpenTelemetry exporter
export OTEL_EXPORTER_OTLP_PROTOCOL="grpc"
```

Replace `YOUR_API_KEY` with your actual APItoolkit project key.

### 2. Instrument PostgreSQL Database Client

Below are examples of PostgreSQL instrumentation using OpenTelemetry for different programming languages:

#### Java Example (using JDBC)

```java
import io.opentelemetry.api.GlobalOpenTelemetry;
import io.opentelemetry.api.trace.Span;
import io.opentelemetry.api.trace.Tracer;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class PostgresExample {
    private final Tracer tracer = GlobalOpenTelemetry.getTracer("postgres-instrumentation");
    private final String connectionUrl = "jdbc:postgresql://localhost:5432/mydatabase";
    private final String username = "user";
    private final String password = "password";

    public List<User> getUsers() {
        Span span = tracer.spanBuilder("postgres.query").startSpan();
        try {
            span.setAttribute("db.system", "postgresql");
            span.setAttribute("db.name", "mydatabase");
            span.setAttribute("db.operation", "SELECT");
            span.setAttribute("db.statement", "SELECT id, name, email FROM users");
            
            List<User> users = new ArrayList<>();
            
            try (Connection conn = DriverManager.getConnection(connectionUrl, username, password);
                 PreparedStatement stmt = conn.prepareStatement("SELECT id, name, email FROM users");
                 ResultSet rs = stmt.executeQuery()) {
                
                while (rs.next()) {
                    User user = new User();
                    user.setId(rs.getLong("id"));
                    user.setName(rs.getString("name"));
                    user.setEmail(rs.getString("email"));
                    users.add(user);
                }
            }
            
            span.setAttribute("db.result_count", users.size());
            return users;
        } catch (Exception e) {
            span.recordException(e);
            throw new RuntimeException("Failed to query users", e);
        } finally {
            span.end();
        }
    }
}
```

#### Node.js Example (using node-postgres)

```javascript
const { Pool } = require('pg');
const opentelemetry = require('@opentelemetry/api');

const tracer = opentelemetry.trace.getTracer('postgres-instrumentation');

const pool = new Pool({
  host: 'localhost',
  database: 'mydatabase',
  user: 'user',
  password: 'password',
  port: 5432,
});

async function getUsers() {
  const span = tracer.startSpan('postgres.query');
  
  try {
    span.setAttribute('db.system', 'postgresql');
    span.setAttribute('db.name', 'mydatabase');
    span.setAttribute('db.operation', 'SELECT');
    span.setAttribute('db.statement', 'SELECT id, name, email FROM users');
    
    const result = await pool.query('SELECT id, name, email FROM users');
    
    span.setAttribute('db.result_count', result.rowCount);
    return result.rows;
  } catch (error) {
    span.recordException(error);
    throw error;
  } finally {
    span.end();
  }
}
```

### 3. Using OpenTelemetry Auto-Instrumentation Libraries

For easier integration, you can use auto-instrumentation libraries that automatically capture database operations:

#### Java Auto-Instrumentation (using Java Agent)

1. Download the OpenTelemetry Java agent:

```bash
wget https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar
```

2. Run your application with the agent:

```bash
java -javaagent:path/to/opentelemetry-javaagent.jar \
     -Dotel.service.name=postgres-service \
     -Dotel.exporter.otlp.endpoint=http://otelcol.apitoolkit.io:4317 \
     -Dotel.resource.attributes=at-project-key=YOUR_API_KEY \
     -jar your-application.jar
```

#### Node.js Auto-Instrumentation

1. Install required packages:

```bash
npm install @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node @opentelemetry/exporter-trace-otlp-proto
```

2. Set up auto-instrumentation in your application:

```javascript
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { OTLPTraceExporter } = require('@opentelemetry/exporter-trace-otlp-proto');

const sdk = new NodeSDK({
  traceExporter: new OTLPTraceExporter({
    url: 'http://otelcol.apitoolkit.io:4317/v1/traces',
  }),
  instrumentations: [getNodeAutoInstrumentations()],
  resourceAttributes: {
    'at-project-key': 'YOUR_API_KEY',
    'service.name': 'postgres-service',
  },
});

sdk.start();
```

## Advanced PostgreSQL Monitoring with pgstatstatements

For more detailed PostgreSQL monitoring, enable the `pg_stat_statements` extension:

1. Modify your `postgresql.conf` file:

```
shared_preload_libraries = 'pg_stat_statements'
pg_stat_statements.track = all
```

2. Restart PostgreSQL and enable the extension:

```sql
CREATE EXTENSION pg_stat_statements;
```

3. Create a function to periodically collect query statistics:

```javascript
async function collectPgStats() {
  const span = tracer.startSpan('postgres.stats.collect');
  
  try {
    const result = await pool.query(`
      SELECT query, calls, total_time, mean_time, rows
      FROM pg_stat_statements
      ORDER BY total_time DESC
      LIMIT 10
    `);
    
    // Process and report statistics
    for (const row of result.rows) {
      const querySpan = tracer.startSpan('postgres.query.stats');
      querySpan.setAttribute('db.statement', row.query);
      querySpan.setAttribute('db.calls', row.calls);
      querySpan.setAttribute('db.total_time_ms', row.total_time);
      querySpan.setAttribute('db.mean_time_ms', row.mean_time);
      querySpan.setAttribute('db.rows_affected', row.rows);
      querySpan.end();
    }
    
    return result.rows;
  } catch (error) {
    span.recordException(error);
  } finally {
    span.end();
  }
}

// Collect stats every 5 minutes
setInterval(collectPgStats, 5 * 60 * 1000);
```

## Verifying the Setup

After setting up OpenTelemetry with your PostgreSQL application:

1. Run your application and perform several database operations

2. Check your APItoolkit dashboard to see the incoming telemetry data

3. Look for metrics such as:
   - Query execution time
   - Database operation counts
   - Error rates
   - Result set sizes

## Next Steps

- Set up alerting in APItoolkit for slow queries
- Create custom dashboards for database performance monitoring
- Correlate database operations with API endpoints to identify bottlenecks