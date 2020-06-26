import React, { useState, useRef, useEffect } from "react";
import StarRatingComponent from "react-star-rating-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavBar, Footer } from "../../components/elements";
import { Button } from "../../components/commons";
import FAKE_CONST from "../../constants/FAKE_CONST";
import CartFood from "./components/CartFood";
import "./Rest.css";

function Rest() {
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
    <>
      <NavBar />
      <div className="rest-page">
        <div className="rest__info">
          <div className="rest__info__img">
            <img
              className="rest__info__img-main"
              src={require("../../assets/media/Main-screen/img30.jpg")}
            />
            <Button type="back-rest" text="بازگشت" />
            <Button type="hoby-rest" text="علاقه مندی" />
            <Button type="discount-rest" text="تا%10 تخفیف" />
            <img
              className="rest__info__img-logo"
              src={require("../../assets/media/logo/img16.png")}
            />
          </div>
          <div className="rest__info__text">
            <div className="rest__info__text-wrapper">
              <div className="rest__info__text-right">
                <h1>
                  رستوران بوکا
                  <small>(دروس)</small>
                </h1>
                <div className="rest__info__text-rate">
                  <StarRatingComponent
                    name="rate1"
                    starCount={5}
                    emptyStarColor={"#c1c3d6"}
                    className={"rest-rating"}
                    starColor={"orange"}
                    value={3}
                  />
                  <Button type="rate-rest" text="4.3" />
                  <Button type="comment-rest" text="مشاهده 24 نظر" />
                </div>
              </div>
              <div className="rest__info__text-left">
                <div className="status-holder flex-row">
                  <i className="flex-row"></i>
                  <span>آماده سفارش هستیم</span>
                </div>
                <div className="rest__helmet-time">
                  <div className="rest__time-wrapper flex-row">
                    <i className="icon-stopwatch" />
                    <div className="rest__time-text">
                      <a href="#">27 تا 54 دقیقه</a>
                      <small>میانگین زمان ارسال</small>
                    </div>
                  </div>
                  <div className="rest__helmet-wrapper flex-row">
                    <i className="icon-helmet-1" />
                    <div className="rest__helmet-text">
                      <a href="#">انتخاب آدرس</a>
                      <small>هزینه ارسال</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="rest__other">
            <div className="rest__tab">
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
                      {FAKE_CONST.cartFoodList.map(
                        ({ category, menuImg, key }, index) => (
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
                        )
                      )}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={peppy.rest ? "rest__search-container" : "nodisplay"}
            >
              <div className="rest__search">
                <div className="rest__search-wrapper">
                  <form>
                    <i className="icon-search" />
                    <input type="search" placeholder="جستجوی در منو ..." />
                    <span></span>
                  </form>
                </div>
              </div>
              <div className="rest__food">
                <div className="rest__food-wrapper">
                  {FAKE_CONST.cartFoodList.map(
                    ({ category, detail, key }, i) => (
                      <div
                        id={`category-${key}`}
                        ref={(el) => (itemsRef.current[key] = el)}
                      >
                        <h1>{category}</h1>
                        <div className="rest__food-desc">
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
                    )
                  )}
                </div>
              </div>
            </div>
            <div className={peppy.user ? "rest__userComment" : "nodisplay"}>
              <div className="rest__userComment-wrapper">
                <h4>نظرات کاربران در مورد رستوران بوکا</h4>
                <div className="rest__userComment-estimate flex-row">
                  <div className="rest__userComment-star-container">
                    <div className="rest__userComment-star">
                      <StarRatingComponent
                        name="rate1"
                        starCount={5}
                        emptyStarColor={"#c1c3d6"}
                        className={"rest-rating"}
                        starColor={"orange"}
                        value={3}
                      />
                    </div>
                    <div className="rest__userComment-total flex-row">
                      <b>4.4</b>
                      <span>(3987 نظر)</span>
                    </div>
                  </div>
                  <ul className="rest__userComment-summary flex-row">
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
                <div className="rest__comment">
                  <div>
                    <div className="rest__comment-title">
                      <div>
                        <figure></figure>
                        <div className="rest__comment-title-name flex-row">
                          <span>پژمان غریبیان</span>
                          <span>2سال پیش</span>
                        </div>
                      </div>
                    </div>
                    <div className="rest__comment-text">
                      <p>
                        با سلام . یک ساعت و ربع طول کشید برای دو تا ساندویچ کوچک
                        با نان سفید ؟؟!! که حتی اعلان نکرده بودند که در نان سفید
                        ساندویچ درست میگردد . وقتی سانویچ ها را دریافت کردیم ،
                        نمیدانستیم کدام کباب تابه ای است و کدام کتلت ، حتی یک
                        علامت ساده هم نداشت تا نوع ساندویچ را تشخیص دهیم ساندویچ
                        ها سرد بودند و مجبور شدیم مجددا آن را گرم کنیم{" "}
                      </p>
                    </div>
                    <div className="rest__comment-orderFood">
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
            <div className={peppy.info ? "rest__data" : "nodisplay"}>
              <div className="rest__data-wrapper">
                <div>
                  <h4>آدرس</h4>
                  <header>
                    <i className="icon-placeholder" />
                    <span>
                      خیابان مطهری،نرسیده به سهروردی،نبش کوچه سنندج،پلاک 110
                    </span>
                  </header>
                  <div className="rest__map-holder">
                    <div className="rest__map">
                      <img
                        src={require("../../assets/media/Rest-screen/map.png")}
                      />
                    </div>
                  </div>
                </div>
                <div className="rest__basic-info">
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
                        <i className="icon-vespa" />
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
                <div className="rest__whrs">
                  <h4> ساعت سرویس دهی</h4>
                  <div className="rest__whrs-text">
                    <div className="rest__whrs-text-right">
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
                    <div className="rest__whrs-text-left">
                      <header>
                        <span></span>
                        <span>نهار</span>
                        <span>شام</span>
                      </header>
                      <div className="rest__whrs-text-left-row">
                        <span>شنبه</span>
                        <span>12:00 تا 17:00</span>
                        <span>17:00 تا 23:30</span>
                      </div>
                      <div className="rest__whrs-text-left-row">
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
        </div>
        <div className="rest__pay-container">
          <div className="rest__pay">
            <div>
              <div className="rest__empty-img">
                <img
                  src={require("../../assets/media/Rest-screen/fig-cart-empty.png")}
                />
              </div>
              <div className="rest__empty-txt">سبد خرید خالی است</div>
            </div>
          </div>
          <div className="forsticky"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rest;
