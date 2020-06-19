import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import MainScreen from "./screen/MainScreen/MainScreen";
import Cart from "./components/Cart/Cart";
import SlideShow from "./components/SlideShow/SlideShow";
import Message from "./components/Message/Message";
import RestScreen from "./screen/RestScreen/RestScreen";
import CartFood from "./components/CartFood/CartFood";
import Search from "./screen/Search/Search";
import FindCity from "./components/FindCity/FindCity";
import Order from "./screen/Order/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={MainScreen} />
          <Route path="/Rest" component={RestScreen} />
          <Route path="/search" component={Search} />
          <Route path="/order" component={Order} />
        </Switch>
        {/* <MainScreen /> */}
        {/* <RestScreen /> */}
        {/* <Search /> */}
        {/* <Order /> */}
      </div>
    </Router>
  );
}

export default App;
