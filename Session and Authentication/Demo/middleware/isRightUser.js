const { getArticleById } = require("../services/articleServices.js");

module.exports = () => async (req, res, next) => {
  const data = await getArticleById(req.params.id);
  if (data.author !== req.user.username) {
    res.send("<h1>He he.. nice try ! </h1>");
  } else {
    next();
  }
};
