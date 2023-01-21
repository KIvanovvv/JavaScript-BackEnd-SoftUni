const Accessory = require("../models/accessory.js");

async function addAccessory(data) {
  await Accessory.create({
    ...data,
  });
}

async function getAccessories() {
  const data = await Accessory.find({}).lean();
  return data;
}

async function getAccessoryById(id) {
  const accessory = await Accessory.findById(id);
  return accessory;
}

async function getAccessoryByName(name) {
  const data = await Accessory.find({ name: name });
  return data;
}

module.exports = {
  addAccessory,
  getAccessories,
  getAccessoryById,
  getAccessoryByName,
};
