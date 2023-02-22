const { register } = require("../service/userServices.js");

const registerController = require("express").Router();

registerController.get("/", (req, res) => {
  res.render("register");
});
//TODO Check credentials name
registerController.post("/", async (req, res) => {
  try {
    const { username, email, password, repass } = req.body;
    if (!username || !email || !password) {
      throw new Error(`All fields are required`);
    }
    if (username.length < 2) {
      throw new Error(`The username should be at least 2 characters`);
    }
    if (email.length < 10) {
      throw new Error(`The email should be at least 10 characters`);
    }
    if (password.length < 4) {
      throw new Error(`The password should be at least 4 characters`);
    }
    if (password !== repass) {
      throw new Error(`Password's dont match`);
    }
    const userData = await register(username, email, password);
    const token = req.signJwt(userData);
    res.cookie("jwt", token);
    res.redirect("/");
  } catch (error) {
    res.render("register", { error: error.message });
  }
});
module.exports = registerController;
