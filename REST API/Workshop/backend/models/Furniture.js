const { Schema, model, Types } = require("mongoose");

const furnitureSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  material: { type: String, default: "" },
  _ownerId: { type: Types.ObjectId, required: true },
});

const Furniture = model("Furniture", furnitureSchema);

module.exports = Furniture;
