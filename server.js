const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Bodyparse
app.use(express.urlencoded({ extended: false }));

// const DummyUsers = [];

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "DummyUsers" });
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server running on ", PORT));

module.exports = app;
