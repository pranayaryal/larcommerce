import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  useStripe,
  useElements,
  CardElement,
  CardElementProps
} from '@stripe/react-stripe-js';

axios.defaults.withCredentials = true;

//import CardSection from './CardSection';
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [cardSuccess, setCardSuccess] = useState("");
  const [ clientSecret, setClientSecret ] = useState("");

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
      hidePostalCode: false,
    }
  }

  const handleSubmit = async (event) => {
    setError('');
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    const client_secret = await createPaymentIntent();

    if (!stripe || !elements) {
      return; 
    }

    console.log(`The client secret is ${clientSecret}`)

    const result = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Pranay Aryal'
        }
      }
    })

    if (result.error) {
      console.log(result.error)
        //  
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        console.log('payment succeeded');
        elements.getElement(CardElement).clear()
        // Show a success message to your customer
        // There's a risk of the customer closing the window before callback
        // execution. Set up a webhook or plugin to listen for the
        // payment_intent.succeeded event that handles any business critical
        // post-payment actions.
        
      }
    }

  };

  const createPaymentIntent = async () => {
      const headers = {
        'Content-Type': 'application/json'
      }
      // Otherwise send paymentMethod.id to your server (see Step 3)
      const data = JSON.stringify({
      })

      let client_secret;

      await axios.post('/pay', data, {
        headers: headers
      })
      .then(res => {
        client_secret = res.data.client_secret;
      })

      return client_secret;

  }


  const handlePaymentMethodResult = async (result) => {

    if (result.error) {
      setCardSuccess(result.error.message);
      // An error happened when collecting card details,
      // show `result.error.message` in the payment form.
    } else {

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
        .then(res => {
          if (res.data.success) {
            setCardSuccess("That was successful"); 
            elements.getElement(CardElement).clear();
          }
          else{
            setCardSuccess(res.data.error);
            elements.getElement(CardElement).clear()
          }
        })
        .catch(error => {

          if (error.response.status === 401) {
            setCardSuccess(`${error.response.statusText}, please login to send payment`);
            elements.getElement(CardElement).clear()
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
    if (event.error) {
      // Show `event.error.message` in the payment form.
      setError(event.error.message);
    }
  };


  return (
    // <div className="ml-40 mr-40 max-w-sm px-30 py-10">
    <div className="container mx-auto px-50 py-10 ml-40 mr-40 max-w-sm">
      <p className="text-gray-700">{error}</p>
      <p className="text-purple-700 mb-2 text-sm">{cardSuccess}</p>
      <form onSubmit={handleSubmit}>
        <CardElement
          onChange={handleCardChange}
          options={CARD_ELEMENT_OPTIONS} 
          />
        <br />
        <button type="submit" disabled={!stripe} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Submit Payment
      </button>
      </form>
    </div>
  );
}

export default CheckoutForm;