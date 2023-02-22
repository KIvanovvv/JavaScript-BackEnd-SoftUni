module.exports = () => (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    res.locals.user = req.user;
  }
  next();
};
