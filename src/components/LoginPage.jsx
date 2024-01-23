import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";

const LoginPage = () => {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-100 w-8/12  flex justify-center items-center flex-col">
        <div className="text-4xl font-bold">Welcome to Dish-Dash!</div>
        <div className="text-2xl"> Food Delivery app!</div>
        <Link to="/home">
          <button className="bg-red-500 text-white text-lg flex justify-between px-5 py-2 m-3 rounded-lg hover:bg-red-600">
            Lets Explorer
          </button>
        </Link>
      </div>
      <div className="bg-red-500 w-4/12 flex justify-center items-center">
        <img src={Logo} className="absolute" />
      </div>
    </div>
  );
};

export default LoginPage;
