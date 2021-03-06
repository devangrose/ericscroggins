import 'react-app-polyfill/ie11';
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Link } from "react-router-dom";
// sections for this page
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer.js";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import ScrollToTop from "components/ScrollToTop.js";

import indexRoutes from "routes/index.jsx";

import "./assets/scss/material-kit-pro-react.css";
import logo from './assets/img/logo-header.jpg';

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <ScrollToTop>
      <div style={{ marginBottom: '70px'}}>
        <Header
            brand={<Link to="/"><img src={logo} style={{width: "100%", textAlign: 'left'}}/></Link>}
            links={<HeaderLinks dropdownHoverColor="info" />}
            color="white"
            fixed
        />
      </div>
      <div>
      {indexRoutes.map((prop, key) => {
        return <Route exact path={prop.path} key={key} component={prop.component} />;
      })}
      </div>
      <Footer />
    </ScrollToTop>
  </Router>,
  document.getElementById("root")
);
