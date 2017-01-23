'use strict'

const SlackBot  = require('slackbots')

const bot = new SlackBot({
    token: process.env.SLACK_TOKEN,
    name: 'Thin Crust'
})

const params = {
    icon_emoji: ':pizza:'
}

bot.on('start', function() {
    bot.postMessageToChannel(`food`, `Ohh yeah! It's lunch time and I thought you might enjoy some pizza, so I went ahead and ordered a pie from your local pizza joint. It's being tossed in the oven now and should arrive soon!`, params)
})

setTimeout(function() {
    bot.postMessageToChannel('food', `Woo! Your pizza is hot, fresh, and ready to go! I'll go ahead and keep you updated on the delivery drivers location status as soon as possible.`)
}, 15000)
