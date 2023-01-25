const {
  getArticleById,
  getArticleInstance,
} = require("../services/articleServices.js");

const editController = require("express").Router();

editController.get("/:id", async (req, res) => {
  const article = await getArticleById(req.params.id);
  res.render("edit", { title: "Edit", article });
});

editController.post("/:id", async (req, res) => {
  const article = await getArticleInstance(req.params.id);
  article.title = req.body.title;
  article.content = req.body.content;
  await article.save();
  res.redirect("/published");
});

editController.get("/delete/:id", (req, res) => {
  res.render("delete", {
    title: "Delete",
  });
});
editController.post("/delete/:id", async (req, res) => {
  const article = await getArticleInstance(req.params.id);
  await article.delete();
  res.redirect("/published");
});

module.exports = editController;
