const routerConfig = require("./config/router.js");
const app = require("./config/express.js");

start();

async function start() {
  routerConfig(app);
  app.listen(3000, () => console.log(`Server is running on port 3000...`));
}
