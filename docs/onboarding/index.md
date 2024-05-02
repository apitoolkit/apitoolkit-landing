---
title: Onboarding
faLogo: circle-play
menuWeight: 1
hideFileTree: true
pageFullWidth: true
---

# Onboarding Guide

**APItoolkit** is an end-to-end API and web services management toolkit for engineers and customer support teams. We use AI to help engineering teams observe, manage, monitor, and test their backend systems and any external API they depend on. When you integrate APItoolkit into your application, you gain access to different features out-of-the-box, including but not limited to **API Monitoring and Observability**, **Error Tracking**, **Anomalies Detection**, **API Log Explorer**, **API Management**, **API Analytics**, **Automatic OpenAPI Spec Generation**, and even more coming soon (we are always shipping!).
<!-- TODO: add links to the list of features once they're shipped -->

In this guide, we will walk you through the process of integrating APItoolkit into your application. You will learn all the steps required to set up your account, fetch your API key, integrate with our SDK, and start monitoring requests on your API.

## Getting Started

There are four steps required to get started with APItoolkit and begin exploring and analyzing requests from your API in our dashboard:

1. [Create an Account](#create-an-account)
2. [Create a New Project](#create-a-new-project)
3. [Fetch your API Key](#fetch-api-key)
4. [Integrate the SDK](#integrate-sdk)

## ① Create an Account

Kindly visit [this page](https://app.apitoolkit.com?utm_source=docs_onboarding) to create a new account. When you are there, you can choose to sign up with either your **Google** or **GitHub** account or your **email address**. If you choose to sign up with Google or GitHub, you will be redirected to the respective authentication page to authorize APItoolkit. If you choose to sign up with your email address, you will need to provide your email address and a strong password in the input fields as seen in the screenshot below.

![](/docs/onboarding/signup-page.png)

Once you are done providing the required values, click on the **Continue** button. Your account will then be created and you will be redirected to the APItoolkit dashboard.

## ② Create a New Project

Once you are redirected to the dashboard, you have to create a new project to begin using APItoolkit. Kindly provide the values requested in the form as listed below. You can always update any of these values later.

- **Title**: Enter the name of your project (required).
- **Timezone**: Select your timezone (optional).
- **Description**: Enter a brief description of your project (optional).
- **Plan**: Select the plan you want to subscribe to (required).
- **Add member**: Invite someone else to collaborate on the project (optional).

<!-- TODO: update this screenshot once the UI changes are made -->
![](/docs/onboarding/create-project.png)

Once you are done providing the required values and your payment details (if you chose the **Pay as you use** plan), click the **Proceed** button. Your new project will then be created and you will be redirected to a survey form; kindly fill out the form displayed to proceed further.

## ③ Fetch API Key

Once your project is created, an API key is automatically generated for you (which you can already see being used in the integration examples on the **Get Started** tab—onboarding checklist). To fetch your API key anytime or create a new one, kindly click on the project name at the top-left section of the dashboard and then click on the **API Keys** tab. You will then be redirected to another page where you can access the API key or create a new one.

<!-- TODO: update this screenshot once the UI changes are made -->
![](/docs/onboarding/settings-popup.png)

![](/docs/onboarding/api-keys.png)

## ④ Integrate SDK

To allow APItoolkit to begin monitoring your API and for you to start exploring your data through our platform, you need to integrate one of our SDKs into your application. We currently support 17+ web frameworks in different programming languages (**if we do not support your framework, kindly [send us an email](mailto:hello@apitoolkit.io) and we will create a new SDK for you!)**.

To integrate with your preferred framework, kindly follow the quick guidelines below for some of the popular SDKs.

{% render "default/markdown/integration-footer.liquid", config:config %}

```=html
<hr />
```

::::
{.text-center}
Once you successfully integrate APItoolkit into your application using any of our SDKs, we will start monitoring requests to your API and you can begin exploring the data in the dashboard using all our powerful features.

![APItoolkit dashboard screenshot](/assets/img/dashboard.png){.block .drop-shadow-lg .border}
::::

## Dashboard Overview

Here is a quick overview of all the available dashboard tabs and the features in them to aid your navigation:

```=html
<table class="table border">
<!-- <tr>
<th class="font-bold border">Tab Name</th>
<th class="font-bold">Description</th>
</tr> -->
<tr>
<td class="font-bold border">Dashboard</td>
<td>A summary of all the API analytics options, including the Logs Explorer, Anomalies Detection, Endpoints Detection, etc. alongside all monitored requests visualized by status code, errors, endpoint, and latency.</td>
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
    <span class="px-8 font-normal text-black dark:text-white">Learn how to integrate APItoolkit using any of our SDKs for different programming languages and frameworks.</span>
    </a>
    <a href="/docs/dashboard" class="docs-card rounded-md">
    <p><i class="fa-regular fa-chart-line h-5 w-5 mr-2"></i><span class="text-xl font-bold text-black dark:text-white">Dashboard Guides</span></p>
    <span class="px-8 font-normal text-black dark:text-white">Explore APItoolkit's dashboard and learn how to navigate through all the available features and settings.</span>
    </a>
</div>
```
