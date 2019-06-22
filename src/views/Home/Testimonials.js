import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Star from "@material-ui/icons/Star";
import Iframe from 'react-iframe';
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Muted from "components/Typography/Muted.jsx";
import Warning from "components/Typography/Warning.jsx";

import testimonialsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/testimonialsStyle.jsx";
import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";

import kendall from "assets/img/faces/kendall.jpg";
import christian from "assets/img/faces/christian.jpg";


function SectionTestimonials({ ...props }) {
  const { classes, ...rest } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
      <div
        className={`${classes.testimonials} ${
          classes.testimonial2
        }`}
        style={{backgroundColor: "white", color: 'black'}}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <Carousel {...settings}>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardBody plain>
                      <h5 className={classes.cardDescription} style={{color: primaryColor, fontWeight: 'bold'}}>
                        "My dear friends Dr. Eric and Saundra, you left us on fire here in Uganda! Everybody is on fire and they can’t wait to put into practice everything you taught us! Everybody keeps asking that when is Dr. Eric and Saundra coming back this YEAR!!! The teachings, impartation and fire you ignited among us is so incredible. I appreciate your time and man, the workshops were Devine, practical, and life changing…."
                      </h5>
                      <h4 className={classes.cardTitle}>Martin Ssepuuya</h4>
                      <Muted>
                        <h6>CEO, Asante Tours Safaris & Travel LTD.</h6>
                      </Muted>
                    </CardBody>
                  </Card>
                </div>
                <div style={{height: '40vh'}}>
                  <Card testimonial plain className={classes.card2} style={{height: '40vh'}}>
                    <CardBody plain style={{height: '100%'}}>
		  <iframe src="https://player.vimeo.com/video/340047818" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen/>
	  		</CardBody>
	  	</Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardBody plain>
                      <h5 className={classes.cardDescription} style={{color: primaryColor, fontWeight: "bold"}}>
                        "Have you ever felt that pull toward something greater, a pull that comes from a place rooted so deep you know in your heart it is your true direction, yet it is rooted so deep that the way there, the way from where you are now to where you want to be is obscure and seemingly nonexistent?  Through Eric Scroggins’ book, through his lessons and through his passion, you will find your way; you will find your way to the life you only thought could exist in a dream. Get ready to find your vision, and live it."
                      </h5>
                      <h4 className={classes.cardTitle}>Jennifer Lee Tracy</h4>
                      <Muted>
                        <h6>Author of Sincerely, The Mentor: A Journey of Perception</h6>
                      </Muted>
                    </CardBody>
                  </Card>
                </div>
                <div style={{height: '40vh'}}>
                  <Card testimonial plain className={classes.card2} style={{height: '50vh'}}>
                    <CardBody plain style={{height: '100%'}}>
                      <iframe src="https://player.vimeo.com/video/340045487" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen/>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardBody plain>
                      <h5 className={classes.cardDescription} style={{color: primaryColor, fontWeight: 'bold'}}>
                        Good Afternoon Eric,
                      </h5>
                      <h5 className={classes.cardDescription} style={{color: primaryColor, fontWeight: 'bold'}}>
                        I wanted to personally thank you for Saturday. The class was epic on many levels for the team and our family members.
                        You had a keen ability to help my daughter regain herself after her panic attack, for that I thank you.
                        You’re an amazing speaker and I hope to learn from you in the future. 
                        Appreciate all that you do for NLC!
                      </h5>
                      <h4 className={classes.cardTitle}>Rachel</h4>
                    </CardBody>
                  </Card>
                </div>
                <div>
                  <Card testimonial plain className={classes.card2}>
                    <CardBody plain>
                      <h5 className={classes.cardDescription} style={{color: primaryColor, fontWeight: 'bold'}}>
                        Eric - Just had a phenomenal day. Got out of my own way and saw some big positive results so I'm pumped!
                        Been in a funk since Tuesday. But our talk today and my mentality going into today turned things around!
                      </h5>
                      <h4 className={classes.cardTitle}>Mike Lee</h4>
                    </CardBody>
                  </Card>
                </div>
              </Carousel>
            </GridItem>
          </GridContainer>
        </div>
      </div>
  );
}

export default withStyles(testimonialsStyle)(SectionTestimonials);
