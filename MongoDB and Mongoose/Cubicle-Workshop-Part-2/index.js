const app = require("./config/express.js");
const startMongoose = require("./config/database.js");
const RouterConfig = require("./config/RouterConfig.js");

start();

async function start() {
  startMongoose();
  RouterConfig(app);
  app.listen(5000, () => console.log(`Server is running on port 5000...`));
}
