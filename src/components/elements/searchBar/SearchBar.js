import React from "react";
import "./SearchBar.css";
import { Button } from "../../commons";
function SearchBar({ title, type }) {
  console.log(title);
  return (
    <section className="searchBar">
      {/* <div className="searchBar__wrapper flex-row"> */}
      <div
        className={
          ("flex-row",
          type === "searchFilter"
            ? "searchBar__wrapper-filter "
            : "searchBar__wrapper")
        }
      >
        <div className="searchBar__inner">
          <form>
            <div className="searchBar__input flex-row">
              <div className="flex-row">
                <i className="icon-search" />
                <input
                  type="search"
                  placeholder="جستجوی رستوران یا غذا..."
                ></input>
              </div>
              {type === "searchFilter" ? (
                <span className="close-wrapper flex-row"></span>
              ) : null}
            </div>
            <div className="searchBar__btn">
              {type === "searchBar" ? (
                <Button
                  text={title === "post" ? "جستجو" : "جستجوی رستوران ها "}
                  type="searchBar"
                />
              ) : (
                <Button text={title} type="searchFilter" />
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
