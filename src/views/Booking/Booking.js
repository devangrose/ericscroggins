import React, { Component } from 'react';
import { withStyles, Typography, Paper } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";

import contactsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/contactsStyle.jsx";


import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";

import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";

const styles = {
  ...componentsStyle,
  ...contactsStyle,
  header: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: primaryColor,
    padding: '3vh 0',
    textTransform: 'uppercase',
  },
  gridContainer: {
    padding: '3vh 0',
  },
  feeInfo: {
    margin: '6vh 0',
  },
  left: {
    float: 'left',
  },
  right: {
    float: 'right'
  },
};

class Booking extends Component {

  handleSubmit(e){
    e.preventDefault();
    const data = new FormData(e.target);
  }

  render(){
    const { classes } = this.props;
    return (
      <div>
        <Typography component="h2" variant="h2" className={classes.header} align="center">
          Book Eric
        </Typography>
        <div className={classes.container}>
          <GridContainer spacing={24} className={classes.gridContainer}>
            <GridItem md={4} sm={12}>
              <div style={{height: '30vh'}}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6gGkWIC1JR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className={classes.feeInfo}>
                <Typography component="h3" variant="h3" style={{marginRight: 'auto',textDecoration: 'underline', color: 'black'}} paragraph>
                  Estimated Fee
                </Typography>
                <Typography component="h4" variant="h4" className={classes.left}>
                  United States and Canada
                </Typography>
                <Typography component="h4" variant="h4" className={classes.right} align="right">
                  $15,000
                </Typography>
                <Typography component="h4" variant="h4" className={classes.left}>
                  International
                </Typography>
                <Typography component="h4" variant="h4" className={classes.right} align="right">
                  $20,000
                </Typography>
                <br style={{clear: 'both'}}/>
                <br/>
                <Typography component="h4" variant="h4" paragraph>
                  *The speaking fee is inclusive of airfare, hotel, ground transportation, food and all other miscellaneous expenses. The fee also includes pre-speech interviews so Eric can customize his presentation to meet the goals and objectives of your meeting. Additional savings are available if you select his “Pre-Pay Option.” Ask for more details on this option.
                </Typography>
                <Typography component="h4" variant="h4" >
                  Dr. Eric Scroggins will make every effort to be accommodating and work within your speaker budget. He books his engagements 3-24 months in advance. Eric also offers volume discounts on his book, “Vision Blockers: How to Shatter Barriers to Achieve Your Destiny”, to be included in your conference amenity bags to be given to all attendees upon meeting registration.
                </Typography>
              </div>
            </GridItem>
              <GridItem xs={12} md={8} className={classes.mlAuto}>
                <Card className={classes.card1}>
                  <form onSubmit={this.handleSubmit}>
                    <CardHeader
                      contact
                      className={classes.textCenter}
                      style={{backgroundColor: primaryColor}}
                    >
                      <h4 className={classes.cardTitle}>Send Us A Message</h4>
                    </CardHeader>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            labelText="First Name"
                            id="first"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={6} md={6}>
                          <CustomInput
                            labelText="Last Name"
                            id="last"
                            formControlProps={{
                              fullWidth: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <CustomInput
                        labelText="Comany/Association Name"
                        id="company-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Phone Number"
                        id="phone-number"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Event Date"
                        id="date"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Event Topic"
                        id="date"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Email Address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Your Message"
                        id="message"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.justifyContentBetween}>
                      <Button color="primary" className={classes.pullRight}>
                        Send Message
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
          </GridContainer>
        </div>
      </div>
    ) 
  }
}

export default withStyles(styles)(Booking);
