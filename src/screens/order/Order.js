import React from "react";
import { NavBar } from "../../components/elements";
import "./Order.css";

function Order() {
  return (
    <div className="order-screen">
      <NavBar />
      <div className="order__container">
        <div className="order__pay">
          <div className="order__pay-container">
            <div className="order__pay-info order__pay__same">
              <div className="order__pay__same-right">
                <i className="icon-comment" />
                <h4>توضیحات سفارش</h4>
              </div>
              <div className="order__pay-info-left">
                <aside className="form">
                  <textarea
                    className="order__pay-textarea"
                    placeholder="اگر سفارشت نیاز به توضیح داره برامون بنویس"
                  ></textarea>
                </aside>
              </div>
            </div>
            <div className="order__pay-delivery order__pay__same">
              <div className="order__pay-delivery-right order__pay__same-right">
                <i className="icon-placeholder" />
                <h4>انتخاب آدرس</h4>
              </div>
              <div className="order__pay-delivery-left">
                <div className="empty-content">
                  شما هنوز آدرسی در محدوده این رستوران وارد نکرده اید
                </div>
                <div className="button-holder">
                  <button>
                    <span>+ افزودن آدرس جدید</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="order__pay-code order__pay__same">
              <div className="order__pay__same-right">
                <i className="icon-sale" />
                <h4>ثبت کد</h4>
              </div>
              <div className="order__pay-code-left">
                <form>
                  <input placeholder="کد خودت را وارد کن "></input>
                  <button>ثبت کد</button>
                </form>
              </div>
            </div>
            <div className="order__pay-money order__pay__same">
              <div className="order__pay__same-right order__pay-money-right">
                <i className="icon-credit-card-2" />
                <h4> روش پرداخت</h4>
              </div>
              <div className="order__pay-money-left">
                <ul className="box-list">
                  <li className="selected">
                    <div>
                      <span className="box-list-item">
                        <i className="icon-headphone" />
                        انلاین
                      </span>
                    </div>
                  </li>
                  <li className="disable">
                    <div>
                      <span className="box-list-item">
                        <i className="icon-credit-card-1" />
                        پول نقد
                      </span>
                    </div>
                  </li>
                  <li className="disable">
                    <div>
                      <span className="box-list-item">
                        <i className="icon-credit-card" />
                        کارتخوان
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order__pay-gateway order__pay__same">
              <div className="order__pay-money-right order__pay__same-right">
                <i className="icon-credit-card-2" />
                <h4> درگاه پرداخت</h4>
              </div>
              <div className="order__pay-gateway-left">
                <div className="order__pay-gateway-logo">
                  <ul>
                    <li>
                      <img
                        src={require("../../assets/media/Order-screen/logo-bank-saman.png")}
                      />
                    </li>
                    <li>
                      <img
                        src={require("../../assets/media/Order-screen/logo-bank-mellat.png")}
                      />
                    </li>
                  </ul>
                </div>
                <div className="order__pay-gateway-left-text">
                  <span>
                    پرداخت از طریق کلیه کارتهای عضو شتاب امکان پذیر است
                  </span>
                  <small>
                    (قبل از پرداخت از غیر فعال بودن فیلتر شکن مطمئن شوید)
                  </small>
                </div>
              </div>
            </div>
          </div>
          <div className="final-price-holder">
            <label>پرداختی شما:</label>
            <span>
              <b id="final-price">49,050 تومان</b>
            </span>
          </div>
          <div>
            <button className="btn-submit-order">
              <span>ثبت سفارش</span>
            </button>
          </div>
        </div>
        <div className="order__cart-holder-container">
          <div className="order__cart-holder">
            <div>
              <div className="cart-top">
                <figure>
                  <img src={require("../../assets/media/logo/img38.png")} />
                </figure>
                <aside className="cart-top-text">
                  <span>رستوران دی</span>
                  <span>
                    <a href="#">مشاهده منو</a>
                  </span>
                </aside>
              </div>
            </div>
            <div>
              <div className="cart-middle">
                <button className="anc-rmv">x</button>
                <div className="cart-middle-item-holder">
                  <aside>
                    <h3>پیتزا چیکن پستو </h3>
                    <small>45,000 تومان</small>
                  </aside>
                  <div className="qty-holder">
                    <div className="food-qty">
                      <button className="action-button button-minus"></button>
                      <label>1</label>
                      <button className="action-button button-plus"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-bottom">
              <div className="cart-bottom-first">
                <label>مالیات</label>
                <span>
                  <b>4,050 تومان</b>
                </span>
              </div>
              <div className="cart-bottom-second">
                <label>هزینه کل</label>
                <span>
                  <b>49,050 تومان</b>
                </span>
              </div>
            </div>
          </div>
          <div className="forsticky"></div>
        </div>
      </div>
    </div>
  );
}

export default Order;
