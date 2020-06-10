var { ContextBuilder, BotMessageParser, WebhookParser, TextCleaner } = require('./lib')

var message = new BotMessageParser('!bot Hi, my name is Ryan.  Who r u? k. that is cool i guess');
// console.log(message)

const discord = new ContextBuilder().DiscordContext()
const twitch = new ContextBuilder().TwitchContext()
console.log(discord)
console.log(twitch)

var text = new TextCleaner(message.text)
console.log(text.clean)

var webhook = new WebhookParser('https://discordapp.com/api/webhooks/webhookid/webhooktoken')
console.log(webhook)


