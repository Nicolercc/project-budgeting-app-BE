const { v4: uuidv4 } = require("uuid");

const transactionModel = [
  {
    id: "123",
    item_name: "income",
    amount: 3420,
    date: "2023-10-02",
    from: "employer",
    category: "salary",
  },
  {
    id: "456",
    item_name: "salary",
    amount: 2420,
    date: "2019-06-22",
    from: "employer",
    category: "salary",
  },

  {
    id: "789",
    item_name: "income",
    amount: 4220,
    date: "2020-06-22",
    from: "employer",
    category: "salary",
  },
  {
    id: "999",
    item_name: "tips",
    amount: 1420,
    date: "2023-04-20",
    from: "employer",
    category: "income",
  },
];

module.exports = transactionModel;
