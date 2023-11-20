import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log(BASE_URL);

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    all();
  }, []);

  const all = async () => {
    try {
      // const res = await fetch(`${BASE_URL}/api/products`);
      const res = await fetch(`/api/products`);
      const data = await res.json();
      console.log(data);
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await fetch(`/api/products/search?name=${search}`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  const add = async (e) => {
    e.preventdefault();

    const objBody = {
      method: "post",
      mode: "cors",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ name, price }),
    };

    try {
      const res = await fetch(`/api/products`, objBody);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Shop</h1>
      <div>
        <input onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <form onSubmit={add}>
          Name: <input onChange={(e) => setName(e.target.value)} />
          Price: <input onChange={(e) => setPrice(e.target.value)} />
          <input type="submit" value="Add" />
        </form>
      </div>
      {products.map((item) => {
        return (
          <div>
            <h4>{item.name}</h4>
            <Link to={`/${item.id}`}>Buy Now!</Link>
          </div>
        );
      })}
    </>
  );
};

export default Products;
