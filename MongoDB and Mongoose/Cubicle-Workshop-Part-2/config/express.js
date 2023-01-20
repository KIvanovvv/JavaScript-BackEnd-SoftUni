const express = require("express");
const hbs = require("express-handlebars");

const app = express();
const handlebars = hbs.create({
  extname: ".hbs",
});

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

module.exports=app