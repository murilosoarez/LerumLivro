import React from 'react';
import Form from '../components/forms/Shelf.jsx'
import Header from '../components/commons/Header/header'

import '../styles/shelf.sass'

function Shelf() {
  return (
    <div>
      <Header/>
      <section class = 'Header-Book'></section>
      <section class = 'Shelf'>
        <div class = 'Form-Shelf'><Form/></div>
        <div class = 'Book-Section'>
          <h1> Estante </h1>
          <div class = 'Book-Shelf'>
         
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shelf;