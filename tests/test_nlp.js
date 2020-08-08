// test_nlp.js

var BotMessageParser = require("../lib/bot-message-parser.js")



var input = "!bot hello there"

var botmessageparser = new BotMessageParser(input)

console.log(botmessageparser)