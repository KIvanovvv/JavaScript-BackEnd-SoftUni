const cats = require("./cats.json");

const http = require("http");
const path = require("path");
const fsp = require("fs/promises");

const server = http.createServer(async (req, res) => {
  console.log(req.url);
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    const homePageHtml = await fileReader("./views/index.html");
    const catPartialHtml = await fileReader("./partials/catsHome.html");
    const catsHtml = cats
      .map((cat) => catTemplate(cat, catPartialHtml))
      .join("");
    const updatedHomePage = homePageHtml.replace("{{cats}}", catsHtml);

    res.write(updatedHomePage);
  }
  if (req.url === "/styles") {
    res.writeHead(200, {
      "Content-Type": "text/css",
    });
    const classes = await fileReader("./styles/site.css");
    res.write(classes);
  }
  if (req.url.includes("edit")) {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    // const currentId = req.url.split("/")[1];
    // const currentCat = cats.find((x) => x.id == currentId);

    // res.write(editView(currentCat));
  }
  if (req.url === "/cats/add-breed") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });

    // res.write(addBreedView());
  }

  res.end();
});

server.listen(5000);

async function fileReader(path) {
  return fsp.readFile(path, { encoding: "utf-8" });
}

function catTemplate(cat, catPartialHtml) {
  const catHtml = Object.keys(cat).reduce((html, key) => {
    return html.replace(`{{${key}}}`, cat[key]);
  }, catPartialHtml);

  return catHtml;
}

console.log(`Server is running on port 5000...`);
