import React from "react";
import Logo from "../src/assets/logo.svg";
import Profile from "../src/assets/avatar.jpg"
const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="left-side display: flex;">
          <button></button>
          <img srs={Profile} alt="profile" />
          <button></button>
        </div>
        <div className="right-side">
          <input type="text" />
          <div className="icons"></div>
          <button></button>
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Header;
