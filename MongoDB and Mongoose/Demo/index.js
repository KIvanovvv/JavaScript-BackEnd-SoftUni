const mongoose = require("mongoose");
const Article = require("./models/Article.js");
const Comment = require("./models/Comment.js");

const connectionString = "mongodb://localhost:27017/testdb";
start();

async function start() {
  mongoose.set("strictQuery", true);
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  console.log(`Database connected`);

  const article = await Article.findOne({}).populate("comments", "content");
  console.log(article);

  await mongoose.disconnect();
}
