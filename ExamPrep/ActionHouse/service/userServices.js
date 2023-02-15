const User = require("../models/user.js");
const bcrypt = require("bcrypt");

async function register(firstName, lastName, email, password) {
  const existing = await User.findOne({ email: email }).collation({
    locale: "en",
    strength: 2,
  });

  if (existing) {
    throw new Error(`Email is already taken`);
  }
  const data = await User.create({
    firstName,
    lastName,
    email,
    hashedPassword: await bcrypt.hash(password, 10),
  });
  console.log(data);
  return {
    firstName: data.firstName,
    lastName: data.lastName,
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
      firstName: matchingUser[0].firstName,
      lastName: matchingUser[0].lastName,
      email: matchingUser[0].email,
      _id: matchingUser[0]._id,
    };
  } catch (error) {
    throw new Error(`Invalid username or password`);
  }
}

async function findUserById(id) {
  const user = User.findById(id);
  return user;
}

module.exports = {
  register,
  login,
  findUserById,
};
