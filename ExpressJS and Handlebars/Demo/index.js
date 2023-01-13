const express = require("express");
const hbr = require("express-handlebars");

const handlebars = hbr.create({
  extname: ".hbs",
});

const app = express();

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.listen(5000);
console.log(`Server is running on port 5000`);
