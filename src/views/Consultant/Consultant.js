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
      if(spot == "financial"){
        height = fuelHeight;
      }
      else if(spot == "operations"){
        height = ericsHeight;
      }
      else if(spot == "projectfocus"){
        height = topicsHeight
      }
      else if(spot == "salesmarketing"){
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
						<iframe width="100%" height="100%" src="https://www.youtube.com/embed/wYQBi5wMrbQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;" allowfullscreen></iframe>
					</div>
          <GridContainer spacing={24}>
						<GridItem xs={12} md={12}>
							
						</GridItem>
            <GridItem xs={12} md={4} hidden={['xs','sm'].includes(this.props.width)}>
              <div ref="slipperyDiv" hidden={this.state.stick} className={classes.slippery}>
                <List>
                  <ListItem button onClick={this.getScrollToFunction(this.state.fuelHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.fuelStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="FINANCIAL" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.ericsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.ericsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="OPERATIONS" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.topicsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.topicsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="PROJECT FOCUS" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.journeyHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.journeyStyle}> </div>
                    </ListItemIcon>

                    <ListItemText primary="SALES AND MARKETING" />
                  </ListItem>
                </List>
              </div>
              <div style={{ width: this.state.divWidth }} hidden={!this.state.stick} className={classes.sticky}>
                <List>
                  <ListItem button onClick={this.getScrollToFunction(this.state.fuelHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.fuelStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="FINANCIAL" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.ericsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.ericsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="OPERATIONS" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.topicsHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.topicsStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="PROJECT FOCUS" />
                  </ListItem>
                  <ListItem button onClick={this.getScrollToFunction(this.state.journeyHeight)}>
                    <ListItemIcon>
                      <div className={classes.rhomb} style={this.state.journeyStyle}> </div>
                    </ListItemIcon>
                    <ListItemText primary="SALES AND MARKETING" />
                  </ListItem>
                </List>
              </div>
            </GridItem>
            <GridItem item xs={12} md={8}>
              <div>
        <div style={{marginBottom: '20%'}} ref="fuelYourTeamsVision">
	    	  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
	    		FINANCIAL
	    	  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">When you’re looking for rapid results Eric can help you improve performance, and secure larger returns on investment. </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Dr. Scroggins has the skill set to teach you how to gain the knowledge you need to understand the numbers, apply them to acquire a favorable outcome, and to forecast for future, desired results.</Typography>
          <Typography component="h3" variant="h3" paragraph="true">Together you will launch your organization to attain the financial success and security it deserves.</Typography>
        </div>
        <hr style={{ borderColor: primaryColor }}/>
        <div className={classes.section} ref="EricsSpeakingPhilosophy">
	    	  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
	    		OPERATIONS
	    	  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">The fastest ways to achieve your objectives are investing in yourself, your people, and systems. It’s all about leveraging the human asset.</Typography>
          <Typography component="h3" variant="h3" paragraph="true">Eric works with an organization’s existing talent and resources. Often the answers lay not in new information, but in a better use of the information that’s already at hand.  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Transforming cultures is also key and Dr. Scroggins knows how to get your organization moving in a positive direction that will lead you and your team to advance to the next levels!</Typography>
        </div>
          <hr style={{ borderColor: primaryColor }}/>
        <div className={classes.section} ref="speakingTopics">
	    	  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
	    		PROJECT FOCUS
	    	  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Bring Eric to your team to produce the highest-level results on a project and watch the magic happen!</Typography>
          <Typography component="h3" variant="h3" paragraph="true">Eric is your catalyst for achieving breakthrough outcomes. He works with business owners, decision makers and teams collaboratively to obtain clear-cut action points, accountability and the encouragement to see things through. </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Dr. Scroggins has the innate ability to connect with teams that are project-focused by drilling down to the core needs of the project and facilitating the team’s talents to produce the necessary wins.</Typography>
        </div>
          <hr style={{ borderColor: primaryColor }}/>
        <div className={classes.section} ref="journeyToOneRedmond">
	    	  <Typography component="h2" variant="h2" paragraph="true" align="center" style={{color: primaryColor}}>
	    		SALES AND MARKETING
	    	  </Typography>
          <Typography component="h3" variant="h3" paragraph="true">Any successful company starts with a strong sales and marketing team. Knowing your brand, how to sell it and how to get people to sit up and take notice is imperative to growth and success.</Typography>
          <Typography component="h3" variant="h3" paragraph="true">Whether it’s developing a sales process or getting creative when it comes to branding, Dr. Scroggins will walk you through each step, showing you along the way how to achieve higher profit margins and become the trusted authority in your space.</Typography>
          <Typography component="h3" variant="h3" paragraph="true">Eric works toward client-centered objectives and goals with your salespeople and marketing team and his focus is always to transfer skills to you and your team.</Typography>
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
