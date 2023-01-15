const cats = require("./data.json");
const breeds = require("./breeds.json")

function getCats() {
  return cats;
}
function getBreeds(){
return breeds
}

module.exports = {
  getCats,
  getBreeds
}
