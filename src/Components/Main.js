import react, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import "./style.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";
// import Login from "./Login";
const Main = () => {
  const [search, setSearch] = useState(" ");
  const [bookData, setData] = useState([]);
  const searchBooks = (evt) => {
    if (evt.key == "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyC4CQCezOyWR0_J9rYHqFLKLVAkGH3lyeQ" +
            "&maxResults=40"
        )
        .then((res) => setData(res.data.items))
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Nav />

      <div className="show-case-container">
        <div className="showcase-content">
          <div className="row1">
            <h4>Best Books Available</h4>
            <p>Buy books you like</p>
          </div>

          <div className="row2">
            <div className="search">
              <input
                type="text"
                placeholder="Enter Your Book Name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyPress={searchBooks}
              />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="nav-bar">
        <div className="links">
          <a href="/home"> Home </a>
          <a href="/"> SIGNIN</a>
          <p> SIGNOUT</p>
          <button className="cart">
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <a href="/cart">CART</a>
        </div>
      </div> */}
      <div className="container">
        <Card book={bookData} />
      </div>
    </>
  );
};
export default Main;
