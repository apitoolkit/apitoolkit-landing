---
title: Navigating Your Endpoints
date: 2023-09-20
publishdate: 2023-09-20
weight: 40
toc: true
menu:
  main:
    weight: 30
---

# Navigating Your Endpoints

```=html
<video src="../endpoints.mp4"  controls title="EndPoints"></video>
```

In API management, endpoints are the gateways to functionality. They allow different software applications to communicate with each other. On our platform, endpoints are neatly organized into three main categories for ease of navigation and management: Active, Inbox, and Archived. Here's a step-by-step guide to help you understand and navigate these categories:

## **Overview of Endpoint Categories**

- **Active**: This is where all your verified and currently in-use endpoints reside. Once you've acknowledged an endpoint from the Inbox, it moves to this section, signaling that it's an active part of your project.

- **Inbox**: Think of this as your endpoint reception area. New endpoints that are detected or added will first appear here. They remain in the Inbox until you've reviewed and acknowledged them.

- **Archive**: Over time, some endpoints might become obsolete or might not be in use anymore. Instead of deleting them, you can move them to the Archive. This ensures you have a record of all endpoints ever used in the project.

### **Viewing Requests**

To examine the requests made to a specific endpoint:

1. Navigate to the `Endpoints` tab.
2. Locate the endpoint of choice.
3. Then go ahead and click on it.

By doing so, you can see a detailed list of all API requests made to that particular endpoint.

### **Reviewing and Acknowledging Endpoints:**

When you spot a new endpoint in the 'Inbox', it's crucial to review its details.

1. Click on the endpoint name, e.g., `GET/user/u/startup`.
2. A detailed view will display, showing you the specifics of that endpoint.
3. After reviewing, if you determine that this endpoint is valid and should be actively used in your project, click on the '✓ Acknowledge' button beside it.
4. The endpoint will then move from the 'Inbox' to the 'Active' category.

### **Archiving Endpoints:**

If an endpoint in the 'Active' category is deemed obsolete or redundant:

1. Click on the endpoint name.
2. In the detailed view, you'll find an 'archive' option.
3. Clicking this will move the endpoint from 'Active' to 'Archived', ensuring your active list remains streamlined.

### **Monitoring Endpoint Activity:**

Beside each endpoint, there's a number, e.g., `74` for `GET/user/u/startup`. This number represents the number of times this endpoint has been accessed or triggered in a given period.

For a visual representation of endpoint activity:

1. Click on particular endpoint.
2. Choose a timeframe, either '24h' or '14d', to view the endpoint's activity in the last 24 hours or the last 14 days, respectively.
3. The 'EVENTS' section will provide a detailed log of all events related to the endpoints.

### **Searching for Specific Endpoints:**

With numerous endpoints, finding a specific one can be daunting. Use the 'Search endpoints...' bar to quickly locate the endpoint you're interested in.

**Endpoint Statistics and Insights**

Navigating the vast landscape of API management can be intricate, but with the right tools and insights, you can efficiently monitor and optimize your endpoints. Here's a deep dive into the Endpoint Stats provided by our platform:

## **Overview of  Endpoint Stats:**

**Total Anomalies**: A count of unexpected events or deviations observed from a larger set of monitored activities.

**Total Requests**: The overall number of calls or actions made to a system, with a subset being currently active.

**Total Time**: The combined duration taken for all system interactions, reflecting the efficiency of the responses.

**Requests by Status Code:**- This section offers a breakdown of the HTTP status codes returned by your endpoints. For instance, you can quickly identify how many 200 OK responses you've received versus 404 Not Found errors or 500 Internal Server Errors. This insight helps in pinpointing issues and ensuring the smooth functioning of your APIs.

**Latency Percentiles:** - Latency is a critical metric in API management. It measures the time taken for a request to travel from the sender to the receiver and back. Our platform provides a detailed latency percentile breakdown:

**Errors:** - This section logs any errors encountered during the API requests. It's essential to monitor this regularly to ensure the reliability of your endpoints.

**Requests Grouped by Endpoint:** - Get a bird's eye view of which endpoints are receiving the most traffic. This can help in load distribution and identifying which endpoints might need optimization or scaling.

**Request Latency Distribution:** - A visual representation of how latency is distributed among all requests. This can help in identifying patterns or spikes in latency, which can be crucial for performance tuning.

In conclusion, the Endpoint Stats provided by our platform offers a comprehensive view of your API's performance. Regular monitoring and understanding of these metrics can lead to optimized, efficient, and reliable API management. Our platform offers a structured and intuitive way to manage and navigate through your API endpoints. Regularly review your 'Inbox' to ensure all new endpoints are reliable
