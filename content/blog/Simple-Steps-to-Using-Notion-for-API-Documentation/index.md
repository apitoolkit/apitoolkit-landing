---
title: "Simple Steps to Using Notion for API Documentation"
date: 2022-11-01T08:05:56+02:00
author: jessica
categories: 
- APIs
---

![Notion logo](./notion-logo.png)

We talked about using [Notion for documentation](../using-notion-for-API-documentation/index.md) last week; today, we'll take a quick look at how to use the same software to pen down our API documentation. Note that there is a slight difference between documentation and API documentation and not all tools can be used to create an API doc.

APIs have increased significantly with the use of API documentation. With proper API documentation, users have a better experience with the functionality and instructions for using and integrating the project, coupled with updates on the API lifespan. This doesn’t entirely mean that you can’t use an API without documentation but the idea is to make things a lot easier for the user who might probably be a first time user and give access to the technical content of the API and integration rules to make work easier and convienient for them. There are lots of tools that can help simplify and manage this document and notion is one of those tools, Notion is an all-in-one workspace, it goes beyond just basic documentation to API documentation giving you access to code blocks, navigation bars, etc.

## Using Notion For API Doc
Creating an API Doc can be quite complex, especially at the point of finding a template that works. Today we will create an API doc with an existing template and also create one from scratch just incase you dont find a template that works for you.

### Working with a Template
We'll make use of a template from [Beestat](https://www.notion.so/API-Documentation-e4a7746e6a3f45dbb58ea6b45b8f9744). This template is a perfect choice for API documentation. It includes a navigation bar at the top page, a sub-page, lists, and code blocks to generate all of the product documentation in Notion. It is divided into three sections: the navigation section, the documentation section, and the reference section.

![Navigation bar](./navigation.png)
**The Navigation:** The navigation section is also what we know as the table of content section. It is created to automatically update as you add new header sections (i.e /h1, /h2, /h3) to your page. This is a really practical and simply one more fantastic feature Notion has because it works like a link that takes you right to the header you clicked on.

![Documentation](./content.png)
**The Documentation:** This part contains the content that you want your readers to read. Here you find the code blocks, the images, the videos and all that makes your doc what it ought to be. There is no word limit, it can be anything, it all depends on you.

![Reference](./resource.png)
**The Reference:** The reference is a list of resources located at the page's footer. You can add additional pages here, and then use the notion page name to refer to them elsewhere in the documentation. This is incredibly practical because it allows for numerous references to the same page and provides a simple "back" button on those subpages.

To reproduce the template, just [click the link](https://www.notion.so/API-Documentation-e4a7746e6a3f45dbb58ea6b45b8f9744). Select "duplicate" at the top-right corner of the page, and then sign up for a Notion account just in case you do not have one. Now you can simply go ahead to customize the content as you desire. 
![Beestat](./beestat-duplicate.png)

### Creating an API Doc with a new template
Here is a video I created on loom that shows how I created a template from scratch for my API Doc on Golang Integration
<video controls src="creating-an-api-doc-with-notion.mp4" ></video>

## Deployment 
Using Notion's page publishing feature is the simplest approach to deploying these docs.
The button can be made active by clicking the "Share to web" button in the top right corner and then switching it to the right. Here is a sample of what your doc link will look like after deployment. 
```
https://www.notion.so/Golang-Integration-dcb8e308ffd8462ea00de6cdee2f4dea
```

## Automation is fast and more effective 
I began by outlining the necessity of an API doc, how it is a crucial component of an API project, as well as how the documentation should accurately reflect each step of the process and be simple enough for new users to understand because, if it is written in haste or without any sense of orderliness, it may end up being jumbled and difficult to understand.

Notion is totally perfect as an app for maintaining a workflow environment but has a bit of lapse as it has to do with API documenting. The important thing to note is that not all developers have enough time on their plate to go about the notion process so they will prefer automatic documentation tools like APIToolkit to automate their documentation and keep it up to date. To promote this workflow, we created APIToolkit automatic documenter. APIToolkit documenter is optimized for speed, it allows you to auto-generate API documentation within minutes. [Click](../updates-october-2022) to learn more about APIToolkit Automatic Documenter.
