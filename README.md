# Thin Crust
Slack chat bot that will simulates the ordering of a pizza, and allows you to know when it is ready, in addition to its current location.

For more information, please review the blog post located at: https://medium.com/@nparsons08.

## Application Deployment

This example application can be deployed as three separate workers. That being said, I would recommend using a process manager for Node.js such as [PM2](https://github.com/Unitech/pm2).

## Environment Variables

The following environment variables are required to run this application:

* SLACK_TOKEN
* MONGODB_CONNECTION_STRING
