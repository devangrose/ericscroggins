import React, { Component } from 'react';
import { withStyles, Typography, Paper } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";
// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import Button from "components/CustomButtons/Button.jsx";
import loading from "assets/img/loading.gif";

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

  constructor(props) {
    super(props);
    this.state = {
      callInProgress: false 
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event)=> {
    event.preventDefault();

    const url = "https://lvd8h5fog7.execute-api.us-east-1.amazonaws.com/default/sendEmail";

    if( this.state.callInProgress == false) {
      this.setState({ callInProgress: true }, () => 
      {
    
        var template_params = {
         "name": this.state.name,
         "email": this.state.email,
         "phone": this.state.phone,
         "message": this.state.message,
         "company": this.state.company,
          "topic": this.state.topic,
          "date": this.state.date,
         "toEmail": "devangrose@gmail.com",
        }
      
        axios.post(url, template_params)
          .then( success => {
            console.log(success);
            if(success.data.status == 200) {
              this.setState({ result: "success",
              callInProgress: false });
            }
            else if (success.data.status == 400) {
              this.setState({ result: "fail",
              callInProgress: false });
            }
          })
          .catch( error => {
            console.log(error);
            this.setState({ result: "fail",
              callInProgress: false
            });
          });
      });
    }
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
                <br style={{clear: 'both'}}/>
                <br/>
                <Typography component="h4" variant="h4" >
                  Dr. Eric Scroggins will make every effort to be accommodating and work within your speaker budget. He books his engagements 3-24 months in advance. Eric also offers volume discounts on his book, “Vision Blockers: How to Shatter Barriers to Achieve Your Destiny”, to be included in your conference amenity bags and given to all attendees upon meeting registration.
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
                        <GridItem xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Name"
                            id="last"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              onChange: this.handleChange,
                              name: "name",
                              type: "text",
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
                        inputProps={{
                          onChange: this.handleChange,
                          name: "company",
                          type: "text",
                        }}
                      />
                      <CustomInput
                        labelText="Phone Number"
                        id="phone-number"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.handleChange,
                          name: "phone",
                          type: "text",
                        }}
                      />
                      <CustomInput
                        labelText="Event Date"
                        id="date"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.handleChange,
                          name: "date",
                          type: "text",
                        }}
                      />
                      <CustomInput
                        labelText="Event Topic"
                        id="date"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.handleChange,
                          name: "topic",
                          type: "text",
                        }}
                      />
                      <CustomInput
                        labelText="Email Address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: this.handleChange,
                          name: "email",
                          type: "text",
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
                          rows: 5,
                          onChange: this.handleChange,
                          name: "message",
                        }}
                      />
                      <img src={loading} style={{margin: '0 auto', maxWidth: '50%',  display: this.state.callInProgress ? "block" : "none" }} />
                      <Typography component="h3" style={{color: "green", display: this.state.result == "success" ? "block" : "none"}}>
                        Message Sent Successfully.
                      </Typography>
                      <Typography component="h3" style={{color: "red", display: this.state.result == "fail" ? "block" : "none"}}>
                        There was an error sending your message.
                      </Typography>
                      <Button color="primary" style={{display: 'block'}}  onClick={this.handleSubmit}>
                        Send Message
                      </Button>
                    </CardBody>
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
