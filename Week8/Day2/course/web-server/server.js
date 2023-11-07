const express = require("express");
// const bp = require("body-parser");
const { products } = require("./config/db.js");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", express.static(__dirname + "/public"));

app.listen(3001, () => {
  console.log(`running on port 3001`);
});

/*
app.get
app.post
*/

// app.get("/", (req, res) => {
//   console.log(req);
//   res.send("<h1>Hello</h1>");
// });

/*
CRUD- READ - GET - get all products
*/
app.get("/api/products", (req, res) => {
  //   const products = [
  //     { id: 1, name: "iPhone", price: 800 },
  //     { id: 2, name: "iPad", price: 700 },
  //     { id: 3, name: "iWatch", price: 500 },
  //   ];
  //   res.send(products);
  res.json(products);
});

/*
CRUD- READ - GET - get one product - id - req.params
*/
app.get("/api/products/:id", (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;
  const product = products.find((item) => item.id == id);
  if (!product) return res.status(404).json({ message: "Product Not Found" });
  res.json(product);
});

/*
CRUD- READ - GET - search for products - ?name=ip&price=300
*/
app.get("/api/search", (req, res) => {
  console.log("query=>", req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  console.log(filtered);
  if (filtered.length === 0)
    return res.status(404).json({ message: "Not Found" });
  res.json(filtered);
});

/*
CRUD- CREATE - POST - add a new product
*/
app.post("/api/products", (req, res) => {
  console.log("body=>", req.body);
  const new_product = { ...req.body, id: products.length + 1 };
  products.push(new_product);
  res.status(201).json(products);
});

/*
CRUD - DELETE - DELETE - delete one product - with id as params
*/
app.delete("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const indx = products.findIndex((item) => item.id == id);
  if (indx === -1) return res.sendStatus(404); //.send('deleted')//.json({ message: "not found" });
  const deleted = products.splice(indx, 1);
  //   res.json(deleted)
  // res.send('deleted')
  res.sendStatus(201);
});

/*
CRUD - UPDATE - PUT - update one product - 
with id as params, data {name,price} body
*/
