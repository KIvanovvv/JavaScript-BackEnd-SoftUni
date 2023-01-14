const { addProduct } = require("../services/productServices.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("create");
});
router.post("/", async (req, res,next) => {
  console.log(`Handling POST `);
  try{
    await addProduct(req.body.name, Number(req.body.price));
  }catch(error){
    next(error)
  }

  res.redirect("catalog");
});

module.exports = router;
