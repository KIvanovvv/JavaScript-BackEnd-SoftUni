const { addNewCube } = require("../services/cubeServices.js");


const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res) => {
  await addNewCube(req.body);
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
