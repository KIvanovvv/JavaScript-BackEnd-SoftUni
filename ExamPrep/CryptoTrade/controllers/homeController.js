const homeController = require("express").Router();

homeController.get("/", (req, res) => {
  res.send("Working");
});

module.exports = homeController;
