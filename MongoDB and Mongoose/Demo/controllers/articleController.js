const { getAllArticles } = require("../services/articleServices.js");
const articleController = require("express").Router();

articleController.get("/", async (req, res) => {

  const articles = await getAllArticles();
  res.render("articles", {
    title: "Articles page",
    articles,
  });
});

module.exports = articleController;
