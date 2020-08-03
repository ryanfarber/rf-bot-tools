// ez-database.js
// v1.0

function Database(database, userID) {
		if (database == undefined) {
			throw new Error("you must provide a database!")
		} else {
			var database = require('data-store')({ path: `${database}.json`});
		}
		if (userID == undefined) {
			throw new Error("you must provide a user ID!")
		} else {
			this.userID = userID
		}
		this.set = async (item, value) => {
			value = value.trim()
			database.set(`${this.userID}.${item}`, value)
			return database.get(`${this.userID}.${item}`, value)
		};
		this.has = (item) => {
			if (database.get(`${this.userID}.${item}`) == "" || database.get(`${this.userID}.${item}`) == undefined) {
				return false
			} else {
				return database.has(`${this.userID}.${item}`)
			}
		}
		this.get = (item) => {
			if (database.has(`${this.userID}.${item}`) == "" || database.has(`${this.userID}.${item}`) == undefined) {
				return undefined
			} else {
				return database.get(`${this.userID}.${item}`)
			};
		}
		this.clear = (item) => {
			if (database.has(`${this.userID}.${item}`)) {
				return database.del(`${this.userID}.${item}`)
			} 
		}
	}


module.exports = Database