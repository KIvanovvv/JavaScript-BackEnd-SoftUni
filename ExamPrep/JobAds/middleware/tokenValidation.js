const jwt = require("jsonwebtoken");

const secretStr = "asd3aef4t4t";

module.exports = () => (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    const data = jwt.verify(token, secretStr);
    req.user = data;
  } catch (error) {
    res.cookie("jwt", "", { maxAge: 0 });
  }

  req.signJwt = (data) => jwt.sign(data, secretStr, { expiresIn: "4h" });
  next()
};
