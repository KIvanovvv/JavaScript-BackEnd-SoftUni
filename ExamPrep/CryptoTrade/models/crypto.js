const { Schema, model, Types } = require("mongoose");

const cryptoSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  paymentMethod: {
    type: String,
    enum: [`crypto-wallet`, `credit-card`, `debit-card`, `paypal`],
    required: true,
  },
  boughtBy: { type: [Types.ObjectId], default: [], ref: "User" },
  ownerId: { type: Types.ObjectId, ref: "User", required: true },
});

const Crypto = model("Crypto", cryptoSchema);

module.exports = Crypto;
