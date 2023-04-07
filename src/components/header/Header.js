import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="https://static.wikia.nocookie.net/logopedia/images/2/20/Annapurna.jpg" />
      </div>

      <div className="navbar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/instamart"}>Instamart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
