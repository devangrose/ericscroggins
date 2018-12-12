import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";
import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";

const styles = {
  ...componentsStyle,
  header: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: primaryColor,
    padding: '3vh 0',
    textTransform: 'uppercase',
  },
  subheader: {
    color: primaryColor,
    fontWeight: 'bold',
    padding: '3vh 0',
  }
};

class MeetingPlanner extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Typography component="h2" variant="h2" className={classes.header} align="center" paragraph>
          Event Rider
        </Typography>
        <Typography component="h3" variant="h3" className={classes.subheader} style={{backgroundColor: 'transparent'}} align="center">
          Thank you for booking Eric Scroggins, here are 8 items that will help in the mutual exchange of information.
        </Typography>
        <div className={classes.container}>
          <GridContainer spacing={24}>

          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MeetingPlanner);
