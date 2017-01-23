'use strict'

const SlackBot  = require('slackbots'),
      Chance    = require('chance'),
      MongoDB   = require('mongodb').MongoClient

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'Thin Crust'
})

const params = {
    icon_emoji: ':pizza:'
}

let url = process.env.MONGODB_CONNECTION_STRING

MongoDB.connect(url, function(err, db) {

    if (err) {
        console.log(err)
        process.exit(0)
    }

    let collection = db.collection('messages')

    let options = {
        tailable: true,
        awaitdata: true,
        numberOfRetries: -1,
    }

    let stream = collection.find({}, options).stream()

    stream.on('data', function(doc) {
        bot.postMessageToChannel(`food`, `${doc.driver} is currently in route. Approximate pizza location is ${doc.street}!`, params)
    })

})
