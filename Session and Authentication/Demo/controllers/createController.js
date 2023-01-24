const { addArticle } = require("../services/articleServices.js");

const createController = require("express").Router();

createController.get("/", (req, res) => {
  res.render("create", { title: "Create post" });
});

createController.post("/", async (req, res) => {
  console.log(req.body);
  await addArticle(req.body);
  res.redirect("/articles");
});

module.exports = createController;
