import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import "./restScreen.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import StarRatingComponent from "react-star-rating-component";
import Navbar from "../../components/Navbar/Navbar";
import CartFood from "../../components/CartFood/CartFood";

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

  const handleScroll = () => {
    const { top } = ref.current.getBoundingClientRect();
    setOpen(top - 75 < 0);
    console.log();
    for (let i = 1; i < 7; i++) {
      console.log(itemsRef.current[2].getBoundingClientRect().y);
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
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scroll = (index, key) => {
    setEnble(index);
    theposition: e.clientY - itemsRef.current[key].getBoundingClientRect().top;
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
            <button className="hoby-btn">علاقه مندی</button>
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
                  {/* <div> */}
                  <button className="rate-btn">4.3</button>
                  <button className="comment-btn">مشاهده 24 نظر</button>
                  {/* </div> */}
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
                    onClick={() => setActive("1")}
                    className={active === "1" ? "activeMenu menu" : "menu"}
                  >
                    منوی رستوران
                  </li>
                  <li
                    key="2"
                    onClick={() => setActive("2")}
                    className={active === "2" ? "activeMenu review" : "review"}
                  >
                    نظرات کاربران
                  </li>
                  <li
                    key="3"
                    onClick={() => setActive("3")}
                    className={active === "3" ? "activeMenu info" : "info"}
                  >
                    اطلاعات کلی
                  </li>
                </ul>
              </div>
              <div>
                <div className={open ? "slider-menu-show" : "slider-menu"}>
                  <div className="slider-menu-wrapper">
                    <Slider {...settingsres}>
                      {cartFoodList.map(({ category, menuImg, key }, index) => (
                        <a href={`#category-${key}`}>
                          <div
                            // onClick={() => setEnble(index)}
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
                        </a>
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: "rgb(240, 240, 240)" }}>
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
          </section>
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
