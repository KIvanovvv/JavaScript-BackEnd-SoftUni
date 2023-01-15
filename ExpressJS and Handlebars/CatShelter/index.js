const { urlencoded } = require("body-parser");
const express = require("express");
const hbs = require("express-handlebars");

const homeController = require("./controllers/homeController.js");
const addBreedController = require("./controllers/addBreedController.js");

const app = express();
const handlebars = hbs.create({
  extname: ".hbs",
});

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: false }));

app.use(homeController);
app.use("/add-breed", addBreedController);

app.listen(5000);
console.log(`serever is running on port 5000...`);
