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
  }
};

class Questionaire extends Component {
  render(){
    const { classes } = this.props;
    return (
      <Card>
        <CardBody>
          <Typography component="h3" variant="h3" className={classes.cardTitle}>
            Client Questionaire
          </Typography>
          <Typography component="body1" variant="body1" paragraph>
            To ensure the highest quality presentation, please complete the client questionnaire and return it to: <a href="mailto:alyssa@ericscroggins.com" className={classes.emailLink}>alyssa@ericscroggins.com</a>
          </Typography>
          <a className={classes.cardLink} href="#">
            Download here! 
          </a>
        </CardBody> 
      </Card>
    )
  }
}

export default withStyles(styles)(Questionaire);
