import React from "react";
import { ReactComponent as Logo } from "assets/image/logo.svg";
import "assets/css/LogoTitle.css";

const LogoTitle = () => {
  return (
    <div className="logo-title__wrapper">
      <Logo />
      <h1>TO-DO</h1>
    </div>
  );
};

export default LogoTitle;
