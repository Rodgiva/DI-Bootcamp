const { products } = require("../config/db.js");
const {
  _getAllProducts,
  _getOneProduct,
  _addProduct,
  _updateProduct,
} = require("../models/products.models.js");

const getAllProducts = async (req, res) => {
  try {
    const data = await _getAllProducts();
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No product" });
  }
};

const getOneProduct = async (req, res) => {
  console.log("params=>", req.params);
  const { id } = req.params;

  try {
    const data = await _getOneProduct(id);
    if (data.length === 0) {
      return res.status(404).json({ msg: "No product" });
    }
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No product" });
  }
};

const search4Product = (req, res) => {
  console.log("query=>", req.query);
  const { name } = req.query;
  const filtered = products.filter((item) => {
    return item.name.toLowerCase().includes(name.toLowerCase());
  });
  console.log(filtered);
  if (filtered.length === 0)
    return res.status(404).json({ message: "Not Found" });
  res.json(filtered);
};

const addProduct = async (req, res) => {
  const {name, price} = req.body;
  try {
    const data = await _addProduct(name, price);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No product" });
  }
  // console.log("body=>", req.body);
  // const new_product = { ...req.body, id: products.length + 1 };
  // products.push(new_product);
  // res.status(201).json(products);
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const indx = products.findIndex((item) => item.id == id);
  if (indx === -1) return res.sendStatus(404); //.send('deleted')//.json({ message: "not found" });
  const deleted = products.splice(indx, 1);
  //   res.json(deleted)
  // res.send('deleted')
  res.sendStatus(201);
};

/*
id - params
data {name, price} - body
*/
const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;

  try {
    const data = await _updateProduct(id, name, price);
    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(404).json({ msg: "No product" });
  }

  // const indx = products.findIndex((item) => item.id == id);
  // if (indx === -1) return res.sendStatus(404);
  // products[indx] = { ...products[indx], name: name, price: price };
  // res.json(products);
};

module.exports = {
  getAllProducts,
  getOneProduct,
  search4Product,
  addProduct,
  deleteProduct,
  updateProduct,
};
