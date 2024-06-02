import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from '../pages/login';
import Home from '../pages/home';
import Register from '../pages/register';
import Shelf from '../pages/shelf';

import { AccountContext } from './Account';

import ProtectedRoutes from '../ProtectedRoutes';

export default function AppRoutes() {
  const { user } = useContext(AccountContext)
  return (
    <Routes>
      <Route path = "/" element = {<Login/>}/>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/Shelf" element = {<Shelf/>} /> 
      </Route>
    </Routes>
  );
}
