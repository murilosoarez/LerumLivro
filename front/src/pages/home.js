import React, {useState} from 'react'
import axios from 'axios'

import Header from '../components/commons/Header/header'

import '../styles/home.sass'

export default function Home() {

  return (
    <div>
      <Header/>
      <div class = 'Home'>
          <div class = 'Home-Sect-1'></div>
          <div class = 'Home-Sect-2'></div>
      </div>
    </div>

    
  )
}
