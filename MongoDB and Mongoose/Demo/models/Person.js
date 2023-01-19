const { Schema, model } = require("mongoose");

const personScheme = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true, min: [0, `Age cannot be negative`] },
});

personScheme.methods.sayHi = function () {
  return `My name is ${this.firstName}`;
};

personScheme
  .virtual("name")
  .get(function () {
    return `${this.firstName} ${this.lastName}`;
  })
  .set(function (value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  });

const Person = model("Person", personScheme);

module.exports = Person;
