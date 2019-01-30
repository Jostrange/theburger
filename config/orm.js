var connectToSqlDb = require('Mysql');
var connection = require('./connection.js');



var orm = {

  selectAll: function (tableName, callback) {
    connection.query("SELECT burger_name, id FROM menu",
      function (error, results, fields) {
        callback(results.map(burger=>({burger_name: burger.burger_name, id: burger.id})));
      })
      


  },

  insertOne: function (burger_name, callback) {
    connection.query(`INSERT INTO menu (burger_name, devoured) VALUES ("${burger_name}", 0)`,
      function (error, results, fields) {
        callback([]);
      }
    );

  },

  updateOne: function () {
    console.log("yupdating")
    connection.query(`UPDATE menu SET devoured = 1 WHERE devoured = 0`);
  },

  deleteOne: function () {
    connection.query(`DESTROY FROM menu WHERE devoured = 0`);

  }


}


module.exports = orm;