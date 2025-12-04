import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";

import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";



import { signInWithEmailAndPassword } from "firebase/auth";


import AppLogo from './assets/new logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Register from './register'
import TopNav from './topnava';

function AdminLogin() {


  
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigate = useNavigate();   // <-- HERE


  const [RLoading, setRLoading] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  const [Show, setShow] = useState(false);



  const handleLogin = async () => {
  setLoading(true);

  const email = Email.trim();
  const password = Password.trim();

  if (!email || !password) {
    alert("Please fill both fields");
    setLoading(false);
    return;
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Fetch user details from Firestore
    const userDocRef = doc(db, "users", user.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
      setLoading(false);
      alert("User record not found in database.");
      return;
    }

    const userData = userSnapshot.data();

    if (userData.role !== "Admin") {
      setLoading(false);
      alert("Access denied. Only admins can log in.");
      return;
    }

    // Successful admin login
    alert(`Welcome back, ${userData.name}! \n You'll be redirected to Dashboard now.`);
    setLoading(false);

    setTimeout(() => {
      navigate("/AdminDashboard");
    }, 1000);

  } catch (error) {
    setLoading(false);

    switch (error.code) {
      case "auth/user-not-found":
        alert("User not found. Please register first.");
        break;
      case "auth/wrong-password":
        alert("Incorrect password. Try again.");
        break;
      case "auth/invalid-email":
        alert("Invalid email address.");
        break;
      case "auth/invalid-credential":
        alert("Invalid credentials. Please check your email and password.");
        break;
      default:
        alert(error.message);
    }

    console.log("Login error:", error);
  }
};



  return (
    <>

      <TopNav />
<br /><br />
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

</div>

      <div className="cont">



        <h2>Login</h2>
        <p>Welcome Back Enter Your Details and Login To your Account</p>


         <form>
              <div className="inputGroup">
                <input type="text"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='Enter your Email Address' required/>
              </div>
              <p style={{visibility:'hidden', height:0}}>This appears on your certificate—please use your preferred full name.</p>

                <div className="inputGroup">
               <input 
                
                type={Show ? "text" : "password"}
                id='lPassword' 
                
                value={Password}


                autoComplete='false'
                 placeholder='Enter your Password'
                 onChange={(e) => setPassword(e.target.value)}

                 required/>
              </div>

              <p onClick={() => setShow(!Show)} id="toggle" style={{textAlign:'left', marginTop:-15, marginBottom:20,}}> 
               {Show ? (
                <>
                 <ion-icon name="eye-off-outline"></ion-icon>{" "}Hide Password
              </> ) : (
                <><ion-icon name="eye-outline"></ion-icon>{" "}Show Password
               </>)}
               
               </p>




              <button className="cta" type='button' onClick={handleLogin}>
                {Loading ? <div className="spinner" /> : "Login"}
              </button>

            
            </form>







      </div>
    </div>
    </>
  )
}

export default AdminLogin
