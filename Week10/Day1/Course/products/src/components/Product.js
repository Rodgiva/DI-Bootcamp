import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const params = useParams();
const [name, setName] = useState("");
const [price, setPrice] = useState("");

const getProduct = async () => {
  try {
    const res = await fetch(`/api/products/${params.id}`);
    const data = await res.json();
    console.log(data);
    setName(data.name);
    setPrice(data.price);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  getProduct();
}, []);

const Product = (props) => {
  return (
    <>
      <h2>Product</h2>
      <h3>Name: {name}</h3>
      <h3>Price: {price}</h3>
      <Link to="/">Back to Shop</Link>
    </>
  );
};

export default Product;
