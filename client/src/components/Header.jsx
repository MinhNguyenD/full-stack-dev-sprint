import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">My Blog</Link>
      </div>
      <ul className="nav-links">
      <li>
          <Link to="/add-post">New Post</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;