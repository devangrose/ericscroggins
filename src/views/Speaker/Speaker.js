import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";

const styles = [

];

class Speaker extends Component {

  checkScroll(){
    
  }
  render(){
    return(
      <div onScroll={this.checkScroll}>

      </div>
    )
  }
}

export default withStyles(styles)(Speaker);
