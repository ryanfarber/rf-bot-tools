// twilio context

function TwilioContext(data, settings) {
	data = {}
	this.settings = settings || {}

	this.context_name = 'twilio';
	this.type = "";
	this.timestamp = "";
	this.user = {
		name: "",
		id: ""
	};
	this.message = {
		text: data.content,
		id: data.id
	};

	if (this.settings.debug) console.log(data)

};

module.exports = TwilioContext