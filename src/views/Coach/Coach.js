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
      if(spot == "oneonone"){
        height = fuelHeight;
      }
      else if(spot == "group"){
        height = ericsHeight;
      }
      else if(spot == "personal"){
        height = topicsHeight
      }
      else if(spot == "professional"){
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
          <div className={classes.container} style={{paddingTop: '2%'}}>
					<div style={{width: '100%', height: '50vh'}}>
						<iframe width="100%" height="100%" src="https://www.youtube.com/embed/ksB9f6QLlRY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture fullscreen;" allowfullscreen></iframe>
					</div>
          <GridContainer spacing={24}>
		<GridItem xs={12} md={12}>
							
		</GridItem>
            <GridItem xs={12} md={4} style={{ display: ['xs','sm'].includes(this.props.width) ? 'none' : ''}}>
              <div ref="slipperyDiv" hidden={this.state.stick || ['xs','sm'].includes(this.props.width)} className={classes.slippery}>
                <List>
                  <ListItem button onClick={this.getScrollToFunction(this.state.fuelHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.fuelStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="ONE-ON-ONE" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.ericsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.ericsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="GROUP" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.topicsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.topicsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="PERSONAL" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.journeyHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.journeyStyle}> </div>
                    </ListItemIcon>

                    <ListItemText primary="PROFESSIONAL" />
                  </ListItem>
                </List>
              </div>
              <div style={{ width: this.state.divWidth }} hidden={!this.state.stick || ['xs','sm'].includes(this.props.width)} className={classes.sticky}>
                <List>
                  <ListItem button onClick={this.getScrollToFunction(this.state.fuelHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.fuelStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="ONE-ON-ONE" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.ericsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.ericsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="GROUP" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.topicsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.topicsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="PERSONAL" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.journeyHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.journeyStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="PROFESSIONAL" />
                  </ListItem>
                </List>
              </div>
            </GridItem>
            <GridItem item xs={12} md={8}>
              <div>
                <div style={{marginBottom: '20%'}} ref="fuelYourTeamsVision">
                  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
                  ONE-ON-ONE
                  </Typography>
                  <Typography component="h3" variant="h3" paragraph="true">
                    Targeted, confidential, accountable conversations that focus on the specific areas holding you back or limiting your performance.  In life and business everyone needs someone to talk too and focus in on the barriers getting in the way.  Dr. Scroggins has an innate and intuitive ability to ask question and give direction that lead to quick change and incredible results.  This allows you to be introduced to you in a whole new way.
                  </Typography>
                  <Typography component="h3" variant="h3" paragraph="true">
                    Eric’s one-on-one coaching is designed specifically for you.  Custom tailored to the areas that are most important to your overall success.  This targeted approach allows you to focus and “win” faster with sustainable results.
                  </Typography>
                  <Typography component="h3" variant="h3" paragraph="true">
                    Dr. Scroggins helps you personally and professionally realize that “YOU CAN”.
                  </Typography>
                        </div>
                <hr style={{ borderColor: primaryColor }}/>
                        <div className={classes.section} ref="EricsSpeakingPhilosophy">
                  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
                  GROUP
                  </Typography>
                  <Typography component="h3" variant="h3" paragraph="true">
                    Coaching with likeminded leaders in a group setting or with your team allows synergy to drive the learning process.  Dr. Scroggins utilizes the dynamic of the group as a powerful tool to help you meet objectives.  He engages the synergistic learning that the group environment provides and allows the differing mindsets to stretch your thinking to new levels.
                  </Typography>
                  <Typography component="h3" variant="h3" paragraph="true">
                    Group coaching with Eric is fun, encouraging and filled with humor and real conversations that help you partner with colleagues for greater success.
                  </Typography>
                </div>
                <hr style={{ borderColor: primaryColor }}/>
                <div className={classes.section} ref="speakingTopics">
                  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
                  PERSONAL
                  </Typography>
                  <Typography component="h3" variant="h3" paragraph="true">
                    Are you ready to dig deep?  When it comes to personal development high performers are constantly exploring their inner most thoughts and beliefs to identify what’s holding them back.  Personal coaching with Dr. Scroggins encourages you to dig deeper to find those things while simultaneously develop a customized plan of action to overcome each one.
                  </Typography>
                </div>
                <hr style={{ borderColor: primaryColor }}/>
                <div className={classes.section} ref="journeyToOneRedmond">
                  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
                  PROFESSIONAL
                  </Typography>
                  <Typography component="h3" variant="h3" paragraph="true">
                    High performance productivity requires certain habits and disciplines.  If you want to become a high-performance professional that reaches untapped levels of success it takes professional coaching.  Dr. Scroggins will help you build in discipline, create habits and provide resources that will propel you to the next level of success and productivity.
                  </Typography>
                  <Typography component="h3" variant="h3" paragraph="true">
                  Whether through technology, a collaborative connected community or with a customized strategy for your industry and position, Dr. Scroggins will partner with you to reach these unexplored heights.
                  </Typography>
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
