const mongoose = require("mongoose");
//TODO Change path
const CONNECTION_STRING = "mongodb://localhost:27017/actionhouse";

async function startDb() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(CONNECTION_STRING, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`Database is online`);
}

module.exports = startDb;
