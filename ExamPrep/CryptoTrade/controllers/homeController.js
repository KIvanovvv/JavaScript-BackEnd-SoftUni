const homeController = require("express").Router();

homeController.get("/", (req, res) => {
  res.render("home");
  console.log(req.user);
});

module.exports = homeController;
