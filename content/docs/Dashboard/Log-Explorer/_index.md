---
title: Log Explorer
date: 2022-03-23
publishdate: 2022-03-24
weight: 40
menu:
  main:
    weight: 30
---

![Log Explorer](./log_explorer.png 'Log Explorer')

The log explorer allows you explore requests and responses going in and out of a service. This is very useful for investigating subsets of requests that match a query premise. For example, if there is an incident in production, where certain users are getting an error returned, you could easily use the [Log Query Language](/docs/dashboard/log-explorer/log-query-language) to filter for the requests which returned a failure status code, or which had an error in the response body. Check the section on the [Log Query language](/docs/dashboard/LogExplorer/log-query-language) for more info on querying
