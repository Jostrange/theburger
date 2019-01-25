var connection = require('/connection.js');


// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var connectionToSql = function(connection){
    connection.connect(function(err) {
        if (err) {
          console.error("error connecting: " + err.stack);
          return;
        }
        console.log("connected as id " + connection.threadId);
      });
      
      // route for showing burgers in main
      app.get("/", function(req, res) {
        connection.query("SELECT * burger_name FROM menu", function(err, data){
        if (error) throw error;
        return res.status(500).end();
        res.render("main", {this: burger_name});
      
      });
     
      
      // Delete a burger based off of the devour it button
      app.delete("/api/:id", function(req, res) {
        connection.query("DELETE burger_name VALUES (id)", [req.body.plan], function(err, result) {
          if (err) {
            return res.status(500).end();
          }
          // Send to devoured
          res.json({ id: result.insertId });
          console.log({ id: result.insertId });
        });
      
      // Update the devoured burger in the database
      app.post("/api/id", function(req, res) {
        console.log(req.body)
        connection.query('INSERT INTO devoured(burger_name,id) VALUES (true)',[req.body.author,req.body.quote], function (error, results, fields) {
          if (error) throw error;
        
        });
       });
      
      // Start our server so that it can begin listening to client requests.
      app.listen(PORT, function() {
        // Log (server-side) when our server has started
        console.log("Server listening on: http://localhost:" + PORT);
      });
    
    
});


// Export the ORM object in module.exports.
module.exports = connectionToSql;