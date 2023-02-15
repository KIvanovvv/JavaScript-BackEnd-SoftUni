const isOwner = require("../middleware/isOwner.js");
const isRightUser = require("../middleware/isRightUser.js");
const {
  getActionById,
  getActionInstance,
} = require("../service/actionServices.js");

const editController = require("express").Router();

editController.get("/:id", isOwner(), isRightUser(), async (req, res) => {
  const action = await getActionById(req.params.id);
  const hasBid = req.user.hasBid;
  action.hasBid = hasBid;
  // console.log(action);
  res.render("edit", { action });
});

editController.post("/:id", isOwner(), isRightUser(), async (req, res) => {
  try {
    const { title, imageUrl, price, description, category } = req.body;

    if (!title || !imageUrl || !price || !description || !category) {
      throw new Error(`All fields are required`);
    }
    if (title.length < 4) {
      throw new Error(`Name must be at least 4 characters`);
    }
    if (Number(price) < 1) {
      throw new Error(`Price must be a positive number`);
    }

    if (description.length > 200) {
      throw new Error(`Description must be max 200 characters`);
    }
    const actionInstance = await getActionInstance(req.params.id);
    actionInstance.title = title;
    actionInstance.imageUrl = imageUrl;
    actionInstance.price = price;
    actionInstance.description = description;
    actionInstance.category = category;
    await actionInstance.save();
    res.redirect(`/details/${req.params.id}`);
  } catch (error) {
    const action = await getActionById(req.params.id);
    res.render("edit", { action, error: error.message });
  }
});

module.exports = editController;
