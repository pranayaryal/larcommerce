import React, { useState } from 'react';
import { ProductConsumer } from '../context';

import productStyles from './product.module.scss';

const Product = ({ match }) => {
    const id = match.params.id;
    const [ quantity, setQuantity ] = useState(1);

    const decrementQuantity = () => {
        quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0)
    }

    return (
        <div>
            <ProductConsumer>
                {value => {
                    const product = value.getProduct(match.params.id);
                        return (<div key={product.id}>
                            <section className={productStyles.itemContain}>
                                <section className="img">
                                    <img className={productStyles.productImg}src={require(`../static/products/${product.img}`)} />
                                </section>
                                <section className="product-info">
                                    <h1 className={productStyles.productName}>{product.name}</h1>
                                    <h4 className={productStyles.price}>{product.price}</h4>
                                    <p>{product.description}</p>
                                    <p className={productStyles.productParagraph}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto velit dolores repudiandae animi quidem, eveniet quod dolor facilis dicta eligendi ullam error. Assumenda in fugiat natus enim similique nam itaque.</p>
                                    <p className={productStyles.quantity}>
                                        <button className={productStyles.updateNum} onClick={decrementQuantity}>-</button>
                                        <input className={productStyles.productInput} type="number" value={quantity}/>
                                        <button className={productStyles.updateNum} onClick={e => setQuantity(quantity + 1)}>+</button>
                                    </p>
                                    <p>
                                        Available in additional colors: 
                                        <strong>
                                            <span style={{ color: `${product.color}` }}>{ product.color}</span>
                                        </strong>
                                    </p>
                                    <p>
                                        <button className={productStyles.productButton} onClick={() => value.addToCart(id)}>Add To Cart</button>
                                    </p>
                                </section>
                            </section>
                            <div className="review">
                                <h2>Reviews</h2>
                                <p>{product.review}</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto placeat consequatur voluptas sit mollitia ratione autem, atque sequi odio laborum, recusandae quia distinctio voluptatibus sint, quae aliquid possimus exercitationem.</p>
                            </div>
                        </div>
                        )}}

            </ProductConsumer>
        </div>
    );
}

export default Product;
