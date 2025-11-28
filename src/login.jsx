import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";

import AppLogo from './assets/new logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Register from './register'
import TopNav from './topnava';

function Login() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();   // <-- HERE

  return (
    <>

      <TopNav />
<br />
    <div className="AuthPage login">

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


<br /><br /><br />
<div className="card">
<h3>Why you’re signing in</h3><br />
<ul>
  <li><b>Track progress:</b> save your module scores and resume anytime.</li>
  <li><b>Earn certificates:</b> your name appears exactly as entered.</li>
  <li id='signin'><b>Join discussions:</b> post in the community and comment safely.</li>
</ul>
<br />
<p>Your data: we collect only your name and email to run your account and certificates. We don’t sell your data. 
  Managed under Privacy & Cookie policies.</p>
</div>
        </div>


      <div className="cont">



        <div className="tabs" style={{display: 'flex',}}>
          <button className='cta outlines' style={{padding:20,}} onClick={()=> location.href="#signin"}>Signin</button>
          <button className='cta outlines' style={{padding:20,}} onClick={()=> location.href="#create_account"}>Create account</button>
        </div>
        <br />

        <h2>Login</h2>
        <p>Welcome Back Enter Your Details and Login To your Account</p>


         <form action="">
              <div className="inputGroup">
                <input type="text" placeholder='Enter your Email Address'/>
              </div>
              <p style={{visibility:'hidden', height:0}}>This appears on your certificate—please use your preferred full name.</p>

                <div className="inputGroup">
                <input type="text" placeholder='Enter your Password'/>
              </div>


              <div className="card">
              <p>By signing in, you agree to our Terms.</p>

              </div>

              <button className="cta">Login</button>

              <br />
              <p id='create_account'>New here?  <a href="#create_account">Create an account </a></p>
              <br /><br />
            </form>








              <h2>Register</h2>
        <p>Enter the Required Details To Create your Account</p>


         <form action="">
              <div className="inputGroup">
                <input type="text" placeholder='Enter your Full Name'/>
              </div>
              <p style={{textAlign:'left', marginTop:-15, marginBottom:20,}}>This appears on your certificate—please use your preferred full name.</p>

                <div className="inputGroup">
                <input type="email" placeholder='Enter your email'/>
              </div>


                <div className="inputGroup">
                <input type="text" placeholder='Enter your Password'/>
              </div>

               <div className="card" style={{textAlign:'left', marginTop:-15, marginBottom:20,}}>
                <details>
                  <summary>Password Rules</summary>
                  <br />
                  <div>
                    <ul>
                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> At least 8 characters</li>
                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> One uppercase letter (A-Z)</li>
                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> One lowercase letter (a-z)</li>
                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> One number (0-9)</li>
                    <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> One symbol (!@#$%^&* etc.)</li>
                    </ul>
                  </div>
                </details>
              </div>

              <div className="inputGroups">
                <input type="checkbox" /> Subscribe to updates
              </div>


              

              <button className="cta">Register</button>

              <br />
              <p>Already have an account?  <a href="#signin">Login Here</a></p>
            <br /><br />
            </form>
      </div>
    </div><br />
    </>
  )
}

export default Login
