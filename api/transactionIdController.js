const transactionModel = require("../dbSchema/txnId");
const mongoose = require("mongoose");
const sha512 = require("js-sha512");

const getTransactionId = (req, res) => {
  const txnID = mongoose.Types.ObjectId();

  const feed =
    req.body.key +
    "|" +
    txnID +
    "|" +
    req.body.amount +
    "|" +
    req.body.info +
    "|" +
    req.body.firstname +
    "|" +
    req.body.email +
    "|||||||||||" +
    req.body.salt;

  console.log(feed);
  const hash = sha512(feed);

  const newEntry = new transactionModel({
    txnID: txnID,
    hash: hash,
    firstname: req.body.firstname,
    amount: req.body.amount,
    productinfo: req.body.info,
    email: req.body.email,
  });

  newEntry
    .save()
    .then(() => {
      // const hash=sha512(key|txnid|amount|productinfo|firstname|email|||||||||||SALT)
      // hash = sha512(gtKFFx|6082b225e2fc670d62f6269f|8500|tshirt500|harish|harishjangid0838@gmail.com|||||||||||eCwWELxi)
      console.log(txnID);

      res.status(200).json({ txnID: txnID, hash: hash });
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
