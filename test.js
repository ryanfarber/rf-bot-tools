var { DiscordContext, TwitchContext, TwilioContext } = require('./lib/context-builder/')
var BotMessageParser = require("./lib/bot-message-parser.js")

var data

var discord = new DiscordContext()
var twitch = new TwitchContext()
var twilio = new TwilioContext()

var message = new BotMessageParser("!bot hello world")

console.log(discord)
console.log(twitch)
console.log(twilio)

console.log(message)



// var text = new TextCleaner(message.text)
// console.log(text.clean)

// var webhook = new WebhookParser('https://discordapp.com/api/webhooks/webhookid/webhooktoken')
// console.log(webhook)


