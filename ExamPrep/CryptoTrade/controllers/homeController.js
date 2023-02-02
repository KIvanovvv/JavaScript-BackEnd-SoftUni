const { getAllCrypto } = require("../service/cryptoServices.js");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  const coins = await getAllCrypto();
  res.render("home", { coins });
  // console.log(req.user);
});

homeController.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.redirect("/");
});

module.exports = homeController;
