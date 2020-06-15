import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainScreen from "./screen/MainScreen/MainScreen";
import Cart from "./components/Cart/Cart";
import SlideShow from "./components/SlideShow/SlideShow";
import Message from "./components/Message/Message";
import RestScreen from "./screen/RestScreen/RestScreen";
import CartFood from "./components/CartFood/CartFood";
import Search from "./screen/Search/Search";
import FindCity from "./components/FindCity/FindCity";

function App() {
  return (
    <div className="App">
      {/* <MainScreen /> */}
      {/* <Cart /> */}
      {/* <SlideShow /> */}
      {/* <Message /> */}
      {/* <RestScreen /> */}
      {/* <CartFood /> */}
      <Search />
    </div>
  );
}

export default App;
