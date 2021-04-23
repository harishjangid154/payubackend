const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const transactionRoutes = require("./Routes/transactionRoutes");

mongoose.connect("mongodb://localhost:27017/payu").then(() => {
  console.log("connected to database");
});

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.use("/txn", transactionRoutes);

app.listen(port, () => {
  console.log("Payment backend running");
});
