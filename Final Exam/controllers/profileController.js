const { getUserByIdPop } = require("../service/userServices.js");

const profileController = require("express").Router();

profileController.get("/", async (req, res) => {
  const profile = await getUserByIdPop(req.user._id);
 
  res.render("profile",{profile});
});

module.exports = profileController;
