const { register, login } = require("../services/authServices.js");

const authController = require("express").Router();

authController.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await register(email, password);
    console.log(token);
    res.json(token);
  } catch (error) {
    console.log(error.message);
  }
});

authController.post("/login", async (req, res) => {
  try {
    const token = await login(req.body.email, req.body.password);
    res.json(token);
  } catch (error) {
    console.log(error.message);
  }
});
authController.get("/logout", async (req, res) => {
  res.status(204).end();
});

module.exports = authController;
