const { Schema, model, Types } = require("mongoose");

const articleScheme = new Schema({
  author: String,
  title: { type: String, required: true, minlength: 10 },
  content: { type: String, required: true, minlength: 10 },
  comments: { type: [Types.ObjectId], default: [], ref: "Comment" },
});

const Article = model("Article", articleScheme);

module.exports = Article;
