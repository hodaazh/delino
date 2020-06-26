import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FAKE_CONST from "../../../constants/FAKE_CONST";
import { Cart } from "../../elements";

import "./Sliders.css";

function Sliders({ cartList, settings, title, keytitle }) {
  return (
    <section className="sliders-component">
      <header className="sliders__wrapper flex-row">
        <div className="sliders__title">
          <h1>{title}</h1>
        </div>
        <h3 className="resturant">
          <a href="#">رستوران&zwnj;های بیشتر</a>
        </h3>
      </header>
      <div className="sliders__holder">
        <Slider {...settings}>
          {cartList.map((item, index) => (
            <Cart
              mainImg={item.mainImg}
              logoImg={item.logoImg}
              discount={item.discount}
              titlerest={item.titlerest}
              addressParant={item.addressParant}
              address={item.address}
              people={item.people}
              time={item.time}
              key={`${keytitle}${index}`}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Sliders;
