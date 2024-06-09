import React from 'react'
import book from '../../../images/book.gif'
import './header.sass'
export default function header() {
  return (
    <nav>
        <ul>
          <li><img src = {book}></img></li>
          <li><h1> lerumLivro</h1></li>
        </ul>
        <ul>
            <li><a href = "/Home">Home</a> </li> 
            <li><a href = "/Shelf">Shelf</a> </li>
        </ul>
    </nav>
  )
}
