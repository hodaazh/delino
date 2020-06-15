import React, { useState, useEffect, useRef } from "react";
import "./restScreen.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StarRatingComponent from "react-star-rating-component";
import Navbar from "../../components/Navbar/Navbar";
import CartFood from "../../components/CartFood/CartFood";
import Footer from "../../components/Footer/Footer";

const cartFoodList = [
  {
    menuImg: require("../../assets/media/slidericon/rice3.png"),
    category: "1پیتزا",
    key: "1",
    detail: [
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "مارگینا پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
    ],
  },
  {
    menuImg: require("../../assets/media/slidericon/bowl.png"),
    category: "2پیتزا",
    key: "2",
    detail: [
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "مارگینا پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
    ],
  },
  {
    menuImg: require("../../assets/media/slidericon/rice3.png"),
    category: "3پیتزا",
    key: "3",
    detail: [
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "مارگینا پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
    ],
  },
  {
    menuImg: require("../../assets/media/slidericon/bowl.png"),
    category: "4پیتزا",
    key: "4",
    detail: [
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "مارگینا پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
    ],
  },
  {
    menuImg: require("../../assets/media/slidericon/rice3.png"),
    category: "5پیتزا",
    key: "5",
    detail: [
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "مارگینا پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
    ],
  },
  {
    menuImg: require("../../assets/media/slidericon/bowl.png"),
    category: "غذای اصلی",
    key: "6",
    detail: [
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "غذای اصلی پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون عذای اصلی",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "غذای اصلی پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون عذای اصلی",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "غذای اصلی پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون عذای اصلی",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "غذای اصلی پیتزا",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "10",
      },
      {
        img: require("../../assets/media/popular/pop1.jpg"),
        title: "پپرون عذای اصلی",
        desc: "سس پیتزا، ریحان، پنیر موزاریلا",
        price: "قیمت از 3500 تومان",
        discount: "20",
      },
    ],
  },
];

function RestScreen() {
  // const top = useRef(0);
  const ref = useRef(null);
  const itemsRef = useRef([]);
  const [active, setActive] = useState("0");
  const [open, setOpen] = useState(false);
  const [enable, setEnble] = useState(1);
  const [peppy, setPeppy] = useState({ rest: true, user: false, info: false });

  const handleScroll = () => {
    const { top } = ref.current.getBoundingClientRect();
    setOpen(top - 75 < 0);
    console.log();
    for (let i = 1; i < 7; i++) {
      if (itemsRef.current[i].getBoundingClientRect().y < 0) setEnble(i);
    }
  };
  const settingsres = {
    infinite: true,
    speed: 300,
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (index, key) => {
    setEnble(index);
    window.scrollTo({
      top: itemsRef.current[key].offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      <div className="rest-cover">
        <div className="rest-info">
          <div className="rest-info-img">
            <img
              className="rest-info-img-main"
              src={require("../../assets/media/img30.jpg")}
            />
            <button className="back-btn">بازگشت</button>
            <button className="hoby-btn">
              <span>علاقه مندی</span>
            </button>
            <button className="discount-btn">تا10% تخفیف</button>
            <img
              className="rest-info-img-logo"
              src={require("../../assets/media/logo/img16.png")}
            />
          </div>
          <div className="rest-info-text">
            <div className="rest-info-text-wrapper">
              <div className="rest-info-text-right">
                <h1>
                  رستوران بوکا
                  <small>(دروس)</small>
                </h1>
                <div className="rest-info-text-right-rate">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    emptyStarColor={"#c1c3d6"}
                    className={"rest-rating"}
                    starColor={"orange"}
                    value={3}
                  />
                  <button className="rate-btn">4.3</button>
                  <button className="comment-btn">مشاهده 24 نظر</button>
                </div>
              </div>
              <div className="rest-info-text-left">
                <div className="status-holder">
                  <i></i>
                  <span>آماده سفارش هستیم</span>
                </div>
                <div className="helmet-time">
                  <div className="time-wrapper">
                    <i className="icon-stopwatch" />
                    <div className="time-wrapper-text">
                      <a href="#" className="time-wrapper-label">
                        27 تا 54 دقیقه
                      </a>
                      <small>میانگین زمان ارسال</small>
                    </div>
                  </div>
                  <div className="helmet-wrapper">
                    <i className="icon-helmet-1" />
                    <div className="helmet-wrapper-text">
                      <a href="#" className="helmet-wrapper-label">
                        انتخاب آدرس
                      </a>
                      <small>هزینه ارسال</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="rest-other">
            <div className="section-tab">
              <div ref={ref}>
                <ul>
                  <li
                    key="1"
                    onClick={() => (setActive("1"), setPeppy({ rest: true }))}
                    className={active === "1" ? "activeMenu menu" : "menu"}
                  >
                    منوی رستوران
                  </li>
                  <li
                    key="2"
                    onClick={() => (setActive("2"), setPeppy({ user: true }))}
                    className={active === "2" ? "activeMenu review" : "review"}
                  >
                    نظرات کاربران
                  </li>
                  <li
                    key="3"
                    onClick={() => (setActive("3"), setPeppy({ info: true }))}
                    className={active === "3" ? "activeMenu info" : "info"}
                  >
                    اطلاعات کلی
                  </li>
                </ul>
              </div>
              <div>
                <div
                  className={
                    open && peppy.rest ? "slider-menu-show" : "slider-menu"
                  }
                >
                  <div className="slider-menu-wrapper">
                    <Slider {...settingsres}>
                      {cartFoodList.map(({ category, menuImg, key }, index) => (
                        <div href={`#category-${key}`}>
                          <div
                            onClick={() => scroll(index, key)}
                            className={
                              enable == index
                                ? "enable slider-each-menu "
                                : "slider-each-menu"
                            }
                          >
                            <img src={menuImg} />
                            <span>{category}</span>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={
                peppy.rest ? "search-input-rest-container" : "nodisplay"
              }
            >
              <div className="search-input-rest">
                <div className="search-input-wrapper">
                  <form className="search-input-form">
                    <i className="icon-search" />
                    <input type="search" placeholder="جستجوی در منو ..." />
                    <span></span>
                  </form>
                </div>
              </div>
              <div className="food-list">
                <div className="food-list-wrapper">
                  {cartFoodList.map(({ category, detail, key }, i) => (
                    <div
                      id={`category-${key}`}
                      ref={(el) => (itemsRef.current[key] = el)}
                    >
                      <h2>{category}</h2>
                      <div className="food-list-desc">
                        {detail.map((detail, j) => (
                          <CartFood
                            img={detail.img}
                            title={detail.title}
                            detail={detail.desc}
                            price={detail.price}
                            discount={detail.discount}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={peppy.user ? "userComment" : "nodisplay"}>
              <div className="userComment-wrapper">
                <h4>نظرات کاربران در مورد رستوران بوکا</h4>
                <div className="userComment-estimate">
                  <div className="userComment-star-total-container">
                    <div className="userComment-star">
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        emptyStarColor={"#c1c3d6"}
                        className={"rest-rating"}
                        starColor={"orange"}
                        value={3}
                      />
                    </div>
                    <div className="userComment-total">
                      <b>4.4</b>
                      <span>(3987 نظر)</span>
                    </div>
                  </div>
                  <ul className="userComment-summary">
                    <li>
                      <b></b>
                      <div className="rate-bar">
                        <i className="good" />
                      </div>
                      <span>35نظر</span>
                    </li>
                    <li>
                      <b></b>
                      <div className="rate-bar">
                        <i className="notbad" />
                      </div>
                      <span>17نظر</span>
                    </li>
                    <li>
                      <b></b>
                      <div className="rate-bar">
                        <i className="bad" />
                      </div>
                      <span>5نظر</span>
                    </li>
                  </ul>
                </div>
                <div className="comment-row">
                  <div>
                    <div className="comment-row-title">
                      <div>
                        <figure></figure>
                        <div className="comment-row-title-name">
                          <span>پژمان غریبیان</span>
                          <span>2سال پیش</span>
                        </div>
                      </div>
                    </div>
                    <div className="comment-row-text">
                      <p>
                        با سلام . یک ساعت و ربع طول کشید برای دو تا ساندویچ کوچک
                        با نان سفید ؟؟!! که حتی اعلان نکرده بودند که در نان سفید
                        ساندویچ درست میگردد . وقتی سانویچ ها را دریافت کردیم ،
                        نمیدانستیم کدام کباب تابه ای است و کدام کتلت ، حتی یک
                        علامت ساده هم نداشت تا نوع ساندویچ را تشخیص دهیم ساندویچ
                        ها سرد بودند و مجبور شدیم مجددا آن را گرم کنیم{" "}
                      </p>
                    </div>
                    <div className="comment-row-orderFood">
                      <span>
                        کوکوسیب زمینی
                        <small className="review-rate">
                          <i className="icon-star" />
                          <cite>3</cite>
                        </small>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={peppy.info ? "rest-data" : "nodisplay"}>
              <div className="rest-data-wrapper">
                <div>
                  <h4>آدرس</h4>
                  <header>
                    <i className="icon-placeholder" />
                    <span>
                      خیابان مطهری،نرسیده به سهروردی،نبش کوچه سنندج،پلاک 110
                    </span>
                  </header>
                  <div className="map-holder">
                    <div className="map">
                      <img
                        src={require("../../assets/media/slidericon/map.png")}
                      />
                    </div>
                  </div>
                </div>
                <div className="basic-info">
                  <h4>مشخصات کلی</h4>
                  <ul>
                    <li>
                      <label>
                        <i className="icon-stopwatch" />
                        میانگین زمان ارسال
                      </label>
                      <aside>40تا 50 دقیقه</aside>
                    </li>
                    <li>
                      <label>
                        <i className="icon-scooter" />
                        ارسال به خارج از محدوده
                      </label>
                      <aside>ندارد</aside>
                    </li>
                    <li>
                      <label>
                        <i className="icon-pie" />
                        نوع غذا
                      </label>
                      <aside>
                        <a href="#">فست فود</a>
                        <a href="#">پیتزا</a>
                        <a href="#">ساندویچ</a>
                        <a href="#">سوخاری</a>
                      </aside>
                    </li>
                  </ul>
                </div>
                <div className="section-whrs">
                  <h4> ساعت سرویس دهی</h4>
                  <div className="section-whrs-text">
                    <div className="section-whrs-text-right">
                      <header>
                        <i />
                        امروز
                        <small>(یکشنبه، 25 خرداد 1399)</small>
                      </header>
                      <ul>
                        <li>
                          <div>
                            <b>نهار</b>
                            <span>12:00 تا 17:00</span>
                          </div>
                        </li>
                        <li>
                          <div>
                            <b>شام</b>
                            <span>17:00 تا 23:20</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="section-whrs-text-left">
                      <header>
                        <span></span>
                        <span>نهار</span>
                        <span>شام</span>
                      </header>
                      <div className="section-whrs-text-left-row">
                        <span>شنبه</span>
                        <span>12:00 تا 17:00</span>
                        <span>17:00 تا 23:30</span>
                      </div>
                      <div className="section-whrs-text-left-row">
                        <span>یکشنبه</span>
                        <span>12:00 تا 17:00</span>
                        <span>17:00 تا 23:30</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
        <div className="rest-pay-container">
          <div className="rest-pay">
            <div className="rest-pay-empty">
              <div className="empty-img">
                <img src={require("../../assets/media/fig-cart-empty.png")} />
              </div>
              <div className="empty-txt">سبد خرید خالی است</div>
            </div>
          </div>
          <div className="forsticky"></div>
        </div>
      </div>
    </div>
  );
}

export default RestScreen;
