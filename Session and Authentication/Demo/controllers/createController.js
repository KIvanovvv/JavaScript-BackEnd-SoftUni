const { addArticle } = require("../services/articleServices.js");

const createController = require("express").Router();

createController.get("/", (req, res) => {
  res.render("create", { title: "Create post" });
});

createController.post("/", async (req, res) => {
  const { title, content } = req.body;
  const author = req.user.username
  await addArticle(title, content,author);
  res.redirect("/articles");
});

module.exports = createController;
