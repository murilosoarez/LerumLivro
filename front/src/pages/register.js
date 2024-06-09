
import React from 'react'
import RegisterForm from '../components/forms/Register.jsx'
import statue from '../images/statue.png'

import '../styles/register.sass'
export default function Register() {
  return (
    <div class = 'Main-Register'>
      <div class = 'Left'>
        <h1> lerumLivro </h1>
        <img src = {statue}></img>
      </div>
      <div class = 'Right'>
        <h1> Registre-se aqui! </h1>
        <div class = 'Form'>
          <RegisterForm/>
        </div>
        <a href = "/Login">Voltar</a>
      </div>
    </div>
  )
}
