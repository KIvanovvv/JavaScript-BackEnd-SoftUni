const isRightUser = require("../middleware/isRightUser.js");
const { getBookById, getBookInstance } = require("../service/bookServices.js");
const { getUserById } = require("../service/userServices.js");

const detailsController = require("express").Router();

detailsController.get("/:id", async (req, res) => {
  const book = await getBookById(req.params.id);
  const isOwner = req.user?._id == book.ownerId;
  const hasWished = book.wishingList.find(
    (userId) => userId.toString() == req.user._id
  );
  res.render("details", { book, isOwner, hasWished });
});

detailsController.get("/:id/wish", async (req, res) => {
  const bookInst = await getBookInstance(req.params.id);
  bookInst.wishingList.push(req.user._id);
  bookInst.save();
  const user = await getUserById(req.user._id);
  user.wishedList.push(bookInst._id);
  await user.save();

  const book = await getBookById(req.params.id);
  const isOwner = req.user?._id == book.ownerId;
  const hasWished = true;
  res.render("details", { book, isOwner, hasWished });
});

detailsController.get("/delete/:id", isRightUser(), async (req, res) => {
  const bookInst = await getBookInstance(req.params.id);
  await bookInst.delete();
  res.redirect("/catalog");
});

module.exports = detailsController;
