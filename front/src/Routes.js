import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Main from './pages/main'
import Register from './pages/register'

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path = "/Login" element = {<Login/>}></Route>
            <Route path = "/Register" element = {<Register/>}></Route>
            <Route path = "/Main" element = {<Main/>}></Route>
            <Route path = "/register" element = {<Register/>}></Route>
        </Routes>
    </Router>
  )
}
