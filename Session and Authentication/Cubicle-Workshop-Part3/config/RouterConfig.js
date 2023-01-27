const homeController = require("../controllers/homeController.js");
const detailsController = require("../controllers/detailsController.js");
const createController = require("../controllers/createController.js");
const attachController = require("../controllers/attachController.js");
const createAccessoryController = require("../controllers/createAccessoryController.js");
const loginController = require("../controllers/loginController.js");
const registerController = require("../controllers/registerController.js");
const editController = require("../controllers/editController.js");
const deleteController = require("../controllers/deleteController.js");
const hasUser = require("../middleware/hasUser.js");

module.exports = (app) => {
  app.use(homeController);
  app.use("/details", detailsController);
  app.use("/create", hasUser(), createController);
  app.use("/attach/accessory", hasUser(), attachController);
  app.use("/create/accessory", hasUser(), createAccessoryController);
  app.use("/login", loginController);
  app.use("/register", registerController);
  app.use("/edit", hasUser(), editController);
  app.use("/delete", hasUser(), deleteController);
};
