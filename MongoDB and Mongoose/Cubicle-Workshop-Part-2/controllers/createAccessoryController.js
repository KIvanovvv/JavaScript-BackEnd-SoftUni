const { addAccessory } = require("../services/accessoryServices.js");

const createAccessoryController = require("express").Router();

createAccessoryController.get("/", (req, res) => {
  res.render("createAccessory");
});

createAccessoryController.post("/", async (req, res) => {
  await addAccessory(req.body);
  res.redirect("/");
});

module.exports = createAccessoryController;
