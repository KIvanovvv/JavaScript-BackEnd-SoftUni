const express = require("express");
const hbr = require("express-handlebars");

const handlebars = hbr.create({
  extname: ".hbs",
});

const app = express();

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.get("/", (req, res) => {
  res.render("home", {
    username: "Gosho",
    title: "Handlebars Demo",
    message: "Its working",
    product: {
      name: "Product 1",
      price: 21.99,
      color: "brown",
    },
    contacts: [
      {
        name: "John",
        email: "john@abv.bg",
      },
      {
        name: "Mary",
        email: "mary@abv.bg",
      },
      {
        name: "Bob",
        email: "bob@abv.bg",
      },
    ],
  });
});

app.listen(5000);
console.log(`Server is running on port 5000`);
