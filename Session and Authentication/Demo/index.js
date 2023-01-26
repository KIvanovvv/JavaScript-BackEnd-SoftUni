require("dotenv").config();
const startMongoose = require("./config/mongooseConfig.js");
const app = require("./config/expressConfig.js");

const PORT = process.env.PORT || 5000;

startMongoose(process.env.MONGO_URI);
app.listen(PORT, () => console.log(`Server is listening on port 5000...`));
