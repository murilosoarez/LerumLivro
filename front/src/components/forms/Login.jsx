import React, { useState, useContext } from 'react';
import { AccountContext } from '../Account';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

import Validating from '../Validating'

import Submit from '../commons/Button/btn'

export default function Login() {
    
    const navigate = useNavigate();
    
    const [data, setData] = useState({
        user: '',
        password: ''
    });

    const { setUser } = useContext(AccountContext)
    
    const valorInput = e => setData({ ...data, [e.target.name]: [e.target.value] });
    
    const [message, setMessage] = useState('');
    const [error, setError] = useState({});
    
    
    const sendData = async (e) => {
        
        e.preventDefault()
        const validate = Validating('login', data);
        if (!validate.result) {
            setError(validate.error);
        } else  {
            console.log(data)
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
      
     
    }

    return (
        <form className = 'Form' onSubmit={sendData}>
            <h3> Bem vindo novamente </h3>
            <section>
                <label>Usuário</label>
                <input name='user' type='text' onChange={valorInput}></input>
                {error.user ? <p style={{ color: 'red' }}>{error.user}</p> : ""}
            </section>
            <section>
                <label>Senha</label>
                <input name='password' type='password' onChange={valorInput}></input>             
                {error.password ? <p style={{ color: 'red' }}>{error.password}</p> : ""}
                {message ? <p style = {{color: 'red'}}>{message}</p> : ""}
            </section>
            <section>
                <Submit/>
            </section>
            <section>
                <span> Não possui conta? <a href = "/Register">Registre-se aqui!</a></span>
            </section>
        </form>
    )
}
