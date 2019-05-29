import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeroImage from "Components/HeroImage.js";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React, { Component } from "react";
import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import { withStyles, withWidth, Typography } from "@material-ui/core";

import { primaryColor, grayColor } from "assets/jss/material-kit-pro-react.jsx";

const stickHeight = 125;

const styles = {
  ...componentsStyle,
  sticky: {
    position: "fixed",
    top: stickHeight + "px"
  },
  slippery: {
    position: "relative"
  },
  rhomb: {
    boxSizing: "content-box",
    width: "30px",
    height: "30px",
    margin: "3px 0 0 30px",
    border: "3px solid  " + primaryColor,
    font: "normal 100%/normal Arial, Helvetica, sans-serif",
    color: grayColor,
    textOverflow: "clip",
    background: grayColor,
    transform: "rotateZ(-45deg)",
    transformOrigin: "0 100% 0deg",
    borderRadius: "5px"
  },
  line: {
    borderLeft: "6px solid " + primaryColor,
    height: "300px",
    marginLeft: "65px",
    top: "-420px",
    position: "relative",
    zIndex: "-1"
  },
  section: {
    marginTop: '20%',
    marginBottom: '20%',
  }
};

class Speaker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listWidth: 350,
      stick: false
    };
  }

  // Determine if the diamond is onscreen and return the appropriate styling
  getDiamondStyle(lowerBound, upperBound) {
    // Check if the window center is between the bounds
    const windowCenter = window.scrollY + window.innerHeight / 2;
    const isOnEricDiv = lowerBound <= windowCenter && windowCenter < upperBound;
    if (isOnEricDiv) {
      return { background: primaryColor };
    } else {
      return { background: grayColor };
    }
  }

  // Set the state for the diamonds styling
  setDiamonds() {
    this.setState({
      fuelStyle: this.getDiamondStyle(0, this.state.ericsHeight),
      ericsStyle: this.getDiamondStyle(
        this.state.ericsHeight,
        this.state.topicsHeight
      ),
      topicsStyle: this.getDiamondStyle(
        this.state.topicsHeight,
        this.state.journeyHeight
      ),
      journeyStyle: this.getDiamondStyle(this.state.journeyHeight, Infinity)
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.updateDiamonds, true);

    // Set up the slippery Div
    const slipperyDivHeight = this.refs.slipperyDiv.getBoundingClientRect().y;
    const slipperyDivWidth = this.refs.slipperyDiv.getBoundingClientRect().width;

    // Get the heights for the divs to be nav'ed by the diamonds
    const fuelHeight = this.refs.fuelYourTeamsVision.getBoundingClientRect().y;
    const ericsHeight = this.refs.EricsSpeakingPhilosophy.getBoundingClientRect().y;
    const topicsHeight = this.refs.speakingTopics.getBoundingClientRect().y;
    const journeyHeight = this.refs.journeyToOneRedmond.getBoundingClientRect().y;
    this.setState(
      {
        initialSlipperyHeight: slipperyDivHeight,
        divWidth: slipperyDivWidth,
        fuelHeight: fuelHeight,
        ericsHeight: ericsHeight,
        topicsHeight: topicsHeight,
        journeyHeight: journeyHeight
      },
      () => this.setDiamonds()
    );
    if(this.props.match.params){
      const spot = this.props.match.params.name;
      let height = 0;
      if(spot == "keynote"){
        height = fuelHeight;
      }
      else if(spot == "workshops"){
        height = ericsHeight;
      }
      else if(spot == "inspirational"){
        height = topicsHeight
      }
      else if(spot == "corporate"){
        height = journeyHeight;
      }
      window.scroll({
        top: height - window.innerHeight / 4,
        left: 0,
        behavior: "smooth"
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.updateDiamonds);
  }

  // Set the diamonds styling base on window position
  updateDiamonds = () => {
    const shouldStick =
      this.state.initialSlipperyHeight - stickHeight < window.scrollY;
    this.setState({
      stick: shouldStick
    });
    this.setDiamonds();
  };

  getScrollToFunction(height) {
    return () => {
      window.scroll({
        top: height - window.innerHeight / 4,
        left: 0,
        behavior: "smooth"
      });
    };
  }

  render() {
    const { classes } = this.props;
    return (
        <div>
          {/*<HeroImage source={require('assets/img/hero.jpg')} heading="THE VOICE TO BREAK BARRIERS" />*/}
          <div className={classes.container} style={{paddingTop: '2%'}}>
					<div style={{width: '100%', height: '50vh'}}>
					<iframe width="100%" height="100%" src="https://www.youtube.com/embed/KO0DX2_Gu4g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
					</div>
          <GridContainer spacing={24}>
						<GridItem xs={12} md={12}>
							
						</GridItem>
            <GridItem xs={12} md={4} hidden={['xs','s'].includes(this.props.width)}>
              <div ref="slipperyDiv" hidden={this.state.stick} className={classes.slippery}>
                <List>
                  <ListItem button onClick={this.getScrollToFunction(this.state.fuelHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.fuelStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="KEYNOTE" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.ericsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.ericsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="WORKSHOPS" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.topicsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.topicsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="INSPIRATIONAL" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.journeyHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.journeyStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="CORPORATE" />
                  </ListItem>
                </List>
              </div>
              <div style={{ width: this.state.divWidth }} hidden={!this.state.stick} className={classes.sticky}>
                <List>
                  <ListItem button onClick={this.getScrollToFunction(this.state.fuelHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.fuelStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="KEYNOTE" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.ericsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.ericsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="WORKSHOPS" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.topicsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.topicsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="INSPIRATIONAL" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.journeyHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.journeyStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="CORPORATE" />
                  </ListItem>
                </List>
              </div>
            </GridItem>
            <GridItem item xs={12} md={8}>
              <div>
        <div style={{marginBottom: '20%'}} ref="fuelYourTeamsVision">
          <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
	    		KEYNOTE
	    	  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">When it comes to choosing a professional speaker for your next event, you won’t find someone who will leave your audience or colleagues with such a sense of enthusiasm, passion for life, and a YOU CAN attitude as Dr. Eric J. Scroggins. </Typography>
          <Typography component="h3" variant="h3" paragraph="true">As a result, Eric’s speaking style incorporates humor, stories, information, and above all, inspiration that gives the audience a sense of passion to achieve extraordinary results. </Typography>
          <Typography component="h3" variant="h3" paragraph="true">If you are looking for a speaker who will leave a lasting impression and cause your audience to take action, then book Eric today.</Typography>
        </div>
        <hr style={{ borderColor: primaryColor }}/>
        <div className={classes.section} ref="EricsSpeakingPhilosophy">
	    	  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
	    		WORKSHOPS
	    	  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Eric loves working with groups to obtain common goals. Whether he is provided with the needs of a team or whether he develops a presentation based on the organization’s industry and current issues his training is tailored and delivered with such energy that the solutions are easily received, and the work begins before the group even leaves the event!</Typography>
          <Typography component="h3" variant="h3" paragraph="true">It isn’t uncommon to find Dr. Scroggins engaging with the audience prior to and after the presentation. Making a human connection and encouraging participants to dig deep is what he does best and he wants to hear and understand that what he is delivering is what is needed.</Typography>
        </div>
          <hr style={{ borderColor: primaryColor }}/>
        <div className={classes.section} ref="speakingTopics">
	    	  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
	    		INSPIRATIONAL
	    	  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Dr. Scroggins has been delivering insightful messages of hope and inspiration to audiences around the world since 1991. Whether your audience is 10 or 10,000, in North America or abroad, Eric knows that audiences want to hear real-life stories about real people that can help them relate his message to achieving their own successes.</Typography>
          <Typography component="h3" variant="h3" paragraph="true">Eric can deliver a tailor-made message of inspiration that will leave your audience mesmerized and ready for more.</Typography>
          <Typography component="h3" variant="h3" paragraph="true">Eric’s speaking philosophy is to ensure that he connects with the audience members and understands their greatest desires. He knows that audiences want to hear real-life stories about real people that can help them relate the message to achieving their own destinies and he delivers just that.</Typography>
        </div>
          <hr style={{ borderColor: primaryColor }}/>
        <div className={classes.section} ref="journeyToOneRedmond">
	    	  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
	    		CORPORATE
	    	  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Eric works with each client to develop a customized presentation to meet the organization’s needs and goals. He is sure to provide takeaways that are aligned with the client’s desired outcomes and that can be immediately applied and measured. </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Because Dr. Scroggins has worked in the corporate arena in both for-profit and non-profit capacities, he has a powerful understanding of what needs to be presented to audiences looking to level up. He takes great pride in providing the necessary information to make a shift that can radically change the course of an organization in a positive direction.</Typography>
          <Typography component="h3" variant="h3" paragraph="true">This is a list of topics Dr. Scroggins can tailor for your audience, but he is always open to developing topic that will resonate with your organization.</Typography>
          <ul>
            <li><Typography component="h3" variant="h3">Shattering Barriers</Typography></li>
            <li><Typography component="h3" variant="h3">Embracing Change</Typography></li>
            <li><Typography component="h3" variant="h3">Pursuing Your Passions</Typography></li>
            <li><Typography component="h3" variant="h3">Overcoming Your Fears</Typography></li>
            <li><Typography component="h3" variant="h3">Growing Small Businesses</Typography></li>
            <li><Typography component="h3" variant="h3">Selling in Any Economy</Typography></li>
            <li><Typography component="h3" variant="h3">Prospecting Properly</Typography></li>
            <li><Typography component="h3" variant="h3">Connecting Correctly - The Power of Teamwork</Typography></li>
            <li><Typography component="h3" variant="h3">Leading with Vision</Typography></li>
            <li><Typography component="h3" variant="h3">Breaking the Limiting Beliefs</Typography></li>
            <li><Typography component="h3" variant="h3">Creating a Healthy Lifestyle</Typography></li>
            <li><Typography component="h3" variant="h3">Achieving Prosperity</Typography></li>
          </ul>
        </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
    </div>
    )
  }
}

export default withStyles(styles)(withWidth()(Speaker));
