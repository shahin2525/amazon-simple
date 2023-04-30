import React from "react";
import "./product.css";
import Footer from "../Footer/footer";

const Product = (props) => {
  const { id, price, img, name, ratings, seller } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings} star</p>
      </div>

      <button className="btn-cart">Add to cart</button>
    </div>
  );
};

export default Product;
