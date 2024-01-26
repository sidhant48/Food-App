import { useContext, useState } from "react";
import Logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/home">
    <img className="h-28 p-2" alt="logo" src={Logo} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  return (
    <div className="flex justify-between bg-yellow-200 shadow-lg sm:bg-lime-300 md:bg-pink-50">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">Online Status:{isOnline ? "✔️" : "🔴"}</li>
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

          <li className="px-2">
            {isLoggedIn ? (
              <span onClick={() => setIsLoggedIn(false)}>Logout</span>
            ) : (
              <span onClick={() => setIsLoggedIn(true)}>Login</span>
            )}
          </li>
          <li className="px-2 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
