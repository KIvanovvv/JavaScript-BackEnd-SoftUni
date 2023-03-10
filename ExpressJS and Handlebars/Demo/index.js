const express = require("express");
const hbr = require("express-handlebars");

const homeController = require("./controllers/homeController.js");
const catalogController = require("./controllers/catalogController.js");
const createController = require("./controllers/createController.js");
const deleteController = require("./controllers/deleteController.js");

const handlebars = hbr.create({
  extname: ".hbs",
});

const app = express();

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/static", express.static("static"));
app.use(express.urlencoded({ extended: false }));

app.use(homeController);
app.use("/catalog", catalogController);
app.use("/create", createController);
app.use("/delete", deleteController);

app.listen(5000);
console.log(`Server is running on port 5000`);
