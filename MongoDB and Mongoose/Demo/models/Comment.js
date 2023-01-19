const { Schema, model, SchemaType } = require("mongoose");

const commentScheme = new Schema({
  author: String,
  content: { type: String, required: true },
});

const Comment = model("Comment", commentScheme);

module.exports = Comment;
