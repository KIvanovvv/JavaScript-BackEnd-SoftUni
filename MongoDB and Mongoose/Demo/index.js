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
  console.log(data);
}
