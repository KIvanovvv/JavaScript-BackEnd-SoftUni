const { login } = require("../services/authServices.js");
const jwt = require("jsonwebtoken");

const loginController = require("express").Router();

const secretString = "asd2dawdf34";

loginController.get("/", (req, res) => {
  res.render("login");
});

loginController.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error(`Invalid username or password`);
    }
    const user = await login(username, password);
    const token = jwt.sign(user, secretString, { expiresIn: "4h" });
    res.cookie("jwt", token);
    res.redirect("/");
    console.log(user);
  } catch (error) {
    res.render("login", { error: error.message });
  }
});
//TODOO upload to github ,make token middleware to check validity and export jwtSign function in it,makae nav middleware
module.exports = loginController;
