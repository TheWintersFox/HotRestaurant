// ## Phase II - For this second phase, aim to complete the following

// * Backend Team:

// Create a basic Express server.

// Your server at this point should do the BARE MINIMUM. (Effectively, it should just say: "Listening at PORT 3000" when the command node server.js is run.)

// * Frontend Team:

// Create three HTML files one called home.html, another called tables.html, and another called reserve.html. Use dummy data and create pages similar to the one shown to you on the sample Hot Reservation webpage.
// All: If you finish early, begin thinking about how the Data, API, and Routes should look.


// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
}, {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
}, {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
    res.send("Welcome to Hot Restaurant!");
});

// What does this route do?
app.get("/api/tables", function(req, res) {
    return res.json(characters);
});

// What does this route do?
app.get("/api/tables", function(req, res) {
    // What does this code do?
    var chosen = req.params.character;
    console.log(chosen);

    // What does this code do?
    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    // What does this code do?
    return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  console.log(newtables);

  // We then add the json the user sent to the tables array
  tables.push(newtables);

  // We then display the JSON to the users
  res.json(newtables);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
