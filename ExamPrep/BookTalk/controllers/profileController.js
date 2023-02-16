const { getWishedBooks } = require("../service/bookServices.js");
const { getUserByIdPopulate } = require("../service/userServices.js");

const profileController = require("express").Router();

profileController.get("/", async (req, res) => {
  const user = await getUserByIdPopulate(req.user._id);
  const books = user.wishedList.slice(0);
  console.log(books);
  res.render("profile", { books });
});

module.exports = profileController;
