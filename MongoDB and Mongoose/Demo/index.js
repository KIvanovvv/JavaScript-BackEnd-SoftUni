const express = require("express");
const hbs = require("express-handlebars");

const handlebars = hbs.create({
  extname: ".hbs",
});

const app = express();
app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.listen(5000, () => console.log(`Server is listening on port 5000...`));
