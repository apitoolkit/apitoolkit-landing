---
title: Log Query Language  
date: 2022-03-23
publishdate: 2022-03-24
weight: 30
menu:
  main:
    weight: 30
---

This document describes at a high level, the log query language used to query and filter API request and response data.

## Overview

You can use the Log Query Language in the Logs Explorer of the Apitoolkit dashboard. You can use the language to query data, group data and even create metrics based of request/response data which match the queries. 

A query is a boolean expression that specifies a subset of all the request/response log entries. The queries always revolve around fields in the log entries, and follow a simple grammer:
- Simple restriction eg `method="GET"`
- Conjunctive restriction eg `method="GET" AND status_code=404`
- Disjunctive restriction eg `method="GET" OR method="PUT"`
- Complex conjunctive/disjunctive expression eg `method="GET" AND (response_body.value="value" OR status_code=302)`

## Syntax notation

The following sections provide an overview of the log query language syntax, and discuss in detail how queries are structured and how matching is performed.

The Log query language syntax can be seen in terms of queries and comparisons.

A query is a string/text containing an expression: 
```
expression = comparison { ("AND" | "OR") ["NOT"] comparison }
```
A comparison is usually a boolean operation such as 
```
status_code=200
```

It is usually of the shape `[FIELD_PATH] [OPERATOR] [VALUE]`

- `[FIELD_PATH]` is a field in a request/response log entry eg `status_code`, or `response_body.message` (Assuming there's a `message` field in the response_body)
- `[OPERATOR]` is a comparison operator and should be one of the following:
  - `=` : Equal
  - `!=` : Not Equal
  - `>` : Greater than
  - `<` : Less than
  - `>=` : Greater than or Equal
  - `<=` : Less than or equal
  - `=~` : Regular expression search for a pattern
  - `!~` : Regular expression search not for a pattern
  - `:` : substring matching on the log entry field. ie does this field contain ...
- `[VALUE]` is a number or string or a null or boolean which we are comparing the content of the `[FIELD_PATH]` against.
  - Numbers (integers and floats) eg 1, 2, 3, 1.0, 22.2, 10000, etc
  - Strings are always quoted via double quotes eg "Apitoolkit", "123", etc
  - Boolean are case  `TRUE` or `FALSE` or `true` or `false`
  - Null is an unquoted null text. ie `null` 

### Field Path Identifiers

The field identifier defines the path from the log entry root to the relevant field. It's syntax is mildly inspired by the [jq syntax](https://jqplay.org/)

![Log Entry](../log_entry.png "Log Entry")

The field paths must always reference the fields in the log entry. Eg in the example above, I could reference the status_code via `status_code`. I could reference nested fields in objects by using a `.` as the separator. Eg for the `key` field in `query_param`, I could do `query_param.key` eg 
```
query_param.key = ""
```

For nested fields with arrays, we can use `[]` as a special character to signify that that section of the field path is an array or list.  Eg
```
response_body.addresses.[].street_number = 20
```
This example above assumes that there is an addresses array and in that array each item is a object with a field `street_number`, and we want the results where that `street_number` is 20



