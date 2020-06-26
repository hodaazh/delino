import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Button } from "../../commons";
import "./Cart.css";

function Cart({
  mainImg,
  logoImg,
  discount,
  titlerest,
  addressParant,
  address,
  people,
  time,
  type,
}) {
  const [rate, setRate] = useState(3.5);

  return (
    <div
      className={
        type === "search"
          ? "cart-component-search cart-component flex-row"
          : "cart-component flex-row"
      }
    >
      <div className="cart__img">
        <img src={mainImg} />
        <button className="like"></button>
        <Button discount={discount} type="cartBig" />
        <figure className="logo-holder">
          <img src={logoImg} />
        </figure>
      </div>
      <div className="cart__text">
        <div className="cart__title">
          <h3>{titlerest}</h3>
          <span className={addressParant === "null" ? "noaddressParant" : null}>
            {addressParant}
          </span>
        </div>
        <div className="cart__location flex-row">
          <div>
            <i className="icon-placeholder" />
            <span>{address}</span>
          </div>
          <div>
            <span>{people}</span>
          </div>
        </div>

        <div className="star">
          <StarRatingComponent
            name="rate1"
            starCount={5}
            emptyStarColor={"#c1c3d6"}
            className={"rating"}
            starColor={"orange"}
            value={rate}
          />
        </div>
        <div className="delivery-time flex-row">
          {time}
          <span>دقیقه</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
