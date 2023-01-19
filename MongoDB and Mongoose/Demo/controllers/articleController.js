const { getAllArticles } = require("../services/articleServices.js");
const articleController = require("express").Router();

articleController.get("/", async (req, res) => {
  // const articles = [
  //   {
  //     title: "Title 1",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  //     author: "Test 1",
  //   },
  //   {
  //     title: "Title 2",
  //     content:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  //     author: "Test 2",
  //   },
  // ];
  const articles = await getAllArticles();
  res.render("articles", {
    title: "Articles page",
    articles,
  });
});

module.exports = articleController;
