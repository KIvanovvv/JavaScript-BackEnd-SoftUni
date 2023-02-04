const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secretStr = "asd2dafef4atg";

async function register(username, email, password) {
  const newUser = await User.create({
    username,
    email,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  return {
    _id: newUser._id,
    username: newUser.username,
    email: newUser.email,
    accessToken: createToken(newUser),
  };
}

function createToken(user) {
  const payload = {
    username: user.username,
    email: user.email,
    _id: user._id,
  };
  const token = jwt.sign(payload, secretStr);
  return token;
}

module.exports = {
  register,
};
