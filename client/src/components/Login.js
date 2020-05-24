import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ error, setError ] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('you are in submit');
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
      .then(res => console.log(res))
      .catch(error => {
        if (error.response.status === 422){
          console.log(error.response);
          setError(error.response.data.message);
        }

      });
    //apply login logic here
  }

  axios.defaults.withCredentials = true;

  useEffect(() => {
    //Sets the csrf token https://laravel.com/docs/7.x/sanctum
    axios.get('/sanctum/csrf-cookie').then(response => {
      //
    })
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Please login</p>
        <div className="columns">
          <div className="column is-one-third">
            <input
              className="input"
              type="text"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <input
              className="input"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="button is-info" >
          Login
      </button>
      </form>

    </div>
  )
};

export default Login;