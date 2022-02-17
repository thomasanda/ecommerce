import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KUHl3F8Va0Ek99biUiiqaFs8kHE3ASpyG0UnZfGOy2jPZArt9MGJ973TO7S3iJFyaUJlLwFU2t3W7kWe7dUxOdM00tttnMBJR";

  const onToken = (token) => {
    alert("Payment successful!");
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
