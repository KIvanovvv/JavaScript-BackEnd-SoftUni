const { register } = require("../services/authService.js");
const authController = require("express").Router();

authController.get("/login", (req, res) => {
  res.render("login");
});

authController.post("/login", (req, res) => {
  const payload = {
    _id: "asd24434324eada3",
    username: "Peter",
  };
  const token = req.signJwt(payload);
  res.cookie("jwt", token);
  res.redirect("/");
});

authController.get("/register", (req, res) => {
  res.render("register");
});
authController.post("/register", async (req, res) => {
  const { username, password, repass } = req.body;
  if (password !== repass) {
    console.log(`Passwords dont match`);
    return;
  }
  await register(username, password);
});

authController.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.redirect("/");
});

module.exports = {
  authController,
};
