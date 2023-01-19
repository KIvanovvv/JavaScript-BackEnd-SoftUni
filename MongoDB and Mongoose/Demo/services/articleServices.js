const Article = require("../models/article.js");

async function getAllArticles() {
  const article = await Article.find({}).lean();
  return article;
}

module.exports = {
  getAllArticles,
};
