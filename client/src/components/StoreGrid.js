import React, { useState } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

import storegridStyles from './storegrid.module.scss';

const StoreGrid = ({ match }) => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    const [priceRange, setPriceRange] = useState(200);


    return (
        <ProductConsumer>
            {value => {
                const products = value.getProductsFromParam(match.params.gender);
                const filteredProducts = products.filter(el => el.price <= priceRange)

                return <div className="storegrid">
                    <section className="content">
                        {filteredProducts.map(product =>
                            <div className={storegridStyles.item} key={product.id}>
                                <div className={storegridStyles.imgContain}>
                                    <Link to={`/product/${product.id}`}>
                                        <img src={require(`../static/products/${product.img}`)} />
                                    </Link>
                                </div>
                                <h3>{product.name}</h3>
                                <h4 className="price">{product.price}</h4>
                                <Link to={`/product/${product.id}`}>
                                    <button className="multi-item">View Item ></button>
                                </Link>
                            </div>
                        )
                        }
                    </section>
                    { 
                      (match.params.gender !== 'cart') ?  //using ternary operator

                        <aside className={storegridStyles.storeAside}>
                            <h3>Special Sales</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?</p>
                            <h3>Filter by Price:</h3>
                            <p style={{ 'marginTop': '5px' }}>
                                Max Price <strong>{priceRange}</strong>
                            </p>
                            <span className="min">{min}</span>
                            <input type="range"
                                className="slider"
                                id="pricerange"
                                step="0.1"
                                min="0"
                                max="200"
                                defaultValue={priceRange}
                                onChange={e => setPriceRange(e.target.value)}
                            />
                            <span className="max">{max}</span>
                        </aside>
                        : null
                    }
                </div>
            }}
        </ProductConsumer>

    );
}

export default StoreGrid;
