// required dependencies
var mysql = require('mysql');

// Create the MySQL connection 
var connection;

if (process.env || 3000) {
	
	connection = mysql.createConnection(process.env.burgers_db);
} else {

	connection = mysql.createConnection({
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'burgers_db'
	})
};