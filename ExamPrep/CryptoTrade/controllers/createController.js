const { addCrypto } = require("../service/cryptoServices.js");

const createController = require("express").Router();

createController.get("/", (req, res) => {
  res.render("create");
});

createController.post("/", async (req, res) => {
  try {
    const { name, imageUrl, price, description, paymentMethod } = req.body;
    if (!name || !imageUrl || !price || !description || !paymentMethod) {
      throw new Error(`All fields are required`);
    }
    if (name.length < 2) {
      throw new Error(`Name must be at least 2 characters`);
    }
    if (Number(price) < 1) {
      throw new Error(`Price must be a positive number`);
    }
    if (!imageUrl.includes("http://") || !imageUrl.includes("https://")) {
      throw new Error(`Image must be a valid url`);
    }
    if (description.length < 10) {
      throw new Error(`Description must be at least 10 characters`);
    }
    const data = await addCrypto(req.body, req.user._id);
    res.redirect("/catalog");
  } catch (error) {
    res.render("create", { error: error.message });
  }
});

module.exports = createController;
