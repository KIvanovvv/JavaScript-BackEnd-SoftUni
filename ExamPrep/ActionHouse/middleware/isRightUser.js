

module.exports = () => async (req, res, next) => {
  if (req.user.isOwner) {
    next();
  } else {
    res.redirect("/catalog");
  }
};
