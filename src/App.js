import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./App.css";

const isActiveFunc = (match, location) => {
  console.log(match, location);
  return match;
};

const Links = () => (
  <nav>
    <NavLink exact activeClassName="active" to="/">
      Home{" "}
    </NavLink>
    <NavLink activeStyle={{ color: "green" }} to="/portofolio">
      Portofolio
    </NavLink>
    <NavLink isActive={isActiveFunc} activeClassName="active" to="/contact">
      Contact
    </NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <Links />
      <Route exact path="/" render={() => <h1>Home </h1>} />
      <Route path="/portofolio" render={() => <h1>Portofolio </h1>} />
      <Route path="/contact" render={() => <h1> Contact </h1>} />
    </div>
  </Router>
);

export default App;
