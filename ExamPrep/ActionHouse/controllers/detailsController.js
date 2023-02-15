const isOwner = require("../middleware/isOwner.js");
const {
  getActionById,
  getActionInstance,
} = require("../service/actionServices.js");
const { findUserById } = require("../service/userServices.js");

const detailsController = require("express").Router();

detailsController.get("/:id", isOwner(), async (req, res) => {
  const action = await getActionById(req.params.id);
  if (!req.user) {
    res.render("details", { action });
  } else {
    action.isOwner = req.user.isOwner;
    action.hasBid = req.user.hasBid;
    action.canBid = req.user.canBid;
    action.isWinning = req.user.isWinning;
    if (action.hasBid) {
      const user = await findUserById(action.bidder);
      action.bidderName = `${user.firstName} ${user.lastName}`;
    }

    res.render("details", { action });
  }
});

detailsController.post("/:id", async (req, res) => {
  try {
    const actionInstance = await getActionInstance(req.params.id);
    // actionInstance.boughtBy.push(req.user._id);

    if (actionInstance.price >= Number(req.body.bid)) {
      throw new Error(`Bid must be bigger than current price!`);
    }
    actionInstance.bidder.splice(0, 1, req.user._id);
    actionInstance.price = Number(req.body.bid);
    console.log(actionInstance);
    await actionInstance.save();
    res.redirect(`/details/${req.params.id}`);
  } catch (err) {
    const action = await getActionById(req.params.id);
    if (!req.user) {
      res.render("details", { action });
    } else {
      action.isOwner = false;
      action.hasBid = false;
      action.canBid = true;
      action.isWinning = false;

      console.log(action);
      res.render("details", { action, error: err.message });
    }
  }
});

detailsController.get("/delete/:id", async (req, res) => {
  const actionInstance = await getActionInstance(req.params.id);
  await actionInstance.delete();
  res.redirect("/catalog");
});

module.exports = detailsController;
