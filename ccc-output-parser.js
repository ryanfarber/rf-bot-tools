/*
Carbon Copy Cloner output parser
V1
*/

function CCCOutputParser(str) {
	str = str.split('|')
	this.task = str[0]
	this.copyfrom = str[1]
	this.copyto = str[2]
	this.date = str[3]
	this.time = str[4]
	this.datacopied = str[5]
	this.status = str[6]
	this.exitcode = str[7]
	
	if (this.status == 'Success') {
		this.message = `✅ **Copy Successful**\n**task**: ${this.task}\n**status**: ${this.status}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
	} else 
	if (this.status == 'Cancelled') {
		this.message = `🚫 **Copy Cancelled**\n**task**: ${this.task}\n**status**: ${this.status}\n**time elapsed**: ${this.time}\n**data copied**: ${this.datacopied}`;
	};
};

module.exports = CCCOutputParser