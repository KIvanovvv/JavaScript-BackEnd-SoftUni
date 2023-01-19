const express = require("express");
const hbs = require("express-handlebars");

const articleController = require("./controllers/articleController.js");
const homeController = require("./controllers/homeController.js");

const handlebars = hbs.create({
  extname: ".hbs",
});

const app = express();
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static("public"));

app.use(homeController);
app.use("/articles", articleController);

app.listen(5000, () => console.log(`Server is listening on port 5000...`));
