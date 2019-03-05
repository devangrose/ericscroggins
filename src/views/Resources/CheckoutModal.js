import axios from 'axios';
import React, {Component} from 'react';
import Input from '@material-ui/core/Input';
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import shoppingCartStyle from "assets/jss/material-kit-pro-react/views/shoppingCartStyle.jsx";
import {CardElement, injectStripe, StripeProvider} from 'react-stripe-elements';
import "../../App.css";
import { withStyles, Typography } from "@material-ui/core";
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
  constructor(props){
    super(props);
    this.state = {
        name: "",
        email: "",
        line1: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
    };
  }

  handleSubmit = (ev) => {
    ev.preventDefault();

    if (this.props.stripe) {
      this.props.stripe
        .createToken()
        .then((payload) => {
          this.createOrder(payload);
          console.log('[token]', payload)
        });
    } else {
      console.log("Stripe.js hasn't loaded yet.");
    }
  };

  createOrder = (token) => {
      let purchases = {
          'hardcover': this.props.numHardCover,
          'paperback': this.props.numPaperBack,
          'spanish': this.props.numSpanish
      }
      let address = {
          line1: this.state.line1,
          city: this.state.city,
          postal_code: this.state.postal_code,
          country: this.state.country,
          state: this.state.state,
      }
      axios({
        method: 'POST',
        url: 'https://jwt030zmy5.execute-api.us-east-1.amazonaws.com/default/scroggins-stripe',
        data: {
          token: token,
          purchases: purchases,
          address: address,
          name: this.state.name,
          email: this.state.email,
        },
        headers: {
               'Content-Type': 'application/json',
        }
      }).then(response => console.log('[lambda]', response));
  }


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
                  <Typography variant="h2"> Payment Form </Typography>
                <label>
                    Name
                    <Input name="name" required={true} placeholder="Your name" fullWidth={true}
                      onChange={event => this.setState({name: event.target.value})}/>
                </label>
                <label>
                    Email
                    <Input type="email" name="email" required={true} placeholder="example@gmail.com" fullWidth={true}
                      onChange={event => this.setState({email: event.target.value})}/>
                </label>
                <label>
                    Street Address
                    <Input name="line1" required={true} placeholder="1234 Main Street" fullWidth={true}
                      onChange={event => this.setState({line1: event.target.value})}/>
                </label>
                <label>
                    City
                    <Input name="city" required={true} placeholder="San Francisco" fullWidth={true}
                      onChange={event => this.setState({city: event.target.value})}/>
                </label>
                <label>
                    State
                    <Input name="state" required={true} placeholder="CA" fullWidth={true}
                      onChange={event => this.setState({state: event.target.value})}/>
                </label>
                <label>
                    Postal Code
                    <Input name="postal_code" required={true} placeholder="94111" fullWidth={true}
                      onChange={event => this.setState({postal_code: event.target.value})}/>
                </label>
                <label>
                    Country
                    <Input name="country" required={true} placeholder="US" fullWidth={true}
                      onChange={event => this.setState({country: event.target.value})}/>
                </label>
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
