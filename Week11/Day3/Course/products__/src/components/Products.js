import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BASE_URL = process.env.REACT_APP_BASE_URL;

console.log("BASE_URL=>", BASE_URL);

const Products = (props) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // const [clicked, setClicked] = useState(false);

  // useEffect(() => {
  //   console.log('clicked=>',clicked, 'props.refresh=>',props.refresh);
  //   if (clicked || props.refresh) all();
  // }, [clicked,props.refresh]);

  useEffect(() => {
    all();
  }, []);

  const all = async () => {
    try {
      const res = await fetch(`/api/products`);
      const data = await res.json();
      //   console.log(data);
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/products/search?name=${search}`);
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  const add = async (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price }),
    };

    try {
      const res = await fetch(`${BASE_URL}/api/products`, options);
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
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
          <div
            key={item.id}
            style={{
              display: "inline-block",
              padding: "20px",
              margin: "20px",
              border: "1px solid #000",
            }}>
            <h4>{item.name}</h4>
            <h5>{item.price}$</h5>
            <Link to={`/${item.id}`}>Buy Now</Link>
          </div>
        );
      })}
      {/* <button onClick={()=>setClicked(true)}>Reset clicked to true</button> */}
    </>
  );
};
export default Products;
