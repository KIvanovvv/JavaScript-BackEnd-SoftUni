const { getAllAds } = require("../service/adServices.js");

const catalogController = require("express").Router();

catalogController.get("/", async (req, res) => {
  const ads = await getAllAds();
  res.render("catalog", { ads });
});

module.exports = catalogController;
