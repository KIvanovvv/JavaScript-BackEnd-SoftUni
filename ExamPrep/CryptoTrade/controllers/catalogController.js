const { getAllCrypto } = require("../service/cryptoServices.js");

const catalogController = require("express").Router();

catalogController.get("/", async (req, res) => {
  const coins = await getAllCrypto();
  res.render("catalog", { coins });
});

module.exports = catalogController;
