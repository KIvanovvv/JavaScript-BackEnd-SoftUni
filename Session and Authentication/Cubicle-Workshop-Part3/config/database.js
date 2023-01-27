const mongoose = require("mongoose");

const connString = "mongodb://localhost:27017/cubicle";

async function startMongoose() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(connString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`Databes is connected!`);
}

module.exports = startMongoose;
