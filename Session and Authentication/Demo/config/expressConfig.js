const express = require("express");
const hbs = require("express-handlebars");
const cookieParser = require("cookie-parser");

const articleController = require("../controllers/articleController.js");
const { authController } = require("../controllers/authController.js");
const commentsController = require("../controllers/commentsController.js");
const createController = require("../controllers/createController.js");
const homeController = require("../controllers/homeController.js");
const auth = require("../middleware/auth.js")

const handlebars = hbs.create({
  extname: ".hbs",
});

const jwtSecret = `asd2asd2dadf`;

const app = express();
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static("public"));
app.use(auth(jwtSecret))

app.use(homeController);
app.use("/articles", articleController);
app.use("/create", createController);
app.use("/comments", commentsController);
app.use("/auth", authController);

module.exports = app;
