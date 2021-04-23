const mongoose = require("mongoose");

const TransactionModel = new mongoose.Schema({
  txnID: { type: String, required: true },
  status: { type: String, default: "ongoing" },
});

module.exports = mongoose.model("transaction", TransactionModel);
