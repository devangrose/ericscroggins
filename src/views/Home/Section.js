import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HomeCard from 'Components/Card.js';

const styles = {
  
};

class Section extends Component {
  render(){
    const { classes } = this.props;
    return (
        <div style={{paddingTop: '7%'}}>
          <div style={{margin: 'auto', textAlign: 'center'}}>
            <img src={this.props.img} style={{height: 'auto', maxWidth: '50%', }}/>
          </div>
          <GridContainer style={{margin: "5%", textAlign: 'center'}}>
            { this.props.cards.map((card, index) => (
              <GridItem md={12 / this.props.cards.length} style={{margin: "0px, auto"}}>
                <div style={{height: "100%"}}>
                  <HomeCard src={card.src} title={card.title} body={card.body} link={card.link}/>
                </div>
              </GridItem>
            ))}
          </GridContainer>
        </div>
    )
  }
}

export default withStyles(styles)(Section);
