var orm = require('../config/orm.js');

// Create the burger object
var burger = {
    // Select all burger table entries
    selectAll: function(cb) {
      orm.selectAll('menu', function(res) {
        cb(res);
      });
    },
  
    // The variables cols and vals are arrays
    insertOne: function(burger_name, cb) {
      orm.insertOne(burger_name, function(res) {
        cb(res);
      });
    },
  
    // The objColVals is an object specifying columns as object keys with associated values
    updateOne: function(objColVals, condition, cb) {
      orm.updateOne('menu', objColVals, condition, function(res) {
        cb(res);
      });
    },

    // The objColVals is an object specifying columns as object keys with associated values
    deleteOne: function(condition, cb) {
      orm.deleteOne('menu', condition, function(res) {
        cb(res);
      });
    }
  };
  
  // Export the database functions for the controller (burgerController.js).
  module.exports = burger;
