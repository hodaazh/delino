import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  NavBar,
  Location,
  SearchBar,
  Sliders,
  Footer,
} from "../../components/elements";
import FAKE_CONST from "../../constants/FAKE_CONST";
import { Button } from "../../components/commons";
import "./Home.css";

function Home() {
  const [state, setState] = useState({
    tizerslide: 0,
    otherslide: 3,
    btnText: "",
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      const myWidth = window.innerWidth;

      myWidth <= 768
        ? setState({ ...state, btnText: "post" })
        : setState({ ...state, btnText: "pre" });
    });
  }, []);
  console.log(state.btnText);

  const tizer = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setState({ ...state, tizerslide: next });
    },
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: " -3em 0" }}> {dots} </ul>
      </div>
    ),
    customPaging: (index) => {
      const style = {
        width: "9px",
        height: "9px",
        display: "inline-block",
        borderRadius: "50%",
        backgroundColor: "#bbb",
      };

      const activeStyle = {
        width: "9px",
        height: "9px",
        display: "inline-block",
        borderRadius: "50%",
        backgroundColor: "#ef4123",
      };

      return (
        <div
          className="slick-dot"
          style={index === state.tizerslide ? activeStyle : style}
        />
      );
    },
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setState({ ...state, otherslide: next });
    },
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: " 1em 0 " }}> {dots} </ul>
      </div>
    ),
    customPaging: (index) => {
      const style = {
        width: "6px",
        height: "6px",
        display: "inline-block",
        borderRadius: "50%",
        backgroundColor: "#bbb",
      };

      const activeStyle = {
        width: "6px",
        height: "6px",
        display: "inline-block",
        borderRadius: "50%",
        backgroundColor: "#ef4123",
      };

      return (
        <div
          className="slick-dot"
          style={index === state.otherslide ? activeStyle : style}
        />
      );
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="home-page">
      <div className="forSticky">
        <NavBar />
        <Location />
      </div>

      <SearchBar title={state.btnText} type="searchBar" />
      <div className="home__slide">
        <Slider {...tizer}>
          {FAKE_CONST.tizerImg.map((item, index) => (
            <img
              key={`tizer${index}`}
              src={item.img}
              className="home__slide-img"
            />
          ))}
        </Slider>
      </div>
      <div className="home__other">
        <section className="home__info">
          <div className="home__info__wrapper">
            <div className="home__title">
              <h1>
                سفارش آنلاین غذا از بهترین رستوران&zwnj;&zwnj;ها و
                فست&zwnj;فود&zwnj;&zwnj;ها
              </h1>
            </div>
            <div className="home__text">
              <p>
                با استفاده از وبسایت و اپلیکیشن سفارش آنلاین غذای دلینو شما
                میتونید به راحتی و در سریع ترین زمان ممکن غذای مورد علاقه&zwnj;ی
                خودتون رو از بهترین رستوران&zwnj;ها و فست فود&zwnj;های تهران،
                قم، کرج، گرگان، یزد، ارومیه و سایر شهرهای ایران سفارش بدین.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="home__food__wrapper">
            <header>
              <h1>دسته های محبوب</h1>
            </header>
            <div className="home__food">
              <ul>
                {FAKE_CONST.poplularFood.map((item, index) => (
                  <li key={`food-${index}`}>
                    <a href="#">
                      <img src={item.image} />
                      <span>{item.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <Sliders
          cartList={FAKE_CONST.cartList}
          settings={settings}
          title="تخفیف دارها"
          keytitle={`discount`}
        />
        <Sliders
          cartList={FAKE_CONST.cartList}
          settings={settings}
          title="پرفروشترین&zwnj;ها"
          keytitle={`bestsell`}
        />
        <Sliders
          cartList={FAKE_CONST.cartListNewest}
          settings={settings}
          title="جدیدترین&zwnj;ها"
          keytitle={`newer`}
        />
        <section className="home__promotion">
          <div className="home__promotion-wrapper">
            <div className="home__promotion-right">
              <header>
                <h1>اپلیکیشن موبایل دلینو</h1>
                <p>
                  برای دریافت لینک دانلود اپلیکیشن دلینو، شماره موبایلت رو وارد
                  کن
                </p>
              </header>
              <form className="home__promotion-form">
                <input type="text" placeholder="مثال: 0912xxxxxxx"></input>
                <Button text="دریافت لینک دانلود" type="link-main" />
              </form>
              <ul className="home__app-links flex-row">
                {FAKE_CONST.appLinks.map((item, index) => (
                  <li key={`-${index}`}>
                    <a href="#">
                      <img src={item.img} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="home__promotion-left">
              <img src={require("../../assets/media/Main-screen/img17.png")} />
            </div>
          </div>
        </section>
        <section className="home__famous-rest">
          <div className="home__famous-rest__wrapper">
            <header>
              <h1>رستوران&zwnj;های پر طرفدار</h1>
              <h3>
                گزیده&zwnj;ای از بهترین و پرطرفدارترین رستوران&zwnj;ها در دلینو
              </h3>
            </header>
            <ul>
              {FAKE_CONST.logo.map((item, index) => (
                <li key={index}>
                  <a href="#">
                    <img src={item.logo} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="home__namad">
          <div className="home__namad-wrapper">
            <div>
              <div>
                <img
                  src={require("../../assets/media/logo/logo-kasbokar.png")}
                />
              </div>
              <div>
                <img src={require("../../assets/media/logo/etemad.jpg")} />
              </div>
            </div>
            <div className="home__namad-text">
              <p>
                تمامی کالاها و خدمات این سایت، دارای مجوزهای لازم از مراجع
                مربوطه می&zwnj;باشند و فعالیت&zwnj;های این سایت تابع قوانین و
                مقررات جمهوری اسلامی ایران است.
              </p>
            </div>
          </div>
        </section>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
