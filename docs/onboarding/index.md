---
title: Onboarding
faLogo: circle-play
menuWeight: 1
hideFileTree: true
pageFullWidth: true
---

# Onboarding Guide

**APItoolkit** is an end-to-end API and web services management toolkit for engineers and customer support teams. We use AI to help engineering teams observe, manage, monitor, and test their backend systems and any APIs they depend on. When you integrate APItoolkit into your application, you gain access to different features out of the box, including but not limited to: **API Monitoring and Observability**, **Error Tracking**, **Anomalies Detection**, **API Log Explorer**, **API Management**, **API Analytics**, **Automatic OpenAPI Spec Generation**, and even more coming soon (we're always shipping!).
<!-- TODO: add links to the list of features once they're shipped -->

In this guide, we will walk you through the process of integrating APItoolkit into your application. You will learn all the steps required to set up your account, fetch your API keys, integrate with our SDK, and start monitoring your APIs.

## Getting Started

You need the following four steps to get started with APItoolkit and begin exploring and analyzing your API usage data in our dashboard:

1. [Create an Account](#create-an-account)
2. [Create a New Project](#create-a-new-project)
3. [Fetch your API Key](#fetch-api-key)
4. [Integrate the SDK](#integrate-sdk)

## ① Create an Account

Kindly visit [this page](https://app.apitoolkit.com?utm_source=docs_onboarding) to create a new account. When you are there, you can choose to sign up with either your **Google** or **GitHub** account or your **email address**. If you choose to sign up with Google or GitHub, you will be redirected to the respective authentication page to authorize APItoolkit. If you choose to sign up with your email address, you will need to provide your email address and a strong password in the input fields as seen in the screenshot below.

![](/docs/onboarding/signup-page.png)

Once you are done providing the required values, click on the **Continue** button. Your account will then be created and you will be redirected to the APItoolkit dashboard.

## ② Create a New Project

Once you are redirected to the dashboard, you have to create a new project to begin using APItoolkit. Kindly provide the values requested in the form as listed below. You can update any of the values later.

- **Title**: Enter the name of your project (required).
- **Timezone**: Select your timezone from the dropdown (optional).
- **Description**: Enter a brief description of your project (optional).
- **Plan**: Select the plan you want to subscribe to (required).
- **Add member**: Invite a project member to collaborate on the project (optional).

<!-- TODO: update this screenshot once the UI changes are made -->
![](/docs/onboarding/create-project.png)

Once you are done providing the required values and adding your payment details (if you chose the **Pay as you use** plan), click the **Proceed** button. Your new project will then be created and you will be redirected to a survey form; kindly fill out the form displayed to proceed further.

## ③ Fetch API Key

Once your project is created, an API key is automatically generated for you (which you can already see being used in the integration examples on the **Get Started** tab—onboarding checklist page). To fetch your API key anytime or create a new one, kindly click on the project name at the top-left section of the dashboard and then click on the **API Keys** tab. You will then be redirected to another page where you can access the API key or create a new one.

<!-- TODO: update this screenshot once the UI changes are made -->
![](/docs/onboarding/settings-popup.png)

![](/docs/onboarding/api-keys.png)

## ④ Integrate SDK

To allow APItoolkit to begin monitoring your API and for you to start exploring your data through our platform, you need to integrate one of our SDKs into your application. We currently support 17+ web frameworks in different programming languages (**if we don't support your framework, kindly [send us an email](mailto:hello@apitoolkit.io) and we'll create an SDK for you ASAP!)**.

To integrate with your preferred framework, kindly follow the quick guidelines below for some of the popular SDKs.

{% render "default/markdown/integration-footer.liquid", config:config %}

```=html
<hr />
```

Once you successfully integrate APItoolkit into your application using any of our SDKs, we will start monitoring requests to your API and you can begin exploring the data in the dashboard and test your backend systems/any external API you depend on.

![APItoolkit dashboard screenshot](/assets/img/dashboard.png){.block .drop-shadow-lg .border}

## Dashboard Cheat Sheet

Here's a quick overview of all the current dashboard pages and data visualization options to aid your navigation:

```=html
<table class="table border">
<!-- <tr>
<th class="font-bold">Tab Name</th>
<th class="font-bold">Description</th>
</tr> -->
<tr>
<td class="font-bold">Dashboard</td>
<td>A summary of all the API analytics options, including the Logs Explorer, Anomalies Detection, Endpoints Detection, etc. alongside all monitored requests visualized by status code, errors, endpoint, and latency.</td>
</tr>
<tr>
<td class="font-bold">Endpoints</td>
<td>A list of all endpoints detected from your API.</td>
</tr>
<tr>
<td class="font-bold">Outbound Integrations</td>
<td>A list of all outgoing requests from your API.</td>
</tr>
<tr>
<td class="font-bold">Changes & Errors</td>
<td>A list of all errors and anomalies detected.</td>
</tr>
<tr>
<td class="font-bold">API Log Explorer</td>
<td>A list of all request logs with options to query based on certain parameters and create alerts.</td>
</tr>
<tr>
<td class="font-bold">Documentation</td>
<td>Explore the automatically generated OpenAPI specifications from your live API payloads.</td>
</tr>
<tr>
<td class="font-bold">Reports</td>
<td>Explore your email reports history and update the frequency of the reports.</td>
</tr>
</table>
```

## Next Steps

Now that you've set up your new project with APItoolkit, you should explore the pages below to learn even more.

```=html
<a href="/docs/sdks" class="w-full btn btn-outline link link-hover">
    SDK Guides
    <i class="fa-regular fa-arrow-right mr-4"></i>
</a>
```

{.text-center}
OR

```=html
<a href="/docs/dashboard" class="w-full btn btn-outline link link-hover">
    Dashboard Guides
    <i class="fa-regular fa-arrow-right mr-4"></i>
</a>
```
