import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { NavBar } from "./components/elements";
import Home from "./screens/home/Home";
import Rest from "./screens/rest/Rest";
import Search from "./screens/search/Search";
import Order from "./screens/order/Order";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rest" component={Rest} />
          <Route path="/search" component={Search} />
          <Route path="/order" component={Order} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
