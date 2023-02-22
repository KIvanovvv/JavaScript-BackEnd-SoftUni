const isRightUser = require("../middleware/isRightUser.js");
const {
  getPhotoById,
  getPhotoInstanceById,
} = require("../service/photoServices.js");

const editController = require("express").Router();

editController.get("/:id", isRightUser(), async (req, res) => {
  const photo = await getPhotoById(req.params.id);
  res.render("edit", { photo });
});

editController.post("/:id", isRightUser(), async (req, res) => {
  const photoInstance = await getPhotoInstanceById(req.params.id);
  try {
    const { name, age, description, location, imageUrl } = req.body;
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
    photoInstance.name = name;
    photoInstance.age = age;
    photoInstance.description = description;
    photoInstance.location = location;
    photoInstance.imageUrl = imageUrl;
    await photoInstance.save();
    res.redirect(`/details/${photoInstance._id}`);
  } catch (err) {
    const photo = await getPhotoById(req.params.id);
    res.render("edit", { photo, error: err.message });
  }
});

editController.get("/delete/:id", isRightUser(), async (req, res) => {
  const photo = await getPhotoInstanceById(req.params.id);
  console.log(photo);
  await photo.delete();
  res.redirect("/catalog");
});

module.exports = editController;
