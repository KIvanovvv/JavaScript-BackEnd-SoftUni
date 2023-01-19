const { Schema, model } = require("mongoose");

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  content: { type: String, minlength: 10 },
});

const Article = model("Article", articleSchema);

module.exports = Article;
