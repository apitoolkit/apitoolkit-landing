---
title: Changes & Errors
date: 2024-04-22
updatedDate: 2024-05-04
menuWeight: 5
---

# Changes & Errors Page

In this guide, you will learn how to effectively navigate through the **Changes & Errors** page on the APItoolkit dashboard and maximize all the powerful features accessible in it.

```=html
<hr />
```

On this page, you will find a list of all ongoing **anomalies** (new **Request Shapes** or new **Endpoints**) detected from different request types on your API, including the endpoints they were detected on, and the new, updated, or deleted fields detected. You can **sort** the list based on the first/last time the anomaly was seen or the number of associated events, **acknowledge** or **archive** each anomaly, and click on each list item to explore them in more detail.

![Screenshot of APItoolkit's changes & errors page](/docs/dashboard/changes-errors/changes-errors.png)

```=html
<div class="callout">
  <i class="fa-solid fa-book"></i>
  <p>An <b>anomaly</b> is any user activity (requests) on your API that is significantly different from previously tracked activities. This might surface as increased response times, error rates, or downtimes, and can be caused by a variety of conditions such as API changes, server issues, network issues, or security threats.</p>
</div>
```

```=html
<div class="callout">
  <i class="fa-regular fa-lightbulb"></i>
  <p>When you acknowledge an endpoint or anomaly it is used to trigger the <a href="/docs/dashboard/documentation/">OpenAPI spec generation</a> feature we offer and in sending you daily/weekly reports.</p>
</div>
```

```=html
<hr />
<a href="/docs/dashboard/api-log-explorer/" class="w-full btn btn-outline link link-hover">
    Next: API Log Explorer Page
    <i class="fa-regular fa-arrow-right mr-4"></i>
</a>
```
