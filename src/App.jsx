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
import Support from './support';
import Modal from "./modal";
import TrainingsLanding from './trainingPage';
import LearningPage from './learning';
import QuizPage from './quiz';
import DashboardPage from './dashboard';

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
  <Route path="/support" element={<Support />} />  
  <Route path="/training" element={<TrainingsLanding />} />  
  <Route path="/learning" element={<LearningPage />} />  
  <Route path="/Dashboard" element={<DashboardPage />} />  
  <Route path="/quiz" element={<QuizPage />} />  
  
  
</Routes>

  
    </>
  )
}

export default App
