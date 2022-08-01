import React, { useEffect, useState } from 'react';
import Home from "./home/Home"
import Login from "./user/Login"
import SignUp from "./user/SignUp"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import UseFatch from './UseFatch'  

function App() {

  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Login' element={<Login />} />
          <Route path='Home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
