const { where } = require("../models/action.js");
const Action = require("../models/action.js");

async function addAction(data, author) {
  const payload = await Action.create({
    ...data,
    author,
  });

  console.log(payload);
}

async function getAllActions() {
  const data = await Action.find({}).lean();
  return data;
}

async function getActionById(id) {
  const data = await Action.findById(id).lean();
  return data;
}

async function getActionOwner(id) {
  const data = await Action.findById(id).lean();
  return {
    author: data.author.toString(),
    bidder: data.bidder.map((x) => x.toString()),
  };
}
async function getActionInstance(id) {
  const instance = await Action.findById(id);
  return instance;
}

// async function searchAction(name, paymentMethod) {
//   const coins = await Action.find({
//     title: { $regex: name || "", $options: "i" },
//   })
//     .where("paymentMethod")
//     .equals(paymentMethod)
//     .lean();
//   return coins;
// }

module.exports = {
  addAction,
  getAllActions,
  getActionById,
  getActionOwner,
  getActionInstance,
  // searchActions,
};
