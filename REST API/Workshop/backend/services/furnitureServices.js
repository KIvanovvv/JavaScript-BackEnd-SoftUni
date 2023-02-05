const Furniture = require("../models/Furniture.js");

async function create(data) {
  const { make, model, year, description, price, img, material } = data;
  const item = await Furniture.create({
    make: make,
    model: model,
    year: year,
    description: description,
    price: price,
    imageUrl: img,
    material: material,
  });
  console.log(item);
  return item;
}

async function getAllItems(){
  const items = await Furniture.find({})
  return items
}

module.exports = {
  create,
  getAllItems
};
