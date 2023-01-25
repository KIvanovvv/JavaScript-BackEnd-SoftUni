const hasUserGuard = require("../middleware/hasUserGuard.js");
const { getArticleById } = require("../services/articleServices.js");
const {
  getComments,
  createComment,
} = require("../services/commentServices.js");

const commentsController = require("express").Router();

commentsController.get("/:id", hasUserGuard(), async (req, res) => {
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

commentsController.post("/:id", hasUserGuard(), async (req, res) => {
  const articleId = req.params.id;
  const { content } = req.body;
  const author = req.user.username;
  await createComment(content, author, articleId);
  res.redirect(`/comments/${articleId}`);
});

module.exports = commentsController;
