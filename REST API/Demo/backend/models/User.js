const { Schema, model } = require("mongoose");

const userShcema = new Schema({
  username: { type: String, minlength: 3, unique: true },
  email: { type: String, minlength: 8 },
  hashedPassword: { type: String, minlength: 4 },
});

userShcema.index(
  { username: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userShcema);

module.exports = User;
