const { addBook } = require("../service/bookServices.js");

const createController = require("express").Router();

createController.get("/", (req, res) => {
  res.render("create");
});

createController.post("/", async (req, res) => {
  try {
    const { title, imageUrl, author, bookReview, genre, stars } = req.body;
    if (!title || !imageUrl || !author || !bookReview || !genre || !stars) {
      throw new Error(`All fields are required`);
    }
    if (title.length < 2) {
      throw new Error(`Name must be at least 2 characters`);
    }
    if (author.length < 5) {
      throw new Error(`Author must be at least 5 characters`);
    }
    if (genre.length < 3) {
      throw new Error(`Genre must be at least 5 characters`);
    }
    if (Number(stars) < 1 && Number(stars) >5) {
      throw new Error(`Stars must be between 1 and 5`);
    }
    if (!imageUrl.match(/^https?:\/\//g)) {
      throw new Error(`Image must be a valid url`);
    }
    if (bookReview.length < 10) {
      throw new Error(`Review must be at least 10 characters`);
    }
    const data = await addBook(req.body, req.user._id);
    res.redirect("/catalog");
  } catch (error) {
    res.render("create", { error: error.message });
  }
});

module.exports = createController;
