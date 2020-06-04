import React, { useState, useEffect } from "react";
import "./navbar.css";
let myWidth = 0;
function Navbar() {
  const [logo, setLogo] = useState("pre");

  useEffect(() => {
    window.addEventListener("resize", () => {
      myWidth = window.innerWidth;
      myWidth <= 768 ? setLogo("post") : setLogo("pre");
      console.log("my width :::", typeof myWidth);
    });
  }, [window]);

  return (
    <div className="header">
      <div className="header-right">
        <button className="login">ورود</button>
        <button className="signUp">ثبت نام</button>
      </div>
      <div className="logo">
        {logo === "pre" ? (
          <i className="icon-logo logoSize" />
        ) : (
          <i className="icon-logo-delino-sign logoSize" />
        )}
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
