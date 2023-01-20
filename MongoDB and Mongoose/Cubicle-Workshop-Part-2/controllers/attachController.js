const attachController = require("express").Router();

attachController.get("/accessory/:id", (req, res) => {
  res.render("attachAccessory");
  console.log(req.params.id);
});

module.exports = attachController