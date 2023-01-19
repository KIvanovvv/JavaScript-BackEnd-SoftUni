const mongoose = require("mongoose");
const Person = require("./models/Person.js");

const connectionString = "mongodb://localhost:27017/testdb";
start();

async function start() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log(`Database connected`);
  const data = await Person.find({});
  console.log(data[0].sayHi());
  console.log(data[0].name);

  data[0].name = "Bob Smith";
  await data[0].save();
  // const person = new Person({
  //   firstName: "Peter",
  //   lastName: "Johnson",
  //   age: 29,
  // });
  // await person.save();

  await mongoose.disconnect();
}
