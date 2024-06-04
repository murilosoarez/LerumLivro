import React, { useState, useContext } from 'react';
import { AccountContext } from './Account';
import axios from 'axios';

import Private from '../ProtectedRoutes';
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const navigate = useNavigate();
    
    const { setUser } = useContext(AccountContext)
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
        await axios.post("http://localhost:8080/login", data, {withCredentials: true, headers })
        .then((response) => {
                if (response.data.loggedIn) {
                    setUser({...response.data});
                    navigate('/Home');
                } else {
                    setMessage(response.data.message);
                }
            })
            .catch((err) => {
                setMessage(err);
            })
    }

    return (
        <form class = 'Form' onSubmit={sendData}>
            <h3> Bem vindo novamente </h3>
            {message ? <p>{message}</p> : ""}
            <section>
                <label>Usuário</label>
                <input name='user' type='text' onChange={valorInput}></input>
            </section>
            <section>
                <label>Senha</label>
                <input name='password' type='password' onChange={valorInput}></input>
            </section>
            <section>
                <input id = 'submit' type='submit' value = 'Enviar'></input>
            </section>
            <section>
                <span> Não possui conta? <a href = "/Register">Registre-se aqui!</a></span>
            </section>
        </form>
    )
}
