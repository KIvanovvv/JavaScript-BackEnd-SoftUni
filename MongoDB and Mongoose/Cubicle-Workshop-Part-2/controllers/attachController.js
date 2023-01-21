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
  const currAccessories = cube.accessories.map((id) => id.valueOf());
  const allAccessories = accessory.map((acc) => acc._id.valueOf());
  const uniqueAccessoriesId = allAccessories.filter(
    (a) => currAccessories.indexOf(a) == -1
  );

  const uAccessories = accessory.filter(
    (a) => uniqueAccessoriesId.indexOf(a._id.valueOf()) !== -1
  );
  console.log(uAccessories);
  res.render("attachAccessory", {
    cube,
    uAccessories
  });
});

attachController.post("/:id", async (req, res) => {
  const cube = await getCubeInstanceById(req.params.id);
  const name = req.body.accessory;
  const accessory = await getAccessoryByName(name);

  cube.accessories.push(accessory[0]._id);

  await cube.save();
  res.redirect(`/details/${req.params.id}`);
});

module.exports = attachController;
