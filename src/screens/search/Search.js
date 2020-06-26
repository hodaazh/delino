import React from "react";
import { NavBar, SearchBar, Location, Footer } from "../../components/elements";
import FAKE_CONST from "../../constants/FAKE_CONST";
import { Cart } from "../../components/elements";

import "./Search.css";
function Search() {
  return (
    <div className="search-page">
      <NavBar type="search" />
      <Location />
      <div className="search-container">
        <div className="search-wrapper">
          <SearchBar title="فیلتر و مرتب سازی" type="searchFilter" />
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
      <div className="search__result-container">
        <div className="search__result-wrapper">
          <div>
            <header className="search-bar">
              <h1>
                <p>جستجوی</p>
                <strong>دی</strong>
                <p> درمحدوده</p>
                <strong className="area">
                  زرافشان
                  <small>(تهران)</small>
                </strong>
              </h1>
              <small>2مورد</small>
            </header>
            <div className="search__cart-wrapper">
              {FAKE_CONST.cartListSearch.map((item, index) => (
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
                  type="search"
                />
              ))}
            </div>
          </div>
        </div>
        <div className="search__Related">
          <div className="search__Related-wrapper">
            <header className="search-bar">
              <h1>نتایج مرتبط</h1>
            </header>
            <div className="search__cart-wrapper">
              {FAKE_CONST.cartListRelatedSearch.map((item, index) => (
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
                  type="search"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Search;
