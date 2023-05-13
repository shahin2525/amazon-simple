import React from "react";

import logo from "../../images/Logo.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="Header">
      <img src={logo} alt="" />
      <div>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "bg-amber-300" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/order"
          className={({ isActive }) => (isActive ? "text-blue-400" : "")}
        >
          Order
        </NavLink>
        <NavLink to="/inventory">Inventory</NavLink>

        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
};

export default Header;
