const { Schema, model, Types } = require("mongoose");

const photoSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  age: { type: Number, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  commentList: { type: [Object], default: [] },
  ownerId: { type: Types.ObjectId, ref: "User", required: true },
});

const Photo = model("Photo", photoSchema);

module.exports = Photo;
