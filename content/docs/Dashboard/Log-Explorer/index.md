---
title: Understanding Your Endpoints
date: 2023-09-20
publishdate: 2023-09-20
weight: 40
menu:
  main:
    weight: 30
---
<video src="endpoints.mp4" controls title="EndPoints"></video>

## Endpoint Overview
APIToolkit automatically aggregates and lists your API endpoints in the `Endpoints` tab on your project's dashboard. For each endpoint, the dashboard provides you with a concise summary featuring:

- **HTTP Verb**: The method associated with the endpoint, such as GET, POST, etc.
- **Last Accessed**: The most recent time a request was made to this endpoint.
- **Total Requests**: The cumulative number of requests the endpoint has received.
- **Average Load Time**: The average time it takes for the endpoint to respond.
- **Problem Count**: The total number of issues associated with this endpoint.
- **Requests per Minute (RPM)**: The frequency of requests hitting the endpoint.
- **Endpoint Group**: The categorization of the endpoint within your API.
- **Daily Request Graph**: A visual representation of the day's request activity for the endpoint.

### Viewing Requests

To examine the requests made to a specific endpoint:

1. Navigate to the `Endpoints` tab.
2. Locate the endpoint of interest.
3. Click on `View Requests` next to the endpoint or use the dropdown menu at the top-right corner of the endpoint listing.

By doing so, you can see a detailed list of all API requests made to that particular endpoint.

## 2. Documentation Management

Keeping your API well-documented is crucial for both internal and external users. APIToolkit simplifies this by allowing you to manage which endpoints appear in your API documentation.

### Add to Docs

To add an endpoint to your project's API documentation:

1. Navigate to the `Endpoints` tab on your dashboard.
2. Locate the endpoint you want to document.
3. Click the dropdown menu at the top-right corner of the endpoint.
4. Select `Add to Docs`.
5. A confirmation modal will appear. Click `Confirm` to proceed.

Once added, the endpoint and its associated documentation will be publicly visible in your project's API documentation.

### Remove from Docs

If you need to remove an endpoint from your API documentation:

1. Go to the `Endpoints` tab.
2. Find the endpoint you wish to remove.
3. Access the dropdown menu at the top-right corner.
4. Choose `Remove from Docs`.
5. A confirmation modal will show up. Click `Confirm` to finalize the removal.

After removal, the endpoint will no longer appear in your project's API documentation, making it invisible to all viewers.


## 3. Mute and Unmute Endpoints

Managing the visibility of your API endpoints is vital for effective monitoring and debugging. APIToolkit provides options to mute or unmute endpoints as per your requirements.

### Mute an Endpoint

To mute an endpoint, effectively hiding it from your project's activity and notifications:

1. Navigate to the `Endpoints` tab in your dashboard.
2. Find the endpoint you wish to mute.
3. Click on the dropdown menu at the top-right corner of the endpoint.
4. Select `Mute`.
5. A confirmation modal will appear. Confirm your action by clicking `Confirm`.

Muting an endpoint will prevent any requests to it from appearing in your project's logs, and you will not receive alerts for issues related to this endpoint.

### Unmute an Endpoint

To restore visibility and notifications for a previously muted endpoint:

1. Go to the `Endpoints` tab.
2. Locate the muted endpoint.
3. Access the dropdown menu at the top-right corner.
4. Choose `Unmute`.
5. Confirm your decision in the appearing modal by clicking `Confirm`.

Unmuting re-enables logging for the endpoint and you will start receiving alerts for any issues associated with it.

## Endpoint Aliasing

Endpoint aliasing allows you to assign alternative names to specific endpoints for ease of use and filtering in your API management. This feature can be particularly helpful when working with complex APIs.

### How to Add an Alias to an Endpoint

1. Navigate to the `Endpoints` tab on your project's dashboard.
2. Locate the endpoint you want to assign an alias to.
3. Click the dropdown menu at the top-right corner of the endpoint.
4. Select `Add Alias`.
5. A text box will appear. Enter the desired alias for the endpoint.
6. Click `Save` or `Confirm` to save the alias.

Once an alias is added, you can use it when searching, filtering, or referring to the endpoint within APIToolkit.

### Benefits of Endpoint Aliasing

- **Simplified Filtering**: Alias names make it easier to find and filter specific endpoints, especially if your API has long or complex endpoint names.
- **User-Friendly Labels**: Aliases can provide more user-friendly and meaningful names for endpoints, enhancing communication within your team.


## Endpoint Groups

APIToolkit automatically categorizes your API endpoints into groups, simplifying the organization and management of your API.

### Automatic Grouping

When you have multiple endpoints that share a common base path or structure, APIToolkit automatically groups them under a common endpoint group. For example, if you have endpoints like `/users/:id` and `/users/verify`, APIToolkit will group them under the "Users" endpoint group.

### Edit Endpoint Group

If you wish to modify the group to which an endpoint belongs:

1. Locate the endpoint in the `Endpoints` tab.
2. Click the dropdown menu at the top-right corner of the endpoint.
3. Choose `Edit Group`.
4. In the modal that appears, select a new group for the endpoint.
5. Click `Save Changes` to confirm your selection.

Alternatively, you can create a new endpoint group within the same modal by clicking the "Create New Group" button and providing a name for the new group. Once you're done, click `Save Changes`.

This flexibility allows you to tailor the grouping of your endpoints to better suit your organization's needs.

## Deleting an Endpoint

There may be situations where you need to remove an endpoint from your APIToolkit project. Here's how you can delete an endpoint:

### How to Delete an Endpoint

1. Go to the `Endpoints` tab in your project's dashboard.
2. Locate the endpoint you want to delete.
3. Click the dropdown menu at the top-right corner of the endpoint.
4. Select `Delete`.
5. A confirmation modal will appear to ensure you want to proceed. Click `Confirm` to finalize the deletion.

When you delete an endpoint:

- Any associated requests will be disassociated.
- The endpoint will be removed from your project's API documentation.

This action is irreversible, so be certain before confirming the deletion.


## Filtering and Sorting

APIToolkit offers powerful filtering and sorting options to help you manage and analyze your API endpoints effectively.

### Filtering Endpoints

You can filter your endpoints in the `Endpoints` tab using various criteria:

- **Has Problems?**: Filter by endpoints with or without problems.
- **HTTP Method**: Narrow down endpoints by the HTTP method they use.
- **Endpoint Group**: Filter by the group to which the endpoint belongs.
- **Muted**: Choose between muted or unmuted endpoints.
- **Included in Docs**: Filter for endpoints included or excluded from your API documentation.

### Sorting Endpoints

You can also sort your endpoints based on different parameters:

- **Name**: Sort endpoints alphabetically by name.
- **Number of Requests**: Sort by the total number of requests received.
- **Load Time**: Sort by the average load time of the endpoints.
- **RPM (Requests per Minute)**: Sort by the number of requests per minute.

### How to Apply Filters and Sorting

1. Go to the `Endpoints` tab.
2. Click the `Filter` button to access the filters drawer.
3. Select your desired filters and sorting criteria.
4. Click the `Filter` button to apply the selected filters and sorting.

This functionality allows you to quickly find, analyze, and manage your API endpoints based on specific conditions and preferences.

## Exporting Endpoints

APIToolkit provides the capability to export filtered endpoint data to a CSV file. This feature can be valuable for creating custom reports or sharing endpoint information with your team.

### Export Filtered Endpoints

Once you've applied filters to your endpoints and you're viewing the filtered list:

1. At the bottom of the filters drawer, you'll find the `Export Results to CSV` button.
2. Click this button to initiate the export process.

APIToolkit will generate a CSV file containing all the data for the filtered endpoints, making it accessible for further analysis or documentation purposes.

### Benefits of Endpoint Export

- **Custom Reports**: Use the exported data to create custom reports or analytics tailored to your specific needs.
- **Data Sharing**: Easily share endpoint information with team members or stakeholders in a universally compatible CSV format.

This export feature adds versatility to your API endpoint management, allowing you to utilize your data as needed.