import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <div className="header">
      <div className="header-right">
        <button className="login">ورود</button>
        <button className="signUp">ثبت نام</button>
      </div>
      <div className="logo">
        <i className="icon-logo" />
      </div>
      <div className="header-left">
        <button className="header-left-btn">
          <i className="icon-supermarket" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
