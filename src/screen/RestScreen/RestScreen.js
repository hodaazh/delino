import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import "./restScreen.css";
import StarRatingComponent from "react-star-rating-component";
import Navbar from "../../components/Navbar/Navbar";
import CartFood from "../../components/CartFood/CartFood";

const cartFoodList = [
  {
    img: require("../../assets/media/popular/pop1.jpg"),
    title: " مارگینا پیتزا",
    detail: "سس پیتزا، ریحان، پنیر موزاریلا",
    price: "قیمت از 3500 تومان",
    discount: "10",
  },
  {
    img: require("../../assets/media/popular/pop1.jpg"),
    title: " مارگینا پیتزا",
    detail: "سس پیتزا، ریحان، پنیر موزاریلا",
    price: "قیمت از 3500 تومان",
    discount: "10",
  },
  {
    img: require("../../assets/media/popular/pop1.jpg"),
    title: " مارگینا پیتزا",
    detail: "سس پیتزا، ریحان، پنیر موزاریلا",
    price: "قیمت از 3500 تومان",
    discount: "10",
  },
  {
    img: require("../../assets/media/popular/pop1.jpg"),
    title: " مارگینا پیتزا",
    detail: "سس پیتزا، ریحان، پنیر موزاریلا",
    price: "قیمت از 3500 تومان",
    discount: "10",
  },
];
function RestScreen() {
  const top = useRef(0);
  const ref = useRef(null);
  const [active, setActive] = useState("0");
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    // const { top } = ref.current.getBoundingClientRect();
    // console.log({ top });
    // setOpen(top - 80 < 0);
    console.log(window.scrollY);
    console.log(top.current);
  };
  useEffect(() => {
    top.current = ref.current.getBoundingClientRect().top;
    console.log(top);
    // document.body.getBoundingClientRect;
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                  <div>
                    <button className="rate-btn">4.3</button>
                    <button className="comment-btn">مشاهده 24 نظر</button>
                  </div>
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

              <div className={open ? "slider-menu-show" : "slider-menu"}>
                <div className="slider-menu-wrapper">
                  <ul>
                    <li>
                      <img
                        src={require("../../assets/media/slidericon/breakfast.png")}
                      />
                      <span>پیتزا</span>
                    </li>
                    <li>
                      <img
                        src={require("../../assets/media/slidericon/breakfast.png")}
                      />
                      <span>غذای اصلی</span>
                    </li>
                    <li>
                      <img
                        src={require("../../assets/media/slidericon/breakfast.png")}
                      />
                      <span>صبحانه</span>
                    </li>
                    <li>
                      <img
                        src={require("../../assets/media/slidericon/breakfast.png")}
                      />
                      <span>صبحانه</span>
                    </li>
                  </ul>
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
                  <h2>پیتزا</h2>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {cartFoodList.map((iteration, index) => (
                      <CartFood
                        img={cartFoodList[index].img}
                        title={cartFoodList[index].title}
                        detail={cartFoodList[index].detail}
                        price={cartFoodList[index].price}
                        discount={cartFoodList[index].discount}
                      />
                    ))}
                  </div>
                  <h2>غذای اصلی</h2>
                  <div style={{ display: "flex", flexWrap: "wrap" }}>
                    {cartFoodList.map((iteration, index) => (
                      <CartFood
                        img={cartFoodList[index].img}
                        title={cartFoodList[index].title}
                        detail={cartFoodList[index].detail}
                        price={cartFoodList[index].price}
                        discount={cartFoodList[index].discount}
                      />
                    ))}
                  </div>
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
