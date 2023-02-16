const { getBookById } = require("../service/bookServices.js");

module.exports = () => async (req, res, next) => {
  const book = await getBookById(req.params.id);
  if (book.ownerId == req.user._id) {
    next();
  } else {
    res.redirect("/catalog");
  }
};
