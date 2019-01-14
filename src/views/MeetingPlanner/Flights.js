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

class ConferenceCall extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardBody>
          <Typography component="h3" variant="h3" className={classes.cardTitle}>
            Flights
          </Typography>
          <Typography component="body1" variant="body1" paragraph>
            Our office will book Eric’s flights and forward the itinerary to you.
          </Typography>
        </CardBody> 
      </Card>
    )
  }
}

export default withStyles(styles)(ConferenceCall);

