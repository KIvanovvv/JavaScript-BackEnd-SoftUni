module.exports = (flag) => (req, res, next) => {
  if (flag) {
    if (!req.user) {
      res.redirect("/login");
    } else {
      next();
    }
  } else {
    if (req.user) {
      res.redirect("/catalog");
    } else {
      next();
    }
  }
};
