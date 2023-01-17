const { getCubes } = require("../services/services.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  const cubes = getCubes();
  res.render("home", { cubes });
});

module.exports = router;
