const { Schema, model, Types } = require("mongoose");

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, minlength: 10 },
  comments: { type: [Types.ObjectId], default: [], ref: "Comment" },
});

const Article = model("Article", articleSchema);

module.exports = Article;
