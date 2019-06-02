import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles, Typography } from "@material-ui/core";
import { primaryColor } from "assets/jss/material-kit-pro-react.jsx";
// @material-ui/icons
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ShoppingCartRow from "views/Resources/ShoppingCartRow.js";
// core components
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutModal from "views/Resources/CheckoutModal.js";

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";


import hardcover from "assets/img/vision-blockers.png";
import paperback from "assets/img/vision-blockers.png";
import spanish from "assets/img/vision-blockers-spanish.jpg";

const styles = {
  ...shoppingCartStyle,
  gridContainer: {
    marginTop: '5%',
  },
  a: {
    color: 'white',
    width: '100%',
    height: '100%',
    '&:visited': {
      color: 'white'
    }
  }
}


class ShoppingCartPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hardcover: 0,
      hardcoverPrice: 24.95,
      hardcoverTotal: 0,
      paperback: 0,
      paperbackTotal: 0,
      paperbackPrice: 19.99,
      spanish: 0,
      spanishPrice: 19.99,
      spanishTotal: 0,
      cartTotal: 0.0,
      modalOpen: false,
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  }
  handleModalClose = () => {
    this.setState({ modalOpen: false });
  }
  handleIncrement = (quantity,price,total) => {
    let obj = {};
    obj[quantity] = this.state[quantity] + 1;
    obj[total] = parseFloat(this.state[price] * obj[quantity]).toFixed(2);
    obj['cartTotal'] = parseFloat((this.state[price] + this.state['cartTotal']).toFixed(2))
    this.setState(
      obj
    );
  }
  handleDecrement = (quantity, price, total) => {
    if(this.state[quantity] > 0){
      let obj = {};
      obj[quantity] = this.state[quantity] - 1;
      obj[total] = parseFloat(this.state[price] * obj[quantity]).toFixed(2);
      obj['cartTotal'] = parseFloat((this.state['cartTotal'] - this.state[price]).toFixed(2))
      this.setState(
        obj
      );
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { classes } = this.props;
    return (
      <div style={{marginBottom: '5%'}}>
        <Parallax
          image2={require("assets/img/examples/bg2.jpg")}
          image={require("assets/books.jpg")}
          filter="dark"
          small
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem
                md={8}
                sm={8}
                className={classNames(
                  classes.mlAuto,
                  classes.mrAuto,
                  classes.textCenter
                )}
              >
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)} style={{paddingBottom: '5%'}}>
          <div className={classes.container}>
            <div style={{paddingTop: '5%'}}>
              <Typography variant="h1" component="h1" style={{color: primaryColor}} align="center">
                Vision Blockers Online Course
              </Typography>
              <Typography variant="h3" component="h3" align="center" paragraph>
                (includes a copy of the book Vision Blockers)
              </Typography>
              <Typography variant="h3" component="h3" align="center">
                 Where Change Begins!
              </Typography>
              <Typography variant="h3" component="h3" align="center" paragraph style={{marginTop: '1%'}}>
                Walk with me through this series where we will go deeper into my book, Vision Blockers, and I will teach you HOW to apply the concepts to make lasting change.
              </Typography>
              <Typography variant="h3" component="h3" align="center" paragraph style={{marginTop: '1%'}}>
                With these materials I will help you to recognize your power and your capacity to remove the barriers that are keeping you from achieving the life you desire!
              </Typography>
              <div style={{textAlign: 'center'}}>
                <Button variant="contained" color="primary">
                  <a href="https://ericscroggins.clickfunnels.com/order-page" target="_blank" className={classes.a}>
                    Click Here to Register!
                  </a>
                </Button>
              </div>
            </div>
						<hr style={{width: '80%', margin: '10% auto', borderColor: primaryColor}}/>
            <GridContainer spacing={12} className={classes.gridContainer}>
              <GridItem sm={12} md={12}>
                <Typography variant="h1" component="h1" style={{color: primaryColor}} align="center" paragraph>
                  Buy A Copy Here!
                </Typography>
              </GridItem>
              <GridItem md={4} sm={12}>
                <div style={{height: "100%"}}>
                  <ShoppingCartRow image={hardcover} title="Vision Blockers - Hardcover" price={this.state.hardcoverPrice} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} quantity={this.state.hardcover} total={this.state.hardcoverTotal} incrementQuantity="hardcover" incrementPrice="hardcoverPrice" incrementTotal="hardcoverTotal"/>
                </div>
              </GridItem>
              <GridItem md={4} sm={12}>
                <div style={{height: "100%"}}>
                  <ShoppingCartRow image={paperback} title="Vision Blockers - Paperback" price={this.state.paperbackPrice} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} quantity={this.state.paperback} total={this.state.paperbackTotal} incrementQuantity="paperback" incrementPrice="paperbackPrice" incrementTotal="paperbackTotal"/>
                </div>
              </GridItem>
              <GridItem md={4} sm={12}>
                <div>
                  <ShoppingCartRow image={spanish} title="Obstaculos a su Vision" price={this.state.spanishPrice} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} quantity={this.state.spanish} total={this.state.spanishTotal} incrementQuantity="spanish" incrementPrice="spanishPrice" incrementTotal="spanishTotal"/>
                </div>
              </GridItem>
              <GridItem md={12} style={{marginTop: '3%'}}>
                <Typography variant="h3" component="h3" align="right">
                  Total <small>$</small>{this.state.cartTotal.toFixed(2)}
                </Typography>
                <Button type="submit" color="primary" round style={{float: 'right'}} onClick={this.handleModalOpen}>
                  Complete Purchase <KeyboardArrowRight />
                </Button>
                <StripeProvider apiKey="pk_test_A9oaJL9EGtWykQ3nxDXTYfhm">
                  <Elements>
                    <CheckoutModal 
                        open={this.state.modalOpen} 
                        handleClose={this.handleModalClose}
                        numHardCover={this.state.hardcover}
                        numPaperBack={this.state.paperback}
                        numSpanish={this.state.spanish}
                    />
                  </Elements>
                </StripeProvider>
              </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* ------------------------ Modal Code ------------------------------- */}
    </div>
    );
  }
}

export default withStyles(styles)(ShoppingCartPage);
