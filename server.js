const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const DB_URL = require("./config/key").MongodbURI;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect Mongo
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));

//Bodyparse
app.use(express.urlencoded({ extended: false }));

// app.get("/", (req, res, next) => {
//   res.status(200).json({ message: "DummyUsers" });
// });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
// app.use(require(""));
app.get("/", require("./routes/characters"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log("Server running on ", PORT));
