import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Logo from '../assets/logo.jpg';
import Facebook from '../assets/facebook-logo.png';
import Insta from '../assets/instagram-logo.png';
import Youtube from '../assets/youtube-logo.png';

import { primaryColor as redColor } from "assets/jss/material-kit-pro-react.jsx";

const styles = theme => ({
  root: {
    flexGrow: 1,
    fontSize: "0.75rem",
    overflow: "hidden",
    paddingBottom: "10px",
    paddingTop: "10px",
    textAlign: 'center',
    margin: '0 auto',
    backgroundColor: 'white',
  },
  socialsContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingRight: "2rem!imimportant"
  },
  socials: {
    filter: 'invert(1)',
    height: "2rem",
    width: "auto",
    margin: "1px",
    color: redColor,
    '&:hover': {
      fontStyle: "italic",
    },
    '&:visited':{
      color: redColor
    } 
  },
  footerItem: {
    display: 'block',
    color: 'blue',
    lineHeight: "1rem",
    whiteSpace: "nowrap",
    textAlign: 'left',
    '&:visited':{
      color: "blue",
    },
    '&:hover':{
      textDecoration: 'underline',
    }
  },
  weekday: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "1rem",
    whiteSpace: "nowrap",
    margin: "0"
  },
  footerTitle: {
    marginBottom: "0"
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  logo: { width: "100%",
    height: "auto",
    marginLeft: "2rem",
    margin: 'auto',
  },
  footerLinksContainer: {
    marginTop : "1rem",
  },
  footerLinks: {
    '&:hover': {
      fontStyle: "italic"
    },
    '&:visited':{
      color: "blue",
    },
    textDecoration: "none",
  },
  businessHoursContainer: {
    paddingLeft: "2rem!important",
    margin: 'auto',
  }
});

function Footer(props) {
  const { classes } = props;

  return (
    <div className={classes.root} >
      <Grid container 
          spacing={24}
          direction="row"
          justify="center"
          alignItems="center"
      >
        <Grid item xs={12} sm={12} md={6}>
          <Grid container 
            spacing={24}
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Grid item xs={12} md={5} className={classes.logoWrapper} style={{textAlign: 'center', margin: '0 3%'}}>
              <img alt="logo" className={classes.logo} style={{margin: 'auto'}} src={Logo}/>
            </Grid>
            <Grid item xs={12} md={3} style={{paddingLeft: "2rem"}}>
              <Typography  className={classes.footerTitle} style={{textAlign: 'left'}}><strong>PHONE</strong></Typography>
              <Typography  className={classes.footerItem} style={{color: 'blue'}}><a rel="noopener noreferrer" style={{textDecoration: "none",color: 'inherit'}} href="tel:425-258-6245"><span style={{color: 'black'}}>WA</span> 425.258.6245</a></Typography>
              <Typography  className={classes.footerTitle} style={{textAlign: 'left'}}><strong>EMAIL</strong></Typography>
              <Typography  className={classes.footerItem} style={{color: 'blue'}}><a href="mailto:pam@trilliumink.net" style={{textDecoration: "none",color: 'inherit'}}>pam@trilliumink.net</a></Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Grid container spacing={24}>
            <Grid item xs={12} md={6} className={classes.businessHoursContainer}>
              <Typography  className={classes.footerTitle} ><strong>BUSINESS HOURS</strong></Typography>
              <Typography  className={classes.footerTitle} ><span style={{paddingRight: '6%'}}>Mon-Fri</span>9:30AM-5:30PM</Typography>
            </Grid> 
            <Grid item xs={12} md={6} className={classes.socialsContainer}>
                <a href="https://www.facebook.com/pamneighborsSMPSeattle/"><img alt="facebook" className={classes.socials} src={Facebook} /></a>
                <a href="https://www.instagram.com/scalpmicropigmentationseattle/?hl=en"><img alt="instagram" className={classes.socials} src={Insta} /></a>
                <a href="https://www.youtube.com/channel/UCBPTN3OPwu_ugQ1xSpiPUpA"><img alt="youtube" className={classes.socials} src={Youtube} /></a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
} 
Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);
