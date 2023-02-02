const Crypto = require("../models/crypto.js");

async function addCrypto(data, ownerId) {
  const payload = await Crypto.create({
    ...data,
    ownerId,
  });

  console.log(payload);
}

async function getAllCrypto() {
  const data = await Crypto.find({}).lean();
  return data;
}

async function getCoinById(id) {
  const data = await Crypto.findById(id).lean();
  return data;
}

async function getCoinOwner(id) {
  const data = await Crypto.findById(id).lean();
  return {
    coinOwnerId: data.ownerId.toString(),
    buyers: data.boughtBy.map((x) => x.toString()),
  };
}
async function getCryptoInstance(id) {
  const instance = await Crypto.findById(id);
  return instance;
}

module.exports = {
  addCrypto,
  getAllCrypto,
  getCoinById,
  getCoinOwner,
  getCryptoInstance,
};
