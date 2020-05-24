import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  useStripe,
  useElements,
  CardElement,
  CardElementProps
} from '@stripe/react-stripe-js';

import Cookies from 'js-cookie';

axios.defaults.withCredentials = true;

//import CardSection from './CardSection';
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");

  useEffect(() => {
    //Sets the csrf token https://laravel.com/docs/7.x/sanctum
    axios.get('/sanctum/csrf-cookie').then(response => {
      //
    })

  }, []);


  const CARD_ELEMENT_OPTIONS = {
    iconStyle: 'solid',
    style: {
      base: {
        color: "#32325d",
        lineHeight: '24px',
        fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        }
      },
      invalid: {
        color: '#B71C1C',
        iconColor: "#fa755a"
      },
      focus: {
        color: 'orange'
      },
      hidePostalCode: false
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
      setCardSuccess(result.error.message);
      // An error happened when collecting card details,
      // show `result.error.message` in the payment form.
    } else {
      const props = CardElementProps;
      console.log(`The props are ${props}`);
      const headers = {
        'Content-Type': 'application/json'
      }
      // Otherwise send paymentMethod.id to your server (see Step 3)
      const data = JSON.stringify({
        payment_method_id: result.paymentMethod.id,
      })

      await axios.post('/api/pay', data, {
        headers: headers
      })
        .then(res => console.log(res))
        .catch(error => {

          if (error.response.status === 401) {
            // elements.getElement(CardElement).clear();
            setCardSuccess(`${error.response.statusText}, please login to send payment`);
            elements.getElement(CardElement).clear();
          }
        });



      //handleServerResponse(response);
    }
  };

  const handleServerResponse = (response) => {
    if (response.data.error) {
      // An error happened when charging the card,
      // show the error in the payment form.
      setCardSuccess(response.data.error);
      elements.getElement(CardElement).clear();
    } else {
      setCardSuccess("Congrats your payment succeeded");
      elements.getElement(CardElement).clear();
      // Show a success message
    }
  };

  const handleCardChange = (event) => {
    setCardSuccess("");
    setError("");
    if (event.error) {
      // Show `event.error.message` in the payment form.
      setError(event.error.message);
    }
    else {
      setError('');
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <p>{error}</p>
      <p>{cardSuccess}</p>
      <CardElement
        onChange={handleCardChange}
        options={CARD_ELEMENT_OPTIONS} />
      <br />
      <button type="submit" disabled={!stripe} className="button is-info" >
        Submit Payment
      </button>
    </form>
  );
}

export default CheckoutForm;