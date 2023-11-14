const express = require("express");
const { products } = require("../config/db.js");
const {
  getAllProducts,
  getOneProduct,
  search4Product,
  addProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/products.controller.js");

const router = express.Router();

router.get("/", getAllProducts);

router.get("/search", search4Product);

router.get("/:id", getOneProduct);

/*
CRUD- CREATE - POST - add a new product
*/
router.post("/", addProduct);

/*
CRUD - DELETE - DELETE - delete one product - with id as params
*/
router.delete("/:id", deleteProduct);

router.put("/:id", updateProduct);

module.exports = router;
