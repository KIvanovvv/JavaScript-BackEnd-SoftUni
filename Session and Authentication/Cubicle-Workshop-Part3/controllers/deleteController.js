const isAuth = require("../middleware/isAuth.js");
const {
  getCubeInstanceById,
  getCubeById,
} = require("../services/cubeServices.js");

const deleteController = require("express").Router();

deleteController.get("/:id", isAuth(), async (req, res) => {
  const cube = await getCubeById(req.params.id);
  res.render("delete", { cube });
});

deleteController.post("/:id", isAuth(), async (req, res) => {
  const cube = await getCubeInstanceById(req.params.id);
  await cube.delete();
  res.redirect("/");
});

module.exports = deleteController;
