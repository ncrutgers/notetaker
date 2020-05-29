// Dependencies imports
var express = require("express");
// var fs = require("fs");
// var path = require("path");

// Set Express app and PORT
var app = express();
var PORT =  process.env.PORT || 8080;

// Allows client side rendering of public files(css, js, etc.)
app.use(express.static("public"));

// Sets Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Express app server starts listening 
app.listen(PORT, function() {
    console.log("App listening on http://localhost:" + PORT);
});