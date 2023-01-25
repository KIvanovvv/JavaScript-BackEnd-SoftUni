const notFound = require("express").Router();

notFound.all("/*", (req, res) => {
  res.render("404");
});

module.exports = notFound