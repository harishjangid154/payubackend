const express = require("express");
const {
  getTransactionId,
  updateTransactoin,
  getTransactionDetail,
} = require("../api/transactionIdController");

const router = express.Router();

router.post("/", getTransactionId);
router.post("/", updateTransactoin);
router.get("/:txn", getTransactionDetail);

module.exports = router;
