const { getCubes, findCubes } = require("../services/services.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  const cubes = getCubes();
  res.render("home", { cubes });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/search", (req, res) => {
  const cubes = findCubes(req.query);
  const { search, from, to } = req.query;
  res.render("home", { cubes, search, from, to });
});

module.exports = router;
