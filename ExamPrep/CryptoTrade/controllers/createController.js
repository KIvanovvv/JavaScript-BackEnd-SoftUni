const { addCrypto } = require("../service/cryptoServices.js");

const createController = require("express").Router();

createController.get("/", (req, res) => {
  res.render("create");
});

createController.post("/", async (req, res) => {
  const data = await addCrypto(req.body, req.user._id);
  console.log(req.user._id);
});

module.exports = createController;
