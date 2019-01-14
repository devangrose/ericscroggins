import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";

import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";

import {
  cardTitle,
  cardLink,
  cardSubtitle
} from "assets/jss/material-kit-pro-react.jsx";
const styles = {
  ...componentsStyle,
  cardTitle,
  cardLink,
  cardSubtitle,
  card: {
    width: '100%',
  },
  emailLink: {
    color: primaryColor,
    '&:visited':{
      color: primaryColor
    }
  },
  root: {
    height: '100%',
  }
};

class Questionaire extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardBody>
          <Typography component="h3" variant="h3" className={classes.cardTitle}>
            Hotel Accomodations
          </Typography>
          <Typography component="body1" variant="body1" paragraph>
            Please reserve a room for Eric. When booking hotel accommodations, please notify the hotel that Eric’s lodging and meals are to be charged to your master account. Eric kindly requests a non-smoking room with a king-size bed. Please forward the hotel confirmation number to: <a href="mailto:alyssa@ericscroggins.com" className={classes.emailLink}>alyssa@ericscroggins.com</a>
          </Typography>
        </CardBody> 
      </Card>
    )
  }
}

export default withStyles(styles)(Questionaire);

