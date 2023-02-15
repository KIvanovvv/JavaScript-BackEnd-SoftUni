const { searchCoins } = require("../service/actionServices.js");

const searchController = require("express").Router();

searchController.get("/", (req, res) => {
  res.render("search");
});

searchController.post("/", async (req, res) => {
  const { name, paymentMethod } = req.body;
  console.log(name);
  const coins = await searchCoins(name, paymentMethod);
  console.log(coins);
  res.render("search", { coins, name, paymentMethod });
});

module.exports = searchController;
