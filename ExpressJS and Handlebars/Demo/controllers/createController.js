const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});
router.post("/", (req, res) => {
  console.log(`Handling POST `);

  res.redirect("catalog");
});

module.exports = router;
