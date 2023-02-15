const { getAllCrypto } = require("../service/actionServices.js");

const homeController = require("express").Router();

homeController.get("/", async (req, res) => {
  res.render("home");
  // console.log(req.user);
});

homeController.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.redirect("/");
});

module.exports = homeController;
