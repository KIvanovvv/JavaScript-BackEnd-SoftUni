const { addProduct } = require("../services/productServices.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});
router.post("/", (req, res) => {
  console.log(`Handling POST `);
  addProduct(req.body.name, Number(req.body.price));
  res.redirect("catalog");
});

module.exports = router;
