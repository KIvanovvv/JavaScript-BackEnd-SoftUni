const { Schema, model } = require("mongoose");

const personScheme = new Schema({
  name: String,
  age: Number,
});

const Person = model('Person',personScheme);

module.exports = Person
