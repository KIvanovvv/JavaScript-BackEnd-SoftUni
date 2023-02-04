const { register, login } = require("../services/userServices.js");

const authController = require("express").Router();

authController.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const token = await register(username, email, password);
  res.json(token);
});

authController.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await login(username, password);
    console.log(token);
    res.json(token);
  } catch (error) {
    res.status(401).json({ message: "Invalid username or password" });
  }
});

module.exports = authController;
