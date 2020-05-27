var fs = require("fs");
var path = require("path");

module.exports = function(app) {
// Returns the `notes.html` file.
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // Returns the `index.html` file for routes not previously defined
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};