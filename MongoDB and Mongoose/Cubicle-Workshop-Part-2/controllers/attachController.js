const Cube = require("../models/cube.js");
const {
  getAccessories,
  getAccessoryById,
  getAccessoryByName,
} = require("../services/accessoryServices.js");
const {
  getCubeById,
  getCubeInstanceById,
} = require("../services/cubeServices.js");

const attachController = require("express").Router();

attachController.get("/:id", async (req, res) => {
  const accessory = await getAccessories();
  const cube = await getCubeById(req.params.id);
  res.render("attachAccessory", {
    cube,
    accessory,
  });
  console.log(req.params.id);
});

attachController.post("/:id", async (req, res) => {
  const cube = await getCubeInstanceById(req.params.id);
  const name = req.body.accessory;
  const accessory = await getAccessoryByName(name);

  cube.accessories.push(accessory[0]._id);
  console.log(cube);

  await cube.save();
  res.redirect(`/details/${req.params.id}`);
});

module.exports = attachController;
