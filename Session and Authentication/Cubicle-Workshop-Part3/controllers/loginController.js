const { login } = require("../services/authServices.js");

const loginController = require("express").Router();

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
    const token = req.signJwt(user);
    res.cookie("jwt", token);
    res.redirect("/");
    console.log(user);
  } catch (error) {
    res.render("login", { error: error.message });
  }
});

module.exports = loginController;
