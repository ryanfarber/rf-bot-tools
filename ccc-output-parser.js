// Carbon Copy Cloner output parser

function CCCOutputParser(str) {
	str = str.split('|')
	this.task = str[0]
	this.copyfrom = str[1]
	this.copyto = str[2]
	this.date = str[3]
	this.timeelapsed = str[4]
	this.datacopied = str[5]
	this.status = str[6]
	this.exitcode = str[7]
};

module.exports = CCCOutputParser