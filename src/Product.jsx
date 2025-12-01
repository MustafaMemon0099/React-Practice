import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, clear } from "./Redux/slice";

function Product() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.Cart.count);

  // Fetch API data
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products); // store array in state
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Products</h1>
     
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-img"
          />
          <div className="product-info">
            <h2>{product.title}</h2>
            <h3 className="price">${product.price}</h3>
            <p>{product.description}</p>
            <div className="btn-box">
              <button
                className="add-btn"
                onClick={() => dispatch(increment())}
              >
                Add to Cart
              </button>
              <button
                className="remove-btn"
                onClick={() => dispatch(decrement())}
              >
                Remove From Cart
              </button>
              <button
                className="remove-btn"
                onClick={() => dispatch(clear())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
