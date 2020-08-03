/*
bot-message-parser.js

a tool to output a bot command/trigger and the text of the message

var text = '!bot hello there'
var input = new BotMessageParser(text)
console.log(input)

*/

function BotMessageParser(input, settings = {}) {
	var settings = settings || {}
	settings.defaultTrigger = settings.defaultTrigger || "!"
	settings.allowTriggerInMessage = settings.allowTriggerInMessage || false

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

	var default_dict = {
		"u": "you",
		"r": "are",
		"wot": "what",
		"wut": "what",
		"wots": "whats",
		"fuk": "fuck",
		"suk": "suck",
		"suks": "sucks",
		"sux": "sucks",
		"wat": "what",
		"o": "oh",
		"k": "ok",
		"kk": "ok",
		"hehe": "haha",
		"heh": "haha",
		"nah": "no",
		"ye": "yes",
		"yea": "yes",
		"sik": "sick",
		"thx": "thanks",
		"ur": "your"
	}

	var dictionary = settings.dictionary || default_dict
	var words = input
	.toLowerCase()
	.replace(/[^\w\s]|_/g, '')
	.replace(/\s+/g, ' ') 
	.split(" ");
	var newstring = [];

	for (let x of words) {
		if (x in dictionary) {
			x = dictionary[x]
		};
		newstring.push(x);
	};

	this.raw = input
	this.clean = newstring.join(" ")

	if (!this.allowTriggerInMessage) {
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

// var x = new BotMessageParser("!hello world how are you?")

// console.log(x)

