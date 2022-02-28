import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import "./Header.css";

const Header = () => {
  return (
    <div className="header__container">
      <h2 className="header__logo">TWITCH</h2>
      <div className="header__options">
        <Link className="header__link" to="/">
          Streams
        </Link>
        <Link className="header__link" to="/create">
          Create
        </Link>
        <GoogleAuth></GoogleAuth>
      </div>
    </div>
  );
};

export default Header;
