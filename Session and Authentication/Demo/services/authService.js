const bcrypt = require("bcrypt");
const User = require("../models/user.js");

async function register(username, password) {
  console.log(`>>>Username: ${username}: Password: ${password}`);
  const newUser = await User.create({
    username: username,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  return { username: newUser.username, _id: newUser._id };
}
async function login(username, password) {
  try {
    const match = await User.find({
      username: { $regex: new RegExp("^" + username + "$"), $options: "i" },
    });
    const isUser = await bcrypt.compare(password, match[0].hashedPassword);
    if (!isUser) {
      throw new Error(`Invalid username or password`);
    }
    return { username: match[0].username, _id: match[0]._id };
  } catch (error) {
    throw new Error(`Invalid username or password`);
  }
}

module.exports = {
  register,
  login,
};
