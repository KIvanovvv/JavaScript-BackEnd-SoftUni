const bcrypt = require("bcrypt");

const users = [];
/*
{
  username: (string),
  hashedPassword: (string)
}
*/

async function register(username, password) {
  if (users.find((u) => u.username.toLowerCase() == username.toLowerCase())) {
    throw new Error("Username is taken");
  }
  const user = {
    username,
    hashedPassword: await bcrypt.hash(password, 10),
  };
  users.push(user);
}

async function login(username, password) {
  const user = users.find(
    (u) => u.username.toLowerCase() == username.toLowerCase()
  );
  if (!user) {
    return false;
  } else {
    return bcrypt.compare(password, user.hashedPassword);
  }
}

module.exports = {
  users,
  register,
  login,
};
