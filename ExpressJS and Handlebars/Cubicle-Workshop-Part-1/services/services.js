const data = require("../services/database.json");

function getCubes() {
  return data;
}

function getCubeById(id) {
  return data.find((x) => x.id == id);
}

module.exports = {
  getCubes,
  getCubeById,
};
