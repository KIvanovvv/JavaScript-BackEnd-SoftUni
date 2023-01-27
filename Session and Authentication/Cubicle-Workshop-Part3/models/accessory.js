const { Schema, model, Types } = require("mongoose");

const accessorySchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, maxlength: 100, minlength: 10 },
  imageUrl: { type: String, required: true },
  cubes: { type: [Types.ObjectId], default: [], ref: "Cube" },
});

const Accessory = model("Accessory", accessorySchema);

module.exports = Accessory;
