---
title: Onboarding
date: 2024-04-22
updatedDate: 2024-05-04
faLogo: circle-play
menuWeight: 1
hideFileTree: true
pageFullWidth: true
---

# Onboarding Guide

**APItoolkit** is an end-to-end API and web services management toolkit for engineers and customer support teams. We use AI to help engineering teams observe, manage, monitor, and test their backend systems and any external API they depend on. When you integrate APItoolkit into your application, you gain access to different features out-of-the-box, including but not limited to **API Monitoring and Observability**, **Error Tracking**, **Anomalies Detection**, **API Log Explorer**, **API Management**, **API Analytics**, **Automatic OpenAPI Spec Generation**, and even more coming soon (we are always shipping!).
<!-- TODO: add links to the list of features once they're shipped -->

In this guide, we will walk you through the process of integrating APItoolkit into your application. You will learn all the steps required to set up your account, fetch an API key, integrate with our SDK, and start monitoring requests on your API.

## Getting Started

There are five steps required to get started with APItoolkit and begin exploring and analyzing requests from your API in our dashboard:

1. [Create an Account](#create-an-account)
2. [Create a New Project](#create-a-new-project)
3. [Fetch API Key](#fetch-api-key)
4. [Integrate SDK](#integrate-sdk)
5. [Acknowledge Endpoints or Anomalies](#⑤-acknowledge-endpoints-or-anomalies)

## ① Create an Account

Kindly visit [this page](https://app.apitoolkit.com?utm_source=docs_onboarding) to create a new account. When you are there, you can choose to sign up with either your **Google** or **GitHub** account or your **email address**. If you choose to sign up with Google or GitHub, you will be redirected to the respective authentication page to authorize APItoolkit. If you choose to sign up with your email address, you will need to provide your email address and a strong password in the input fields as seen in the screenshot below.

![Screenshot of APItoolkit's signup page](/docs/onboarding/signup-page.png)

```=html
<div class="callout">
  <i class="fa-solid fa-forward"></i>
  <p>Once you are done providing the required values, click on the <b>Continue</b> button. Your account will then be created and you will be redirected to the APItoolkit dashboard.</p>
</div>
```

## ② Create a New Project

Once you are redirected to the dashboard, you have to create a new project to begin using APItoolkit. Kindly provide the values requested in the form as listed below. You can always update any of these values later.

- **Title**: Enter the name of your project (required).
- **Timezone**: Select your timezone (optional).
- **Description**: Enter a brief description of your project (optional).
- **Plan**: Select the plan you want to subscribe to (required).
- **Add member**: Invite someone else to collaborate on the project (optional).

![Screenshot of APItoolkit's create new project page](/docs/onboarding/create-project.png)

```=html
<div class="callout">
  <i class="fa-solid fa-forward"></i>
  <p>Once you are done providing the required values and your payment details (if you chose the <b>Pay as you use</b> plan), click the <b>Proceed</b> button. Your new project will then be created and you will be redirected to a survey form; kindly fill out the form displayed to proceed further.</p>
</div>
```

## ③ Fetch API Key

Once your project is created, an API key is automatically generated for you (which you can already see being used in the integration examples on the **Get Started** tab—onboarding checklist). To fetch your API key anytime or create a new one, kindly click on the project name at the top-left section of the dashboard and then click on the **API Keys** tab. You will then be redirected to another page where you can access the API key or create a new one.

```=html
<div class="callout">
  <i class="fa-regular fa-lightbulb"></i>
  <p>Usually you will create an API key for the different environments you want APItoolkit to track from (e.g., <b>development</b>, <b>staging</b>, <b>production</b>, etc.) and use each of the API keys when integrating with any of our SDK.</p>
</div>
```

![Screenshot of APItoolkit's settings popup](/docs/onboarding/api-keys-popup.png)

![Screenshot of APItoolkit's API keys page](/docs/onboarding/api-keys-page.png)

## ④ Integrate SDK

To allow APItoolkit to begin monitoring your API and for you to start exploring your data through our platform, you need to integrate one of our SDKs into your application. We currently support 17+ web frameworks in different programming languages (**if we do not support your framework, kindly [send us an email](mailto:hello@apitoolkit.io) and we will create a new SDK for you!)**.

To integrate with your preferred framework, kindly follow the quick guidelines below for some of the popular SDKs.

{% render "default/markdown/integration-footer.liquid", config:config %}

## ⑤ Acknowledge Endpoints or Anomalies

Once APItoolkit starts tracking data from your API, you will find the list of **detected endpoints** on the [Endpoints](/docs/dashboard/endpoints/) page and the list of **detected anomalies** on the [Changes & Errors](/docs/dashboard/changes-errors/) page or in the Ongoing Anomalies and Monitors section of the [Dashboard](/docs/dashboard/dashboard/) page. You need to **acknowledge** each endpoint or anomaly so APItoolkit understands the shape of the endpoints on your API and uses that information for future anomaly detections. As a side effect, we then use this information to trigger the [OpenAPI spec generation](/docs/dashboard/documentation) (swagger docs) feature and send you scheduled reports. Hence, **you should continuously acknowledge all important endpoints and anomalies you want us to monitor**.

![APItoolkit dashboard screenshot](/assets/img/dashboard.png)

Once you successfully integrate APItoolkit into your application using any of our SDKs, we will start monitoring requests to your API and you can start acknowledging endpoints/anomalies, begin exploring the tracked data in the dashboard, and begin using all our powerful features.

## Dashboard Overview

Here is a quick overview of all the available dashboard tabs and the features in them to aid your navigation:

```=html
<table class="table border">
<!-- <tr>
<th class="font-bold border">Tab Name</th>
<th class="font-bold">Description</th>
</tr> -->
<tr>
<td class="font-bold border">Get Started</td>
<td>The onboarding checklist that reminds you of all you need to integrate APItoolkit into your API for monitoring to begin.</td>
</tr>
<tr>
<td class="font-bold border">Dashboard</td>
<td>A summary of all the API analytics, including requests, anomalies, endpoints, etc. alongside all the requests visualized by status code, errors, endpoint, and latency percentiles.</td>
</tr>
<tr>
<td class="font-bold border">Endpoints</td>
<td>A list of all endpoints detected from your API.</td>
</tr>
<tr>
<td class="font-bold border">Outbound Integrations</td>
<td>A list of all outgoing requests from your API.</td>
</tr>
<tr>
<td class="font-bold border">Changes & Errors</td>
<td>A list of all errors and anomalies detected.</td>
</tr>
<tr>
<td class="font-bold border">API Log Explorer</td>
<td>A list of all request logs with options to query them based on certain parameters and create alerts.</td>
</tr>
<tr>
<td class="font-bold border">Documentation</td>
<td>Explore the automatically generated OpenAPI specifications from your live API payloads.</td>
</tr>
<tr>
<td class="font-bold border">Reports</td>
<td>Explore your email reports history and update the frequency of the reports.</td>
</tr>
</table>
```

## Next Steps

**Great work on getting this far!** You are now on the path to testing and improving your backend systems.

Now that you have set up your new project with APItoolkit, you should explore the pages below to learn even more.

```=html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
    <a href="/docs/sdks" class="docs-card rounded-md">
    <p><i class="fa-regular fa-plug h-5 w-5 mr-2"></i><span class="text-xl font-bold text-black dark:text-white">SDK Guides</span></p>
    <span class="px-8 font-normal text-gray-600 dark:text-white">Learn how to integrate APItoolkit using any of our SDKs for different programming languages and frameworks.</span>
    </a>
    <a href="/docs/dashboard" class="docs-card rounded-md">
    <p><i class="fa-regular fa-chart-line h-5 w-5 mr-2"></i><span class="text-xl font-bold text-black dark:text-white">Dashboard Guides</span></p>
    <span class="px-8 font-normal text-gray-600 dark:text-white">Explore APItoolkit's dashboard and learn how to navigate through all the available features and settings.</span>
    </a>
</div>
```
