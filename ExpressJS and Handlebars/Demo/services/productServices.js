const fs = require("fs");

const data = JSON.parse(fs.readFileSync("./services/data.json"));

function getList() {
  return data;
}
function getById(id) {
  return data.find((x) => x.id === id);
}

async function addProduct(name, price) {
  const id = "asdf" + Math.trunc(Math.random() * 9999);
  data.push({
    id,
    name,
    price,
  });
  return new Promise((resolve, reject) => {
    fs.writeFile(
      "./services/data.json",
      JSON.stringify(data, null, 2),
      (error) => {
        if (error == null) {
          resolve();
        } else {
          reject(error);
        }
      }
    );
  });
}

module.exports = {
  getList,
  getById,
  addProduct,
};
