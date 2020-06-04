import React, { useState, useEffect } from "react";
import "./mainscreen.css";
import Slider from "react-slick";
import Navbar from "../../components/Navbar/Navbar";
import SlideShow from "../../components/SlideShow/SlideShow";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
let myWidth = 0;

const poplularFood = [
  { image: require("../../assets/media/popular/pop1.jpg"), title: "پیتزا" },
  { image: require("../../assets/media/popular/pop2.jpg"), title: "کباب" },
  { image: require("../../assets/media/popular/pop3.jpg"), title: "سوپ" },
  { image: require("../../assets/media/popular/pop4.jpg"), title: "ساندویچ" },
  {
    image: require("../../assets/media/img5.jpg"),
    title: "غذای ایرانی",
  },
  { image: require("../../assets/media/popular/pop6.jpg"), title: "سوخاری" },
  { image: require("../../assets/media/popular/pop7.jpg"), title: "پاستا" },
  { image: require("../../assets/media/popular/pop8.jpg"), title: "سالاد" },
  { image: require("../../assets/media/popular/pop9.jpg"), title: "صبحانه" },
  { image: require("../../assets/media/popular/pop10.jpg"), title: "استیک" },
];
const appLinks = [
  { img: require("../../assets/media/img19.png") },
  { img: require("../../assets/media/img18.png") },
  { img: require("../../assets/media/img21.png") },
  { img: require("../../assets/media/img20.png") },
];
const tizerImg = [
  { img: require("../../assets/media/img1.jpg") },
  { img: require("../../assets/media/img2.jpg") },
  { img: require("../../assets/media/img3.jpg") },
];
const cartList = [
  {
    mainImg: require("../../assets/media/img15.jpg"),
    logoImg: require("../../assets/media/logo/img16.png"),
    discount: "null",
    titlerest: "رستوران بوکا",
    addressParant: "(دروس)",
    address: "دروس",
    people: "(24نفر)",
    time: "24 - 45",
  },
  {
    mainImg: require("../../assets/media/img26.jpg"),
    logoImg: require("../../assets/media/logo/img22.jpg"),
    discount: "10",
    titlerest: "رستوران بین المللی تاویت",
    addressParant: "null",
    address: "ونک",
    people: "(24نفر)",
    time: "24 - 45",
  },
  {
    mainImg: require("../../assets/media/img27.jpg"),
    logoImg: require("../../assets/media/logo/img23.png"),
    discount: "20",
    titlerest: "رستوران ژاپنی کاتسو",
    addressParant: "null",
    address: "زعفرانیه",
    people: "(124نفر)",
    time: "24 - 45",
  },
  {
    mainImg: require("../../assets/media/img29.jpg"),
    logoImg: require("../../assets/media/logo/img24.png"),
    discount: "20",
    titlerest: " پیتزا آهو",
    addressParant: "null",
    address: "یوسف آباد",
    people: "(4نفر)",
    time: "24 - 45",
  },
  {
    mainImg: require("../../assets/media/img15.jpg"),
    logoImg: require("../../assets/media/logo/img16.png"),
    discount: "10",
    titlerest: "رستوران بوکا",
    addressParant: "(دروس)",
    address: "دروس",
    people: "(24نفر)",
    time: "24 - 45",
  },
];
const cartListNewest = [
  {
    mainImg: require("../../assets/media/img15.jpg"),
    logoImg: require("../../assets/media/logo/img16.png"),
    discount: "null",
    titlerest: "رستوران بوکا",
    addressParant: "(دروس)",
    address: "دروس",
    people: "(24نفر)",
    time: "24 - 45",
  },
];
const logo = [
  {
    logo: require("../../assets/media/logo/img39.png"),
  },
  {
    logo: require("../../assets/media/logo/img38.png"),
  },
  {
    logo: require("../../assets/media/logo/img37.png"),
  },
  {
    logo: require("../../assets/media/logo/img35.png"),
  },
  {
    logo: require("../../assets/media/logo/img34.png"),
  },
  {
    logo: require("../../assets/media/logo/img33.png"),
  },
  {
    logo: require("../../assets/media/logo/img31.png"),
  },
  {
    logo: require("../../assets/media/logo/img45.png"),
  },
  {
    logo: require("../../assets/media/logo/img44.png"),
  },
  {
    logo: require("../../assets/media/logo/img43.png"),
  },
  {
    logo: require("../../assets/media/logo/img42.png"),
  },
  {
    logo: require("../../assets/media/logo/img41.png"),
  },
  {
    logo: require("../../assets/media/logo/img40.png"),
  },
  {
    logo: require("../../assets/media/logo/img16.png"),
  },
  {
    logo: require("../../assets/media/logo/img55.png"),
  },
  {
    logo: require("../../assets/media/logo/img53.png"),
  },
  {
    logo: require("../../assets/media/logo/img52.png"),
  },
  {
    logo: require("../../assets/media/logo/img51.png"),
  },
  {
    logo: require("../../assets/media/logo/img49.png"),
  },
  {
    logo: require("../../assets/media/logo/img48.png"),
  },
  {
    logo: require("../../assets/media/logo/img47.png"),
  },
];

function MainScreen() {
  // const [logo, setLogo] = useState("pre");
  const [state, setState] = useState({
    tizerslide: 0,
    otherslide: 3,
    log: "pre",
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      myWidth = window.innerWidth;
      myWidth <= 768 ? setState({ logo: "post" }) : setState({ logo: "pre" });
      console.log("my width :::", typeof myWidth);
    });
  }, [window]);

  const tizer = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setState({ tizerslide: next });
    },
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: " -4em 0" }}> {dots} </ul>
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
      setState({ otherslide: next });
    },
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: " 0 " }}> {dots} </ul>
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
    <div>
      <div className="forsticky">
        <Navbar />
        <div className="user-location">
          <div className="user-location__container">
            <i className="icon-placeholder" />
            <b>در</b>
            <strong>تهران</strong>
          </div>
        </div>
      </div>
      <div className="search-all-rest">
        <div className="search-all-rest__wrapper">
          <div className="search-all-rest-input">
            <form>
              <div className="search-input">
                <i className="icon-search" />
                <input
                  type="search"
                  placeholder="جستجوی رستوران و غذا..."
                ></input>
              </div>
              <div className="search-button-container">
                <button className="btn-search btn-default">
                  {state.logo === "pre" ? (
                    <span> جستجوی رستوران&zwnj;ها</span>
                  ) : (
                    <span> جستجو</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="slide">
        <Slider {...tizer}>
          {tizerImg.map((iteration, index) => (
            <img src={tizerImg[index].img} className="slider-img" />
          ))}
        </Slider>
      </div>
      <div className="content-inner">
        <div className="content-inner-info-title-section">
          <div className="content-inner-info-title-wrapper">
            <div className="content-inner-info-title">
              <h1>
                سفارش آنلاین غذا از بهترین رستوران&zwnj;&zwnj;ها و
                فست&zwnj;فود&zwnj;&zwnj;
              </h1>
            </div>
            <div className="content-inner-info-text">
              <p>
                با استفاده از وبسایت و اپلیکیشن سفارش آنلاین غذای دلینو شما
                میتونید به راحتی و در سریع ترین زمان ممکن غذای مورد علاقه&zwnj;ی
                خودتون رو از بهترین رستوران&zwnj;ها و فست فود&zwnj;های تهران،
                قم، کرج، گرگان، یزد، ارومیه و سایر شهرهای ایران سفارش بدین.
              </p>
            </div>
          </div>
        </div>
        <div className="content-inner-popular-section">
          <div className="content-inner-popular-wrapper">
            <header>
              <h2>دسته های محبوب</h2>
            </header>
            <div className="popular-food">
              <ul>
                {poplularFood.map((iteration, index) => (
                  <li>
                    <a href="#">
                      <img src={poplularFood[index].image} />
                      <span>{poplularFood[index].title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="content-inner-discount-new-section">
          <div className="content-inner-discount-new-wrapper">
            <div className="discount-new-Wrapper-same">
              <h2>تخفیف دارها</h2>
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
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="content-inner-discount-new-section">
          <div className="content-inner-discount-new-wrapper">
            <div className="discount-new-Wrapper-same">
              <h2> جدیدترین&zwnj;ها </h2>
            </div>
            <h3 className="resturant">
              <a href="#">رستوران&zwnj;های بیشتر</a>
            </h3>
          </div>
        </div>
        <div className="slider-discount-wrapper">
          <Slider {...settings}>
            {cartListNewest.map((iteration, index) => (
              <Cart
                mainImg={cartListNewest[index].mainImg}
                logoImg={cartListNewest[index].logoImg}
                discount={cartListNewest[index].discount}
                titlerest={cartListNewest[index].titlerest}
                addressParant={cartListNewest[index].addressParant}
                address={cartListNewest[index].address}
                people={cartListNewest[index].people}
                time={cartListNewest[index].time}
              />
            ))}
          </Slider>
        </div>
        <section className="app-promotion">
          <div className="app-promotion-wrapper">
            <div className="app-promotion-right">
              <header>
                <h2>اپلیکیشن موبایل دلینو</h2>
                <p>
                  برای دریافت لینک دانلود اپلیکیشن دلینو، شماره موبایلت رو وارد
                  کن
                </p>
              </header>
              <form className="app-promotion-right-form">
                <input type="text" placeholder="مثال: 0912xxxxxxx"></input>
                <button className="btn-default">
                  <span>دریافت لینک دانلود</span>
                </button>
              </form>
              <ul className="app-links">
                {appLinks.map((iteration, index) => (
                  <li>
                    <a href="#">
                      <img src={appLinks[index].img} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="app-promotion-left">
              <img src={require("../../assets/media/img17.png")} />
            </div>
          </div>
        </section>
        <section className="famous-rest">
          <div className="famous-rest-wrapper">
            <header>
              <h2>رستوران&zwnj;های پر طرفدار</h2>
              <h3>
                گزیده&zwnj;ای از بهترین و پرطرفدارترین رستوران&zwnj;ها در دلینو
              </h3>
            </header>
            <ul>
              {logo.map((iteration, index) => (
                <li>
                  <a href="#">
                    <img src={logo[index].logo} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="home-namad">
          <div className="home-namad-wrapper">
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
            <div className="home-namad-text">
              <p>
                تمامی کالاها و خدمات این سایت، دارای مجوزهای لازم از مراجع
                مربوطه می&zwnj;باشند و فعالیت&zwnj;های این سایت تابع قوانین و
                مقررات جمهوری اسلامی ایران است.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}

export default MainScreen;
