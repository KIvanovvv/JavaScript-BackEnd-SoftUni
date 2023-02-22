const {
  getAddByIdPop,
  getAddByIdInst,
  getAddById,
} = require("../service/adServices.js");

const detailsController = require("express").Router();

detailsController.get("/:id", async (req, res) => {
  const ad = await getAddByIdPop(req.params.id);

  const isOwner = req.user?._id == ad.ownerId._id;
  const hasApplied = ad.applied.filter((id) => id.toString() == req.user?._id);
  const usersApplied = ad.applied.length;

  res.render("details", { ad, isOwner, hasApplied, usersApplied });
});
detailsController.get("/apply/:id", async (req, res) => {
  const adInst = await getAddByIdInst(req.params.id);
  adInst.applied.push(req.user._id);
  await adInst.save();

  const ad = await getAddById(req.params.id);
  const isOwner = false;
  const hasApplied = true;
  res.render("details", { ad, isOwner, hasApplied });
});

module.exports = detailsController;
