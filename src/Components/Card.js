import React, { useState } from "react";
import Modal from "./Modal";
import { useCart } from "../context/CartContext";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState({});

  const handleAddToCart = (e, item) => {
    e.stopPropagation(); // Prevent modal from opening
    
    const thumbnail =
      item.volumeInfo.imageLinks &&
      item.volumeInfo.imageLinks.smallThumbnail;
    const amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
    
    const cartItem = {
      id: item.id,
      title: item.volumeInfo.title,
      thumbnail: thumbnail,
      price: amount,
      authors: item.volumeInfo.authors?.join(", ") || "Unknown",
    };
    
    addToCart(cartItem);
    
    // Show feedback
    setAddedToCart({ ...addedToCart, [item.id]: true });
    setTimeout(() => {
      setAddedToCart({ ...addedToCart, [item.id]: false });
    }, 2000);
  };

  return (
    <>
      {book.map((item) => {
        let thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        if (thumbnail != undefined && amount != undefined) {
          return (
            <React.Fragment key={item.id}>
              <div
                className="card"
                onClick={() => {
                  setShow(true);
                  setItem(item);
                }}
              >
                <img src={thumbnail} alt={item.volumeInfo.title} />
                <div className="bottom">
                  <h3 className="title">{item.volumeInfo.title}</h3>
                  <p className="amount"> ₹{amount}</p>
                  <button 
                    className={`cart-btn ${addedToCart[item.id] ? 'added' : ''}`}
                    onClick={(e) => handleAddToCart(e, item)}
                  >
                    {addedToCart[item.id] ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>

              <Modal
                show={show}
                item={bookItem}
                onClose={() => setShow(false)}
              />
            </React.Fragment>
          );
        }
        return null;
      })}
    </>
  );
};
export default Card;
