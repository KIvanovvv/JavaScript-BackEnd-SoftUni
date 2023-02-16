const { getAllBooks } = require("../service/bookServices.js");

const catalogController = require("express").Router();

catalogController.get("/", async (req, res) => {
  const books = await getAllBooks();
  res.render("catalog", { books });
});

module.exports = catalogController;
