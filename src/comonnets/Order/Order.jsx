import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { Link, useLoaderData } from "react-router-dom";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Order.css";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const savedCart = useLoaderData();
  const [cart, setCart] = useState(savedCart);

  const cartHandler = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const clearCartBtn = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            cartHandler={cartHandler}
          ></ReviewItem>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} clearCartBtn={clearCartBtn}>
          <Link to="/checkout">
            <button className="checkout-btn">
              Checkout
              <span>
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
