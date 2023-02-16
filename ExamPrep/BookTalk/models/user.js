const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  hashedPassword: { type: String, required: true },
  wishedList: { type: [Types.ObjectId], default: [], ref: "Book" },
});

userSchema.index(
  { username: 1 },
  {
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
