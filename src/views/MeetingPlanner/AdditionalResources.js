import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";

import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import logo from 'assets/img/logo_download.pdf';
import photos from "assets/EricPhotos.zip";

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
      <Card style={{height: '100%'}}>
        <CardBody>
          <Typography component="h3" variant="h3" className={classes.cardTitle}>
            Additional Resources
          </Typography>
          <Typography component="body1" variant="body1" >
            Find Eric's downloadable bio <Link to="/about" className={classes.cardLink}>here</Link>.
          </Typography>
          <Typography component="body1" variant="body1" >
            His logo <a className={classes.cardLink} href={logo} download="EricLogo.pdf">here</a>.
          </Typography>
          <Typography component="body1" variant="body1" >
            <a className={classes.cardLink} href={photos} download="EricPhotos.zip">Photos of Eric authorized for promotional use</a>.
          </Typography>
        </CardBody> 
      </Card>
    )
  }
}

export default withStyles(styles)(ConferenceCall);

