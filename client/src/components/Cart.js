import React from 'react';
import CartSteps from './CartSteps';
// import CartDisplay from './CartDisplay';
import CartDisplay from './CartDisplay';

const Cart = () =>
    <div>
        <CartSteps />
        <hr />
        <h1 className="center">Your Cart</h1>
        {/* <CartDisplay /> */}
        <CartDisplay />


    </div>

export default Cart;