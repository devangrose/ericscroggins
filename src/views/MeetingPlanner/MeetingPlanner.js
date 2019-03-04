import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Questionaire from "views/MeetingPlanner/Questionaire.js";
import ConferenceCall from "views/MeetingPlanner/ConferenceCall.js";
import PowerPoint from "views/MeetingPlanner/PowerPoint.js";
import AVRequirements from "views/MeetingPlanner/AVRequirements.js";
import Hotel from "views/MeetingPlanner/Hotel.js";
import Flights from "views/MeetingPlanner/Flights.js";
import Transportation from "views/MeetingPlanner/Transportation.js";
import AdditionalResources from "views/MeetingPlanner/AdditionalResources.js";

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
  },
  gridWrapper: {
    height: '80%',
  }
};

class MeetingPlanner extends Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Typography component="h2" variant="h2" className={classes.header} align="center" paragraph>
					Meeting Planner
        </Typography>
        <Typography component="h3" variant="h3" className={classes.subheader} style={{backgroundColor: 'transparent'}} align="center">
          Thank you for booking Eric Scroggins, here are 8 items that will help in the mutual exchange of information.
        </Typography>
        <div className={classes.container}>
          <GridContainer spacing={24}>
            <GridItem md={6} sm={12}>
              <div className={classes.gridWrapper}>
                <Questionaire />
              </div>
            </GridItem>
            <GridItem md={6} sm={12}>
              <div className={classes.gridWrapper}>
                <ConferenceCall />
              </div>
            </GridItem>
            <GridItem md={6} sm={12}>
              <div className={classes.gridWrapper}>
                <PowerPoint />
              </div>
            </GridItem>
            <GridItem md={6} sm={12}>
              <div className={classes.gridWrapper}>
                <AVRequirements />
              </div>
            </GridItem>
            <GridItem md={6} sm={12}>
              <div className={classes.gridWrapper}>
                <Hotel />
              </div>
            </GridItem>
            <GridItem md={6} sm={12}>
              <div className={classes.gridWrapper}>
                <Flights />
              </div>
            </GridItem>
            <GridItem md={6} sm={12}>
              <div className={classes.gridWrapper}>
                <Transportation />
              </div>
            </GridItem>
            <GridItem md={6} sm={12}>
              <div className={classes.gridWrapper}>
                <AdditionalResources />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(MeetingPlanner);
