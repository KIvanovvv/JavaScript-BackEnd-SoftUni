const { Schema, model } = require("mongoose");

const personScheme = new Schema({
  name: String,
  age: Number,
});

model();
