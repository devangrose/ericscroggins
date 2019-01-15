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
// core components
import Parallax from "components/Parallax/Parallax.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Footer from "components/Footer/Footer.jsx";
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
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <form onSubmit={this.handleSubmit}>
            <Card plain>
              <CardBody plain>
                <h3 className={classes.cardTitle}>Shopping Cart</h3>
                <Table
                  tableHead={[
                    "",
                    "PRODUCT",
                    "PRICE",
                    "QTY",
                    "AMOUNT",
                  ]}
                  tableData={[
                    [
                      <div className={classes.imgContainer}>
                        <img src={hardcover} alt="..." className={classes.img} />
                      </div>,
                      <span>
                        <a href="#jacket" className={classes.tdNameAnchor}>
                          Vision Blockers - Hardcover
                        </a>
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> {this.state.hardcoverPrice.toFixed(2)}
                      </span>,
                      <span>
                        <Typography component="body1" variant="body1">
                          {this.state.hardcover}
                        </Typography>
                        <div className={classes.buttonGroup}>
                          <Button
                            color="primary"
                            size="sm"
                            round
                            className={classes.firstButton}
                            onClick={() => this.handleDecrement("hardcover","hardcoverPrice","hardcoverTotal")}
                          >
                            <Remove />
                          </Button>
                          <Button
                            color="primary"
                            size="sm"
                            round
                            className={classes.lastButton}
                            onClick={() => this.handleIncrement("hardcover","hardcoverPrice","hardcoverTotal")}
                          >
                            <Add />
                          </Button>
                        </div>
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> {this.state.hardcoverTotal}
                      </span>,
                    ],
                    [
                      <div className={classes.imgContainer}>
                        <img src={paperback} alt="..." className={classes.img} />
                      </div>,
                      <span>
                        Vision Blockers - Paperback
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> {this.state.paperbackPrice}
                      </span>,
                      <span>
                        <Typography component="body1" variant="body1">
                          {this.state.paperback}
                        </Typography>
                        <div className={classes.buttonGroup}>
                          <Button
                            color="primary"
                            size="sm"
                            round
                            className={classes.firstButton}
                            onClick={() => this.handleDecrement('paperback','paperbackPrice','paperbackTotal')}
                          >
                            <Remove />
                          </Button>
                          <Button
                            color="primary"
                            size="sm"
                            round
                            className={classes.lastButton}
                            onClick={() => this.handleIncrement('paperback','paperbackPrice','paperbackTotal')}
                          >
                            <Add />
                          </Button>
                        </div>
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> {this.state.paperbackTotal}
                      </span>,
                    ],
                    [
                      <div className={classes.imgContainer}>
                        <img src={spanish} alt="..." className={classes.img} />
                      </div>,
                      <span>
                        Obstaculos a su Vision
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> {this.state.spanishPrice}
                      </span>,
                      <span>
                        <Typography component="body1" variant="body1">
                          {this.state.spanish}
                        </Typography>
                        <div className={classes.buttonGroup}>
                          <Button
                            color="primary"
                            size="sm"
                            round
                            className={classes.firstButton}
                            onClick={() => this.handleDecrement('spanish','spanishPrice','spanishTotal')}
                          >
                            <Remove />
                          </Button>
                          <Button
                            color="primary"
                            size="sm"
                            round
                            className={classes.lastButton}
                            onClick={() => this.handleIncrement('spanish','spanishPrice','spanishTotal')}
                          >
                            <Add />
                          </Button>
                        </div>
                      </span>,
                      <span>
                        <small className={classes.tdNumberSmall}>$</small> {this.state.spanishTotal}
                      </span>,
                    ],
                    {
                      purchase: true,
                      colspan: "3",
                      amount: (
                        <span>
                          <small>$</small>{this.state.cartTotal.toFixed(2)}
                        </span>
                      ),
                      col: {
                        colspan: 3,
                        text: (
                          <Button type="submit" color="primary" round >
                            Complete Purchase <KeyboardArrowRight />
                          </Button>
                        )
                      }
                    }
                  ]}
                  tableShopping
                  customHeadCellClasses={[
                    classes.textCenter,
                    classes.description,
                    classes.description,
                    classes.textRight,
                    classes.textRight,
                    classes.textRight
                  ]}
                  customHeadClassesForCells={[0, 2, 3, 4, 5, 6]}
                  customCellClasses={[
                    classes.tdName,
                    classes.customFont,
                    classes.customFont,
                    classes.tdNumber,
                    classes.tdNumber + " " + classes.tdNumberAndButtonGroup,
                    classes.tdNumber + " " + classes.textCenter
                  ]}
                  customClassesForCells={[1, 2, 3, 4, 5, 6]}
                />
              </CardBody>
            </Card>
          </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(shoppingCartStyle)(ShoppingCartPage);
