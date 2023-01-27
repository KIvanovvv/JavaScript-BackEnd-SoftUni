const { addNewCube } = require("../services/cubeServices.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res) => {
  const { name, description, imageUrl, difficulty } = req.body;

  await addNewCube({
    name,
    description,
    imageUrl,
    difficulty,
    ownerId: req.user._id,
  });
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
