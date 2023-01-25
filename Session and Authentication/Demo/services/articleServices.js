const Article = require("../models/article.js");

async function getAllArticles() {
  const article = await Article.find({}).lean();
  return article.reverse();
}
async function addArticle(title, content, author) {
  await Article.create({
    title,
    content,
    author,
  });
}

async function getUserArticles(username) {
  const data = await Article.find({ author: username }).lean();
  return data.reverse();
}

async function getArticleById(id) {
  const article = await Article.findById(id).populate("comments").lean();
  return article;
}

async function getArticleInstance(id){
  const article = await Article.findById(id).populate("comments");
  return article;
}

module.exports = {
  getAllArticles,
  addArticle,
  getArticleById,
  getUserArticles,
  getArticleInstance
};
