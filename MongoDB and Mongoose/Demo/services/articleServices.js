const Article = require("../models/article.js");

async function getAllArticles() {
  const article = await Article.find({}).lean();
  return article;
}
async function addArticle(data) {
  const { title, content, author } = data;
  await Article.create({
    title,
    content,
    author,
  });
}

module.exports = {
  getAllArticles,
  addArticle,
};
