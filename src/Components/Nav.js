import react from "react";
import "./nav.style.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header>
        <div className="logo">
          <ul className="links">
            <li>
              <Link to="/" class="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
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
