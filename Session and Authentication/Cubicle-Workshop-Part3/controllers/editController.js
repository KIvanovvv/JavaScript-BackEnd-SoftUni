const isAuth = require("../middleware/isAuth.js");
const {
  getCubeById,
  getCubeInstanceById,
} = require("../services/cubeServices.js");

const editController = require("express").Router();

editController.get("/:id", isAuth(), async (req, res) => {
  const cube = await getCubeById(req.params.id);
  console.log(cube);
  res.render("edit", { cube });
});

editController.post("/:id", isAuth(), async (req, res) => {
  const cube = await getCubeInstanceById(req.params.id);
  cube.name = req.body.name;
  cube.description = req.body.description;
  cube.imageUrl = req.body.imageUrl;
  cube.difficulty = req.body.difficultyLevel;
  await cube.save();
  res.redirect(`/details/${req.params.id}`);
});

module.exports = editController;
