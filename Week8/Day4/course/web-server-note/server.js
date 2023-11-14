const express = require("express");
require("dotenv").config();
// const bp = require("body-parser");
const product_router = require("./routes/products.routes.js");
const users_router = require("./routes/users.routes.js");

const { products } = require("./config/db.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.listen(process.env.PORT || 3001, () => {
  console.log(`running on port ${process.env.PORT || 3001}`);
});

// const logger = (req, res, next) => {
//   console.log("url=>", req.url);
//   console.log("params=>", req.params);
//   console.log("method=>", req.method);
//   next();
// };

// app.use('/api/users', logger);

// const auth = (req, res, next) => {
//   const { admin } = req.query;
//   if (admin == "john") {
//     req.user = { name: "admin", id: 1 };
//     // console.log(req);
//     next();
//   } else {
//     res.send("not authorized");
//   }
// };

// app.get("/about", auth, (req, res) => {
//   console.log(req.user);
//   res.send("About Page");
// });

app.use("/api/products", product_router);
app.use("/api/users", users_router);

app.get("/shop", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

/*
server
  |_ config - connection to database
  |_ models * - queries to database
  |_ controllers - function implementation code
  |_ routes - route implementation codes.

  .env
  middleware - function => request -> midlleware -> response
*/
