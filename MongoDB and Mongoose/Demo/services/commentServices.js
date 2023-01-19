const Comment = require("../models/comment.js");

async function getComments(articleId) {
  const comments = await Comment.find({ articleId: articleId }).lean();
  return comments;
}

module.exports = {
  getComments,
};
