const mongoose = require("mongoose");

const connStr = "mongodb://localhost:27017/furniture";

async function runDB() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(connStr);
  console.log(`Database is connected`);
}

module.exports = runDB;
