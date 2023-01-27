const jwt = require("jsonwebtoken");

const secretString = "asd2dawdf34";

module.exports = () => (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const data = jwt.verify(token, secretString);
    req.user = data;
  } catch (error) {
    res.cookie("jwt", "", { maxAge: 0 });
  }

  req.signJwt = (data) => jwt.sign(data, secretString, { expiresIn: "4h" });
  next();
};
