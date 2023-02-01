const Crypto = require("../models/crypto.js");

async function addCrypto(data, ownerId) {
  const payload = await Crypto.create({
    ...data,
    ownerId,
  });

  console.log(payload);
}

async function getAllCrypto(){
  const data = await Crypto.find({}).lean()
  return data

}

module.exports = {
  addCrypto,
  getAllCrypto
};
