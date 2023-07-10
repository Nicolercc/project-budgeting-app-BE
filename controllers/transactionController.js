const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");

let transactionModel = require("../models/transactionModel");

router.get("/", (req, res) => {
  res.json(transactionModel);
});

//retrieve
router.get("/:id", (req, res) => {
  const { id } = req.params;

  const match = transactionModel.find((item) => item.id === id);

  if (!match) {
    res.status(404).json({
      status: false,
      message: "Id not found",
    });
  } else {
    res.json({ status: true, data: match });
  }
});

//create
router.post("/create-transactions", (req, res) => {
  const { item_name, amount, date, from, category } = req.body;

  if (!item_name || !amount || !date || !from || !category) {
    res.status(400).json({
      status: false,
      message: "You cannot create an empty transaction",
    });
  } else {
    const newTransaction = {
      id: uuidv4(),
      item_name,
      amount,
      date,
      from,
      category,
    };
    res.json({ status: true, data: newTransaction });
  }
});

//delete
router.delete("/destroy-transaction/:id", (req, res) => {
  const { id } = req.params;

  let foundIndex = transactionModel.findIndex((item) => item.id === id);

  if (foundIndex === -1) {
    res.status(404).json({ status: false, message: "Id not found" });
  } else {
    let foundTransaction = transactionModel[foundIndex];
    let newTransaction = transactionModel.filter((item) => item.id !== id);

    transactionModel = newTransaction;
    res.json({
      status: true,
      message: "success",
      data: foundTransaction,
    });
  }
});

//update
router.put("/update-transaction/:id", (req, res) => {
  const { id } = req.params;
  const foundIndex = transactionModel.findIndex((item) => item.id === id);

  if (foundIndex === -1) {
    res.status(404).json({
      status: false,
      message: "ID not found",
    });
  } else {
    const updatedData = {
      id: uuidv4(),
      ...req.body,
    };
    transactionModel.splice(foundIndex, 1, updatedData);
    res.json({
      message: "success",
      status: true,
      data: updatedData,
    });
  }
});

module.exports = router;
