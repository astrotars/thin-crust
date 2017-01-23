# Thin Crust
Slack chat bot that will simulates the ordering of a pizza, and allows you to know when it is ready, in addition to its current location.

For more information, please review the blog post located at: https://medium.com/@nparsons08.

## Application Deployment

This example application should be deployed as three separate workers. With that said, I recommend using a process manager for Node.js such as [PM2](https://github.com/Unitech/pm2).

In order to run PM2 with three workers, you'll need a process.json file that is configured properly. Below is an example:

```json
{
    "apps" : [
        {
            "name"        : "index",
            "script"      : "./index.js",
            "watch"       : true,
            "env": {
                "NODE_ENV": "production",
            }
        },
        {
            "name"        : "worker",
            "script"      : "./worker.js",
            "watch"       : true,
            "env": {
                "NODE_ENV": "production",
            }
        },
        {
            "name"        : "slack",
            "script"      : "./slack.js",
            "watch"       : true,
            "env": {
                "NODE_ENV": "production",
            }
        }
    ]
}
```

## Environment Variables

The following environment variables are required to run this application:

* SLACK_TOKEN
* MONGODB_CONNECTION_STRING
