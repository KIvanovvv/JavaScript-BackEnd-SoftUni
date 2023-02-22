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

async function login(username, password) {
  try {
    const matchingUser = await User.find({
      username: { $regex: new RegExp("^" + username + "$"), $options: "i" },
    });

    if (!matchingUser) {
      throw Error;
    }

    const isValid = await bcrypt.compare(
      password,
      matchingUser[0].hashedPassword
    );

    if (!isValid) {
      throw Error;
    }

    return {
      username: matchingUser[0].username,
      email: matchingUser[0].email,
      _id: matchingUser[0]._id,
    };
  } catch (error) {
    throw new Error(`Invalid username or password`);
  }
}

async function getUserById(id) {
  const user = await User.findById(id).lean();
  return user;
}
async function getUserByIdInstance(id) {
  const user = await User.findById(id);
  return user;
}
async function getUserByIdPop(id) {
  const user = await User.findById(id).populate("photos").lean();
  return user;
}
module.exports = {
  register,
  login,
  getUserById,
  getUserByIdInstance,
  getUserByIdPop,
};
