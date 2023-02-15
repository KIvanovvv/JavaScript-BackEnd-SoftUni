const { Schema, model, Types } = require("mongoose");

const actionSchema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String, required: true },
  bidder: { type: [Types.ObjectId], ref: "User" },
  author: { type: Types.ObjectId, ref: "User", required: true },
});

const Action = model("Action", actionSchema);

module.exports = Action;
