import React, { useContext, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { ShopupContext } from "../../context/ShopupContext";

import "./index.css";

const Products = () => {
  const { setProducts, products } = useContext(ShopupContext);

  const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-container">
      <ul className="products">
        {products.map((product) => {
          return (
            <li key={product.title + product.id} className="product-item">
              <div className="fav-container">
                <CiHeart className="fav-icon" />
              </div>
              <div className="product-image">
                <img
                  src={product.image}
                  alt="product"
                  className="product-pic"
                />
              </div>
              <div>
                <p className="title">{product.title}</p>
                <div className="price-discount">
                  <span className="price">Rs: {product.price}</span>
                  <span className="discount">60% off</span>
                </div>
                <button className="buy-btn">Buy Now</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
