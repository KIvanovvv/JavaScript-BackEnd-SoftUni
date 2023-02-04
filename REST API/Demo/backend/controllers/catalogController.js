const catalogController = require("express").Router();
const jwt = require("jsonwebtoken");

const secretStr = "asd2dafef4atg";

catalogController.get("/", async (req, res) => {
  try {
    const token = req.headers["x-authorization"];
    if (!token) {
      throw new Error(`Missing token`);
    }
    const isTokenValid = await jwt.verify(token, secretStr);
    console.log(isTokenValid);
    if (!isTokenValid) {
      throw new Error(`Token is invalid`);
    }
    res.json([
      { name: "item 1", price: 25 },
      { name: "item 2", price: 40 },
      { name: "item 1", price: 79 },
    ]);
  } catch (error) {
    res.status(403).json({ message: `You need to be logged in` });
  }
});

module.exports = catalogController;
