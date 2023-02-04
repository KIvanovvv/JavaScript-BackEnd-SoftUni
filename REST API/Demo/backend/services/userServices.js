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

async function login(username, password) {
  try {
    const match = await User.findOne({ username: username });

    if (!match) {
      throw new Error(`Invalid username or password`);
    }
    const isUser = await bcrypt.compare(password, match.hashedPassword);
    if (!isUser) {
      throw new Error(`Invalid username or password`);
    }
    return {
      _id: match._id,
      username: match.username,
      email: match.email,
      accessToken: createToken(match),
    };
  } catch (error) {
    throw new Error(error.message);
  }
}

function createToken(user) {
  const payload = {
    username: user.username,
    email: user.email,
    _id: user._id,
  };
  const token = jwt.sign(payload, secretStr, { expiresIn: "1h" });
  return token;
}

module.exports = {
  register,
  login,
};
