var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var people = [];



//API call to get people
app.get("/api/people", function(req, res) {

    return res.json(people);
});

// Create New Characters - takes in JSON input
app.post("/api/person-added", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newPerson = req.body;
  
    console.log(newPerson);

    newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();
  
    people.push(newPerson);
  
    res.json(newPerson);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});