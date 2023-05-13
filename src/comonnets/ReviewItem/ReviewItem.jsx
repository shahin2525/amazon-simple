import React from "react";
import "./ReviewItem.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faTrash } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product, cartHandler }) => {
  return (
    <div className="review-item">
      <div className="image">
        <img src={product.img} alt="" />
      </div>
      <div className="trash-name">
        <div className="name">
          <h6>{product.name}</h6>
          <p>
            Price: <span className="review-pd-price">{product.price}</span>
          </p>
          <p>
            Shippin-Charg:{" "}
            <span className="review-sp-charge">{product.shipping}</span>
          </p>
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
