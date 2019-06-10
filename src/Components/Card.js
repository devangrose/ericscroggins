import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import withWidth from '@material-ui/core/withWidth';
import { Link } from "react-router-dom";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle,
  link: {
    color: 'white',
  }
};

function CardExample(props) {
  const { classes } = props;
  return (
    <Card style={{ width: ['lg','xl'].includes(props.width) ? "100%" : "80%", maxWidth: "30rem", height: "100%",margin: "3% auto"}}>
      <img
        style={{ height: "auto", width: "100%", display: "block" }}
        className={classes.imgCardTop}
        src={props.src}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4  style={{textAlign: ['lg','xl'].includes(props.width) ? "" : "center"}} className={classes.cardTitle}>{props.title}</h4>
        <div style={{textAlign: ['lg','xl'].includes(props.width) ? "" : "center"}}>
          <Button color="primary" round><Link className={classes.link} to={props.link}>Learn More</Link></Button>
        </div>
      </CardBody>
    </Card>
  );
}

export default withStyles(style)(withWidth()(CardExample));
