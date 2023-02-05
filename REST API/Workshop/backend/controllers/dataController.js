const { create, getAllItems } = require("../services/furnitureServices.js");

const dataController = require("express").Router();

dataController.get("/catalog", async (req, res) => {
  const items = await getAllItems();
  res.json(items);
});

dataController.post("/catalog", async (req, res) => {
  try {
    const newItem = await create(req.body);
    res.status(200).end();
  } catch (error) {}
});

module.exports = dataController;
