const express = require("express");
const hbs = require("express-handlebars");

const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/testdb";

const articleController = require("./controllers/articleController.js");
const commentsController = require("./controllers/commentsController.js");
const createController = require("./controllers/createController.js");
const homeController = require("./controllers/homeController.js");
const Article = require("./models/article.js");
const Comment = require("./models/comment.js");

const handlebars = hbs.create({
  extname: ".hbs",
});

const app = express();
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use(homeController);
app.use("/articles", articleController);
app.use("/create", createController);
app.use("/comments", commentsController);

start();
app.listen(5000, () => console.log(`Server is listening on port 5000...`));

async function start() {
  mongoose.set("strictQuery", true);
  mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`Database is online`);
  //   await Comment.create({
  //     author: "Mike",
  //     content: "Great job",
  //     articleId: "63c9c0af23cc498331e624cd",
  //   });
  //   await Comment.create({
  //     author: "Stan",
  //     content: "Nice article",
  //     articleId: "63c9c0af23cc498331e624cd",
  //   });
}
