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

class PowerPoint extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Card className={classes.root}>
        <CardBody>
          <Typography component="h3" variant="h3" className={classes.cardTitle}>
            PowerPoint Presentation
          </Typography>
          <Typography component="body1" variant="body1" paragraph>
            Please send a conference-themed PowerPoint for Eric's title slide to <a href="mailto:eric@ericscroggins.com" className={classes.emailLink}>eric@ericscroggins.com</a>. After the conference call, Eric will prepare his PowerPoint and email it to you. Eric will also bring a backup of the presentation on a flash drive.
          </Typography>
        </CardBody> 
      </Card>
    )
  }
}

export default withStyles(styles)(PowerPoint);
