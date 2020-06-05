import React, { useState } from 'react';
import { storeProducts } from './static/data'

const ProductContext = React.createContext();

const ProductProvider = props => {

    const [products, setProducts] = useState(storeProducts);

    const [ cart, setCart ] = useState([]);

    const getMale = () => {
        return products.filter(el => el.gender === "Male");
    }

    const getFemale = () => {
        return products.filter(el => el.gender === "Female");
    }

    const getProduct = id => {
        return products.filter(el => el.id === id)[0]
    }

    const getProductsFromParam = param => {
        if (param === "all") {
            let allProducts = products
            return allProducts;

        }
        else {
            let filteredProducts = products.filter(el => el.gender === param);
            return filteredProducts;
        }

    }

    const handlePriceRange = (max) => {
        return (products.filter(el => el.price < max ))
    }

    const addToCart = id => {

        let tempProducts = [...products]
        const index = tempProducts.indexOf(getProduct(id))
        const product = tempProducts[index]
        product.count = 1
        const price = product.price
        product.total = price
        setCart([...cart, product])

    }

    const submitToStripe = async(props) => {
        let { token } = await props.stripe.createToken({ name: 'Name' });
        console.log(token)
    }



    return (
        <ProductContext.Provider value={{
            products,
            getMale,
            getFemale,
            getProduct,
            getProductsFromParam,
            addToCart,
            cart,
            submitToStripe,
            handlePriceRange
        }}
        >
            {props.children}
        </ProductContext.Provider>
    );
};

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
