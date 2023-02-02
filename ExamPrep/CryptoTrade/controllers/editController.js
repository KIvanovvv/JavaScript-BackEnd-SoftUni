const {
  getCoinById,
  getCryptoInstance,
} = require("../service/cryptoServices.js");

const editController = require("express").Router();

editController.get("/:id", async (req, res) => {
  const coin = await getCoinById(req.params.id);
  const allMethods = ["crypto-wallet", "credit-card", "debit-card", "paypal"];
  const index = allMethods.indexOf(coin.paymentMethod);
  allMethods.splice(index, 1);
  allMethodsFormated = allMethods.map((x) => {
    const name = x
      .split("-")
      .map((x) => x.replace(x[0], x[0].toUpperCase()))
      .join("-");
    return {
      name,
      value: x,
    };
  });
  coin.paymentMethod = {
    value: coin.paymentMethod,
    name: coin.paymentMethod
      .split("-")
      .map((x) => x.replace(x[0], x[0].toUpperCase()))
      .join("-"),
  };
  console.log(coin);
  res.render("edit", { coin, allMethodsFormated });
});

editController.post("/:id", async (req, res) => {
  const coinInstance = await getCryptoInstance(req.params.id);
  coinInstance.name = req.body.name;
  coinInstance.imageUrl = req.body.imageUrl;
  coinInstance.price = req.body.price;
  coinInstance.description = req.body.description;
  coinInstance.paymentMethod = req.body.paymentMethod;
  await coinInstance.save();
  res.redirect(`/details/${req.params.id}`);
});

module.exports = editController;
