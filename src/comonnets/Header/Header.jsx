import React from "react";

import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav className="Header">
      <img src={logo} alt="" />
      <div>
        <a href="order">order</a>
        <a href="order">order review</a>
        <a href="order">order inventory</a>
        <a href="order">Login</a>
      </div>
    </nav>
  );
};

export default Header;
