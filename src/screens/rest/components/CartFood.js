import React from "react";
import { Button } from "../../../components/commons";
import "../Rest.css";
function CartFood({ img, detail, title, price, discount }) {
  return (
    <div className="cartFood-component">
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
          <Button type="cartSmall" discount={discount} />
        </div>
        <div className="cartFood-add">
          {/* <div className="cartFood-add-number">0</div> */}
          {/* <i className="food-copy"></i> */}
          <button className="cartFood-add-btn flex-row">
            <i className="icon-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartFood;
