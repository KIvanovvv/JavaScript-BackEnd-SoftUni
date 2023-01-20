const Cube = require("../models/cube.js");

async function addNewCube(data) {
  await Cube.create({
    ...data,
  });
}

async function getAllCubes() {
  const cubes = await Cube.find({}).lean();
  return cubes;
}

async function getCubeById(id){
  const cube = await Cube.findById(id).lean();
  return cube
}

module.exports = {
  addNewCube,
  getAllCubes,
  getCubeById
};
