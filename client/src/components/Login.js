import React, { useState, useEffect } from 'react';

const Login = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log('you are in submit');
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
        <div className="columns">
          <div className="column is-one-third">
            <input className="input" type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="columns">
          <div className="column is-one-third">
            <input className="input" type="text" placeholder="email" onChange={(e) => setPassword(e.target.value)} />
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