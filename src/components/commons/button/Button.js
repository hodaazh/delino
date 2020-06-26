import React from "react";
import classNames from "classnames";
import "./Button.css";

function Button({ text, type, discount }) {
  var button_component = classNames({
    login_btn: type === "login-main",
    signUp_btn: type === "signUp-main",
    cart_btn: type === "cart",
    search_btn: type === "searchBar",
    postCart_btn: type === "cartBig",
    link_btn: type === "link-main",
    back_btn: type === "back-rest",
    hoby_btn: type === "hoby-rest",
    discount_btn: type === "discount-rest",
    rate_btn: type === "rate-rest",
    comment_btn: type === "comment-rest",
    restPostCard_btn: type === "cartSmall",
    search_filter: type === "searchFilter",
  });
  return (
    <>
      {discount !== "null" ? (
        <button className={button_component}>
          {type === "cart" ? (
            <i className="icon-supermarket" />
          ) : +discount ? (
            <span>
              %<b>{discount}</b>
            </span>
          ) : type === "searchFilter" ? (
            <div className=" filter-button flex-row">
              <div className="FilterCircle flex-row">
                <i className="icon-equalizer" />
              </div>
              <span>فیلتر و مرتب&zwnj;سازی</span>
            </div>
          ) : (
            <span>{text}</span>
          )}
        </button>
      ) : null}
    </>
  );
}

export default Button;
