import React, { useState } from 'react'
import axios from 'axios'

export default function Shelf() {
    
    const [data, setData] = useState({
        title: '',
        author: '',
        pages: '',
        review: '',
        check: ''
    });

    const valorInput = e => setData({ ...data, [e.target.name]: [e.target.value] });

    const [message, setMessage] = useState('');


    const register = async (e) => {
        e.preventDefault()
        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        }
        await axios.get("http://localhost:8080/login", {withCredentials: true})
        .then((response) => { 
            data.id_user = response.data.id;
        })
        .catch((err) => {
            console.log(err)
        })
        
        await axios.post("http://localhost:8080/shelf", data, headers)

            .then((response) => {
                setMessage(response.data.message)
            })
            .catch((err) => {
                setMessage(err)
            })
        
    }
    return (
        <div>
            <form class = 'Form' onSubmit = {register}>
                <h2> Marque aqui sua leitura! </h2>
                {message ? <p>{message}</p> : ''}
                <section>
                    <label htmlFor="title">Nome do livro: </label>
                    <input name='title' type='text' onChange={valorInput}></input>
                </section>
                <section>
                    <label htmlFor="author">Autor:</label>
                    <input name="author" type="text" onChange={valorInput}></input>
                </section>
                <section>
                    <div>
                        <label htmlFor="pages">Páginas:</label>
                        <input name="pages" type="number" onChange={valorInput}></input>
                    </div>
                    <div>
                    <div>
                        <label htmlFor="check">Aprovado?</label>
                        <input id = 'check' name="check" type="checkbox" onChange={valorInput}></input>
                    </div>
                    </div>
                </section>
                <section>
                    <label htmlFor="review">Escreva o que achou: </label>
                    <textarea name="review" onChange={valorInput}></textarea>
                </section>
                <section class = 'Checked'>
                   
                    <input id = 'submit' type='submit' value = 'Enviar'></input>
                </section>
            </form>
        </div>
    )
}
