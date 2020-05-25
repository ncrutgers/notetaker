// Dependencies imports
var express = require("express");
var fs = require("fs");
var path = require("path");

// Set Express app and PORT
var app = express();
var PORT =  process.env.PORT || 8080;
// Sets Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Returns the `notes.html` file.
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
  });
// Returns the `index.html` file
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/index.html"));
  });


  


// Express app server starts listening 
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});