import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import Panel from './Panel.js';

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
  panel: {
    marginTop: '5vh',
  }
};

class Coach extends Component {

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Typography component="h2" variant="h2" className={classes.header} align="center">
          Coaching and Consulting for Impact
        </Typography>
        <div className={classes.container} style={{marginTop:'5vh', marginBottom: '5vh'}}>
          <Panel className={classes.panel} left="Free Training" leftBackground="rgba(0,0,0,.8)" right="Join me as I show you step by step how to live beyond your percieved limitations and live the life of your dreams!" rightBackground="rgba(0,0,0,.6)"/>
          <Panel className={classes.panel} left="Vision Blockers Online Course" leftBackground="rgba(133,3,32,1)" right="Walk with me through this series where we will go deeper into my book, Vision Blockers. I will teach you HOW to apply the concept to make lasting change." rightBackground="rgba(133,3,32,.8)"/>
          <Panel className={classes.panel} left="One on One Training" leftBackground="rgba(0,0,0,.8)" right="Join me as I show you step by step how to live beyond your percieved limitations and live the life of your dreams!" rightBackground="rgba(0,0,0,.6)"/>
        </div>
      </div> 
    );
  } 
}

export default withStyles(styles)(Coach);
