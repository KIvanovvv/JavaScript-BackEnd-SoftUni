const { getCats } = require("../services/catsService.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  const cats = getCats();
  console.log(cats);
  res.render("home", { cats });
});

router.post("/", (req, res) => {
  const querry = req.body.querry;
  // const cats = [
  //   {
  //     id: "asd929",
  //     name: "Strange looking cat",
  //     description: "It's a cat....,kind of...",
  //     imageUrl:
  //       "https://www.doc.govt.nz/thumbs/hero/contentassets/a450e32f0b824531858d566404c21884/southern-brown-kiwi-tokoeka-stewart-island-photo-credit-alina-thiebes1920.jpg",
  //     breed: "Unknown",
  //   },
  // ];
  const allCats = getCats();
  const cats = allCats.filter(
    (x) =>
      x.breed.toLocaleLowerCase().includes(querry.toLocaleLowerCase()) ||
      x.name.toLocaleLowerCase().includes(querry.toLocaleLowerCase())
  );

  res.render("home", { cats });
});
module.exports = router;
