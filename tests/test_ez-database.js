// test_ez-database.js

const Database = require("../lib/ez-database.js");
const ryan = new Database("users", "001")

ryan.set("nickname", "test")