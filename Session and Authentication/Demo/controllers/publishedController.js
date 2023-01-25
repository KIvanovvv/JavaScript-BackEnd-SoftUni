const { getUserArticles } = require("../services/articleServices.js");

const publishedController = require("express").Router();

publishedController.get("/", async (req, res) => {
  const articles = await getUserArticles(req.user.username);
  res.render("published", { articles });
});

module.exports = publishedController;
