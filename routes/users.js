const users = require("../model/users");
const express = require("express");
const route = express.Router();

route.post("/addUser", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      emailId,
      password,
      gender,
      description,
    } = req.body;
    const addUser = new users({
      firstName,
      lastName,
      phoneNumber,
      emailId,
      password,
      gender,
      description,
    });
    addUser.save();
    res.json({ message: "Success" });
  } catch (err) {
    res.json({ message: err });
  }
});

route.post("/validateUser", async (req, res) => {
  try {
    const { emailId, password } = req.body;

    const data = await users.findOne({
      emailId: emailId,
    });
    if (data.password === password) {
      res.json({ message: "Success" });
    } else {
      res.json({ message: "Wrong Password" });
    }
  } catch (err) {
    res.json({ message: err });
  }
});
module.exports = route;
