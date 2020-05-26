import React, { useState, useEffect } from 'react';
import axios from 'axios';
axios.defaults.withCredentials = true;

const Logout = props => {
  const [loggedout, setLoggedout ] = useState(false);

  useEffect( async() => {

    const headers = {
      'Content-Type': 'application/json'
    }

    const body = {};


    await axios.post('/logout', body, {
      headers: headers
    })
      .then(res => {
        setLoggedout(true);
        console.log('logged out')
      })
      .catch(error => {
        console.log('you are in error')
        console.log(error);

      });

  }, [])

  useEffect(() => {
    //Sets the csrf token https://laravel.com/docs/7.x/sanctum
    axios.get('/sanctum/csrf-cookie').then(response => {
      //
    })
  }, []);

  return (
    <div>
      { loggedout ?? <p>You have been logged out</p>}

    </div>
  )
};

export default Logout;