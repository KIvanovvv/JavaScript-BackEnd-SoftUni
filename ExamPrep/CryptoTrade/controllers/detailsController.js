const isOwner = require("../middleware/isOwner.js");
const {
  getCoinById,
  getCryptoInstance,
} = require("../service/cryptoServices.js");

const detailsController = require("express").Router();

detailsController.get("/:id", isOwner(), async (req, res) => {
  const coin = await getCoinById(req.params.id);
  if (!req.user) {
    res.render("details", { coin });
  } else {
    const options = {
      isOwner: req.user.isOwner,
      hasBought: req.user.hasBought,
    };
    // console.log(req.user);
    res.render("details", { coin, options });
  }
});

detailsController.get("/buy/:id", async (req, res) => {
  const cryptoInstance = await getCryptoInstance(req.params.id);
  cryptoInstance.boughtBy.push(req.user._id);
  await cryptoInstance.save();
  res.redirect(`/details/${req.params.id}`);
});

detailsController.get("/delete/:id", async (req, res) => {
  const coinInstance = await getCryptoInstance(req.params.id);
  await coinInstance.delete();
  res.redirect("/catalog");
});

module.exports = detailsController;
