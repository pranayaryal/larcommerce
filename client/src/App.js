import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './components/CheckoutForm';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Logout from './components/Logout';

//const stripePromise = loadStripe(process.env.STRIPE_TEST_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  console.log('root component has been injected');
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={() => (
          <HomePage />
        )}
        />
        <Route path="/checkout" render={() => (
          <section className="section">
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </section>
        )}
        />
        <Route path="/login" render={() => (
          <section className="section">
            <Login />
          </section>
        )}
        />
        <Route path="/logout" render={() => (
          <section className="section">
            <Logout />
          </section>
        )}
        />
        <section className="section">
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </section>
      </Switch>
    </div>
  );
}

export default App;
