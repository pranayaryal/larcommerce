import React, { useState, useEffect } from 'react';
import axios from 'axios';

import LoginForm from './LoginForm';
axios.defaults.withCredentials = true;

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError ] = useState("");

  useEffect(() => {
    //Sets the csrf token https://laravel.com/docs/7.x/sanctum
    axios.get('/sanctum/csrf-cookie').then(response => {
      //
    })

    
  }, []);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    const data = {
      email,
      password
    }

    const headers = {
      'Content-Type': 'application/json'
    }

    await axios.post('/login', data, {
      headers: headers
    })
      .then(res => {
        setError(res.data.success);
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.response.status === 422){
          console.log(error.response);
          setError(error.response.data.errors.email[0]);
          // setEmail('');
          setPassword('');
        }

      });
    //apply login logic here


  }


  const handleEmailChange = ev => {
    setError('');
    setEmail(ev.target.value)
  }


  const handlePasswordChange = ev => {
    setError('');
    setPassword(ev.target.value)
  }


  return (
    <div className="ml-40 mr-40 max-w-sm px-20 py-20">
    { props.loggedIn ?? 
      <LoginForm 
        handleEmailChange={handleEmailChange}
        handlePasswordChange={handlePasswordChange}
        handleSubmit={handleSubmit}
        error={error}
        />
    }

    </div>
  )
};

export default Login;