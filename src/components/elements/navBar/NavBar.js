import React, { useState, useEffect } from "react";
import { Button } from "../../commons";
import "./NavBar.css";
let myWidth = 0;

function NavBar({ type }) {
  const [logo, setLogo] = useState("pre");

  useEffect(() => {
    window.addEventListener("resize", () => {
      myWidth = window.innerWidth;
      myWidth <= 768 ? setLogo("post") : setLogo("pre");
      console.log("my width :::", typeof myWidth);
    });
  }, [window]);
  return (
    <div
      className={
        type === "search"
          ? "navBar-component-search navBar-component flex-row"
          : "navBar-component flex-row"
      }
    >
      <div className="navBar__right flex-row">
        <Button type="login-main" text="ورود" />
        <Button type="signUp-main" text="ثبت نام" />
      </div>
      <div className="navBar__logo">
        {logo === "pre" ? (
          <i className="icon-logo logoSize" />
        ) : (
          <i className="icon-logo-delino-sign logoSize" />
        )}
      </div>
      <div className="navBar__left flex-row">
        <Button type="cart" />
      </div>
    </div>
  );
}

export default NavBar;
