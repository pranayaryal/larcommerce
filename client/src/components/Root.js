import React from 'react';
import ReactDOM from 'react-dom';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';

//const stripePromise = loadStripe(process.env.STRIPE_TEST_KEY);
const stripePromise = loadStripe(process.env.MIX_STRIPE_PUBLISHABLE_KEY);

const Root = () => {
    console.log('root component has been injected');
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
}

export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}
