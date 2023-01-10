const cats = require("./cats.json");
const homeView = require("./views/home.js");
const editView = require("./views/edit.js");
const addBreedView = require("./views/addBreed.js");
const classes = require("./views/styles/site.css.js");

const http = require("http");
const port = 5000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.write(homeView(cats));
  }
  if (req.url === "/styles/site.css") {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    res.write(classes);
  }
  if (req.url.includes("edit")) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const currentId = req.url.split("/")[1];
    const currentCat = cats.find((x) => x.id == currentId);

    res.write(editView(currentCat));
  }
  if (req.url === "/cats/add-breed") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    res.write(addBreedView());
  }

  res.end();
});

server.listen(port);

console.log(`Server is running on port 5000...`);
