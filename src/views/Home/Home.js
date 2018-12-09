import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
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


import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.jsx";
import coaching from "assets/coaching.jpg";
import speaking from "assets/speaking.png";

import speakingCards from 'views/Home/speakingCards.js';
import coachingCards from 'views/Home/coachingCards.js';

const actions = [
  'succeed',
  'achieve',
  'overcome',
  'breakthrough'
];

class Components extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      index : 0,
    };
    setInterval(() => {
      this.setState({
        index: (this.state.index += 1) % 4
      });
    }, 3000);
  }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Parallax image={require("assets/img/hero.jpg")} style={{marginTop: "80px"}}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand} style={{textAlign: "center", marginTop: "100px"}}>
                  <h1 className={classes.title} style={{fontSize: "50", backgroundColor: "rgba(0,0,0,.3)", padding: "20px 50px"}} >YOU CAN <span className="fade-in" style={{textDecoration: "underline"}}>{actions[this.state.index]}</span></h1>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main)}>
          <h1 style={{margin: "auto", textAlign: "center", paddingTop: "25px", color: primaryColor}}>Meet Eric</h1>
          <hr style={{width: "70%"}}/>
          <GridContainer style={{padding: "50px 25px"}}>
            <GridItem md={4} style={{marginLeft: "50px", textAlign: "center"}}>
                <img className={classes.imgCardTop} src={coaching} style={{width: "80%", margin:"auto"}} />
            </GridItem>
            <GridItem md={6}>
              <h3>
                Dr. Eric J. Scroggins is an author, professional keynote speaker, pastor, banker, and recognized business leader. He has worked in both corporate and non-profit enterprises bringing leadership expertise, motivation, and strategic thinking to each assignment. Eric is most noted for transforming organizations and creating exceptional performance through proven sales techniques, improving customer service, and helping employees engage more effectively. His passion is to help others reach new heights by overcoming barriers and turning their careers or businesses into personal success stories. Dr. Scroggins is also the founder of M6 Global Resources, a not for profit resource generator bringing assistance to people around the world.
              </h3>
            </GridItem>
          </GridContainer>
        </div>

        <div style={{paddingTop: '7%'}}>
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <img src={require('assets/img/speakerLogo.png')} style={{height: 'auto', maxWidth: '50%', }}/>
          </div>
          <GridContainer style={{margin: "5%"}}>
            { speakingCards.map((card, index) => (
              <GridItem md={3} style={{margin: "0px"}}>
                <HomeCard src={card.src} title={card.title} body={card.body} link={card.link}/>
              </GridItem>
            ))}
          </GridContainer>
        </div>
        <Testimonials/>
        <div style={{paddingTop: '7%'}}>
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <img src={require('assets/img/coachLogo.png')} style={{height: 'auto', maxWidth: '50%', }}/>
          </div>
          <GridContainer style={{margin: "5%"}}>
            { coachingCards.map((card, index) => (
              <GridItem md={3} style={{margin: "0px"}}>
                <HomeCard src={card.src} title={card.title} body={card.body} link={card.link}/>
              </GridItem>
            ))}
          </GridContainer>
        </div>
        <div>
          <GridContainer style={{margin: "5%"}}>
            <GridItem md={12} style={{margin: '5%'}}>
              <h1 style={{color: primaryColor, textAlign: "center"}}>Videos</h1>
            </GridItem>
            <GridItem md={4} style={{margin: '3% 0'}}>
              <div style={{height: '30vh'}}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6gGkWIC1JR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </GridItem>
            <GridItem md={4} style={{margin: '3% 0'}}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6gGkWIC1JR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </GridItem>
            <GridItem md={4} style={{margin: '3% 0'}}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/6gGkWIC1JR4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </GridItem>
          </GridContainer>
        </div>
    </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
