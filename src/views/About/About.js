import React, { Component } from 'react';
import HeroImage from 'Components/HeroImage.js';
import { withStyles, Typography } from '@material-ui/core';
import DownloadLink from "react-download-link";
import classNames from "classnames";
import PropTypes from 'prop-types';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from 'components/CustomButtons/Button.jsx';
import { Link } from 'react-router-dom';

import EricBio from "assets/EricScroggins.docx";
import wheel from "assets/wheel.png";

import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";

const styles = {
...componentsStyle,
content: {
paddingTop: '50px',
	backgroundColor: '#ffffff'
},
grid: {
marginBottom: '50px',
}
};

class About extends Component {

render(){
const { classes } = this.props;
return (
<div style={{marginTop: '100px'}}>
<div style={{paddingTop: '3%',  textAlign: 'center'}}>
				<Typography variant="h1" style={{color: primaryColor}} component="h1" paragraph>
					Meet Dr. Eric Scroggins
				</Typography>
  <img src={wheel} style={{height: "30vh", width: 'auto', margin: '3%'}}/> 
</div>
	<div style={{backgroundColor: '#ffffff'}}>
        <div className={classNames(classes.container, classes.content)} style={{backgroundColor: '#ffffff'}}>
          <GridContainer spacing={32}>
            <GridItem md={4} sm={12} className={classes.grid}>
							<div style={{maxHeight: "50vh", height: '100%'}}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/y1-oweMM0NI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
            </GridItem>
            <GridItem md={8} sm={12} className={classes.grid}>
              <Typography component="h3" variant="h5" paragraph>
								Holding degrees in several fields including a Bachelor of Science in business management, an MBA and a Doctorate in Psychology, Eric is well poised to deliver founded information and inspiration to those ready to change their lives.
              </Typography>
              <Typography component="h3" variant="h5" paragraph>
								By providing speaking, coaching and consulting services Eric is able to reach people at all stages of their life’s path and work with them personally and professionally.
              </Typography>
              <Typography component="h3" variant="h5" paragraph>
								Dr. Eric J. Scroggins is an author and has delivered the power of his book Vision Blockers to audiences both nationally and internationally. Teaching his audiences to apply techniques to push through barriers and achieve desired results.
              </Typography>
              <Typography component="h3" variant="h5" paragraph>
								Dr. Scroggins’ following has given him the opportunity to work with both corporate and non-profit organizations where he has developed a full-circle approach. This full-circle approach combines personal, professional and spiritual components that he is able to deliver whether he is working one-on-one, with a group or in front of an entire organization.
              </Typography>
              <Typography component="h3" variant="h5" paragraph>
								Eric’s passion is to connect with, teach, and guide others into their own personal success stories. His ability to identify and develop a path, a process or a call to action makes Eric’s insight truly inspirational.
              </Typography>
              <Typography component="h3" variant="h5" paragraph>
								With his infectious laugh and his sage advice Dr. Scroggins always leads you to recognize that YOU CAN!
              </Typography>
              <Button type="button" color="primary"><Link to="/booking" style={{color: 'white'}}>Book Eric Now</Link></Button>
              <Button type="button" color="primary" simple><a href={EricBio} download>Download Full Bio</a></Button>
            </GridItem> 
          </GridContainer>
        </div>
      </div>
		</div>
    )
  }
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(About);
