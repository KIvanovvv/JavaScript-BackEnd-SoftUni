const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, minlength: 3 },
  hashedPassword:{type:String,required:true}
});

const User = model("User",userSchema)

module.exports = User
