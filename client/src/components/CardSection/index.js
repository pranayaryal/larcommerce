import React, { useState } from 'react';
import { CardElement, useElements } from '@stripe/react-stripe-js';
import ReactDOM from 'react-dom';

//import './style.scss';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    },
    focus: {
      color: 'orange'
    }
  }
}


const CardSection = () => {
  const [error, setError] = useState('');

  const handleCardChange = (event) => {
    if (event.error) {
      // Show `event.error.message` in the payment form.
      setError(event.error.message);
    }
  };

  return (
    <div>
      <p>{error}</p>
      <CardElement options={CARD_ELEMENT_OPTIONS} onChange={handleCardChange} />
    </div>
  );
}

export default CardSection;
