// webhooktest.js

function Hook(input){
	if (input == undefined || typeof input !== 'string' || input == '') {
		throw new Error('check input');
	} else if (!input.startsWith('https://discordapp.com/api/webhooks/')) {
		throw new Error('check if this is a discord webhook');
	} else {
		if (input.match(/(?!webhooks\/)\d.+?(?=\/)/g)) {
			this.id = input.match(/(?!webhooks\/)\d.+?(?=\/)/g)[0];
		};
		if (input.match(/(?<=\d\/).+?$/g)) {
			this.token = input.match(/(?<=\d\/).+?$/g)[0];
		}; 
	};
};

module.exports = Hook