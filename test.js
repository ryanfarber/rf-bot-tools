var { ContextBuilder, BotMessageParser, WebhookParser, TextCleaner } = require('./lib')


var message = new BotMessageParser('!bot Hi, my name is Ryan.  Who r u? k. that is cool i guess');
console.log(message)

var text = new TextCleaner(message.text)
console.log(text.clean)

var webhook = new WebhookParser('https://discordapp.com/api/webhooks/webhookid/webhooktoken')
console.log(webhook)


