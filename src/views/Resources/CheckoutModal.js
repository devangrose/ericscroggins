import React, {Component} from 'react';
import axios from 'axios';
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";
import {CardElement, injectStripe, StripeProvider} from 'react-stripe-elements';
import "../../App.css";
import { withStyles,} from "@material-ui/core";
import modalStyle from "assets/jss/material-kit-pro-react/modalStyle.jsx";

const styles = {
  ...shoppingCartStyle,
  ...modalStyle,
  root: {
    width: "80%"
  }
}

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

class _CheckoutModal extends Component {
  handleSubmit = (ev) => {
    ev.preventDefault();
    axios({
      method: 'post',
      url: 'https://jwt030zmy5.execute-api.us-east-1.amazonaws.com/default/scroggins-stripe',
      data: {token: 'wut'},
      headers: {
               'Content-Type': 'application/json',
           }
    }).then(response => console.log(response));
    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then((payload) => {
          console.log('[token]', payload)
        });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <div style={{width: '80%'}}>
       <Dialog
          classes={{
            root: classes.modalRoot,
            paper: classes.modal
          }}
          open={this.props.open}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.handleClose}
          aria-labelledby="classic-modal-slide-title"
          aria-describedby="classic-modal-slide-description"
        >
          <DialogContent
            id="classic-modal-slide-description"
            className={classes.modalBody}
            style={{width: '80vw'}}
          >
            <div id="stripe" style={{width: "100%"}}>
              <form onSubmit={this.handleSubmit}>
                <label>
                  Card details
                  <CardElement />
                </label>
                <button onClick={this.handleSubmit}>Pay</button>
              </form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}
const CheckoutModal = injectStripe(_CheckoutModal);

export default withStyles(styles)(CheckoutModal);
