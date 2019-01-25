var express = require("express");
var exphbs = require("express-handlebars");
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


  //routes
  app.get("/burgers", function(req, res){
    res.render("burger_name", {
      foods: burger, 
    });
  });
  var routes = require(path.join(__dirname, '/config/conrollers/burgers_controllers.js'))(app);
  app.use('/', routes);
  
  // Start our server so that it can begin listening to client requests.
  app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });