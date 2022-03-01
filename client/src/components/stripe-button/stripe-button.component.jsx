import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KUHl3F8Va0Ek99biUiiqaFs8kHE3ASpyG0UnZfGOy2jPZArt9MGJ973TO7S3iJFyaUJlLwFU2t3W7kWe7dUxOdM00tttnMBJR";

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      alert('Payment successful')
    }).catch(error => {
      console.log(`Payment error: ${JSON.parse(error)}`)
      alert(
        'There was an issue with your payment. Please make sure you use the provided credit card.'
      )
    })

  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Thomas Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
