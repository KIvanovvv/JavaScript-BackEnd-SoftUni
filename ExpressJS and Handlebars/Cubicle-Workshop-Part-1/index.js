const express = require("express");
const hbs = require("express-handlebars");

const app = express();
const handlebars = hbs.create({
  extname: ".hbs",
});

const homeController = require("./controllers/homeController.js");
const detailsController = require("./controllers/detailsController.js");
const createController = require("./controllers/createController.js");

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(homeController);
app.use("/details", detailsController);
app.use("/create", createController);

app.listen(5000, () => console.log(`Server is running on port 5000...`));
