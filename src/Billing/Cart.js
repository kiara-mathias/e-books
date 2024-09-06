import react from "react";
import Main from "../Components/Main";

import "./style.css";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <body className="cartB">
        <div className="cart-container">
          <header>
            <div className="navbar">
              <a href="/home"> Home </a>
              <a href="/"> SIGNIN</a>
              <p> SIGNOUT</p>
              <button className="cart">
                <i class="fa-solid fa-cart-shopping"></i>
              </button>
              <Link to="/cart">CART</Link>
            </div>
          </header>
        </div>
      </body>
    </>
  );
};
export default Cart;
