import React, { useState } from 'react';
import { ProductConsumer } from '../context';
import { Link } from 'react-router-dom';

const StoreGrid = ({ match }) => {
    const [pricerange, setPricerange] = useState(200);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);
    console.log('you are in storegrid')

    const handlePriceRange = e => {
        setPricerange(e.target.value)
        console.log(pricerange);
    }

    return (
        <div className="storegrid">
            <section className="content">
                <ProductConsumer>
                    {value => {
                        const products = value.getFemale();
                        return products.map(product =>
                            <div className="item" key={product.id}>
                                <div className="img-contain">
                                    <img src={require(`../static/products/${product.img}`)} />
                                </div>
                                <h3>{product.name}</h3>
                                <h4 className="price">{product.price}</h4>
                                <Link to={`/product/${product.id}`}>
                                    <button className="multi-item">View Item ></button>
                                </Link>

                            </div>
                            )


                        }}
                </ProductConsumer>
            </section>
            <aside>
                <h3>Special Sale</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam libero iusto nemo laboriosam perferendis voluptas ullam officiis, quibusdam quas quam eveniet est fugit delectus corporis incidunt nam esse suscipit itaque?</p>
                <h3>Filter by Price:</h3>
                <p style={{ 'margin-top': '5px' }}>
                    Max Price
                    <strong>{pricerange}</strong>
                </p>
                <input type="range"
                    className="slider"
                    id="pricerange"
                    step="0.1"
                    min="0"
                    max="200"
                    onChange={handlePriceRange}
                />
                <span className="min">{min}</span>
                <span className="max">{max}</span>
            </aside>



        </div>
    );
}

export default StoreGrid;
