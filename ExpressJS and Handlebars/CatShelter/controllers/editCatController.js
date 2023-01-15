const { getById, getBreeds, getCats } = require("../services/catsService.js");
const fs = require("fs/promises");
const router = require("express").Router();

router.get("/:id", (req, res) => {
  const catId = req.params.id;
  const data = getById(catId);
  const cat = data[0];
  const allBreeds = getBreeds();
  const breeds = allBreeds.filter((x) => x.breed !== cat.breed);
  res.render("editCat", { cat, breeds });
});

router.post("/:id", async (req, res) => {
  const { name, description, upload, breed } = req.body;
  const catId = req.params.id;
  const data = getById(catId);
  const cat = data[0];
  const updatedCat = Object.assign(cat, { name, description, upload, breed });
  const allCats = getCats();
  const indexOfCurrentCat = allCats.findIndex((x) => x.id === cat.id);
  allCats.splice(indexOfCurrentCat, 1, updatedCat);
  await fs.writeFile(
    "./services/data.json",
    JSON.stringify(allCats, null, 2),
    () => {}
  );
  res.redirect("/");
});

module.exports = router;
