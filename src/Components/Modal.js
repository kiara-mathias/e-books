import React, { useState } from "react";
import "./style.css";
import { useCart } from "../context/CartContext";

const Modal = ({ show, item, onClose }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!show || !item) {
    return null;
  }

  let thumbnail =
    item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
  let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

  const handleAddToCart = () => {
    const cartItem = {
      id: item.id,
      title: item.volumeInfo.title,
      thumbnail: thumbnail,
      price: amount,
      authors: item.volumeInfo.authors?.join(", ") || "Unknown",
    };
    
    addToCart(cartItem);
    setAdded(true);
    
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close" onClick={onClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="inner-box">
            <img src={thumbnail} alt={item.volumeInfo.title} />
            <div className="info">
              <h1>{item.volumeInfo.title}</h1>
              <h3>{item.volumeInfo.authors?.join(", ")}</h3>
              <h4>{item.volumeInfo.pageCount} pages</h4>
              <h4>
                {item.volumeInfo.publisher}
                <span> ({item.volumeInfo.publishedDate})</span>
              </h4>
              <h3> ₹{amount}</h3>
              <br />
              <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                <button>More Info</button>
              </a>
            </div>
          </div>
          <h4 className="description">{item.volumeInfo.description}</h4>
          <button 
            className={`cart-btn ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
          >
            {added ? '✓ Added to Cart' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </>
  );
};
export default Modal;
