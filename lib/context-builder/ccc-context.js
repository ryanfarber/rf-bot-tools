// ccc-context.js

function CCCContext(input = []) {
	// if (input == undefined) return
	if (this.settings.debug) console.log(input)
	// if (!input) {
	//   input = [];
	// } else {
	//   input = input.split('|');
	// };
	this.context_name = 'ccc'
	this.task = input[0]
	this.copyfrom = input[1]
	this.copyto = input[2]
	this.date = input[3]
	this.time = input[4]
	this.datacopied = input[5]
	this.status = input[6]
	this.exitcode = input[7]

	if (this.status == 'Success') {
		this.message = `✅ **Copy Successful**\n**task**: ${this.task}\n**status**: ${this.status}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
	} else 
	if (this.status == 'Cancelled') {
		this.message = `🚫 **Copy Cancelled**\n**task**: ${this.task}\n**status**: ${this.status}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
	};
	if (this.settings.simple) console.log(this)
	return this

} // END CCCContext

module.exports = CCCContext