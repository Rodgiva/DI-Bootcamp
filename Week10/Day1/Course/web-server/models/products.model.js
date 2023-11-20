const { db } = require("../config/db.js");

const _getAllProducts = () => {
  return db("products").select("id", "name", "price").orderBy("name");
};

const _getOneProduct = (id) => {
  return db("products").select("id", "name", "price").where({ id });
};

const _addProduct = (name, price) => {
  return db("products").insert({ name, price }, ["id", "name", "price"]);
};

const _searchProduct = (name) => {
  return db("products")
    .select("id", "name", "price")
    .orderBy("name")
    .whereILike("name", `${name}%`)
};

module.exports = {
  _getAllProducts,
  _getOneProduct,
  _addProduct,
  _searchProduct,
};
