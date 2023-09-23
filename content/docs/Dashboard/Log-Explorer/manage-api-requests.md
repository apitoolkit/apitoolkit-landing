---
title: Managing API Requests
date: 2023-09-21
publishdate: 2022-03-24
weight: 40
menu:
  main:
    weight: 30
---

<video src="logs.mp4" controls title="API Request"></video>

## Overview

When you access your project's dashboard, you'll find a dedicated `API Requests` tab. This is your central hub for monitoring all incoming and outgoing API calls. In this tab, each request is summarized to show you the following essential data points:

- **HTTP Method**: The type of request, such as GET, POST, PUT, or DELETE.
- **Status Code**: The HTTP status code returned, indicating the result of the request.
- **Targeted Endpoint**: The specific API endpoint the request interacted with.
- **Timestamp**: The exact time when the request was made.
- **Origin Device**: The type of device from which the request originated.
- **Geographical Origin**: The geographic location of the request source.
- **Authentication Status**: Whether the request was authenticated or not.
- **JSON Response Indicator**: A flag indicating if the response was in JSON format.
- **Speed Metrics**: Information on the response time of the request.
- **Response Size**: The size of the data returned in the response.
- **Issue Indicator**: A flag showing if there were any problems with the request.

### Viewing Request Details

For a more in-depth look at any API request:

1. Locate the request you're interested in.
2. Click on its endpoint name.
   This action will open a new page showing granular details of the request, including headers, body, response data, and more.

## Sharing a Request

Sharing an API request with team members or stakeholders is a breeze with APIToolkit. Follow the steps below to share specific request information:

### Steps to Share

1. **Navigate to the `API Requests` tab** on your project's dashboard.
2. **Locate the request** you wish to share.
3. **Click on the `Options` button** next to the request. This button usually appears as three vertical dots.
4. **Select `Share`** from the dropdown menu.

A dialog box will appear, providing you with a unique URL for the selected request.

### URL Expiry Options

When sharing a request, you have the flexibility to set an expiration time for the URL. You can choose from the following options:

When sharing, you can set the URL to expire in:

- 1 Hour
- 8 Hours
- 1 Day

**Note**: By default, the expiry is set to 1 hour to maintain security and data integrity.

Click `Copy URL` to copy the link to your clipboard, and you're ready to share it!

## Similar Requests

Finding similar API requests can help you identify patterns, debug issues, or understand usage trends. APIToolkit makes this process straightforward.

### How to Find Similar Requests

1. **Navigate to the `API Requests` tab** on your project's dashboard.
2. **Identify the request** you want to use as a basis for finding similar ones.
3. **Click the `Options` button** next to the request, represented as three vertical dots.
4. **Choose `Find Similar`** from the dropdown menu.

The system will then generate a list of API requests that share characteristics with the original, such as HTTP method, endpoint, or status code.

## Adding Comments

Comments allow you to annotate specific API requests, making it easier to communicate with your team about debugging, features, or other important notes.

### How to Add Comments

1. **Go to the `API Requests` tab** in your project dashboard.
2. **Select the request** you wish to comment on by clicking its endpoint name. This will take you to a detailed view of the request.
3. **Locate the `Add` button**, usually represented as a floating plus icon at the bottom right corner of the page.
4. **Click on `Comment`** in the pop-up menu.

A sidebar will appear on the right, providing a text box where you can type your comment.

## 5. Downloading Requests

Sometimes, you may need to download API request data for offline analysis, backup, or for sharing in a different format. APIToolkit enables you to download this data as a JSON file.

### How to Download Requests

1. **Access the `API Requests` tab** from your project's dashboard.
2. **Find the request** you wish to download.
3. **Click the `Options` button** next to the request, typically displayed as three vertical dots.
4. **Select `Download`** from the dropdown menu.

A JSON file containing all the details of the selected request will be downloaded to your device.

### File Contents

The downloaded JSON file will include:

- Request Headers
- Request Body
- Response Headers
- Response Body
- Additional Metadata

## 6. Filtering Requests

APIToolkit provides a robust filtering system that allows you to narrow down your API request logs based on multiple criteria, making it easier to find exactly what you're looking for.

### Accessing Filters

1. **Navigate to the `API Requests` tab** within your project's dashboard.
2. **Click the `Filter` button**, usually located near the top of the page.

This will open a filter drawer on the side, offering various options to refine your search.

### Filter Categories

You can filter your API requests based on the following parameters:

- **Status**: Select from 'All,' 'With Issues,' or 'Without Issues.'
- **HTTP Method**: Filter by GET, POST, PUT, DELETE, etc.
- **Response Code**: Specify a range or specific HTTP status codes.
- **Endpoint**: Search by the endpoint name or pattern.
- **Device**: Filter by the originating device type.
- **Location**: Narrow down by geographic origin.
- **Parameters**: Filter by specific request parameters.
- **Comments**: Search for requests with specific comments.
- **App Version**: Filter by the version of your application.
- **Date Range**: Set a timeframe for the request logs.

After selecting your criteria, **click `Apply Filters`** to update the list of displayed API requests.

## Deleting Requests

In some scenarios, you may need to remove specific API request records for housekeeping or compliance reasons. APIToolkit offers a straightforward method for this.

### Steps to Delete a Request

1. **Go to the `API Requests` tab** in your project dashboard.
2. **Locate the request** you want to delete.
3. **Click the `Options` button** next to the request, often represented as three vertical dots.
4. **Choose `Delete`** from the dropdown menu.
5. **Confirm Deletion**: A confirmation dialog will appear. Click `Confirm` to proceed with the deletion.

### Transparency Note

For accountability, APIToolkit maintains a log of all deleted requests. This log includes details such as who deleted the request and when it was deleted. This ensures full transparency within your team.
