const { Schema, model, Types } = require("mongoose");

const cubeSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, maxlength: 100, minlength: 10 },
  imageUrl: { type: String, required: true },
  difficulty: { type: Number, min: 1, max: 6 },
  accessories: { type: [Types.ObjectId], default: [], ref: "Accessory" },
});

const Cube = model("cube", cubeSchema);

module.exports = Cube;
