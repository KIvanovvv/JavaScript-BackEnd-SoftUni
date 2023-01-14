const router = require("express").Router();

const { getList, getById } = require("../services/productServices.js");

router.get("/", (req, res) => {
  const products = getList();
  res.render("catalog", {
    products,
  });
});

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = getById(productId);
  if (product) {
    res.render("details", product);
  } else {
    res.render("missingProduct", {
      id: productId,
    });
  }
});

module.exports = router;
