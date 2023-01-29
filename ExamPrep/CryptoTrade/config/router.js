const catalogController = require("../controllers/catalogController.js");
const createController = require("../controllers/createController.js");
const homeController = require("../controllers/homeController.js");
const loginController = require("../controllers/loginController.js");
const notFoundController = require("../controllers/notFoundController.js");
const registerController = require("../controllers/registerController.js");
const searchController = require("../controllers/searchController.js");

module.exports = (app) => {
  app.use(homeController);
  app.use("/catalog", catalogController);
  app.use("/search", searchController);
  app.use("/create", createController);
  app.use("/login", loginController);
  app.use("/register", registerController);
  app.use("*", notFoundController);
};
