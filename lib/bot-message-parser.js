/*
bot-message-parser.js

a tool to output a bot command/trigger and the text of the message

var text = '!bot hello there'
var input = new BotMessageParser(text)
console.log(input)

*/

function BotMessageParser(input, settings = {}) {
	this.settings = settings || {}
	this.settings.defaultTrigger = settings.defaultTrigger || "!"
	let allowtriggerinmessage = this.settings.allowtriggerinmessage || false
	if (input == undefined) {
		return
	} else 
	if (typeof input !== 'string') {
		throw new Error('input must be a string!')
	};
	input = input.trim()
	if (input == "" || input == undefined) {
		this.trigger = undefined
		this.text = undefined
	};

	if (!allowtriggerinmessage) {
		this.info = 'trigger is set to beggining of message'
		if (input.match(/^!\b.+?\b/g)) {
			this.trigger = input.match(/^!\b.+?\b/g)[0]
			this.text = input.replace(this.trigger, '').trim()
			if (this.text == "") {
				this.text = undefined
			}
		} else {
			this.trigger = undefined
		};
	} else {
		this.info = 'trigger allowed anywhere in message'
		if (input.match(/!\b.+?\b/g)) {
			this.trigger = input.match(/!\b.+?\b/g)[0]
			this.text = input.replace(this.trigger, '').trim()
			if (this.text == "") {
				this.text = undefined
			}
		} else {
			this.trigger = undefined
		};
	};

	if (!this.trigger && input) {
		this.text = input
	};
}

module.exports = BotMessageParser

