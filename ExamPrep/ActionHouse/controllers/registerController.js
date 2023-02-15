const { register } = require("../service/userServices.js");

const registerController = require("express").Router();

registerController.get("/", (req, res) => {
  res.render("register");
});

registerController.post("/", async (req, res) => {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  try {
    const { firstName, lastName, email, password, repass } = req.body;
    if (!firstName || !lastName || !email || !password) {
      throw new Error(`All fields are required`);
    }

    if (!email.match(emailRegex)) {
      throw new Error(`The email must be valid`);
    }
    if (password.length < 4) {
      throw new Error(`The password should be at least 4 characters`);
    }
    if (password !== repass) {
      throw new Error(`Password's dont match`);
    }
    const userData = await register(firstName, lastName, email, password);
    const token = req.signJwt(userData);
    res.cookie("jwt", token);
    res.redirect("/");
  } catch (error) {
    res.render("register", { error: error.message });
  }
});
module.exports = registerController;
