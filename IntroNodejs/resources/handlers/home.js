const url = require("url");
const fs = require("fs");
const path = require("path");
const cats = require("../data/cats.json");

module.exports = (req, res) => {
  const pathname = url.parse(req.url).pathname;

  if (pathname === "/" && req.method === "GET") {
    //Implement the ogic for home view
  } else {
    return true;
  }
};
