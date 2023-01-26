const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/testdb";


async function startMongoose(MONGO_URI) {
  mongoose.set("strictQuery", true);
  mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`Database is online`);
}

module.exports = startMongoose