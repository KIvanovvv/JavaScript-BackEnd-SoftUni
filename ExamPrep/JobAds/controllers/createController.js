const { createAd } = require("../service/adServices.js");

const createController = require("express").Router();

createController.get("/", (req, res) => {
  res.render("create");
});
//TODO DO validation

createController.post("/", async (req, res) => {
  try {
    const { headline, location, companyName, description } = req.body;
    console.log(req.body);
    if (!headline || !location || !companyName || !description) {
      throw new Error(`All fields are required`);
    }
    if (headline.length < 2) {
      throw new Error(`Name must be at least 2 characters`);
    }
    if (companyName.length < 2) {
      throw new Error(`Company name must be at least 2 characters`);
    }
    if (location.length < 2) {
      throw new Error(`Location length must be at least 2 characters`);
    }
    if (description.length < 2) {
      throw new Error(`Description length must be at least 2 characters`);
    }

    const data = await createAd(req.body, req.user._id);
    res.redirect("/catalog");
  } catch (error) {
    res.render("create", { error: error.message });
  }
});

module.exports = createController;
