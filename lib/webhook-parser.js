/* parsewebhook.js

this will take a Discord webhook URL and create an object with the id and token.

*/

function Hook(input){
	input = input.trim()
	if (input == undefined) return
	if (typeof input !== 'string' || input == '') {
		throw new Error('check input');
	} else if (!input.startsWith('https://discordapp.com/api/webhooks/')) {
		throw new Error('check if this is a discord webhook');
	} else {
		if (input.match(/(?<=webhooks\/).+?\b/g)) {
			this.id = input.match(/(?<=webhooks\/).+?\b/g)[0];
		};
		if (input.match(/([^\/]*$)/g)) {
			this.token = input.match(/([^\/]*$)/g)[0];
		}; 
	};
};

module.exports = Hook