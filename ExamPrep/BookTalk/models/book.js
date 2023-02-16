const { Schema, model, Types } = require("mongoose");

const bookSchema = new Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  author: { type: String, required: true },
  bookReview: { type: String, required: true },
  genre: { type: String, required: true },
  stars: { type: Number, required: true, min: 0, max: 5 },
  wishingList: { type: [Types.ObjectId], default: [], ref: "User" },
  ownerId: { type: Types.ObjectId, ref: "User", required: true },
});

const Book = model("Book", bookSchema);

module.exports = Book;
