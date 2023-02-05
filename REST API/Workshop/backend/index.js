const runDB = require("./config/database.js");
const app = require("./config/express.js");
const authController = require("./controllers/authController.js");

app.use("/users", authController);

start();
async function start() {
  app.listen(3000, () => console.log(`Server is running on port 3000...`));
  runDB();
}
