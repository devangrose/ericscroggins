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

class AVRequirements extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Card>
        <CardBody>
          <Typography component="h3" variant="h3" className={classes.cardTitle}>
            Audio/Visual Requirements
          </Typography>
          <ul>
            <li><Typography component="body1" variant="body1">Eric has a wireless lavaliere microphone and will need access to a professional PA system.</Typography></li>
            <li><Typography component="body1" variant="body1">Laptop, projector, wireless slide advancer and screen for PowerPoint presentation.</Typography></li>
            <li><Typography component="body1" variant="body1">5-minute AV check</Typography></li>
            <li><Typography component="body1" variant="body1">Room temperature bottled water & hot water for tea</Typography></li>
          </ul>
        </CardBody> 
      </Card>
    )
  }
}

export default withStyles(styles)(AVRequirements);

