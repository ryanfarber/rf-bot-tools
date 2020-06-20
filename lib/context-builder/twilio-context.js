// twilio context

function TwilioContext(data, settings) {
	this.settings = settings || {}

	this.context_name = 'twilio';
	this.type = "";
	this.timestamp = "";
	this.user = {
		name: "",
		id: ""
	};
	this.message = {
		text: input.content,
		id: input.id
	};

	if (this.settings.debug) console.log(data)

};

module.exports = TwilioContext