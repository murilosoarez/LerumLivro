import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/login'
import Home from './pages/home'
import Register from './pages/register'

import ProtectedRoutes from './ProtectedRoutes'

export default function AppRoutes() {
  return (
    <Router>
        <Routes>
            <Route path = "/Login" element = {<Login/>}></Route>
            <Route path = "/Register" element = {<Register/>}></Route>
            <Route element = {<ProtectedRoutes/>}>
              <Route path = "/Home" element = {<Home/>}></Route>
            </Route>
        </Routes>
    </Router>
  )
}
