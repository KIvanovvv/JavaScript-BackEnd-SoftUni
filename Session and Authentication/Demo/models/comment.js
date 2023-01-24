const { Schema, model, Types } = require("mongoose");

const commentSchema = new Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  articleId: { type: Types.ObjectId, required: true },
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
