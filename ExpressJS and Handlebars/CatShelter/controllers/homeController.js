const { getCats } = require("../services/catsService.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  const cats = getCats();
  console.log(cats);
  res.render("home", { cats });
});

router.post("/", (req, res) => {
  const querry = req.body.querry;
  const allCats = getCats();
  const cats = allCats.filter(
    (x) =>
      x.breed.toLocaleLowerCase().includes(querry.toLocaleLowerCase()) ||
      x.name.toLocaleLowerCase().includes(querry.toLocaleLowerCase())
  );

  res.render("home", { cats });
});
module.exports = router;
