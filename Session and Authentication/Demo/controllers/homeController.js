const homeController = require("express").Router();

homeController.get("/", (req, res) => {
  const data = req.user;
  console.log(data);
  res.render("home", {
    title: "Home page",
  });
});

module.exports = homeController;
