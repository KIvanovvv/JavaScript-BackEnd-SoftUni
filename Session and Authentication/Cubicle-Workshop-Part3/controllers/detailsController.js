const { getCubeByIdAndPop } = require("../services/cubeServices.js");

const router = require("express").Router();

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const cube = await getCubeByIdAndPop(id);
  console.log(cube);
  res.render("details", { cube });
});
module.exports = router;
