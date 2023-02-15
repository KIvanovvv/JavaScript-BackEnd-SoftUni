const { addAction } = require("../service/actionServices.js");

const createController = require("express").Router();

createController.get("/", (req, res) => {
  res.render("create");
});

createController.post("/", async (req, res) => {
  try {
    const { title, imageUrl, price, description, category } = req.body;
    if (!title || !imageUrl || !price || !description || !category) {
      throw new Error(`All fields are required`);
    }
    if (title.length < 4) {
      throw new Error(`Name must be at least 4 characters`);
    }
    if (Number(price) < 1) {
      throw new Error(`Price must be a positive number`);
    }

    if (description.length > 200) {
      throw new Error(`Description must be max 200 characters`);
    }
    const data = await addAction(req.body, req.user._id);
    res.redirect("/catalog");
  } catch (error) {
    res.render("create", { error: error.message });
  }
});

module.exports = createController;
