import db from "../config/db.js";

export const getAllProducts = () => {
  return db("products").select("id", "name", "price");
};
