import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const LoginPage = () => {
  return (
    <div className="login-container">
      <h2>Welcome to Dish Dash</h2>
      <form className="login-form">
        <Link to="/home">
          <button type="submit">Login</button>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
