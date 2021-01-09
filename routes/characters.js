const express = require("express");
const router = express.Router();
const Characters = require("../model/characters");

router.get("/getCharacters", async (req, res) => {
  try {
    const allChars = await Characters.find();
    res.json(allChars);
  } catch (err) {
    res.json({
      message: err,
    });
  }
});

module.exports = router;
