import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Link } from "react-router-dom";
// sections for this page
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-kit-pro-react.css?v=1.2.0";
import logo from './assets/img/logo-header.jpg';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <div>
    <Header
        brand={<Link to="/"><img src={logo} style={{width: "100%", textAlign: 'left'}}/></Link>}
        links={<HeaderLinks dropdownHoverColor="info" />}
        fixed
        color="white"
      />
      {indexRoutes.map((prop, key) => {
        return <Route exact path={prop.path} key={key} component={prop.component} />;
      })}
    </div>
  </Router>,
  document.getElementById("root")
);
