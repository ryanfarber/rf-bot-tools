# rf-bot-tools

a suite of tools to help with coding stuff with bots

### Modules
1) bot-message-parser
2) webhook-parser
3) text-cleaner
4) context-builder
5) user-profile

### context-builder
- Discord
- Twitch
- Twilio
- Frame.io
- Carbon Copy Cloner
- Github
- Transmission

### bot-message-parser
this module will parse raw text from a chat, and output the bot trigger, and following text

```javascript
var text = '!bot hello there'
var input = new BotMessageParser(text)
console.log(input)
```