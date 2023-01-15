const fs = require("fs/promises");
const { getBreeds } = require("../services/catsService.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("addBreed");
});

router.post("/", async (req, res) => {
  const breed = req.body.breed;
  const allBreeds = getBreeds();
  allBreeds.push({ breed: breed });
  await fs.writeFile(
    "./services/breeds.json",
    JSON.stringify(allBreeds, null, 2),
    () => {}
  );
  console.log(allBreeds);
  res.render("addBreed");
});

module.exports = router;
