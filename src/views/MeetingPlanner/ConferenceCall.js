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
  }
};

class ConferenceCall extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Card>
        <CardBody>
          <Typography component="h3" variant="h3" className={classes.cardTitle}>
            Conference Call
          </Typography>
          <Typography component="body1" variant="body1" paragraph>
            A 30 – minute call is used by Eric to gain more in-depth information about your group, your expectations, and your goals for the event. Please return the completed Client Questionnaire to our office at least one day prior to the scheduled call.
          </Typography>
        </CardBody> 
      </Card>
    )
  }
}

export default withStyles(styles)(ConferenceCall);
