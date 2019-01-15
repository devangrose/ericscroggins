import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import imagesStyles from "assets/jss/material-kit-pro-react/imagesStyles.jsx";
import Remove from "@material-ui/icons/Remove";
import Add from "@material-ui/icons/Add";

import { cardTitle } from "assets/jss/material-kit-pro-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle
};

class ShoppingCartRow extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Card style={{ width: "20rem", margin: 'auto' }}>
        <img
          style={{ height: "auto", width: "100%", display: "block" }}
          className={classes.imgCardTop}
          src={this.props.image}
          alt={this.props.alt}
        />
        <CardBody>
          <h4 className={classes.cardTitle}>{this.props.title}</h4>
          <GridContainer spacing={12}>
            <GridItem md={4} xs={4} style={{float: 'left'}}>
              <p>
                Cost
              </p>
            </GridItem>
            <GridItem md={4} xs={4} style={{float: 'left'}}>
              <p>
                Quantity
              </p>
            </GridItem>
            <GridItem md={4} xs={4} style={{float: 'left'}}>
              <p>
                Total
              </p>
            </GridItem>
            <GridItem md={4} xs={4} style={{float: 'right'}}>
              <p>
                ${this.props.price}
              </p>
            </GridItem>
            <GridItem md={4} xs={4} style={{float: 'right'}}>
              <p>
                {this.props.quantity}
              </p>
            </GridItem>
            <GridItem md={4} xs={4} style={{float: 'right'}}>
              <p>
                {this.props.total > 0 ? `$${this.props.total}` : ''}
              </p>
            </GridItem>
          </GridContainer>
          <div className={classes.buttonGroup}>
            <Button
              color="primary"
              size="sm"
              round
              className={classes.firstButton}
              onClick={() => this.props.handleDecrement(this.props.incrementQuantity,this.props.incrementPrice,this.props.incrementTotal)}
            >
              <Remove />
            </Button>
            <Button
              color="primary"
              size="sm"
              round
              className={classes.lastButton}
              onClick={() => this.props.handleIncrement(this.props.incrementQuantity,this.props.incrementPrice,this.props.incrementTotal)}
            >
              <Add />
            </Button>
          </div>
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(style)(ShoppingCartRow);
