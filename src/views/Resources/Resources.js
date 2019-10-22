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
import Slide from "@material-ui/core/Slide";
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

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

function Transition(props) {
  return <Slide direction="down" {...props} />;
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
      successModalOpen: false,
      failureModalOpen: false
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

  handleSuccess = () => {
    this.handleModalClose();
    this.handleSuccessModalOpen();
  }

  handleError = () => {
    this.handleModalClose();
    this.handleFailureModalOpen();
  }

  handleSuccessModalOpen = () => this.setState({ successModalOpen: true });
  handleSuccessModalClose = () => this.setState({ successModalOpen: false });

  handleFailureModalOpen = () => this.setState({ failureModalOpen: true });
  handleFailureModalClose = () => this.setState({ failureModalOpen: false });

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
                <StripeProvider apiKey="pk_live_RukkQ92SnRf7R1whBTXrkG5Z">
                  <Elements>
                    <CheckoutModal 
                        open={this.state.modalOpen} 
                        handleClose={this.handleModalClose}
                        handleSuccess={this.handleSuccess}
                        handleError={this.handleError}
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
       <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal
          }}
          open={this.state.successModalOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleSuccessModalClose}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
       >
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
            style={{width: '80vw'}}
          >
              <Typography style={{color: 'green'}}>
                Your order has been placed successfully!
              </Typography>
          </DialogContent>
        </Dialog>
       <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal
          }}
          open={this.state.failureModalOpen}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.handleFailureModalClose}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
       >
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
            style={{width: '80vw'}}
          >
              <Typography style={{color: 'green'}}>
                An error has occured placing your order
              </Typography>
          </DialogContent>
        </Dialog>
    </div>
    );
  }
}

export default withStyles(styles)(ShoppingCartPage);
