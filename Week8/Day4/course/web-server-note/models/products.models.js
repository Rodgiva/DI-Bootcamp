const { db } = require("../config/db.js");

const _getAllProducts = () => {
  return db("product").select("id", "name", "price").orderby("name");
};

const _getOneProduct = (id) => {
  return db("product")
    .select("id", "name", "price")
    .orderby("name")
    .where({ id });
};

const _addProduct = (name, price) => {
  return db("product").insert({
    name,
    price,
  });
};

const _updateProduct = (id, name, price) => {
  return db("products")
    .update(
      {
        name,
        price
      },
      ["id", "name", "price"]
    )
    .where({ id })
};

module.exports = {
  _getAllProducts,
  _getOneProduct,
  _addProduct,
  _updateProduct
};
