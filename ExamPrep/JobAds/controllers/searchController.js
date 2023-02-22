const { getAdByEmail } = require("../service/adServices.js");

const searchController = require("express").Router();

searchController.get("/", async (req, res) => {
  res.render("search");
});

searchController.post("/", async (req, res) => {
  const ads = await getAdByEmail(req.body.email);
  console.log(ads);
  res.render("search", { ads });
});

module.exports = searchController;
