const app = require("./config/express.js");

const startMongoose = require("./config/database.js");
const Routs = require("./config/Routs.js");

start();

async function start() {
  startMongoose();
  Routs(app);
  app.listen(5000, () => console.log(`Server is running on port 5000...`));
}
