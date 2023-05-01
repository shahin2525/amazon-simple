import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  //   const { cart } = props;
  let totalPrice = 0;
  let totalShipping = 0;
  let quantity = 0;

  for (const product of cart) {
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }
    quantity = quantity + product.quantity;
    totalPrice = totalPrice + product.price * product.quantity;
    totalShipping = totalShipping + product.shipping;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShipping + tax;
  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <div className="cart-info">
        <p>Selected Items: {quantity}</p>
        <p>Total-Price: ${totalPrice}</p>
        <p>Total-Shipping-Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h6>Grand-Total: ${grandTotal.toFixed(2)}</h6>
      </div>
    </div>
  );
};

export default Cart;
