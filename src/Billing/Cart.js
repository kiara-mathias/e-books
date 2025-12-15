import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import { useCart } from "../context/CartContext";
import "./style.css";

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getCartTotal 
  } = useCart();

  const handleQuantityChange = (bookId, newQuantity) => {
    if (newQuantity >= 1) {
      updateQuantity(bookId, newQuantity);
    }
  };

  const total = getCartTotal();

  return (
    <>
      <Nav />
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="cart-title">Shopping Cart</h1>
          
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <i className="fas fa-shopping-cart empty-cart-icon"></i>
              <h2>Your cart is empty</h2>
              <p>Add some books to get started!</p>
              <Link to="/books" className="continue-shopping">
                Browse Books
              </Link>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="cart-item">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title} 
                      className="cart-item-image"
                    />
                    <div className="cart-item-details">
                      <h3 className="cart-item-title">{item.title}</h3>
                      <p className="cart-item-author">by {item.authors}</p>
                      <p className="cart-item-price">₹{item.price}</p>
                    </div>
                    <div className="cart-item-actions">
                      <div className="quantity-controls">
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity">{item.quantity}</span>
                        <button
                          className="quantity-btn"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <p className="item-subtotal">
                        Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <i className="fas fa-trash"></i> Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-summary">
                <div className="summary-content">
                  <h2>Order Summary</h2>
                  <div className="summary-row">
                    <span>Subtotal:</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total:</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <button className="checkout-btn">
                    Proceed to Checkout
                  </button>
                  <button className="clear-cart-btn" onClick={clearCart}>
                    Clear Cart
                  </button>
                  <Link to="/books" className="continue-shopping">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
