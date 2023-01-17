const { getCubes } = require("../services/services.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  const cubes = getCubes();
  res.render("home", { cubes });
});

router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
