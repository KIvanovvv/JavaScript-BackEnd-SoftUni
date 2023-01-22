const {
  getAllCubes,
  getCubeWithParams,
} = require("../services/cubeServices.js");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const cubes = await getAllCubes();
  res.render("home", { cubes });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/search", async (req, res) => {
  const { search, from, to } = req.query;
  const cubes = await getCubeWithParams(search, from, to);
  res.render("home", { cubes, search, from, to });
});

module.exports = router;
