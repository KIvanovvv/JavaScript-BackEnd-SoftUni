const routerConfig = require("./config/router.js");
const app = require("./config/express.js");
const startDb = require("./config/mongoose.js");

start();

async function start() {
  routerConfig(app);
  app.listen(3000, () => console.log(`Server is running on port 3000...`));
  startDb();
}
