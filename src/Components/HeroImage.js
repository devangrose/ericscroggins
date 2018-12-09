import React, { Component } from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core';

const styles = {
  thumbnail: {
    position: 'relative',
    display: 'inline-block',
    width: "100%",
    overflow: "hidden",
    margin: 'auto',
  },
  overlay: {
    position: 'absolute',
    top: '3%',
    left: '3%',
  },
  typography: {
    textTransform: 'uppercase',
  },
};
class HeroImage extends Component {
	render(props) {
    const { classes } = this.props;
    let innerWidth = 0;
    let divStyle= {};
    const url = 'url(' + this.props.source + ')';
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      const is_iPad = navigator.userAgent.match(/iPad/i) != null;
      innerWidth = is_iPad ? document.documentElement.clientWidth : window.innerWidth;
      divStyle= {backgroundImage: url, display: 'table', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat', height: innerWidth / 2};
    }
    else {
      innerWidth = window.innerHeight;
      divStyle={backgroundImage: url, display: 'table',backgroundPosition: '0 50%',backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: innerWidth / 2}
    }
    return (
      <div>
        <div className={classes.thumbnail} style={divStyle}>
          <div className={classes.overlay}>
            <Typography variant="h5" className={classes.typography}>
              {this.props.subheading}
            </Typography>
            <Typography variant="h4" className={classes.typography}>
              {this.props.heading}
            </Typography>
          </div>
        </div>
      </div>
  )}
}

export default withStyles(styles)(HeroImage);
