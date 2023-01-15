const cats = require("./data.json");
const breeds = require("./breeds.json");

function getCats() {
  return cats;
}
function getBreeds() {
  return breeds;
}
function getById(id) {
  return cats.filter((x) => x.id == id);
}

module.exports = {
  getCats,
  getBreeds,
  getById,
};
