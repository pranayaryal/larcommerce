import React from 'react';
import ReactDOM from 'react-dom';
import './App.scss';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './components/CheckoutForm';

//const stripePromise = loadStripe(process.env.STRIPE_TEST_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  console.log('root component has been injected');
  return (
    <div className="container">
      <section className="section">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </section>
    </div>
  );
}

export default App;
