const {
  getPhotoById,
  getComments,
  getPhotoInstanceById,
} = require("../service/photoServices.js");

const detailsController = require("express").Router();

detailsController.get("/:id", async (req, res) => {
  const photo = await getPhotoById(req.params.id);
  // const comments = await getComments(req.params.id);
  const isOwner = req.user?._id == photo.ownerId._id.toString();
  res.render("details", { photo, isOwner });
});

detailsController.post("/:id", async (req, res) => {
  const photoInstance = await getPhotoInstanceById(req.params.id);
  photoInstance.commentList.push({
    username: req.user.username,
    comment: req.body.comment,
  });
  // photoInstance.markModified("commentList");
  await photoInstance.save();
  console.log(photoInstance);

  res.redirect(`/details/${photoInstance._id}`);
});

module.exports = detailsController;
