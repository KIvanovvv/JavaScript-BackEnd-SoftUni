const Crypto = require("../models/crypto.js");

async function addCrypto(data, ownerId) {
  const payload = await Crypto.create({
    ...data,
    ownerId,
  });

  console.log(payload);
}

module.exports = {
  addCrypto,
};
