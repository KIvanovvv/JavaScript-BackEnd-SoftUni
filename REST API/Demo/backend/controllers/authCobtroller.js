const { register } = require("../services/userServices.js");

const authController = require("express").Router();

authController.post("/register", async (req, res) => {
  const {username,email,password} = req.body
  const newUser = await register(username,email,body);
});

module.exports = authController
