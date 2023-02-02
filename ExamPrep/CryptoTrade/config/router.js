const catalogController = require("../controllers/catalogController.js");
const createController = require("../controllers/createController.js");
const detailsController = require("../controllers/detailsController.js");
const editController = require("../controllers/editController.js");
const homeController = require("../controllers/homeController.js");
const loginController = require("../controllers/loginController.js");
const notFoundController = require("../controllers/notFoundController.js");
const registerController = require("../controllers/registerController.js");
const searchController = require("../controllers/searchController.js");
const hasUser = require("../middleware/hasUser.js");


module.exports = (app) => {
  app.use(homeController);
  app.use("/catalog", catalogController);
  app.use("/search", searchController);
  app.use("/create", hasUser(true), createController);
  app.use("/login", hasUser(false), loginController);
  app.use("/register", hasUser(false), registerController);
  app.use("/details", hasUser(true), detailsController);
  app.use("/edit", hasUser(true),  editController);
  app.use("*", notFoundController);
};
