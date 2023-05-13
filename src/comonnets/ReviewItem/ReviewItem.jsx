import React from "react";
import "./ReviewItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, cartHandler }) => {
  console.log(product);
  return (
    <div className="review-item">
      <div className="image">
        <img src={product.img} alt="" />
      </div>
      <div className="trash-name">
        <div className="name">
          <h6>{product.name}</h6>
          <p>Price: {product.price}</p>
          <p>Shippin-Charg: {product.shipping}</p>
        </div>
        <button onClick={() => cartHandler(product.id)} className="delete-btn">
          <FontAwesomeIcon icon={faTrash} className="delete-icon" />
        </button>
      </div>
    </div>
    //  <div className="item"></div>
  );
};

export default ReviewItem;
