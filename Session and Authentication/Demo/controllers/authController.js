const { register, login } = require("../services/authService.js");
const authController = require("express").Router();

authController.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

authController.post("/login", async (req, res) => {
  try {
    const user = await login(req.body.username, req.body.password);
    // console.log(user);
    const token = req.signJwt(user);
    res.cookie("jwt", token);
    res.redirect("/");
  } catch (error) {
    res.render("login", { error: error.message });
  }
});

authController.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});
authController.post("/register", async (req, res) => {
  try {
    const { username, password, repass } = req.body;
    if (!username || !password) {
      throw new Error(`All fields are required!`);
    }
    if (password !== repass) {
      throw new Error(`Passwords dont match`);
    }
    const newUser = await register(username, password);
    const token = req.signJwt(newUser);
    res.cookie("jwt", token);
    res.redirect("/");
  } catch (error) {
    res.render("register", { error: error.message });
  }
});

authController.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.redirect("/");
});

module.exports = {
  authController,
};
