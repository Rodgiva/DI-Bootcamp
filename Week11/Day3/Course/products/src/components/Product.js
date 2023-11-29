import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const param = useParams();

  useEffect(() => {
    getProductInfo();
  }, []);

  const getProductInfo = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/products/${param.id}`);
      const data = await res.json();
      setProduct(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1>Product... {param.id}</h1>
      <div>
        <form>
          Name: <input />
          Price: <input />
          <input type="submit" value="Update" />
        </form>
      </div>
      <div>
        <h2>Delete Product</h2>
        <button>Delete</button>
      </div>
      {product.map((item) => {
        return (
          <div key={item.id}>
            <h2>Product Name: {item.name}</h2>
            <h4>Product Price: {item.price}</h4>
          </div>
        );
      })}
      <Link to="/">Back to Shop</Link>
    </div>
  );
};
export default Product;
