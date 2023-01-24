const startMongoose = require("./config/mongooseConfig.js");
const app = require("./config/expressConfig.js");

const articleController = require("./controllers/articleController.js");
const commentsController = require("./controllers/commentsController.js");
const createController = require("./controllers/createController.js");
const homeController = require("./controllers/homeController.js");

app.use(homeController);
app.use("/articles", articleController);
app.use("/create", createController);
app.use("/comments", commentsController);

startMongoose();
app.listen(5000, () => console.log(`Server is listening on port 5000...`));
