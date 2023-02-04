const express = require("express");
const cors = require("../middleware/cors.js");

const app = express();
app.use(express.json());
app.use(cors());

module.exports = app;
