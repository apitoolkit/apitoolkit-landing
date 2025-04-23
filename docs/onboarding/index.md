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

**APItoolkit** is an API-first monitoring and observability platform for engineering and customer support teams. We use AI to help engineering teams observe, manage, monitor, and test their backend systems and any external API they depend on. When you integrate APItoolkit into your application, you gain access to different features out-of-the-box, including but not limited to **API Monitoring and Observability**, **Error Tracking**, **Anomalies Detection**, **API Log Explorer**, **API Testing**, **API Management**, **API Analytics**, **Automatic OpenAPI Spec Generation**, and even more coming (we are always shipping!).

In this guide, we will walk you through the process of integrating APItoolkit into your API application. You will learn all the steps required to set up your account, fetch an API key, integrate with our SDK, and start monitoring requests on your API. If you prefer a video guide, here's one for you:

```=html
<iframe
  class="w-full h-48 md:h-96 lg:h-96 xl:h-96"
  src="https://www.youtube.com/embed/Q-tGuIkDmyk?si=xFhCZrvS-g-bjnqj"
  title="YouTube Video Player: APItoolkit Walkthrough"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
  allowfullscreen
  ></iframe>
```

```=html
<hr />
```

## Getting Started

There are five steps required to get started with APItoolkit and begin exploring and analyzing requests from your API in our dashboard:

1. [Create an Account](#create-an-account)
2. [Create a New Project](#create-a-new-project)
3. [Fetch API Key](#fetch-api-key)
4. [Integrate SDK](#integrate-sdk)
5. [Acknowledge Endpoints or Anomalies](#⑤-acknowledge-endpoints-or-anomalies)

## ① Create an Account

Kindly visit [this page](https://app.apitoolkit.io?utm_source=docs_onboarding) to create a new account. When you are there, you can choose to sign up with either your **Google** or **GitHub** account or your **email address**. If you choose to sign up with Google or GitHub, you will be redirected to the respective authentication page to authorize APItoolkit. If you choose to sign up with your email address, you will need to provide your email address and a strong password in the input fields as seen in the screenshot below.

![Screenshot of APItoolkit's signup page](/docs/onboarding/new-signup-page.png)

```=html
<div class="callout">
  <i class="fa-solid fa-forward"></i>
  <p>Once you are done providing the required values, click on the <b>Continue</b> button. Your account will then be created and you will be redirected to the APItoolkit dashboard.</p>
</div>
```

## ② Create a New Project

Once you are redirected to the dashboard, you have to create a new project to begin using APItoolkit. Kindly provide the values requested in the form as listed below. You can always update any of these values later.

- **About you**: A quick survey that helps us gives better service to users.
![Screenshot of APItoolkit's create new project page](/docs/onboarding/new-create-project.png)

- **Setup project**: Choose a server location and the features you'll be exploring.
![Screenshot of APItoolkit's configure project](/docs/onboarding/configure-project.png)

- **Create endpoint**: Create an endpoint you'd like to monitor and choose the request type(optional).
![Screenshot of APItoolkit's create new project page](/docs/onboarding/create-first-endpoint.png)

- **Set notifications**: Connect your project to Slack, Discord, Email or your phone number to get notified when something goes wrong(optional).
![Screenshot of APItoolkit's create new project page](/docs/onboarding/set-notifications.png)

- **Add member**: Invite someone else to collaborate on the project (optional).
![Screenshot of APItoolkit's create new project page](/docs/onboarding/invite-member.png)

- **Integration examples**: Select an SDK to see the integration guide for it (optional).
![Screenshot of APItoolkit's create new project page](/docs/onboarding/integration.png)

- **Plan**: Select the plan you want to subscribe to (required).
![Screenshot of APItoolkit's create new project page](/docs/onboarding/plans.png)



```=html
<div class="callout">
  <i class="fa-solid fa-forward"></i>
  <p>Once you are done providing the required values and your payment details (if you chose the <b>Pay as you use</b> plan), click the <b>Proceed</b> button. Your new project will then be created and you will be redirected to your APItoolkit dashboard.</p>
</div>
```

## ③ Fetch API Key

Once your project is created, an API key is automatically generated for you (which you can already see being used in the integration examples). To fetch your API key anytime or create a new one, kindly click on the API keys at the bottom-left section of the dashboard. You will then be redirected to another page where you can access the API key or create a new one.

![Screenshot of APItoolkit's settings popup](/docs/onboarding/new-api-keys.png)

```=html
<div class="callout">
  <i class="fa-regular fa-lightbulb"></i>
  <p>Usually you will create an API key for the different environments you want APItoolkit to track from (e.g., <b>development</b>, <b>staging</b>, <b>production</b>, etc.) and use each of the API keys when integrating with any of our SDK.</p>
</div>
```


![Screenshot of APItoolkit's API keys page](/docs/onboarding/create-new-api-key.png)

## ④ Integrate SDK

To allow APItoolkit to begin monitoring your API and for you to start exploring your data through our platform, you need to integrate one of our SDKs into your application. We currently support 17+ web frameworks in different programming languages (**if we do not support your framework, kindly [send us an email](mailto:hello@apitoolkit.io) and we will create a new SDK for you!)**.

To integrate with your preferred framework, kindly follow the quick guidelines below for some of the popular SDKs.

{% render "default/markdown/integration-footer.liquid", config:config %}

## ⑤ Acknowledge Endpoints or Anomalies

Once APItoolkit starts tracking data from your API, you will find the list of **detected endpoints** on the [Explorer](/docs/dashboard/endpoints/) page and the list of **detected anomalies** on the [Changes & Errors](/docs/dashboard/changes-errors/) page or in the Ongoing Anomalies and Monitors section of the [Dashboard](/docs/dashboard/dashboard/) page. You need to **acknowledge** each endpoint or anomaly so APItoolkit understands the shape of the endpoints on your API and uses that information for future anomaly detections. As a side effect, we then use this information to trigger the [OpenAPI spec generation](/docs/dashboard/documentation) feature and send you scheduled reports. Hence, **you should continuously acknowledge all important endpoints and anomalies you want us to monitor**.

![APItoolkit dashboard screenshot](/docs/onboarding/anomalies.png)

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
<td>The onboarding checklist that reminds you of all you need to integrate APItoolkit into your API and begin monitoring requests.</td>
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
<td class="font-bold border">API Log Explorer</td>
<td>A list of all request logs with options to query them based on certain parameters and create alerts.</td>
</tr>
<tr>
<td class="font-bold border">Changes & Errors</td>
<td>A list of all anomalies and errors detected from your API.</td>
</tr>
<tr>
<td class="font-bold border">Outgoing Integrations</td>
<td>A list of all outgoing requests (external API calls) from your API.</td>
</tr>
<tr>
<td class="font-bold border">API Tests</td>
<td>Explore and create manual or scheduled test assertions with multiple steps to validate HTTP responses in your API.</td>
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
<div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
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
