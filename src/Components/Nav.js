import React from "react";
import "./nav.style.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Nav = () => {
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <>
      <header>
        <div className="logo">
          <ul className="links">
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li className="cart-nav">
              <Link to="/cart" className="cart-link">
                <i className="fas fa-shopping-cart"></i>
                {cartCount > 0 && (
                  <span className="cart-badge">{cartCount}</span>
                )}
              </Link>
            </li>
            <li className="sign">
              <Link to="/signup">Sign-up</Link>
            </li>
            <li className="login">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Nav;
