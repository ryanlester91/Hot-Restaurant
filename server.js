var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var waitlist = [
    {
        uniqueID: "0",
        name: "Manuela",
        phoneNumber: "555-1234",
        email: "manuela@mail.com"
    },
    {
        uniqueID: "1",
        name: "Jeff",
        phoneNumber: "555-1234",
        email: "jeff@mail.com"
    },
    {
        uniqueID: "2",
        name: "Yusuf",
        phoneNumber: "555-1234",
        email: "yusuf@mail.com"
    },
    {
        uniqueID: "3",
        name: "Dude",
        phoneNumber: "555-1234",
        email: "dude@mail.com"
    },
    {
        uniqueID: "4",
        name: "Raphael",
        phoneNumber: "555-1234",
        email: "raphael@mail.com"
    },
    {
        uniqueID: "5",
        name: "John",
        phoneNumber: "555-1234",
        email: "john@mail.com"
    }
];

var servelist = []

// Index, Reserve, Tables

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});
app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});



app.get("/api/waitlist", function (req, res) {
    return res.json(waitlist);
});
app.get("/api/servelist", function (req, res) {
    return res.json(servelist);
});

app.get("/api/waitlist/:customer", function (req, res) {
    var chosen = req.params.customer;
    console.log(chosen);
    for (var i = 0; i < customer.length; i++) {
        if (chosen === customer[i].uniqueID) {
            return res.json(customer[i]);
        }
    }
    return res.json(false);
});
app.get("/api/servelist/:customer", function (req, res) {
    var chosen = req.params.customer;
    console.log(chosen);
    for (var i = 0; i < customer.length; i++) {
        if (chosen === customer[i].uniqueID) {
            return res.json(customer[i]);
        }
    }
    return res.json(false);
});

app.post("/api/waitlist", function (req, res) {
    var newCustomer = req.body;
    newCustomer.uniqueID = newCustomer.name.replace(/\s+/g, "").toLowerCase();
    console.log(newCustomer);
    waitlist.push(newCustomer);
    res.json(newCustomer);
    move();
});



app.listen(PORT, function () {
    console.log("Listening on http://localhost:" + PORT);
});



function move() {
    for (let i = 0; servelist.length < 5; i++) {
        servelist.push(waitlist[0]);
        waitlist.shift();
    }
    // console.log(waitlist);
    // console.log(servelist);
}
move();