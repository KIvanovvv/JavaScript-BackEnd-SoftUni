const User = require("../models/User.js");
const bcrypt = require("bcrypt");

async function register(username, email, password) {
  const newUser = await User.create({
    username,
    email,
    hashedPassword: await bcrypt.hash(password,10)
  });
  return newUser
}

module.exports = {
  register
};
