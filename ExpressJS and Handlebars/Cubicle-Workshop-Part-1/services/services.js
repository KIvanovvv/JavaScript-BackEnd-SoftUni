const data = require("../services/database.json");

function getCubes() {
  return data;
}

module.exports = {
  getCubes,
};
