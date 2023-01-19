const { getArticleById } = require("../services/articleServices.js");
const { getComments } = require("../services/commentServices.js");

const commentsController = require("express").Router();

commentsController.get("/:id", async (req, res) => {
  const id = req.params.id;
  const article = await getArticleById(id);
  const comments = await getComments(id);
  console.log(comments);
  res.render("comments", {
    title: "Comments",
    article,
    comments,
  });
});

module.exports = commentsController;
