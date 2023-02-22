const { getAddById, getAddByIdInst } = require("../service/adServices.js");

const editController = require("express").Router();

editController.get("/:id", async (req, res) => {
  const ad = await getAddById(req.params.id);
  res.render("edit", { ad });
});

editController.post("/:id", async (req, res) => {
  const adInst = await getAddByIdInst(req.params.id);
  const { headline, location, companyName, description } = req.body;
  //TODO Add validation
  if (!headline || !location || !companyName || !description) {
    throw new Error(`All fields are required`);
  }
  if (headline.length < 3) {
    throw new Error(`Headline must be at least 3 characters`);
  }
  if (location.length < 3) {
    throw new Error(`Location must be at least 3 characters`);
  }
  if (companyName.length < 3) {
    throw new Error(`Company Name must be at least 3 characters`);
  }
  if (description.length < 3) {
    throw new Error(`Description must be at least 3 characters`);
  }
  adInst.headline = headline;
  adInst.location = location;
  adInst.companyName = companyName;
  adInst.description = description;
  await adInst.save();

  res.redirect("/catalog");
});

editController.get("/delete/:id", async (req, res) => {
  const ad = await getAddByIdInst(req.params.id);
  await ad.delete();
  res.redirect("/catalog");
});

module.exports = editController;
