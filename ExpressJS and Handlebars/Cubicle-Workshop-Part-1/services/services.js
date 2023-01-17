const fs = require("fs/promises");
const data = require("../services/database.json");

function getCubes() {
  return data;
}

function getCubeById(id) {
  return data.find((x) => x.id == id);
}
async function addCube(cube) {
  const id = `5c39f1851ab3b24f5c03e${Math.trunc(Math.random() * 999)}`;
  data.push({ ...cube, id });
  return fs.writeFile(
    "./services/database.json",
    JSON.stringify(data, null, 2),
    () => {}
  );
}
function findCubes(query) {
  const { search, from, to } = query;
  let filterdData = data.filter((x) =>
    x.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );
  if (from != "") {
    filterdData = filterdData.filter((x) => x.difficulty >= Number(from));
  }
  if (to != "") {
    filterdData = filterdData.filter((x) => x.difficulty <= Number(to));
  }

  return filterdData;
}

module.exports = {
  getCubes,
  getCubeById,
  addCube,
  findCubes,
};
