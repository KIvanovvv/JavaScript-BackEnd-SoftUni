const isOwner = require("../middleware/isOwner.js");
const isRightUser = require("../middleware/isRightUser.js");
const {
  getCoinById,
  getCryptoInstance,
} = require("../service/cryptoServices.js");

const editController = require("express").Router();

editController.get("/:id", isOwner(), isRightUser(), async (req, res) => {
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
  console.log(req.user);
  res.render("edit", { coin, allMethodsFormated });
});

editController.post("/:id", isOwner(), isRightUser(), async (req, res) => {
  try {
    const { name, imageUrl, price, description, paymentMethod } = req.body;
    if (!name || !imageUrl || !price || !description || !paymentMethod) {
      throw new Error(`All fields are required`);
    }
    if (name.length < 2) {
      throw new Error(`Name must be at least 2 characters`);
    }
    if (Number(price) < 1) {
      throw new Error(`Price must be a positive number`);
    }
    if (!imageUrl.includes("https://") || !imageUrl.includes("http://")) {
      console.log(imageUrl.includes("http://"));
      throw new Error(`Image must be a valid url`);
    }
    if (description.length < 10) {
      throw new Error(`Description must be at least 10 characters`);
    }
    const coinInstance = await getCryptoInstance(req.params.id);
    coinInstance.name = name;
    coinInstance.imageUrl = imageUrl;
    coinInstance.price = price;
    coinInstance.description = description;
    coinInstance.paymentMethod = paymentMethod;
    await coinInstance.save();
    res.redirect(`/details/${req.params.id}`);
  } catch (error) {
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
    res.render("edit", { coin, allMethodsFormated, error: error.message });
  }
});

module.exports = editController;
