const { login } = require("../service/userServices.js");

const loginController = require("express").Router();

loginController.get("/", (req, res) => {
  res.render("login");
});
//TODO Check credentials name
loginController.post("/", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new Error("Invalid username or password");
    }
    const data = await login(username, password);
    const token = req.signJwt(data);
    res.cookie("jwt", token);
    res.redirect("/");
  } catch (error) {
    res.render("login", { error: error.message });
  }
});

module.exports = loginController;
