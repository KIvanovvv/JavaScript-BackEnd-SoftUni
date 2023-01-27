const homeController = require("../controllers/homeController.js");
const detailsController = require("../controllers/detailsController.js");
const createController = require("../controllers/createController.js");
const attachController = require("../controllers/attachController.js");
const createAccessoryController = require("../controllers/createAccessoryController.js");
const loginController = require("../controllers/loginController.js");
const registerController = require("../controllers/registerController.js");

module.exports = (app) => {
  app.use(homeController);
  app.use("/details", detailsController);
  app.use("/create", createController);
  app.use("/attach/accessory", attachController);
  app.use("/create/accessory", createAccessoryController);
  app.use("/login", loginController);
  app.use("/register", registerController);
};
