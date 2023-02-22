const { getPhotoById } = require("../service/photoServices.js");

module.exports = () => async (req, res, next) => {
  const photo = await getPhotoById(req.params.id);
  if (photo.ownerId._id.toString() == req.user._id) {
    next();
  } else {
    res.redirect("/catalog");
  }
};
