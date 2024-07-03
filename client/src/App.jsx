import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import SignIn from '../pages/Signin'
import About from '../pages/about'
import SignUp from '../pages/SignUp'
import Projects from '../pages/Projects'
import Dashboard from '../pages/Dashboard'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        <Route path="/Dashboard" element={<Dashboard/>}/>

        
      </Routes>
    </BrowserRouter>
  )
}
