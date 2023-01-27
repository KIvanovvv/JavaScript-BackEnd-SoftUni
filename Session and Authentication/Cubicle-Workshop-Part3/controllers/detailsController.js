const { getCubeByIdAndPop } = require("../services/cubeServices.js");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const cube = await getCubeByIdAndPop(id);
  cube.ownerId == req.user._id ? (cube.isOwner = true) : (cube.isOwner = false);
  console.log(cube);
  res.render("details", { cube });
});
module.exports = router;
