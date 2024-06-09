import React, { useState } from 'react';
import axios from 'axios';

import Submit from '../html/Button/btn';
import Validating from '../Validating';

export default function Register() {
  const [data, setData] = useState({
    user: '',
    email: '',
    password: ''
  });

  const valorInput = e => setData({ ...data, [e.target.name]: e.target.value });

  const [message, setMessage] = useState('');
  const [error, setError] = useState({});

  const register = async (e) => {
    e.preventDefault();

    const validate = Validating('register', data);
    if (!validate.result) {
      setError(validate.error);
    } else {
      const headers = {
        'headers': {
          'Content-Type': 'application/json'
        }
      }

      try {
        const response = await axios.post("http://localhost:8080/register", data, headers);
        setMessage(response.data.message);
        setData({user: '',
        email: '',
        password: ''})
      } catch (err) {
        setMessage(err.message);
      }
    }
  }

  return (
    <form onSubmit={register}>
      {message ? <p>{message}</p> : ""}
      <section>
        <label>Usuário:</label>
        <input name='user' type='text' onChange={valorInput} value={data.user}></input>
        {error.user ? <p style={{ color: 'red' }}>{error.user}</p> : ""}
      </section>
      <section>
        <label>Email:</label>
        <input name='email' type='email' onChange={valorInput} value={data.email}></input>
        {error.email ? <p style={{ color: 'red' }}>{error.email}</p> : ""}
      </section>
      <section>
        <label>Senha:</label>
        <input name='password' type='password' onChange={valorInput} value={data.password}></input>
        {error.password ? <p style={{ color: 'red' }}>{error.password}</p> : ""}
      </section>
      <section>
        <Submit />
      </section>
    </form>
  )
}