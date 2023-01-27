const { register } = require("../services/authServices.js");

const registerController = require("express").Router();

registerController.get("/", (req, res) => {
  res.render("register");
});

registerController.post("/", async (req, res) => {
  try {
    const { username, password, repass } = req.body;
    if (!username || !password) {
      throw new Error(`All fields are required`);
    }
    if (password !== repass) {
      throw new Error(`Passwords dont match`);
    }
    await register(username, password);
    res.redirect("/");
  } catch (error) {
    res.render("register", { error: error.message });
  }
});

module.exports = registerController;
