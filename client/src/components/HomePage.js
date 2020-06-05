import React, { useState, useEffect } from 'react'
import axios from 'axios';

import Navbar from './Navbar';
import Card from './Card';


const HomePage = props => {
  const [cartItems, getCartItems] = useState(null)
  const [ showModal, setShowModal ] = useState(false);

  useEffect(() => {
    axios.get('/cart-items')
      .then(res => console.log(res))
      .catch(err => console.log(err.res))

  }, [cartItems]);

  const handleDetailsClick = () => {
    console.log('you clicked detail')
    console.log(showModal)
    setShowModal(!showModal);
    console.log(showModal)
  }

  useEffect(() => {

    const show = () => {
      setShowModal(showModal)
    }

    show();
  }, [showModal])

  return (
    <div>
      <Navbar />
      <section className="hero is-medium is-dark is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hi</h1>
            <h2 className="subtitle">Get paid for your business</h2>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Card handleDetailsClick={handleDetailsClick}/>
            </div>
            <div className="column">
              <Card handleDetailsClick={handleDetailsClick}/>
            </div>
            <div className="column">
              <Card handleDetailsClick={handleDetailsClick}/>
            </div>
            <div className="column">
              <Card handleDetailsClick={handleDetailsClick}/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;