import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.scss';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './components/CheckoutForm';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import axios from 'axios';
axios.defaults.withCredentials = true;

//const stripePromise = loadStripe(process.env.STRIPE_TEST_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const App = () => {
  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    const loginStatus = axios.get('/check-login')
      .then(res => {
        setLoggedIn(res.data.success)
      })
  }, [])

  useEffect(() => {
    //Sets the csrf token https://laravel.com/docs/7.x/sanctum
    axios.get('/sanctum/csrf-cookie').then(response => {
      //
    })
  }, []);

  console.log('root component has been injected');
  return (
    // <div className="container mx-auto px-20 py-10">
    <div>
      <Navbar loggedIn={loggedIn}/>
      <Switch>
        <Route exact path="/" render={() => (
          <HomePage />
        )}
        />
        <Route path="/checkout" render={() => (
          <Elements stripe={stripePromise}>
            <CheckoutForm loggedIn={loggedIn}/>
          </Elements>
        )}
        />
        <Route path="/login" render={() => (
          <section className="section">
            <Login loggedIn={loggedIn}/>
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
