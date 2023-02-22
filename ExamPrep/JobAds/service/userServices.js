const User = require("../models/user.js");
const bcrypt = require("bcrypt");

async function register(email, password, description) {
  const existing = await User.findOne({ email }).collation({
    locale: "en",
    strength: 2,
  });
  console.log(existing);
  if (existing) {
    throw new Error(`Email is already taken`);
  }
  const data = await User.create({
    email,
    hashedPassword: await bcrypt.hash(password, 10),
    description,
  });
  return {
    description: data.description,
    email: data.email,
    _id: data._id,
  };
}

async function login(email, password) {
  try {
    const matchingUser = await User.find({
      email: { $regex: new RegExp("^" + email + "$"), $options: "i" },
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

module.exports = {
  register,
  login,
};
