var friends = require("./data/friends.js")
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/public/home.html"))
})

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "/public/survey.html"))
})

//API call to get people
app.get("/api/people", function(req, res) {

    res.json(friends);
});

// Create New Characters - takes in JSON input
app.post("/api/person-added", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newPerson = req.body;
  
    console.log(newPerson);

    friends.push(newPerson);

    newPerson.routeName = newPerson.name.replace(/\s+/g, "").toLowerCase();
  
    res.json(newPerson);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});
