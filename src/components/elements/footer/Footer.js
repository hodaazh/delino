import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="change-lanq">
          <button>
            <i className="icon-sphere" />
            English
          </button>
        </div>
        <div className="footer-middle">
          <div className="footer-menu">
            <img
              src={require("../../../assets/media/logo/logo-delino-new.png")}
            />
            <nav>
              <a href="#">
                <p>وبلاگ دلینو</p>
              </a>
              <a href="#">
                <p>درباره</p>
              </a>
              <a href="#">
                <p>تماس با ما</p>
              </a>
              <a href="#">
                <p>قوانین</p>
              </a>
              <a href="#">
                <p>سوالات متداول</p>
              </a>
              <a href="#">
                <p>حریم شخصی</p>
              </a>
            </nav>
          </div>
          <div className="footer-icon">
            <ul>
              <li>
                <a>
                  <i className="icon-film-roll" />
                </a>
              </li>
              <li>
                <a>
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a>
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a>
                  <i className="icon-paper-plane" />
                </a>
              </li>
              <li>
                <a>
                  <i className="icon-instagram" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-icon-last">
          <p>
            تمامی لوگوها و اطلاعات رستوران ها با احترام متعلق به مالکین رستوران
            ها است و امتیاز استفاده از این اطلاعات تنها برای دلینو مجاز است
          </p>
          <ul className="footer-icon-last-icon">
            <li>
              <a href="#">
                <img
                  src={require("../../../assets/media/Main-screen/img21.png")}
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src={require("../../../assets/media/Main-screen/img19.png")}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
