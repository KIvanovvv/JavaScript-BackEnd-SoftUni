const express = require("express");
const hbs = require("express-handlebars");

const app = express();
const handlebars = hbs.create({
  extname: ".hbs",
});

const homeController = require("./controllers/homeController.js");

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(homeController);

app.listen(5000, () => console.log(`Server is running on port 5000...`));
