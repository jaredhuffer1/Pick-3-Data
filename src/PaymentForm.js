import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import './PaymentForm.css';

const stripePromise = loadStripe('YOUR_PUBLISHABLE_KEY');

function PaymentForm() {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardDetails = {
      name: cardName,
      number: cardNumber,
      expiry: expiry,
      cvv: cvv,
    };

    // Create a Stripe token using the card details
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

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="payment-form-container">
      <h2>Become a Member</h2>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Cardholder Name:</label>
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Card Number:</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Expiry:</label>
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>CVV:</label>
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            />
          </div>
          <button type="submit">Pay For Membership</button>
        </form>
      )}
      <button onClick={handleToggleForm}>
        {showForm ? 'Hide Form' : 'Show Form'}
      </button>
    </div>
  );
}

export default PaymentForm;
