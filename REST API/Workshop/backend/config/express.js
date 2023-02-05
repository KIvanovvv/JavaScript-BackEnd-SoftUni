const express = require("express");
const CORS = require("../middlewares/CORS.js");

const app = express();

app.use(express.json());
app.use(CORS());

module.exports = app;
