const mongoose = require("mongoose");

const TransactionModel = new mongoose.Schema({
  txnID: { type: String, required: true },
  hash: { type: String, required: true },
  status: { type: String, default: "ongoing" },
  firstname: { type: String },
  productinfo: { type: String },
  amount: { type: String },
  email: { type: String },
});

module.exports = mongoose.model("transaction", TransactionModel);
