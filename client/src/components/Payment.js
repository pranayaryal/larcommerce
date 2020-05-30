import React from 'react';

import Card from './Card';

const Payment = props => {
    return (
        <div>
                    <section className="payment">
                        <Card />
                        <div className="total">
                            <div className="caption">
                                <p>
                                    <strong>Subtotal:</strong>
                                </p>
                                <p>Shipping</p>
                                <p className='golden'>Total:</p>
                            </div>
                            <div className="num">
                                <p>
                                    <strong>10</strong>
                                </p>
                                <p>Free Shipping</p>
                                <p className="golden">100</p>
                            </div>
                        </div>

                    </section>
            
        </div>
    );
}

export default Payment;
