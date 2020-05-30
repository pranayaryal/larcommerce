import React from 'react';

import { ProductConsumer } from '../context';
import Payment from './Payment'

import { Link } from 'react-router-dom';
import cartdisplayStyles from './cartdisplay.module.scss';

const CartDisplay = () => {
    return (
        <ProductConsumer>
            {value => {
                const { cart } = value;
                console.log(cart.length)
                if (cart.length > 0) {
                    return (<section className="cartdisplay">
                        <table className={cartdisplayStyles.carttable}>
                            <tr className={cartdisplayStyles.tablerow}>
                                <th className={cartdisplayStyles.tableheading}>Product</th>
                                <th className={cartdisplayStyles.tableheading}>Price</th>
                                <th className={cartdisplayStyles.tableheading}>Quantity</th>
                                <th className={cartdisplayStyles.tableheading}>Total</th>
                            </tr>
                            {
                                cart.map(item =>
                                    <tr className={cartdisplayStyles.tablerow}>
                                        <td className={cartdisplayStyles.tabledata}>
                                            <img src={require(`../static/products/${item.img}`)} className="productimg"
                                            />
                                            <h3 className="productname">{item.name}</h3>
                                        </td>
                                        <td className={cartdisplayStyles.tabledata}>
                                            <h4 className="price">{item.price}</h4>
                                        </td>
                                        <td className={cartdisplayStyles.tabledata}>
                                            <strong>{item.count}</strong>
                                        </td>
                                        <td className={cartdisplayStyles.tabledata}>
                                            {item.count * item.price}
                                        </td>
                                    </tr>
                                )

                            }

                        </table>
                        <Payment />
                    </section>);
                } else {
                    return <div>
                        <section className="center">
                            <p>Your cart is empty, fill it up!</p>
                            <button className="pay-with-stripe">
                                <Link exact to="/">Back Home</Link>
                            </button>
                        </section>
                        <Payment />
                    </div>
                }
            }
            }
        </ProductConsumer>

    );
}

export default CartDisplay;
