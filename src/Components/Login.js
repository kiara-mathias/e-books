import React from "react";
import Nav from "./Nav";
import "./style.css";

const Login = () => {
  return (
    <>
      <Nav />
      <div className="auth-container">
        <h1>Login</h1>
        <form>
          <div>
            <input type="text" placeholder="Username" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <button type="button">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
