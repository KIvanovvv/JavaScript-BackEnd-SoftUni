const {
  getArticleById,
  getArticleInstance,
} = require("../services/articleServices.js");

const editController = require("express").Router();

editController.get("/:id", async (req, res) => {
  const article = await getArticleById(req.params.id);
  res.render("edit", { article });
});

editController.post("/:id", async (req, res) => {
  const article = await getArticleInstance(req.params.id);
  article.title = req.body.title;
  article.content = req.body.content;
  await article.save();
  res.redirect("/published");
});

module.exports = editController;
