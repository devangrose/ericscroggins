import React, { Component } from "react";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { withStyles, Typography } from "@material-ui/core";
import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";

import { primaryColor, grayColor } from "assets/jss/material-kit-pro-react.jsx";

const styles = {
    ...componentsStyle,
    sticky: {
        position: "fixed",
        top: "200px"
    },
    slippery: {
        position: "relative",
        top: "200px"
    },
    fillRect: {
        fill: grayColor,
        strokeWidth: ".5",
        stroke: primaryColor,
    },
    fillPath: {
        fill: "none",
        strokeWidth: ".5",
        stroke: primaryColor,
    },
    upperDiamond: {
        width: "0",
        height: "0",
        border: "50px solid transparent",
        borderBottomColor: grayColor,
        position: "relative",
        top: "-50px",
        marginBottom: "75px",
    },
    lowerDiamond: {
        content: '',
        position: "relative",
        left: "-50px",
        top: "50px",
        width: "0",
        height: "0",
        border: "50px solid transparent",
        borderTopColor: grayColor,
    },
    
};

class Speaker extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stick: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.checkScroll, true);
  }

  checkScroll = (e) => {
    this.setState({
      stick: window.scrollY > 200
    });
  }

  render(){
    const { classes } = this.props;
    return(
      <div className={classes.container} onScroll={this.checkScroll}>
        <GridContainer spacing={12}>
          <GridItem xs={12}>
            <h2 style={{ textAlign: "center" }} >HERO IMAGE</h2>
          </GridItem>
          <GridItem xs={4}>
            <div>
              <div className={classes.upperDiamond}>
                <div className={classes.lowerDiamond}>
                </div>
              </div>
              <div className={classes.upperDiamond}>
                <div className={classes.lowerDiamond}>
                </div>
              </div>
              <div className={classes.upperDiamond}>
                <div className={classes.lowerDiamond}>
                </div>
              </div>
              <div className={classes.upperDiamond}>
                <div className={classes.lowerDiamond}>
                </div>
              </div>
              <div style={{
                borderLeft: "6px solid " + primaryColor,
                height: "500px",
                marginLeft: "47px",
                top: "-610px",
                position: "relative",
                zIndex: "-1",
               }}>
              </div>
            </div>
            <div hidden="true">
              <img hidden={!this.state.stick || true} className={classes.sticky} src="http://www.picsum.photos/300/600" alt="" />
              <img hidden={this.state.stick || true} className={classes.slippery} src="http://www.picsum.photos/300/600" alt="" />
            </div>
          </GridItem>
          <GridItem xs={8}>
            <div onScroll={this.checkScroll}>
              <div>
                <Typography component="h3" variant="h3" paragraph="true">When it comes to choosing a professional speaker for your next event, you’ll find no one more respected wtih more insight, no one who will leave your audience or colleagues with such a sense of enthusiasm, passion for life, and a “can do” attitude as Dr. Eric J. Scroggins.  Eric is one of the most gifted communicators of our generation, and sense 1991, he has been delivering dynamic messages of hope and inspiration ot audiences around the world.  Whether your audience is 10 or 10,000, in North America or abroad, Eric can deliver a tailor-made message of inspiration that will leave your audience mesmerized and ready for more. </Typography>
              </div>
        <hr style={{ borderColor: primaryColor }}/>
              <div>
              <Typography component="h3" variant="h3" paragraph="true">Eric’s speaking philosophy is to ensure that he connects with the audience members and understands their greatest desires.  He knows that audiences want to hear real-life stories about real people that can help them relate the message to achieving their own destinies.  It isn’t uncommon to find Dr. Scroggins engaging with the audience prior to and after the presentation, making a human connection and inspiring participants to reach eyond their perceived limitations.  As a result, Eric’s speaking style incorporates humor, stories, information, and above all, inspiration that gives the audience a sense of passion to achieve extraordinary results. </Typography>
              </div>
        <hr style={{ borderColor: primaryColor }}/>
              <div>
                <Typography component="h3" variant="h3" paragraph="true">
OneRedmond is the start-up economic development organization located in Redmond, Washington.  This group was formed through a merger of three legacy organizations: Greater Redmond Chamber of Commerce, Realize Redmond and Redmond Economic Development Alliance.  In an effort to create one central entity with a focus on driving economic vitality throughout Redmond and Seattle’s eastside, OneRedmond was formed in 2011 and launched in 2012 and has become a world CLASS economic development organization.
                </Typography>
                <Typography component="h3" variant="h3" paragraph="true">
The formation and launch process was not an easy one.  Each legacy group had certain expectations and preconceived ideas regarding the new organization.  As an early adopter and founding board member, my role was to assist each person involved see the vision of the new organization and to promote the overall benefits to the community.  Today, I am honored to serve as the President of the Board of Directors or a second term with a vision to help OneRedmond impact a larger geographic area and provide powerful tools to drive economic vitality in our region.  As of our latest management report, OneRedmond has achieved its annual goals in business expansion and has assisted in bringing more than 5 companies to the Redmond area with great work happening in community development and robust partnerships forming with education.
                </Typography>
                <Typography component="h3" variant="h3" paragraph="true">
OneRedmond is focused on four main areas: Business Acquisition, Business Retention, Community Development and Education.  These four areas form the basis for the strategic plan to make Redmond the place of choice for new business and growing businesses.
                </Typography>
                <Typography component="h3" variant="h3" paragraph="true">
View his OneRedmond Keynote Address here.
                </Typography>
              </div>
        <hr style={{ borderColor: primaryColor }}/>
              <div>
                <ul>
                  <li><Typography component="h3" variant="h3">Shattering Barriers</Typography></li>
                  <li><Typography component="h3" variant="h3">Embracing Change</Typography></li>
                  <li><Typography component="h3" variant="h3">Pursuing Your Passions</Typography></li>
                  <li><Typography component="h3" variant="h3">Overcoming Your Fears</Typography></li>
                  <li><Typography component="h3" variant="h3">Growing Small Businesses</Typography></li>
                  <li><Typography component="h3" variant="h3">Selling In Any Economy</Typography></li>
                  <li><Typography component="h3" variant="h3">Prospecting Properly</Typography></li>
                  <li><Typography component="h3" variant="h3">Connecting Correctly – The Power of Teamwork</Typography></li>
                  <li><Typography component="h3" variant="h3">Leading With Vision</Typography></li>
                  <li><Typography component="h3" variant="h3">Breaking the Limiting Beliefs</Typography></li>
                  <li><Typography component="h3" variant="h3">Creating a Healthy Lifestyle</Typography></li>
                  <li><Typography component="h3" variant="h3">Achieving Prosperity</Typography></li>
                </ul>
              </div>
        <hr style={{ borderColor: primaryColor }}/>
              <div>
                <Typography component="h3" variant="h3">Eric’s speaking philosophy is to ensure that he connects with the audience members and understands their greatest desires.  He knows that audiences want to hear real-life stories about real people that can help them relate the message to achieving their own destinies.  It isn’t uncommon to find Dr. Scroggins engaging with the audience prior to and after the presentation, making a human connection and inspiring participants to reach eyond their perceived limitations.  As a result, Eric’s speaking style incorporates humor, stories, information, and above all, inspiration that gives the audience a sense of passion to achieve extraordinary results. </Typography>
              </div>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    )
  }
}

export default withStyles(styles)(Speaker);
