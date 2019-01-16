/* eslint-disable */
import React, { Component }  from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import Collapse from '@material-ui/core/Collapse';

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import ViewDay from "@material-ui/icons/ViewDay";
import Dns from "@material-ui/icons/Dns";
import Build from "@material-ui/icons/Build";
import ListIcon from "@material-ui/icons/List";
import People from "@material-ui/icons/People";
import Assignment from "@material-ui/icons/Assignment";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import Chat from "@material-ui/icons/Chat";
import Call from "@material-ui/icons/Call";
import ViewCarousel from "@material-ui/icons/ViewCarousel";
import AccountBalance from "@material-ui/icons/AccountBalance";
import ArtTrack from "@material-ui/icons/ArtTrack";
import ViewQuilt from "@material-ui/icons/ViewQuilt";
import LocationOn from "@material-ui/icons/LocationOn";
import Fingerprint from "@material-ui/icons/Fingerprint";
import AttachMoney from "@material-ui/icons/AttachMoney";
import Store from "@material-ui/icons/Store";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonAdd from "@material-ui/icons/PersonAdd";
import Layers from "@material-ui/icons/Layers";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import LineStyle from "@material-ui/icons/LineStyle";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarBorder from '@material-ui/icons/StarBorder';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-pro-react/components/headerLinksStyle.jsx";
import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";


class HeaderLinks extends Component {
  state = {
    open: true,
  };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  easeInOutQuad = (t, b, c, d) => {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  };

  smoothScroll = (e, target) => {
    if (window.location.pathname === "/sections") {
      var isMobile = navigator.userAgent.match(
        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
      );
      if (isMobile) {
        // if we are on mobile device the scroll into view will be managed by the browser
      } else {
        e.preventDefault();
        var targetScroll = document.getElementById(target);
        scrollGo(document.documentElement, targetScroll.offsetTop, 1250);
      }
    }
  };
  scrollGo = (element, to, duration) => {
    var start = element.scrollTop,
      change = to - start,
      currentTime = 0,
      increment = 20;

    var animateScroll = function() {
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      element.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };

  render() {
    var onClickSections = {};

    const { classes, dropdownHoverColor } = this.props;
    return (
      <List className={classes.list + " " + classes.mlAuto}>
        <ListItem className={classes.listItem}>
          <Link
            to="/about"
            className={classes.navButton}
            style={{color: 'rgba(0,0,0,.87)'}}
          >
            <Button color="transparent" style={{color: 'rgba(0,0,0,.87)'}}>
              About Eric
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={primaryColor}
            buttonText="Speaker | Coach | Consultant"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              <CustomDropdown
                noLiPadding
                innerDropdown
                ref="multi"
                hoverColor={primaryColor}
                buttonText="Speaker"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                buttonIcon={Apps}
                dropdownList={[
                  <Link to="/speaker/keynote" className={classes.dropdownLink}>
                    Keynote
                  </Link>,
                  <Link to="/speaker/workshops" className={classes.dropdownLink}>
                    Workshops
                  </Link>,
                  <Link to="/speaker/inspirational" className={classes.dropdownLink}>
                    Inspirational
                  </Link>,
                  <Link to="/speaker/corporate" className={classes.dropdownLink}>
                    Corporate
                  </Link>,
                ]}
              />,
              <CustomDropdown
                noLiPadding
                innerDropdown
                ref="multi"
                hoverColor={primaryColor}
                buttonText="Coach"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                buttonIcon={Apps}
                dropdownList={[
                  <Link to="/coach/oneonone" className={classes.dropdownLink}>
                    One-on-One
                  </Link>,
                  <Link to="/coach/group" className={classes.dropdownLink}>
                    Group
                  </Link>,
                  <Link to="/coach/personal" className={classes.dropdownLink}>
                    Personal
                  </Link>,
                  <Link to="/coach/professional" className={classes.dropdownLink}>
                    Professional
                  </Link>,
                ]}
              />,
              <CustomDropdown
                noLiPadding
                innerDropdown
                ref="multi"
                hoverColor={primaryColor}
                buttonText="Consultant"
                buttonProps={{
                  className: classes.navLink,
                  color: "transparent"
                }}
                buttonIcon={Apps}
                dropdownList={[
                  <Link to="/consultant/financial" className={classes.dropdownLink}>
                    Financial
                  </Link>,
                  <Link to="/consultant/operations" className={classes.dropdownLink}>
                    Operations
                  </Link>,
                  <Link to="/consultant/projectfocus" className={classes.dropdownLink}>
                    Project Focus
                  </Link>,
                  <Link to="/consultant/salesmarketing" className={classes.dropdownLink}>
                    Sales and Marketing
                  </Link>,
                ]}
              />
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <CustomDropdown
            noLiPadding
            navDropdown
            hoverColor={primaryColor}
            buttonText="Contact"
            buttonProps={{
              className: classes.navLink,
              color: "transparent"
            }}
            buttonIcon={Apps}
            dropdownList={[
              <Link to="/contact" className={classes.dropdownLink}>
                Contact Eric
              </Link>,
              <Link to="/meeting-planner" className={classes.dropdownLink}>
                Meeting Planner
              </Link>,
            ]}
          />
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link
            to="/courses"
            className={classes.navButton}
            style={{color: 'rgba(0,0,0,.87)'}}
          >
            <Button color="transparent" style={{color: 'rgba(0,0,0,.87)'}}>
              Courses
            </Button>
          </Link>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Link
            to="/booking"
            className={classes.navButton}
            style={{color: 'rgba(0,0,0,.87)'}}
          >
            <Button color="primary" style={{color: 'white'}}>
              Book Eric
            </Button>
          </Link>
        </ListItem>
      </List>
    );
    }
}

HeaderLinks.defaultProps = {
  hoverColor: "primary"
};

HeaderLinks.propTypes = {
  dropdownHoverColor: PropTypes.oneOf([
    "dark",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ])
};

export default withStyles(headerLinksStyle)(HeaderLinks);
