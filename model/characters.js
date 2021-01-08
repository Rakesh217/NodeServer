const mongoose = require("mongoose");

const charactersSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  height: {
    type: Number,
  },
  mass: {
    type: Number,
  },
  gender: {
    type: String,
  },
  homeworld: {
    type: String,
  },
  species: {
    type: String,
  },
  wiki: {
    type: String,
  },
  image: {
    type: String,
  },
  dateDestroyed: {
    type: String,
  },
  destroyedLocation: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  productLine: {
    type: String,
  },
  model: {
    type: String,
  },
  class: {
    type: String,
  },
  degree: {
    type: String,
  },
  sensorColor: {
    type: String,
  },
  platingColor: {
    type: String,
  },
  armament: {
    type: Array,
  },
  equipment: {
    type: Array,
  },
  born: {
    type: String,
  },
  bornLocation: {
    type: String,
  },
  died: {
    type: String,
  },
  diedLocation: {
    type: String,
  },
  species: {
    type: String,
  },
  hairColor: {
    type: String,
  },
  died: {
    eyeColor: String,
  },
  skinColor: {
    type: String,
  },
  cybernetics: {
    type: String,
  },
  era: {
    type: Array,
  },
  kajidic: {
    type: String,
  },
  affiliations: {
    type: Array,
  },
  masters: {
    type: Array,
  },
  apprentices: {
    type: Array,
  },
  formerAffiliations: {
    type: Array,
  },
});

const characters = mongoose.model("characters", charactersSchema);

module.exports = characters;
