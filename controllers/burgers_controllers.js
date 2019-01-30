var express = require('express');


//create routes for functions


// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');
const burgerController = function(app){
// Create the routes and associated logic
app.get('/', function(req, res) {
  burger.selectAll(function(burgers) {
    console.log(burgers);
    var hbsObject = {
      burgers: burgers,
      layout: 'main',
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

app.post('/burgers', function(req, res) {
  console.log(req.body);
  burger.insertOne(
    req.body.burger_name,
    function(data) {
    res.redirect('/');
  });
});

app.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

}


// Export routes for server.js to use.
module.exports = burgerController;
//export routes for server.js to use
