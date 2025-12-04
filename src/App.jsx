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
import AdminLogin from './adminLogin';
import AdminDashboard from './adminDashboard';
import AdminPosts from './adminPosts';
import AdminModules from './adminModules';
import AdminLessons from './addLesson';

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
  <Route path="/Dashboard" element={<DashboardPage />} />  
  <Route path="/AdminLogin" element={<AdminLogin />} />  
  <Route path="/AdminDashboard" element={<AdminDashboard/>} />  
  <Route path="/AdminPosts" element={<AdminPosts/>} />  
  <Route path="/adminModules" element={<AdminModules/>} />  
  <Route path="/admin/module/:moduleId/lessons" element={<AdminLessons />} />
  <Route path="/learning/:moduleId" element={<LearningPage />} />
  <Route path="/quiz/:moduleId" element={<QuizPage />} />  

 
  
  
</Routes>

  
    </>
  )
}

export default App
