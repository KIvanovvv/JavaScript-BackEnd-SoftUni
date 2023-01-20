const { getCubeById } = require("../services/services.js");

const router = require("express").Router();

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const cube = getCubeById(id);
  console.log(cube);
  res.render("details", { cube });
});
module.exports = router;
