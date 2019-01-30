var connectToSqlDb = require('Mysql');
var connection = require('./connection.js');



var orm = {

  selectAll: function (tableName, callback) {
    connection.query("SELECT burger_name FROM menu",
      function (error, results, fields) {
        console.log(error);
        console.log(results);
        console.log(fields);
        callback(results.map(burger=>({burger_name: burger.burger_name})));
      })
      


  },

  insertOne: function (burger_name, callback) {
    connection.query(`INSERT INTO menu (burger_name, devoured) VALUES ("${burger_name}", 0)`,
      function (error, results, fields) {
        console.log(error);
        console.log(results);
        console.log(fields);
        callback([]);
      }
    );

  },

  updateOne: function () {
    connection.query(`UPDATE menu SET devoured = 1 WHERE devoured = 0)`);
  },

  deleteOne: function () {
    connection.query(`DESTROY FROM menu WHERE devoured = 0)`);

  }


}


module.exports = orm;