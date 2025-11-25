import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Register from './register'

function Login() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();   // <-- HERE

  return (
    <>


    <div className="AuthPage login">

      <div className="cont b her">
        <center>
<img src={AppLogo} width={100} /></center>
<h3>Your hub for equitable practice</h3>
<p>Learn, reflect, and apply cultural humility with structured modules and a supportive community.</p>
<br /><br />
<ul>
    <li>Evidence-based, UK-focused learning</li>
    <li>Short, self-paced modules with quizzes</li>
    <li>Community discussion & peer support</li>
    <li>Downloadable certificate on completion</li>
</ul>
        </div>


      <div className="cont">
        <h2>Login</h2>
        <p>Welcome Back Enter Your Details and Login To your Account</p>


         <form action="">
              <div className="inputGroup">
                <input type="text" placeholder='Enter your Email Address'/>
              </div>

                <div className="inputGroup">
                <input type="text" placeholder='Enter your Password'/>
              </div>


              

              <button className="cta">Login</button>

              <br />
              <p>Don't have an account?  <a href="" onClick={()=> navigate("/register")}>Register Here</a></p>
              <br /><br />
            </form>
      </div>
    </div><br />
    </>
  )
}

export default Login
