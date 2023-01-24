const bcrypt = require("bcrypt");
const User = require("../models/user.js");

async function register(username, password) {
  console.log(`>>>Username: ${username}: Password: ${password}`);
  await User.create({
    username: username,
    hashedPassword: await bcrypt.hash(password, 10),
  });
}

module.exports = {
  register,
};
