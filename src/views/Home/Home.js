import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography } from "@material-ui/core";
// @material-ui/icons
// core components
import Card from "components/Card/Card.jsx";
import Primary from "components/Typography/Primary.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Quote from "components/Typography/Quote.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";
import HomeCard from 'Components/Card.js';
import Testimonials from './Testimonials.js';
import withWidth from '@material-ui/core/withWidth';
import Section from './Section.js';


import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import coaching from "assets/table.jpg";
import coachingLogo from 'assets/img/coachLogo.png';
import consultingLogo from 'assets/img/consultantLogo.png';
import speaking from "assets/img/speakerLogo.png";
import wheel from "assets/wheel.png";

import speakingCards from 'views/Home/speakingCards.js';
import coachingCards from 'views/Home/coachingCards.js';
import consultingCards from 'views/Home/consultingCards.js';

const actions = [
  'succeed',
  'achieve',
  'overcome',
  'break through',
  'accomplish',
  'inspire',
  'scale',
  'grow',
	'take action',
];

class Components extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      index : 0,
    };
  }

  componentDidMount(){
    setInterval(() => {
      this.setState({
        index: (this.state.index + 1) % 4
      });
    }, 1500);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Parallax image={require("assets/home-hero.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand} style={{textAlign: "center", marginTop: "100px"}}>
                  {['lg','xl'].includes(this.props.width) ?
			  <div>
			  	<div>
					<h1 className={classes.title} style={{fontSize: "50", backgroundColor: "rgba(0,0,0,.3)", padding: "20px 50px"}} >YOU CAN </h1>
			  	</div>
			  	<div>
				<h1 className="fade-in" style={{display: "inline", textDecoration: "underline",fontSize: "50", backgroundColor: "rgba(0,0,0,.3)", padding: "20px 50px"}}>{actions[this.state.index]}</h1>
			  	</div>
			  </div>
                    :
                  <h2 className={classes.title} style={{fontSize: "50", backgroundColor: "rgba(0,0,0,.3)", padding: "20px 50px"}} >YOU CAN <span className="fade-in" style={{textDecoration: "underline"}}>{actions[this.state.index]}</span></h2>
                  }
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main)}>
          <h1 style={{margin: "auto", textAlign: "center", paddingTop: "25px", color: primaryColor}}>Meet Eric</h1>
          <hr style={{width: "70%"}}/> <GridContainer style={{padding: "5%"}}>
            <GridItem md={4} style={{textAlign: "center"}}>
                <img className={classes.imgCardTop} src={coaching} style={{width: "80%", margin:"auto"}} />
            </GridItem>
            <GridItem md={6} style={{paddingTop: ['lg','xl'].includes(this.props.width) ? '' : '5%'}}>
              <Typography variant="h3" component="h3" paragraph>
								Eric’s innate ability to connect with others personally, professionally and spiritually is what creates opportunity for him to teach people how to lead a no-limits life. Mr. Scroggins provides the resources for pushing through and taking action to attain success.
              </Typography>
              <Typography variant="h3" component="h3" paragraph>
								Eric believes that education and passion are enhanced when combined with real life experience. He brings these elements together to deliver dynamic and unique services to individuals, teams and organizations that are ready to level-up.
              </Typography>
              <div style={{textAlign: ['lg','xl'].includes(this.props.width) ? '' : 'center'}}>
                <Button color="primary" variant="contained" style={{marginTop: '3%', }}>
                  <Link to='/about' style={{color: 'white', width: '100%', height: '100%'}}>
                    Learn more about Eric here
                  </Link>
                </Button>
              </div>
            </GridItem>
          </GridContainer>
        </div>

        <Section img={speaking} cards={speakingCards}/>

        <Testimonials/>

        <Section img={coachingLogo} cards={coachingCards}/>

        <div style={{backgroundColor: "#ffffff",  textAlign: 'center', padding: ['lg','xl'].includes(this.props.width) ? '0' :'8% 0'}}>
          <img src={wheel} style={{height: "45vh", width: 'auto', margin: '3%'}}/> 
        </div>

        <Section img={consultingLogo} cards={consultingCards}/>

        <div>
          <GridContainer style={{margin: '5%'}}>
            <GridItem md={12}>
              <h1 style={{color: primaryColor, textAlign: "center"}}>Videos</h1>
            </GridItem>
            <GridItem md={4} style={{margin: '3% 0'}}>
              <div style={{height: '30vh'}}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6gGkWIC1JR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </GridItem>
            <GridItem md={4} style={{margin: '3% 0'}}>
              <div style={{height: '30vh'}}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6gGkWIC1JR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </GridItem>
            <GridItem md={4} style={{margin: '3% 0'}}>
              <div style={{height: '30vh'}}>
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6gGkWIC1JR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </GridItem>
          </GridContainer>
        </div>
    </div>
    );
  }
}

export default withStyles(componentsStyle)(withWidth()(Components));
