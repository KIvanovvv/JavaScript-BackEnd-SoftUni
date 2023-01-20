const homeController = require("../controllers/homeController.js");
const detailsController = require("../controllers/detailsController.js");
const createController = require("../controllers/createController.js");

module.exports = (app) => {
  app.use(homeController);
  app.use("/details", detailsController);
  app.use("/create", createController);
};
