import React from "react";
import "./buttonColorful.css";
var classNames = require("classnames");

function ButtonColorful({ discount, type }) {
  var btnClass = classNames({
    btn__big: type === "big",
    btn__small: type === "small",
  });
  return (
    <div className={discount === "null" ? "nodiscount" : null}>
      <button className={btnClass}>
        %<b>{discount}</b>
      </button>
    </div>
  );
}

export default ButtonColorful;
