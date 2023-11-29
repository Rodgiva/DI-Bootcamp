import { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = async () => {
    try {
      const res = await axios.get("/products/all");
      // if (res.status(200))
      // .......
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <h2>Homepage</h2>
        {products.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
    </>
  );
};

export default Home;
