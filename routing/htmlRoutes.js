var express = require("express");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports.index = app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
})

module.exports.survey = app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});