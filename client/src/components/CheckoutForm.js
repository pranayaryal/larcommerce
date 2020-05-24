import React, { useState } from 'react';
import {
  useStripe,
  useElements,
  CardElement,
} from '@stripe/react-stripe-js';

//import CardSection from './CardSection';
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [ error, setError ] = useState("");


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

  const handleSubmit = async (event) => {
    setError('');
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const result = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
      billing_details: {
        // Include any additional collected billing details.
        name: 'Jenny Rosen',
      },
    });

    handlePaymentMethodResult(result);
  };

  const handlePaymentMethodResult = async (result) => {
    console.log('you are in handlePaymentMethodResult');
    if (result.error) {
      setError(result.error.message); 
      // An error happened when collecting card details,
      // show `result.error.message` in the payment form.
    } else {
      // Otherwise send paymentMethod.id to your server (see Step 3)
      const response = await fetch('http://larserver.app/api/pay', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'X-CSRF-TOKEN': csrf_token
        },
        body: JSON.stringify({
          payment_method_id: result.paymentMethod.id,
        }),
      });

      const serverResponse = await response.json();

      console.log(serverResponse);

      handleServerResponse(serverResponse);
    }
  };

  const handleServerResponse = (serverResponse) => {
    if (serverResponse.error) {
      // An error happened when charging the card,
      // show the error in the payment form.
    } else {
      setError("Congrats your payment succeeded");
      // Show a success message
    }
  };

  const handleCardChange = (event) => {
    if (event.error) {
      // Show `event.error.message` in the payment form.
      setError(event.error.message);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <p>{error}</p>
      <CardElement onChange={handleCardChange} options={CARD_ELEMENT_OPTIONS}/>
      {/* <CardSection /> */}
      <br />
      <button type="submit" disabled={!stripe} className="button is-info">
        Submit Payment
      </button>
    </form>
  );
}

export default CheckoutForm;