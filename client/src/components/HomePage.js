import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Navbar from './Navbar';
import Card from './Card';
import Landing from './Landing';


const HomePage = props => {
  const [cartItems, getCartItems] = useState(null)
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get('/cart-items')
      .then(res => console.log(res))
      .catch(err => console.log(err.res))

  }, [cartItems]);


  return (
<div>
      {/* <Navbar /> */}
    <div className="container px-2">
      {/* <Card /> */}
    </div>
    <Landing />
</div>
  );
};

export default HomePage;