import React from 'react';
import { Link } from 'react-router-dom';

import featuredproductsStyle from './featuredproducts.module.scss';

const FeaturedProducts = () => {
    return (
        <div>
            <section className={featuredproductsStyle.featuredProducts}>
                <h2><span>Featured Products</span></h2>
            </section>
            <div className={featuredproductsStyle.featureditems}>
                <div className={featuredproductsStyle.item} >
                    <img src={require(`../static/products/1.jpg`)} />
                    <h3>Great Product</h3>
                    <h4>24.22</h4>
                    <Link to={`/product/1`}>
                        <button className="multi-item">
                            View Item >
                                </button>
                    </Link>
                </div>
                <div className={featuredproductsStyle.item} >
                    <img src={require(`../static/products/3.jpg`)} />
                    <h3>Another awesome Product</h3>
                    <h4>32.22</h4>
                    <Link to={`/product/1`}>
                        <button className="multi-item">
                            View Item >
                                </button>
                    </Link>
                </div>
                <div className={featuredproductsStyle.item} >
                    <img src={require(`../static/products/8.png`)} />
                    <h3>Another awesome Product</h3>
                    <h4>82.22</h4>
                    <Link to={`/product/1`}>
                        <button className="multi-item">
                            View Item >
                                </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProducts;
