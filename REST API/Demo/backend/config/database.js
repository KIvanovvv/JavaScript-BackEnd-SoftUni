const mongoose = require("mongoose");

const connectionString = `mongodb://localhost:27017/socialbranch`;

async function startDb() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(connectionString);

  console.log(`Database is avaliable`);
}

module.exports = startDb;
