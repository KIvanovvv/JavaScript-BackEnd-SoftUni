const startDb = require("./config/database.js");
const app = require("./config/express.js");
const authController = require("./controllers/authCobtroller.js");

app.get("/", (req, res) => {
  res.json([{ message1: "Hello" }, { message2: "World" }]);
});

app.use("/auth", authController);

start();
async function start() {
  app.listen(3030, () => console.log(`REST API is running on port 3000...`));
  startDb();
}
