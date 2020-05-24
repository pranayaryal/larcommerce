import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Logout = props => {

  const handleClick = async (ev) => {
    ev.preventDefault();
    console.log('you are in submit');

    const headers = {
      'Content-Type': 'application/json'
    }

    const data = {}

    await axios.post('/logout', data, {
      headers: headers
    })
      .then(res => console.log(res))
      .catch(error => {
        console.log(error);

      });
  }


  useEffect(() => {
    //Sets the csrf token https://laravel.com/docs/7.x/sanctum
    axios.get('/sanctum/csrf-cookie').then(response => {
      //
    })
  }, []);

  return (
    <div>
      <button onClick={handleClick} className="button is-info" >
       Logout 
      </button>

    </div>
  )
};

export default Logout;