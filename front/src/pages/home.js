import React, {useState} from 'react'
import axios from 'axios'

import Header from '../components/commons/Header/header'

import leitor from '../images/leitor.png'
import plantas from '../images/plants.png'
import svg1 from '../images/blob-1.svg'
import svg2 from '../images/blob-2.svg'


import '../styles/home.sass'
export default function Home() {

  return (
    <div>
      <Header/>
      <div class = 'Home'>
          <section div class = 'Sect-1'>
            <div class = 'User'>
              <img src = {leitor}></img>
              <h1> Hora de marcar suas leituras, Usuário </h1>
            </div>
            <div class = 'Plants'>
              <img src = {plantas}></img>
            </div>
          </section>
          <section class = 'Sect-2'>
            
          </section>
      </div>
    </div>

    
  )
}
