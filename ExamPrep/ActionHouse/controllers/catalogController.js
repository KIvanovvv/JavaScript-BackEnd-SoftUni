const { getAllActions } = require("../service/actionServices.js");

const catalogController = require("express").Router();

catalogController.get("/", async (req, res) => {
  const actions = await getAllActions();
  res.render("catalog", { actions });
});

module.exports = catalogController;
