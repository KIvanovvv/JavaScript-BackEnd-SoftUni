const { addCube } = require("../services/services.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});

router.post("/", async (req, res) => {
  await addCube(req.body);
  console.log(req.body);
  res.redirect("/");
});
module.exports = router;
