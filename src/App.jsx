import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import Home from './home';
import Register from './register';
import Modules from './modules';
import About from './about';
import Community from './community';

function App() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navigate = useNavigate();   // <-- HERE


  

  return (
    <>

    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/modules" element={<Modules />} />  
  <Route path="/login" element={<Login />} />  
  <Route path="/register" element={<Register />} />  
  <Route path="/about" element={<About />} />  
  <Route path="/community" element={<Community />} />  

</Routes>

  
    </>
  )
}

export default App
