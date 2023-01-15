const fs = require("fs/promises");
const { getBreeds, getCats } = require("../services/catsService.js");

const router = require("express").Router();

router.get("/", (req, res) => {
  const allBreeds = getBreeds();
  res.render("addCat", { allBreeds });
});

router.post("/", async (req, res) => {
  const { name, description, upload, breed } = req.body;
  console.log(name, description, upload, breed);
  const allCats = getCats();
  const id = `asd${Math.trunc(Math.random() * 999)}`;
  allCats.push({ id, name, description, imageUrl: upload, breed });
  await fs.writeFile(
    "./services/data.json",
    JSON.stringify(allCats, null, 2),
    () => {}
  );
  res.redirect("./");
});

module.exports = router;
