const express = require("express");
const hbs = require("express-handlebars").create({ extname: ".hbs" });
const cookieParser = require("cookie-parser");
const tokenValidation = require("../middleware/tokenValidation.js");
const updateNav = require("../middleware/updateNav.js");
const app = express();

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/static", express.static("static"));
app.use(tokenValidation());
app.use(updateNav());
module.exports = app;
