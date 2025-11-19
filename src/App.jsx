import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import Home from './home';

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
  <Route path="/login" element={<Login />} />  
</Routes>

  
    </>
  )
}

export default App
