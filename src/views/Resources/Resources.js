import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { withStyles, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Close from "@material-ui/icons/Close";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import ShoppingCartRow from "views/Resources/ShoppingCartRow.js";
// core components
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";

import hardcover from "assets/img/vision-blockers.png";
import paperback from "assets/img/vision-blockers.png";
import spanish from "assets/img/vision-blockers-spanish.jpg";

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
      cartTotal: 0.0
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
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
    const data = new FormData(e.target);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Parallax
          image={require("assets/img/examples/bg2.jpg")}
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
                <h2 className={classes.title}>Shopping Page</h2>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)} style={{paddingBottom: '5%'}}>
          <div className={classes.container}>
            <GridContainer spacing={12}>
              <GridItem md={4} sm={12}>
                <ShoppingCartRow image={hardcover} title="Vision Blockers - Hardcover" price={this.state.hardcoverPrice} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} quantity={this.state.hardcover} total={this.state.hardcoverTotal} incrementQuantity="hardcover" incrementPrice="hardcoverPrice" incrementTotal="hardcoverTotal"/>
              </GridItem>
              <GridItem md={4} sm={12}>
                <ShoppingCartRow image={paperback} title="Vision Blockers - Paperback" price={this.state.paperbackPrice} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} quantity={this.state.paperback} total={this.state.paperbackTotal} incrementQuantity="paperback" incrementPrice="paperbackPrice" incrementTotal="paperbackTotal"/>
              </GridItem>
              <GridItem md={4} sm={12}>
                <ShoppingCartRow image={spanish} title="Obstaculos a su Vision" price={this.state.spanishPrice} handleIncrement={this.handleIncrement} handleDecrement={this.handleDecrement} quantity={this.state.spanish} total={this.state.spanishTotal} incrementQuantity="spanish" incrementPrice="spanishPrice" incrementTotal="spanishTotal"/>
              </GridItem>
              <GridItem md={12}>
                <Typography variant="h3" component="h3" align="right">
                  Total <small>$</small>{this.state.cartTotal.toFixed(2)}
                </Typography>
                <Button type="submit" color="primary" round style={{float: 'right'}}>
                  Complete Purchase <KeyboardArrowRight />
                </Button>
              </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
    );
  }
}

export default withStyles(shoppingCartStyle)(ShoppingCartPage);
