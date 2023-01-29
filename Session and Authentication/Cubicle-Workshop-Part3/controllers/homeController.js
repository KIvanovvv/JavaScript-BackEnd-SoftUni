const {
  getAllCubes,
  getCubeWithParams,
} = require("../services/cubeServices.js");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const data = await getAllCubes();
  const cubes = data.map((c) => {
    if (!req.user) {
      req.user = false;
    }
    if (c.ownerId == req.user._id) {
      c.isOwner = true;
      return c;
    }
    c.isOwner = false;
    return c;
  });

  res.render("home", { cubes });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.post("/search", async (req, res) => {
  const { search, from, to } = req.body;
  const cubes = await getCubeWithParams(search, from, to);
  console.log(search, from, to);
  res.render("home", { cubes, search, from, to });
});

router.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: 0 });
  res.redirect("/");
});

module.exports = router;
