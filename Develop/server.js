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
const { table } = require("console");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var tables = [{
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
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/index", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/waitlist", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

// Displays all table
app.get("/api/tables", function(req, res) {
    return res.json(tables);
});


// Create New Characters - takes in JSON input
app.post("/api/table", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTables = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTables.routeName = newTables.name.replace(/\s+/g, "").toLowerCase();

    console.log(newTables);

    tables.push(newTables);

    res.json(newTables);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});