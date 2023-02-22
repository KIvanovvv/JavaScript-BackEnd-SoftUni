const { createPhoto } = require("../service/photoServices.js");
const { getUserByIdInstance } = require("../service/userServices.js");

const createController = require("express").Router();

createController.get("/", (req, res) => {
  res.render("create");
});
//TODO CHANGE post data accordingly
createController.post("/", async (req, res) => {
  try {
    const { name, imageUrl, age, description, location } = req.body;
    console.log(req.body);
    if (!name || !imageUrl || !age || !description || !location) {
      throw new Error(`All fields are required`);
    }
    if (name.length < 2) {
      throw new Error(`Name must be at least 2 characters`);
    }
    if (Number(age) < 1 || Number(age) > 100) {
      throw new Error(`Age must be between 1 and 100`);
    }
    if (!imageUrl.match(/^https?:\/\//g)) {
      throw new Error(`Image must be a valid url`);
    }
    if (location.length < 5 || location.length > 50) {
      throw new Error(`Location must be between 5 and 50 characters`);
    }
    if (description.length < 5 || description.length > 50) {
      throw new Error(`Description must be between 5 and 50 characters`);
    }
    const data = await createPhoto(req.body, req.user._id);
    const user = await getUserByIdInstance(req.user._id);
    user.photos.push(data._id);
    await user.save();
    res.redirect("/catalog");
  } catch (error) {
    res.render("create", { error: error.message });
  }
});

module.exports = createController;
