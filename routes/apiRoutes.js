var fs = require("fs");
var path = require("path");

module.exports = function(app) {

// The app has a backend `db.json` file used to store and retrieve notes using the `fs` module.
// Reads the `db.json` file and returns all saved notes as JSON.
app.get("/api/notes", function(req, res) { 
    // returns string response
  fs.readFile("./db/db.json", "utf8", function(err, response) {
      if (err) throw err;
      // returns JSON object 
      res.json(JSON.parse(response));
    });
  });

  // The app has a backend `db.json` file used to store and retrieve notes using the `fs` module.
// Receives a new note to save on the request body, adds it to the `db.json` file, and then returns the new note to the client.
app.post("/api/notes", function(req, res) {
    // saves object {} to newNote
    var newNote = req.body;
    // console.log(newNote);
    fs.readFile("./db/db.json", "utf8", function(err, data) {
      if (err) throw err;      
      var allNotes = JSON.parse(data);
      allNotes.push(newNote);

      fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), function(err) {
        if (err) throw err;
        res.json(newNote);
      }); 
    }); 
});

// Receives a query parameter containing the id of a note to delete. Each note has a unique `id` when it's saved. To delete a note, read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.
app.delete("/api/notes/:id", function(req, res) {
  var paramId = req.params.id;
  fs.readFile("./db/db.json", "utf8", function(err, data) {
    if (err) throw err;
    var allNotes = JSON.parse(data);
    for (var i = 0; i < allNotes.length; i++) {
      
      if (paramId === allNotes[i].id) {
        allNotes.splice(i, 1);
      }
    }
    fs.writeFile("./db/db.json", JSON.stringify(allNotes, null, 2), function(err) {
      if (err) throw err;      
    });

    //res.json();
  });
});

};