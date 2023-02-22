const { getAllPhotos } = require("../service/photoServices.js");

const catalogController = require("express").Router();

catalogController.get("/", async (req, res) => {
  const photos = await getAllPhotos();
  res.render("catalog", { photos });
});

module.exports = catalogController;
