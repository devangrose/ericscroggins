import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components used to create a google map
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import axios from "axios";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import PinDrop from "@material-ui/icons/PinDrop";
import Phone from "@material-ui/icons/Phone";
import BusinessCenter from "@material-ui/icons/BusinessCenter";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import { Typography } from "@material-ui/core";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Facebook from '../../assets/facebook-logo.png';
import Insta from '../../assets/instagram-logo.png';
import Twitter from "../../assets/twitter-logo.png";
import { primaryColor as redColor } from "assets/jss/material-kit-pro-react.jsx";
import Youtube from '../../assets/youtube-logo.png';
import loading from "assets/img/loading.gif";

import contactUsStyle from "assets/jss/material-kit-pro-react/views/contactUsStyle.jsx";

const styles = {
  ...contactUsStyle,
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
}

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.6062, lng: -122.3321 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
    </GoogleMap>
  ))
);

class ContactUsPage extends React.Component {

  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      message: null,
      phone: null,
      result: null,
      callInProgress: false,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
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
  render() {
    const { classes } = this.props;
    const url = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCWtNL43rZAsC2bRkR5ryzOs005edUug6o"
    return (
      <div style={{marginBottom: '5vh'}}>
        <div className={classes.bigMap}>
          <CustomSkinMap
            googleMapURL={url}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={
              <div
                style={{
                  height: `100%`,
                  borderRadius: "6px",
                  overflow: "hidden"
                }}
              />
            }
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.contactContent}>
            <div className={classes.container}>
              <h2 className={classes.title}>Send Eric a message</h2>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                    <CustomInput
                      labelText="Your Name"
                      id="name"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onChange: this.handleChange,
                        name: "name",
                        type: "text",
                      }}
                    />
                    <CustomInput
                      labelText="Email address"
                      id="email"
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
                      labelText="Phone"
                      id="phone"
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
                      labelText="Your message"
                      id="message"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 6,
                        onChange: this.handleChange,
                        name: "message",
                        type: "text",
                      }}
                    />
                    <div className={classes.textCenter}>
                      <img src={loading} style={{margin: '0 auto', maxWidth: '50%',  display: this.state.callInProgress ? "block" : "none" }} />
                      <Typography component="h3" style={{color: "green", display: this.state.result == "success" ? "block" : "none"}}>
                        Message Sent Successfully.
                      </Typography>
                      <Typography component="h3" style={{color: "red", display: this.state.result == "fail" ? "block" : "none"}}>
                        There was an error sending your message.
                      </Typography>
                      <Button color="primary" round type="submit">
                        Send message
                      </Button>
                    </div>
                  </form>
                </GridItem>
                <GridItem md={4} sm={4} className={classes.mlAuto}>
                  <InfoArea
                    className={classes.info}
                    title="Give us a ring"
                    description={
                      <p>
                        Eric Scroggins <br /> <a rel="noopener noreferrer" style={{textDecoration: "none",color: 'inherit'}} href="tel:971.319.5430">971.319.5430</a> <br /> Mon - Fri,
                        9:30am-5:30pm
                      </p>
                    }
                    icon={Phone}
                    iconColor="primary"
                  />
                  <InfoArea
                    className={classes.info}
                    title="Check us out on social media!"
                    description={
                      <GridContainer
                         spacing={0}
                         direction="row"
                         alignItems="center"
                         justify="center"
                      >
                        <GridItem xs={3}>
                          <a href="https://www.facebook.com/ericjscroggins/"><img alt="facebook" className={classes.socials} src={Facebook} /></a>
                        </GridItem>
                        <GridItem xs={3}>
                          <a href="https://www.youtube.com/user/1scroger"><img alt="youtube" className={classes.socials} src={Youtube} /></a>
                        </GridItem>
                        <GridItem xs={3}>
                          <a href="https://twitter.com/ericscroggins"><img alt="twitter" className={classes.socials} src={Twitter} /></a>
                        </GridItem>
                        <GridItem xs={3}>
                          <a href="https://www.instagram.com/ericjscroggins/"><img alt="instagram" className={classes.socials} src={Insta} /></a>
                        </GridItem>
                      </GridContainer>
                    }
                    icon={Favorite}
                    iconColor="primary"
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ContactUsPage);
