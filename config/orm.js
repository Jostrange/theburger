var connectToSqlDb = require('Mysql');
var connection = require('./connection.js');



var orm = {

  selectAll: function (tableName, callback) {
    connection.query("SELECT burger_name, id FROM burgers_db.menu",
      function (error, results, fields) {
        callback(results.map(burger=>({burger_name: burger.burger_name, id: burger.id})));
      })
      


  },

  insertOne: function (burger_name, callback) {
    connection.query(`INSERT INTO burgers_db.menu (burger_name, devoured) VALUES ("${burger_name}", 0)`,
      function (error, results, fields) {
        callback([]);
      }
    );

  },

  updateOne: function (id) {
    console.log("yupdating")
    var command = `UPDATE burgers_db.menu SET devoured = 1 WHERE id = ${id}`
    connection.query(command);
  },

  deleteOne: function (devoured) {
    var deleteCommand = `DESTROY FROM burgers_db.menu WHERE devoured = 0`
    connection.query(deleteCommand);

  }


}


module.exports = orm;