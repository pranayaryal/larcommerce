import React from 'react';
import SaleBoxes from './SaleBoxes'
import FeaturedProducts from './FeaturedProducts';
import TextLockUp from './TextLockUp'


const Home = () => {
    return (
        <div>
                <TextLockUp
                new="new"
                sale="Mens Shoes"
                collection="Collection"
                details="Street Style New Fashion"
                image="shoe1"
                />
                <SaleBoxes />
                <TextLockUp
                new="50%"
                sale="Storewide Sale"
                collection="Summer"
                details="all accessories"
                image="bag"
                />
                <FeaturedProducts />
            
        </div>
    );
}

export default Home;
