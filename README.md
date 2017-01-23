# Thin Crust
Slack chat bot that will simulates the ordering of a pizza, and allows you to know when it is ready, in addition to its current location.

For more information, please review the blog post located at: https://medium.com/@nparsons08.

## Application Deployment

This example application should be deployed as three separate workers. With that said, I recommend using a process manager for Node.js such as [PM2](https://github.com/Unitech/pm2).

In order to run PM2, you'll need a `process.json` file that is configured to run three workers simultaneously. Below is the proper configuration for your file:

```json
{
    "apps" : [
        {
            "name"        : "index",
            "script"      : "./index.js",
            "watch"       : true,
            "env": {
                "NODE_ENV": "production",
                "SLACK_TOKEN": "YOUR_SLACK_TOKEN"
            }
        },
        {
            "name"        : "worker",
            "script"      : "./worker.js",
            "watch"       : true,
            "env": {
                "NODE_ENV": "production",
                "MONGODB_CONNECTION_STRING": "YOUR_MONGODB_CONNECTION_STRING"
            }
        },
        {
            "name"        : "slack",
            "script"      : "./slack.js",
            "watch"       : true,
            "env": {
                "NODE_ENV": "production",
                "SLACK_TOKEN": "YOUR_SLACK_TOKEN",
                "MONGODB_CONNECTION_STRING": "YOUR_MONGODB_CONNECTION_STRING"
            }
        }
    ]
}
```

Assuming that you've installed PM2 on your machine, you can simple run `pm2 start process.json` from the root directory and it will kick off all of the worker processes.

## Environment Variables

The following environment variables are required to run this application:

* SLACK_TOKEN
* MONGODB_CONNECTION_STRING
