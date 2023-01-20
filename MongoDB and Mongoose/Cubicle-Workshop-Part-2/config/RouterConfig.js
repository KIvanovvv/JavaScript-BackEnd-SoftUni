const homeController = require("../controllers/homeController.js");
const detailsController = require("../controllers/detailsController.js");
const createController = require("../controllers/createController.js");
const attachController = require("../controllers/attachController.js");
const createAccessoryController = require("../controllers/createAccessoryController.js");

module.exports = (app) => {
  app.use(homeController);
  app.use("/details", detailsController);
  app.use("/create", createController);
  app.use("/attach", attachController);
  app.use("/create/accessory", createAccessoryController);
};
