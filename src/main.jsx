import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./comonnets/Layout/Home.jsx";
import Shop from "./comonnets/Shop/Shop.jsx";
import Order from "./comonnets/Order/Order.jsx";
import Inventory from "./comonnets/Inventory/Inventory.jsx";
import Login from "./comonnets/Login/Login.jsx";
import cartProductsLoader from "./Loaders/Loaders.js";
import Checkout from "./comonnets/Checkout/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: <Inventory></Inventory>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
