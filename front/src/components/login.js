import React, { useState } from 'react';
import axios from 'axios';

export default function Login() {

    const [data, setData] = useState({
        user: '',
        password: ''
    });

    const valorInput = e => setData({ ...data, [e.target.name]: [e.target.value] });

    const [message, setMessage] = useState('');

    const sendData = async (e) => {

        e.preventDefault()
        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }
        
        await axios.post("http://localhost:8080/login", data, headers)

            .then((response) => {
                setMessage(response.data.message);
            })
            .catch((err) => {
                setMessage(err);
            })
    }

    return (
        <form onSubmit={sendData}>
            {message ? <p>{message}</p> : ""}
            <section>
                <label>Usuário:</label>
                <input name='user' type='text' onChange={valorInput}></input>
            </section>
            <section>
                <label>Senha:</label>
                <input name='password' type='password' onChange={valorInput}></input>
            </section>
            <section>
                <input type='submit'></input>
            </section>
        </form>
    )
}
