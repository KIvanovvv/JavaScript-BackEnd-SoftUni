const express = require("express");
const hbs = require("express-handlebars");
const bodyParser = require("body-parser");

const homeController = require("./controllers/homeController.js");
const addBreedController = require("./controllers/addBreedController.js");
const addCatController = require("./controllers/addCatController.js");
const editCatController = require("./controllers/editCatController.js");
const shelterCatController = require("./controllers/shelterController.js");

const app = express();
const handlebars = hbs.create({
  extname: ".hbs",
});

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use("/static", express.static("static"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(homeController);
app.use("/add-breed", addBreedController);
app.use("/add-cat", addCatController);
app.use("/edit", editCatController);
app.use("/shelter", shelterCatController);

app.listen(5000);
console.log(`serever is running on port 5000...`);
