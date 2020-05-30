import React from 'react';

import cartstepsStyles from './cartsteps.module.scss';

const CartSteps = () => {
    console.log(`${cartstepsStyles.cartstepsh2}active` );
    return (
        <div>
            <section className={cartstepsStyles.cartsteps}>
                <div className="shopping">
                    <h2 className={cartstepsStyles.cartstepsh2}>01</h2>
                    <h4 className="cartstepsh4">Shopping Cart</h4>
                </div>
                <div className="checkout">
                    <h2 className={cartstepsStyles.cartstepsh2}>02</h2>
                    <h4 className={cartstepsStyles.cartstepsh4}>Shopping Cart</h4>
                </div>
                <div className="order">
                    <h2 className={cartstepsStyles.cartstepsh2}>03</h2>
                    <h4 className={cartstepsStyles.cartstepsh4}>Order Complete</h4>
                </div>
            </section>
            
        </div>
    );
}

export default CartSteps;
