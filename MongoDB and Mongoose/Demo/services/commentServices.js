const Comment = require("../models/comment.js");

async function getComments(articleId) {
  const comments = await Comment.find({ articleId: articleId }).lean();
  return comments;
}

async function createComment(content, author, articleId) {
  await Comment.create({
    content,
    author,
    articleId,
  });
}

module.exports = {
  getComments,
  createComment,
};
