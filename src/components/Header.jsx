import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/home">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <div className="flex justify-between bg-yellow-200 shadow-lg sm:bg-lime-300 md:bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/home">Home</Link>
          </li>

          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">Cart</li>
          <li>
            <Link to="/InstaMart">InstaMart</Link>
          </li>
          <li className="px-2">{isOnline ? "✅" : "🔴"}</li>
        </ul>
      </div>

      {isLoggedIn ? (
        <button
          className="bg-red-500 text-white text-base md:text-lg flex px-2 md:px-3 py-1 md:py-9 rounded hover:bg-red-600 justify-center flex-shrink-0"
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </button>
      ) : (
        <button
          className="bg-green-400 text-white text-base md:text-lg flex px-2 md:px-3 py-1 md:py-9 rounded hover:bg-green-600 justify-center flex-shrink-0"
          onClick={() => setIsLoggedIn(true)}
        >
          Login
        </button>
      )}
    </div>
  );
};
export default Header;
