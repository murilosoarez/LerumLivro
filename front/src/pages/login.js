import React from 'react'

import Form from '../components/forms/Login'

import palm_1 from '../images/palm-1.png'
import statue from '../images/statue.png'

import '../styles/login.sass'

const Login = () =>  {
  return (
    <div class = 'Main'>
      <div class = 'Form-Section'>
        <h1> lerumLivro </h1>
        <img src = {statue}></img>
        <Form/>
      </div>
        <img class = 'Palm-1' src = {palm_1}></img>
        <img class = 'Palm-2' src = {palm_1}></img>
    </div>
  )
}

export default Login
