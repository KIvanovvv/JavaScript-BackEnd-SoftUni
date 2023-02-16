const editController = require("express").Router();
const isRightUser = require("../middleware/isRightUser.js");
const { getBookById, getBookInstance } = require("../service/bookServices.js");

editController.get("/:id", isRightUser(), async (req, res) => {
  const book = await getBookById(req.params.id);
  res.render("edit", { book });
});
editController.post("/:id", isRightUser(), async (req, res) => {
  const book = await getBookInstance(req.params.id);
  const { title, author, genre, stars, imageUrl, bookReview } = req.body;
  book.title = title;
  book.author = author;
  book.genre = genre;
  book.stars = stars;
  book.imageUrl = imageUrl;
  book.bookReview = bookReview;
  await book.save();
  res.redirect("/catalog");
});

module.exports = editController;
