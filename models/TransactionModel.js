const { v4: uuidv4 } = require("uuid");

const transactionModel = [
  {
    id: "123",
    item_name: "Income",
    amount: 3420,
    date: "2023-10-02",
    from: "Employer",
    category: "Salary",
  },
  {
    id: "456",
    item_name: "Salary",
    amount: 2420,
    date: "2019-06-22",
    from: "Employer",
    category: "Salary",
  },
  {
    id: "789",
    item_name: "Income",
    amount: 4220,
    date: "2020-06-22",
    from: "Employer",
    category: "Salary",
  },
  {
    id: "999",
    item_name: "Tips",
    amount: 1420,
    date: "2023-04-20",
    from: "Employer",
    category: "Income",
  },
  {
    id: "558",
    item_name: "Groceries",
    amount: 1203,
    date: "2023-07-01",
    from: "Supermarket",
    category: "Expenses",
  },
  {
    id: "777",
    item_name: "Rent",
    amount: 2000,
    date: "2023-07-05",
    from: "Landlord",
    category: "Expenses",
  },
  {
    id: "888",
    item_name: "Gift",
    amount: 1060,
    date: "2023-07-06",
    from: "Friend",
    category: "Taxes",
  },
  {
    id: "555",
    item_name: "Rent",
    amount: 2500,
    date: "2023-07-05",
    from: "Landlord",
    category: "Savings",
  },
  {
    id: "222",
    item_name: "Gift",
    amount: 5000,
    date: "2023-07-06",
    from: "Friend",
    category: "Retirement",
  },
];

module.exports = transactionModel;

/**
 * const { v4: uuidv4 } = require("uuid");

const transactionModel = [
  {
    id: uuidv4(),
    item_name: "Income",
    amount: 3420,
    date: "2023-10-02",
    from: "Employer",
    category: "Salary",
  },
  {
    id: uuidv4(),
    item_name: "Salary",
    amount: 2420,
    date: "2019-06-22",
    from: "Employer",
    category: "Salary",
  },
  {
    id: uuidv4(),
    item_name: "Income",
    amount: 4220,
    date: "2020-06-22",
    from: "Employer",
    category: "Salary",
  },
  {
    id: uuidv4(),
    item_name: "Tips",
    amount: 1420,
    date: "2023-04-20",
    from: "Employer",
    category: "Income",
  },
  {
    id: uuidv4(),
    item_name: "Groceries",
    amount: 1203,
    date: "2023-07-01",
    from: "Supermarket",
    category: "Expenses",
  },
  {
    id: uuidv4(),
    item_name: "Rent",
    amount: 2000,
    date: "2023-07-05",
    from: "Landlord",
    category: "Expenses",
  },
  {
    id: uuidv4(),
    item_name: "Gift",
    amount: 1060,
    date: "2023-07-06",
    from: "Friend",
    category: "Taxes",
  },
  {
    id: uuidv4(),
    item_name: "Rent",
    amount: 2500,
    date: "2023-07-05",
    from: "Landlord",
    category: "Savings",
  },
  {
    id: uuidv4(),
    item_name: "Gift",
    amount: 5000,
    date: "2023-07-06",
    from: "Friend",
    category: "Retirement",
  },
];

module.exports = transactionModel;

 */
