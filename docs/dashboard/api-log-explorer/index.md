---
title: API Log Explorer
date: 2024-04-22
updatedDate: 2024-05-06
menuWeight: 6
---

# API Log Explorer Page

In this guide, you will learn how to effectively navigate through the **API Log Explorer** page on the APItoolkit dashboard and maximize all the powerful features accessible in it.

```=html
<hr />
```

On this page, you will find a list of all the requests tracked from your API including all the associated fields and parameters and a throughput graph. You can **filter** the data using the toggle at the top-left section of the page (the default is **Last 14 Days**), toggle any log request to view all the associated details, or further click the **Expand []** button to view even more request and response details.

![Screenshot of APItoolkit's API log explorer page](/docs/dashboard/api-log-explorer/screen-1.png)

![Screenshot of APItoolkit's API log explorer page](/docs/dashboard/api-log-explorer/screen-2.png)

```=html
<div class="callout">
  <i class="fa-solid fa-book"></i>
  <p><b>Throughput</b> refers to the rate at which an amount of data is transmitted over a given period of time.</p>
</div>
```

## Query Results

You can query the returned data using one or more fields from the request (`status_code`, `host`, `request_body`, `has_errors`, `request_type`, etc.).

There are two query filtering options, the **manual selector mode** and the **editor mode**.

You can manually add filters by selecting the fields and sub-fields you want and clicking the **Run Query** button as seen in the image below.

![Screenshot of APItoolkit's API log explorer page](/docs/dashboard/api-log-explorer/screen-3.png)

Alternatively, you can toggle the **Use editor** button, use the text editor to write the query (as you would an SQL query), and click the **Run Query** button as seen in the image below.

![Screenshot of APItoolkit's API log explorer page](/docs/dashboard/api-log-explorer/screen-4.png)

If you toggle a request log, you can also manually select a field, click on it, and click the **Filter by field** or **Exclude by field** options to automatically add that field to the list of queries and run the query immediately.

![Screenshot of APItoolkit's API log explorer page](/docs/dashboard/api-log-explorer/screen-5.png)

## Alerts

You can create an alert and get notified via email or a Slack channel (if already configured) when some requests cross a defined throughput threshold. To achieve this, apply your desired filters first, click on the **Save as Alert** tab, input the alert/warning threshold values, define the alert message, and select the notification channels where the alert will be sent.

<!-- You can also use template tags in the subject like so: `Error in {/{alert.tags}}` -->

![Screenshot of APItoolkit's API log explorer page](/docs/dashboard/api-log-explorer/screen-6.png)

```=html
<div class="callout">
  <i class="fa-solid fa-book"></i>
  <p>A <b>threshold</b> level is the the value that must be exceeded for a certain reaction to occur or be triggered.</p>
</div>
```

## Share URL

APItoolkit allows you to publicly share the details of a particular log request to anyone you desire (maybe someone on the customer support team). All you need to do is click on the request, expand it, select the expiry date of the link, and click the **Get link** button. This will create a secure link which you can share with anyone.

![Screenshot of APItoolkit's API log explorer page](/docs/dashboard/api-log-explorer/screen-7.png)

![Screenshot of APItoolkit's API log explorer page](/docs/dashboard/api-log-explorer/screen-8.png)

```=html
<hr />
<a href="/docs/dashboard/documentation/" class="w-full btn btn-outline link link-hover">
    Next: Documentation Page
    <i class="fa-regular fa-arrow-right mr-4"></i>
</a>
```
