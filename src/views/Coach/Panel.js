import React, { Component } from 'react';
import { withStyles, Typography } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const styles = {
  root: {
    marginTop: '5vh',
  },
  text: {
    color: 'white',
    height: '25vh',
    minHeight: '25vh',
  }
};

class Panel extends Component {

  componentDidMount(){
    this.setState({
      height: this.refs.text.clientHeight
    });
  }

  render(){
    const { classes } = this.props;
    return (
      <GridContainer spacing={0} className={classes.root}>
        <GridItem lg={6} md={6} sm={12} style={{backgroundColor: this.props.leftBackground, display: 'table'}}>
          <Typography component="h3" variant="h3" className={classes.text} style={{display: 'table-cell', verticalAlign: 'middle'}}>
            {this.props.left}
          </Typography>
        </GridItem>
        <GridItem lg={6} md={6} sm={12} style={{backgroundColor: this.props.rightBackground, display: 'table'}}>
          <Typography ref="text" component="h5" variant="h5" className={classes.text} style={{display: 'table-cell', verticalAlign: 'middle'}}>
            {this.props.right}
          </Typography>
        </GridItem>
      </GridContainer>
    )
  }
}

export default withStyles(styles)(Panel);
