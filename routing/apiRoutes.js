var express = require("express");
var path = require("path");
var friends = require("./../data/friends")

// Sets up the Express App
// =============================================================
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//API call to get people
app.get("/api/people", function(req, res) {

    return res.json(friends);
});

// Create New Characters - takes in JSON input
app.post("/api/person-added", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newPerson = req.body;
  
    console.log(newPerson);

    newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();
  
    friends.push(newPerson);
  
    res.json(newPerson);
});

