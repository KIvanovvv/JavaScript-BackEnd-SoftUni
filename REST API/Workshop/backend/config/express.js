const express = require("express");
const CORS = require("../middlewares/CORS.js");
const hasUser = require("../middlewares/hasUser.js");

const app = express();

app.use(express.json());
app.use(CORS());
app.use(hasUser());

module.exports = app;
