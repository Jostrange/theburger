var express = require('express');


//create routes for functions


// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');
const burgerController = function (app) {
  // Create the routes and associated logic
  app.get('/', function (req, res) {
    burger.selectAll(function (burgers) {
      var hbsObject = {
        burgers: burgers,
        layout: 'main',
      };
      // console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  app.post('/burgers', function (req, res) {
    console.log("insidBurgers");
    burger.insertOne(
      req.body.burger_name,
      function (data) {
        res.redirect('/');
      });
  });

  app.post('/burgers/:id', function (req, res) {
    console.log('hi');
    burger.updateOne(req.params.id);
    res.redirect('/');
  });
}


// Export routes for server.js to use.
module.exports = burgerController;
//export routes for server.js to use
