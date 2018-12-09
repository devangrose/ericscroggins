import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
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
    <Card style={{ width: "100%", maxWidth: "30rem", margin: "3% auto"}}>
      <img
        style={{ height: "180px", width: "100%", display: "block" }}
        className={classes.imgCardTop}
        src={props.src}
        alt="Card-img-cap"
      />
      <CardBody>
        <h4 className={classes.cardTitle}>{props.title}</h4>
        <p>
          {props.body}
        </p>
        <Button color="primary" round><Link className={classes.link} to={props.link}>Do something</Link></Button>
      </CardBody>
    </Card>
  );
}

export default withStyles(style)(CardExample);
