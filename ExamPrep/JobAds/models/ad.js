const { Schema, model, Types } = require("mongoose");

const adSchema = new Schema({
  headline: { type: String, required: true },
  location: { type: String, required: true },
  companyName: { type: String, required: true },
  description: { type: String, required: true },
  applied: { type: [Types.ObjectId], default: [], ref: "User" },
  ownerId: { type: Types.ObjectId, ref: "User", required: true },
});

const Ad = model("Ad", adSchema);

module.exports = Ad;
