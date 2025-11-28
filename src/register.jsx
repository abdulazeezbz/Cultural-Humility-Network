import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'
import Login from './login'

function Register() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();   // <-- HERE

  return (
    <>

    <div className="AuthPage">
        <div className="cont b her">
<center>
<img src={AppLogo} width={100} /></center>
<h3>Your hub for equitable practice</h3>
<p>Learn, reflect, and apply cultural humility with structured modules and a supportive community.</p>
<br /><br />
<ul>
    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Evidence-based, UK-focused learning</li>
    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Short, self-paced modules with quizzes</li>
    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Community discussion & peer support</li>
    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Downloadable certificate on completion</li>
</ul>
        </div>
      <div className="cont">
        <h2>Register</h2>
        <p>Enter the Required Details To Create your Account</p>


         <form action="" method='get'>
              <div className="inputGroup">
                <input type="text" placeholder='Enter your Full Name'/>
              </div>

                <div className="inputGroup">
                <input type="text" placeholder='Enter your Password'/>
              </div>


                <div className="inputGroup">
                <input type="text" placeholder='Enter your Password'/>
              </div>


              

              <button className="cta">Register</button>

              <br />
              <p>Already have an account?  <a href="#" onClick={()=> navigate("/login")}>Login Here</a></p>
            <br /><br />
            </form>
      </div>
    </div>
    <br />
    </>
  )
}

export default Register
