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
	  <div style={{display: 'inline-block', marginTop: '3vh', margin: '0 auto'}}>
    <Card style={{ width: ['lg','xl'].includes(props.width) ? "100%" : "80%", maxWidth: "30rem", height: "100%",margin: "3vh auto"}}>
      <img
        style={{ height: "auto", width: "100%", display: "block", margin: '0 auto' }}
        className={classes.imgCardTop}
        src={props.src}
        alt="Card-img-cap"
      />
      <div style={{padding: ['lg','xl'].includes(props.width) ? '3vh 3vw' : '3vh 0'}}>
        <h4  style={{textAlign: ['lg','xl'].includes(props.width) ? "left" : "center"}} className={classes.cardTitle}>{props.title}</h4>
        <div style={{textAlign: ['lg','xl'].includes(props.width) ? "left" : "center", width: '100%', margin: '0', padding: '0'}}>
          <Button color="primary" round style={{maxWidth: '28rem'}}><Link className={classes.link} to={props.link}>Learn More</Link></Button>
        </div>
      </div>
    </Card>
	  </div>
  );
}

export default withStyles(style)(withWidth()(CardExample));
