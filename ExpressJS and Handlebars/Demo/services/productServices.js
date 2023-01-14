const data = [
  {
    id: "asd1231",
    name: "Rear mirror (Left)",
    price: 90,
  },
  {
    id: "asd1232",
    name: "Rear mirror (Right)",
    price: 110,
  },
  {
    id: "asd1233",
    name: "Headlights",
    price: "220",
  },
];

function getList() {
  return data;
}
function getById(id) {
  return data.find((x) => x.id === id);
}

module.exports = {
  getList,
  getById,
};
