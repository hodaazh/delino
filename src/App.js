import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainScreen from "./screen/MainScreen/MainScreen";
import Cart from "./components/Cart/Cart";
import SlideShow from "./components/SlideShow/SlideShow";
import Message from "./components/Message/Message";
import RestScreen from "./screen/RestScreen/RestScreen";

function App() {
  return (
    <div className="App">
      <MainScreen />
      {/* <Cart /> */}
      {/* <SlideShow /> */}
      {/* <Message /> */}
      <RestScreen />
    </div>
  );
}

export default App;
