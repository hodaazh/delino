import React from "react";
import "./mainscreen.css";
import Slider from "react-slick";
import Navbar from "../../components/Navbar/Navbar";
import SlideShow from "../../components/SlideShow/SlideShow";
import Cart from "../../components/Cart/Cart";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const poplularFood = [
  { image: require("../../assets/media/firstPage/img4.jpg"), title: "پیتزا" },
  { image: require("../../assets/media/firstPage/img5.jpg"), title: "کباب" },
  { image: require("../../assets/media/firstPage/img6.jpg"), title: "سوپ" },
  { image: require("../../assets/media/firstPage/img7.jpg"), title: "ساندویچ" },
  {
    image: require("../../assets/media/firstPage/img8.jpg"),
    title: "غذای ایرانی",
  },
  { image: require("../../assets/media/firstPage/img9.jpg"), title: "سوخاری" },
  { image: require("../../assets/media/firstPage/img10.jpg"), title: "پاستا" },
  { image: require("../../assets/media/firstPage/img11.jpg"), title: "سالاد" },
  { image: require("../../assets/media/firstPage/img12.jpg"), title: "صبحانه" },
  { image: require("../../assets/media/firstPage/img13.jpg"), title: "استیک" },
];
const appLinks = [
  { img: require("../../assets/media/firstPage/img19.png") },
  { img: require("../../assets/media/firstPage/img18.png") },
  { img: require("../../assets/media/firstPage/img21.png") },
  { img: require("../../assets/media/firstPage/img20.png") },
];
const tizerImg = [
  { img: require("../../assets/media/firstPage/img1.jpg") },
  { img: require("../../assets/media/firstPage/img2.jpg") },
  { img: require("../../assets/media/firstPage/img3.jpg") },
];
const cartList = [
  {
    mainImg: require("../../assets/media/firstPage/img15.jpg"),
    logoImg: require("../../assets/media/firstPage/img16.png"),
    discount: "10",
    titlerest: "رستوران بوکا",
    addressParant: "(دروس)",
    address: "دروس",
    people: "(24نفر)",
    time: "24 - 45",
  },
  {
    mainImg: require("../../assets/media/firstPage/img26.jpg"),
    logoImg: require("../../assets/media/firstPage/img22.jpg"),
    discount: "10",
    titlerest: "رستوران بین المللی تاویت",
    addressParant: "null",
    address: "ونک",
    people: "(24نفر)",
    time: "24 - 45",
  },
  {
    mainImg: require("../../assets/media/firstPage/img27.jpg"),
    logoImg: require("../../assets/media/firstPage/img23.png"),
    discount: "20",
    titlerest: "رستوران ژاپنی کاتسو",
    addressParant: "null",
    address: "زعفرانیه",
    people: "(124نفر)",
    time: "24 - 45",
  },
  {
    mainImg: require("../../assets/media/firstPage/img29.jpg"),
    logoImg: require("../../assets/media/firstPage/img24.png"),
    discount: "20",
    titlerest: " پیتزا آهو",
    addressParant: "null",
    address: "یوسف آباد",
    people: "(4نفر)",
    time: "24 - 45",
  },
  {
    mainImg: require("../../assets/media/firstPage/img15.jpg"),
    logoImg: require("../../assets/media/firstPage/img16.png"),
    discount: "10",
    titlerest: "رستوران بوکا",
    addressParant: "(دروس)",
    address: "دروس",
    people: "(24نفر)",
    time: "24 - 45",
  },
];
const settings = {
  dots: true,
  dotsClass: "slick-dots",
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
};
const tizer = {
  dots: true,
  dotsClass: "slick-dots custom-dots",
  autoplay: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots) => {
    return <ul style={{ marginBottom: "3rem" }}>{dots}</ul>;
  },
};
function MainScreen() {
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
                  جستجوی رستوران ها
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
            <div className="discount-Wrapper-same">
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
            <div className="discount-Wrapper-same">
              <h2> جدیدترین&zwnj;ها </h2>
            </div>
            <h3 className="resturant">
              <a href="#">رستوران&zwnj;های بیشتر</a>
            </h3>
          </div>
        </div>
        <div className="content-inner-new-wrapper">
          <Cart
            mainImg={cartList[0].mainImg}
            logoImg={cartList[0].logoImg}
            discount={cartList[0].discount}
            titlerest={cartList[0].titlerest}
            addressParant={cartList[0].addressParant}
            address={cartList[0].address}
            people={cartList[0].people}
            time={cartList[0].time}
          />
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
              <img src={require("../../assets/media/firstPage/img17.png")} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainScreen;
