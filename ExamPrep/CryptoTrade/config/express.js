const express = require("express");
const hbs = require("express-handlebars").create({ extname: ".hbs" });
const cookieParser = require("cookie-parser");
const app = express();

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/public", express.static("public"));

module.exports = app;
