import { useState } from "react";
import Logo from "../assetss/img/logo.jpg";
import {Link} from "react-router-dom";

const Title = () => (
  <a href="">
    <img
      className="logo-img"
      src={Logo}
      // src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
      alt="Logo"
    />
  </a>
);
const  isLoggedInUserr = () => {
  // API call to check authentication
  return true;
}

const HeaderComponent = () => {
  const [isLoggedInUser, setIsLoggedInUser] = useState(true);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
        <li>
          <Link to="/">
          Home
          </Link>
          </li>
          <li>
          <Link to="/about">
          About
          </Link>
          </li>
          <li>
          <Link to="/contact">
          Contact
          </Link>
          </li>
          <li>
          <Link to="/cart">
          Cart
          </Link>
          </li>
        </ul>
      </div>
      { isLoggedInUser ? (<button onClick={() => setIsLoggedInUser(true)}>Login</button>) 
      : (<button onClick={() => setIsLoggedInUser(false)}>Logout</button>) }
    </div>
  );
};
export default HeaderComponent;
