const Ad = require("../models/ad.js");

async function createAd(data, ownerId) {
  const newAd = await Ad.create({
    ...data,
    ownerId,
  });
}

async function getAllAds() {
  const ads = await Ad.find({}).lean();
  return ads;
}

async function getAddByIdPop(id) {
  const ad = await Ad.findById(id).populate("ownerId").lean();
  return ad;
}
async function getAddByIdInst(id) {
  const ad = await Ad.findById(id);
  return ad;
}
async function getAddById(id) {
  const ad = await Ad.findById(id).lean();
  return ad;
}

async function getAdByEmail(email) {
  const ads = await Ad.find({}).populate("ownerId").lean();
  const adsFiltered = ads.filter((ad) =>
    ad.ownerId.email.toLowerCase().includes(email.toLowerCase())
  );

  // const ad = await Ad.find({ email: { $regex: email, $options: "i" } });
  return adsFiltered;
}
module.exports = {
  createAd,
  getAllAds,
  getAddByIdPop,
  getAddByIdInst,
  getAddById,
  getAdByEmail,
};
