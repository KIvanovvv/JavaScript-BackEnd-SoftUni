const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  enrolled: { type: [Types.ObjectId], ref: "Course", default: [] },
  hashedPassword: { type: String, required: true },
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
