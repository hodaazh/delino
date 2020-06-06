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
          {cartList.map((iteration, index) => (
            <Cart
              mainImg={cartList[index].mainImg}
              logoImg={cartList[index].logoImg}
              discount={cartList[index].discount}
              titlerest={cartList[index].titlerest}
              addressParant={cartList[index].addressParant}
              address={cartList[index].address}
              people={cartList[index].people}
              time={cartList[index].time}
              key={`${keytitle}${index}`}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default SameSliders;
