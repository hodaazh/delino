import React from "react";
import Cart from "../../components/Cart/Cart";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./sameSliders.css";

function SameSliders({ cartList, settings, title, keytitle }) {
  return (
    <section className="content-inner-discount-new-section">
      <div className="content-inner-discount-new-wrapper">
        <div className="discount-new-Wrapper-same">
          <h2>{title}</h2>
        </div>
        <h3 className="resturant">
          <a href="#">رستوران&zwnj;های بیشتر</a>
        </h3>
      </div>
      <div className="slider-discount-wrapper">
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

export default SameSliders;
