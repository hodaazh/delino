import React, { useState } from "react";
import StarRatingComponent from "react-star-rating-component";
import "./cart.css";
import ButtonColorful from "../ButtonColorful/ButtonColorful";

function Cart({
  mainImg,
  logoImg,
  discount,
  titlerest,
  addressParant,
  address,
  people,
  time,
}) {
  const [rate, setRate] = useState(3.5);
  return (
    // className={type === "newest" ? "cartNew" : "cart"}
    <div className="cart">
      <div className="cart-img">
        <img src={mainImg} />
        <button className="like"></button>
        <ButtonColorful discount={discount} type="big" />
        <figure className="logo-holder">
          <img src={logoImg} />
        </figure>
      </div>
      <div className="cart-text">
        <div className="cart-text-title">
          <h3>{titlerest}</h3>
          <span className={addressParant === "null" ? "noaddressParant" : null}>
            {addressParant}
          </span>
        </div>
        <div className="cart-text-location">
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
        <div className="delivery-time">
          {time}
          <span>دقیقه</span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
