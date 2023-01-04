import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { ReactComponent as LogoIcon } from "../assets/image/logo.svg";
import "../assets/css/Header.css";

const Header = () => {
  return (
    <header className="header__wrapper">
      <Link to="/" className="header__logo">
        <LogoIcon />
      </Link>
      <LoginButton />
    </header>
  );
};

export default Header;
