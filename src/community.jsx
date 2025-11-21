import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';

const Community = () => {
  return (
    <>
      <TopNav/>

      
        <div className="content modules"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2>Community Hub</h2>
          

        
      </div>

     
    </>
  )
}

export default Community