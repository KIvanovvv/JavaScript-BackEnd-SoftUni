const User = require("../models/user.js");
const bcrypt = require("bcrypt");

async function register(username, email, password) {
  const existing = await User.findOne({ username }).collation({
    locale: "en",
    strength: 2,
  });
  console.log(existing);
  if (existing) {
    throw new Error(`Username is already taken`);
  }
  const data = await User.create({
    username,
    email,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  return {
    username: data.username,
    email: data.email,
    _id: data._id,
  };
}

module.exports = {
  register,
};
