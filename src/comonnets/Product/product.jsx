import React from "react";
import "./product.css";
import Footer from "../Footer/footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { id, price, img, name, ratings, seller } = props.product;
  const addToCart = props.addToCart;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6>{name}</h6>
        <p>Price: ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings} star</p>
      </div>

      <button onClick={() => addToCart(props.product)} className="btn-cart">
        Add to cart
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
