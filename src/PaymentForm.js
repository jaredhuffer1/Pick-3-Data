import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

function PaymentForm() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardDetails = {
      name: cardName,
      number: cardNumber,
      expiry: expiry,
      cvv: cvv,
    };

     //Create a Stripe token using the card details
    const stripe = await stripePromise;
    const response = await fetch('/create-payment-token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cardDetails),
    });
    const { token } = await response.json();

    // Use the token to process the payment
    const result = await stripe.confirmCardPayment(token, {
      payment_method: {
        card: {
          name: cardName,
        },
      },
    });

    if (result.error) {
      console.error(result.error);
      // Handle the error case
    } else {
      // Payment successful, show success message
      console.log('Payment successful!');
      // Add logic to handle the successful payment case
    }
  };

  return (
    <div>
      <h2>Payment Information</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Card Holder's Name:
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
        </label>
        <label>
          Card Number:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </label>
        <label>
          Expiry Date:
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
          />
        </label>
        <label>
          CVV:
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
          />
        </label>
        <button type="submit">Submit Payment</button>
      </form>
    </div>
  );
}

export default PaymentForm;
