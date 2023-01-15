const { getById, getCats } = require("../services/catsService.js");
const fs = require("fs/promises");
const router = require("express").Router();

router.get("/:id", (req, res) => {
  const catId = req.params.id;
  const data = getById(catId);
  const cat = data[0];
  res.render("shelter", { cat });
});

router.post("/:id", async (req, res) => {
  const catId = req.params.id;
  const data = getById(catId);
  const cat = data[0];
  const allCats = getCats();
  const indexOfCurrentCat = allCats.findIndex((x) => x.id == cat.id);
  allCats.splice(indexOfCurrentCat, 1);
  await fs.writeFile(
    "./services/data.json",
    JSON.stringify(allCats, null, 2),
    () => {}
  );
  res.redirect("/");
});

module.exports = router;
