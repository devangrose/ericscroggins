import React, { Component } from 'react';
import HeroImage from 'Components/HeroImage.js';
import { withStyles, Typography } from '@material-ui/core';
import classNames from "classnames";
import PropTypes from 'prop-types';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from 'components/CustomButtons/Button.jsx';
import { Link } from 'react-router-dom';

import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";

const styles = {
  ...componentsStyle,
  content: {
    paddingTop: '50px',
  },
  grid: {
    marginBottom: '50px',
  }
};

class About extends Component {

  render(){
    const { classes } = this.props;
    return (
      <div>
        <HeroImage source={require('assets/img/banner-smp.jpg')} subheading="Meet" heading="Dr. Eric J. Scroggins"/>
        <div className={classNames(classes.container, classes.content)}>
          <GridContainer spacing={32}>
            <GridItem md={4} sm={12} className={classes.grid}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6gGkWIC1JR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </GridItem>
            <GridItem md={8} sm={12} className={classes.grid}>
              <Typography component="h5" variant="h5" paragraph>
                Dr. Eric J. Scroggins is an author, professional keynote speaker, pastor, banker, and recognized business leader. He has worked in both corporate and non-profit enterprises bringing leadership expertise, motivation, and strategic thinking to each assignment. Eric is most noted for transforming organizations and creating exceptional performance through proven sales techniques, improving customer service, and helping employees engage more effectively. His passion is to help others reach new heights by overcoming barriers and turning their careers or businesses into personal success stories. Dr. Scroggins is also the founder of M6 Global Resources, a not for profit resource generator bringing assistance to people around the world.
              </Typography>
              <Button type="button" color="primary"><Link to="/booking" style={{color: 'white'}}>Book Eric Now</Link></Button>
              <Button type="button" color="primary" simple><a href="#">Download Full Bio</a></Button>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(About);
