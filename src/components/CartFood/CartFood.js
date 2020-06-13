import React from "react";
import "./cartFood.css";
import ButtonColorful from "../ButtonColorful/ButtonColorful";

function CartFood({ img, detail, title, price, discount }) {
  return (
    <div className="cartFood">
      <div className="carFood-right">
        <img src={img} />
      </div>
      <div className="carFood-middle">
        <h3> {title}</h3>
        <span>{detail}</span>
        <span> {price}</span>
      </div>
      <div className="carFood-left">
        <div className="cartFood-discount">
          <ButtonColorful type="small" discount={discount} />
        </div>
        <div className="cartFood-add">
          {/* <div className="cartFood-add-number">0</div> */}
          {/* <i className="food-copy"></i> */}
          <button className="cartFood-add-btn">
            <i className="icon-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartFood;
