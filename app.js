const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const transactionController = require("./controllers/transactionController");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use("/transactions", transactionController);

app.get("/", (req, res) => {
  res.send("Welcome to my Budget App");
});

app.use("*", (req, res) => {
  res.status(404).send("sorry, the page you requested cannot be found");
});

// app.use((err, req, res, next) => {
//   if (err.name === "ValidationError") {
//     // Handle validation errors
//     res.status(400).json({ error: err.message });
//   } else {
//     // Handle other types of errors
//     console.error(err);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

module.exports = app;
