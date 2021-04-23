const transactionModel = require("../dbSchema/txnId");
const mongoose = require("mongoose");

const getTransactionId = (req, res) => {
  const txnID = mongoose.Types.ObjectId();

  const newEntry = new transactionModel({
    txnID: txnID,
  });

  newEntry
    .save()
    .then(() => {
      console.log(txnID);
      res.status(200).json({ txnID: txnID });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateTransactoin = (req, res) => {
  const txnID = req.body.txnId;
  const status = req.body.status;

  transactionModel
    .findOneAndUpdate({ txnID: txnID }, { status: status }, { new: true })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
};

const getTransactionDetail = (req, res) => {
  const txnID = req.params.txn;
  transactionModel
    .findOne({ txnID: txnID })
    .then((doc) => {
      res.status(200).json(doc);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = {
  getTransactionId,
  updateTransactoin,
  getTransactionDetail,
};
