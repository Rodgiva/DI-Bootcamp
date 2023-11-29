// import { register } from "../model/users.model.js";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
import { getAllProducts } from "../model/products.model.js";
// import dotenv from "dotenv";

export const _getAllProducts = async (req, res) => {
  try {
    const rows = await getAllProducts();
    res.json(rows);
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: error.msg });
  }
};

