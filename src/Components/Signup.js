import React from "react";
import Nav from "./Nav";
import "./style.css";

const Signup = () => {
  return (
    <>
      <Nav />
      <div className="auth-container">
        <h1>Sign Up</h1>
        <form>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <button type="button">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
