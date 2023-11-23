const knex = require("knex");
require("dotenv").config();

const db = knex({
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const products = [
  { id: 1, name: "iPhone", price: 800 },
  { id: 2, name: "iPad", price: 700 },
  { id: 3, name: "iWatch", price: 500 },
];

const users = [
  { id: 1, username: "dandan", password: "abcdef" },
  { id: 2, username: "johnjohn", password: "123456" },
  { id: 3, username: "marymary", password: "1q2w3e" },
];

module.exports = { db, products, users };

//   module.exports = {
//     products,
//     users
//   }
