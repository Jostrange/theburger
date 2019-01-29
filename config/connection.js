// required dependencies
var mysql = require('mysql');

// Create the MySQL connection 
var connection;

// // if (process.env) {
// 	console.log("I'm working")
	
// 	connection = mysql.createConnection(process.env.burgers_db);
// } else {

	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: 'Madeline55!',
		database: 'burgers_db'
	})

	module.exports = connection;
//};