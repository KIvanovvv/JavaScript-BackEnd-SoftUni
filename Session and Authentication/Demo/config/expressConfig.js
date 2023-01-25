const express = require("express");
const hbs = require("express-handlebars");
const cookieParser = require("cookie-parser");

const articleController = require("../controllers/articleController.js");
const { authController } = require("../controllers/authController.js");
const commentsController = require("../controllers/commentsController.js");
const createController = require("../controllers/createController.js");
const homeController = require("../controllers/homeController.js");
const auth = require("../middleware/auth.js");
const updateNav = require("../middleware/updateNav.js");
const publishedController = require("../controllers/publishedController.js");
const editController = require("../controllers/editCotroller.js");
const hasUserGuard = require("../middleware/hasUserGuard.js");
const notFound = require("../controllers/404.js");

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
app.use(auth(jwtSecret));
app.use(updateNav());

app.use(homeController);
app.use("/articles", articleController);
app.use("/create", hasUserGuard(), createController);
app.use("/comments", hasUserGuard(), commentsController);
app.use("/auth", authController);
app.use("/published", hasUserGuard(), publishedController);
app.use("/edit", hasUserGuard(), editController);
app.use("/*", notFound);

module.exports = app;
