const { register } = require("../services/authService.js");
const jwt = require("jsonwebtoken");
const authController = require("express").Router();

const jwtSecret = `asd2asd2dadf`;

authController.get("/login", (req, res) => {
  res.render("login");
});

authController.post("/login", (req, res) => {
  const payload = {
    _id: "asd24434324eada3",
    username: "Peter",
  };
  const token = jwt.sign(payload, jwtSecret, { expiresIn: "4h" });
  res.cookie("jwt", token);
  res.redirect("/");
});

// authController.get("/test", (req, res) => {
//   const token = req.cookies.jwt;
//   if (token) {
//     try {
//       const data = jwt.verify(token, jwtSecret);
//       console.log(data);
//       res.send(`You have a valid token`);
//     } catch (err) {
//       res.cookie("jwt", "", { maxAge: 0 });
//       res.redirect("/login");
//     }
//   } else {
//     res.send("No found token");
//   }
// });

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

module.exports = {
  authController,
};
