import React from "react";
import "./search.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../components/Navbar/Navbar";
import Navbar from "../../components/Navbar/Navbar";
import FindCity from "../../components/FindCity/FindCity";
import Cart from "../../components/Cart/Cart";
import Footer from "../../components/Footer/Footer";
const cartListSearch = [
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
];
const cartListRelatedSearch = [
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
    mainImg: require("../../assets/media/img26.jpg"),
    logoImg: require("../../assets/media/logo/img22.jpg"),
    discount: "10",
    titlerest: "رستوران بین المللی تاویت",
    addressParant: "null",
    address: "ونک",
    people: "(24نفر)",
    time: "24 - 45",
  },
];
const settingSearch = {
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
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
function Search() {
  return (
    <div className="section-search">
      <Navbar />
      <FindCity />
      <div className="search-navbar">
        <div className="search-navbar-container">
          <div className="search-navbar-wrapper">
            <div className="search-navbar-wrapper-filter">
              <form className="search-input">
                <i className="icon-search" />
                <input></input>
                <span className="close-wrapper"></span>
              </form>
              <div className="search-filter">
                <button>
                  <div>
                    <i className="icon-equalizer" />
                  </div>
                  <span>فیلتر و مرتب&zwnj;سازی</span>
                </button>
              </div>
            </div>
            <div className="applied-filter-list">
              <ul>
                <li>
                  مرتب سازی:کمترین فاصله
                  <i className="icon-close-circular-button-symbol" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="result-container">
        <div className="result-wrapper">
          <div>
            <header className="search-bar">
              <h2>
                <p>جستجوی</p>
                <strong>دی</strong>
                <p> درمحدوده</p>
                <strong className="area">
                  زرافشان
                  <small>(تهران)</small>
                </strong>
              </h2>
              <small>2مورد</small>
            </header>
            <div className="search-cart-wrapper">
              <Slider {...settingSearch}>
                {cartListSearch.map((item, index) => (
                  <Cart
                    mainImg={item.mainImg}
                    logoImg={item.logoImg}
                    discount={item.discount}
                    titlerest={item.titlerest}
                    addressParant={item.addressParant}
                    address={item.address}
                    people={item.people}
                    time={item.time}
                    key={index}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <div className="search-Related-results">
          <div className="search-Related-results-wrapper">
            <header className="search-bar">
              <h2>نتایج مرتبط</h2>
            </header>
            <div className="search-cart-wrapper">
              <Slider {...settingSearch}>
                {cartListRelatedSearch.map((item, index) => (
                  <Cart
                    mainImg={item.mainImg}
                    logoImg={item.logoImg}
                    discount={item.discount}
                    titlerest={item.titlerest}
                    addressParant={item.addressParant}
                    address={item.address}
                    people={item.people}
                    time={item.time}
                    key={index}
                  />
                ))}
              </Slider>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Search;
