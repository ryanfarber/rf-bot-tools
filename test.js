var { DiscordContext, TwitchContext, TwilioContext } = require('./lib/context-builder/')

var data

var discord = new DiscordContext()
var twitch = new TwitchContext()
var twilio = new TwilioContext()

console.log(discord)
console.log(twitch)
console.log(twilio)



// var text = new TextCleaner(message.text)
// console.log(text.clean)

// var webhook = new WebhookParser('https://discordapp.com/api/webhooks/webhookid/webhooktoken')
// console.log(webhook)


