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
  const [clientSecret, setClientSecret] = useState("");
  const [amount, setAmount] = useState("");

  useEffect(() => {
    //Sets the csrf token https://laravel.com/docs/7.x/sanctum
    axios.get('/sanctum/csrf-cookie').then(response => {
      //
    })

  }, []);

  useEffect(() => {
    setClientSecret('');

    const getClientSecret = async () => {
      const headers = {
        'Content-Type': 'application/json'
      }
      // Otherwise send paymentMethod.id to your server (see Step 3)
      const data = JSON.stringify({
        amount: amount
      })

      await axios.post('/pay', data, {
        headers: headers
      })
        .then(res => {
          setClientSecret(res.data.client_secret);
        })
        .catch(err => console.log(err.response))

    }

    getClientSecret();

  }, [amount])


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

    console.log(`The client secret is ${client_secret}`)

    const result = await stripe.confirmCardPayment(clientSecret, {
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
        setAmount('');
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
      amount: amount
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

  const handleCardChange = (event) => {
    if (event.error) {
      // Show `event.error.message` in the payment form.
      setError(event.error.message);
    }
  };


  return (
    // <div className="ml-40 mr-40 max-w-sm px-30 py-10">
    <div className="container mx-auto px-50 py-10 ml-40 mr-40 max-w-sm">
      {error && <p className="text-gray-700">{error}</p>}
      <p className="text-purple-700 mb-2 text-sm">{cardSuccess}</p>
      <form onSubmit={handleSubmit}>
        <input className="appearance-none block 
        w-full bg-gray-200 text-gray-700 border border-cyan-500 
        rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          type="text"
          placeholder="Amount"
          autoFocus
          onChange={e => setAmount(e.target.value)}
        />
        <CardElement
          onChange={handleCardChange}
          options={CARD_ELEMENT_OPTIONS}
        />
        <br />
        <button type="submit" disabled={!stripe || isNaN(amount)}
          className="bg-blue-500 
        hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          Submit Payment
      </button>
      </form>
    </div>
  );
}

export default CheckoutForm;