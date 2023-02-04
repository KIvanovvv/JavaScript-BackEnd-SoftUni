const { register } = require("../services/userServices.js");

const authController = require("express").Router();

authController.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const token = await register(username, email, password);
  res.json(token);
});

module.exports = authController;
