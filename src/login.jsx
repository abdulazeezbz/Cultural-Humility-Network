import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";

import { auth, db } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, getDoc  } from "firebase/firestore";



import { signInWithEmailAndPassword } from "firebase/auth";


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


  const [RLoading, setRLoading] = useState(false)
  const [Loading, setLoading] = useState(false)
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  const [RName, setRName] = useState("");
  const [REmail, setREmail] = useState("");
  const [RPassword, setRPassword] = useState("");

  const [RShow, setRShow] = useState(false);
  const [Show, setShow] = useState(false);





const handleRegister = async () => {
  setRLoading(true)
  // 1️⃣ Validate password
  const lengthOK = RPassword.length >= 8;
  const upperOK = /[A-Z]/.test(RPassword);
  const lowerOK = /[a-z]/.test(RPassword);
  const digitOK = /\d/.test(RPassword);
  const symbolOK = /[^A-Za-z0-9]/.test(RPassword);

  if (!lengthOK || !upperOK || !lowerOK || !digitOK || !symbolOK) {
    let msg = "Password must have:\n";
    if (!lengthOK) msg += "- At least 8 characters\n";
    if (!upperOK) msg += "- At least one uppercase letter\n";
    if (!lowerOK) msg += "- At least one lowercase letter\n";
    if (!digitOK) msg += "- At least one number\n";
    if (!symbolOK) msg += "- At least one symbol (!@#$ etc.)\n";
    alert(msg);
    setRLoading(false)
    return; // Stop the registration
  }

  // 2️⃣ Optional: validate other fields
  if (!RName || !REmail) {
    alert("Please fill all fields");
    setRLoading(false)
    return;
  }

  // 3️⃣ Proceed with registration
  try {
    const res = await createUserWithEmailAndPassword(auth, REmail, RPassword);
    const user = res.user;

    await setDoc(doc(db, "users", user.uid), {
      name: RName,
      email: REmail,
      uid: user.uid,
      createdAt: new Date()
    });

    setRLoading(false)

    alert("Registration Successful! Login Now");
    setREmail("")
    setRName("")
    setRPassword("")

    setTimeout(() => {
      location.href="#signin"
    }, 500);
  } catch (error) {
    // Handle Firebase errors
    if (error.code === "auth/email-already-in-use") {
      alert("This email is already registered. Please login.");
      
    setRLoading(false)
    setTimeout(() => {
      location.href="#signin"
    }, 500);

     setEmail(REmail)
    setRName("")
    setPassword(RPassword)

    } else if (error.code === "auth/invalid-email") {
    setRLoading(false)
      alert("Invalid email address");
    } else if (error.code === "auth/weak-password") {
      alert("Password is too weak.");
    setRLoading(false)

    } else {
      alert(error.message);
    setRLoading(false)

    }
    console.log("Firebase error:", error);
  }
};


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
    // 1️⃣ Sign in with Firebase Auth
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2️⃣ Fetch Firestore user document
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (!userDocSnap.exists()) {
      await auth.signOut(); // Sign out just in case
      alert("User data not found. Contact admin.");
      setLoading(false);
      return;
    }

    const userData = userDocSnap.data();

    // 3️⃣ Check if user is blocked
    if (userData.isBlocked) {
      await auth.signOut();
      alert("Your account has been blocked. Contact admin for support.");
      setLoading(false);
      return;
    }

    // 4️⃣ Login successful
    alert(`Welcome back, ${userData.name || user.email}! \nYou'll be redirected to the Dashboard.`);

    setLoading(false);

    setTimeout(() => {
      navigate("/Dashboard");
    }, 1000);

  } catch (error) {
    setLoading(false);

    // Handle common Firebase Auth errors
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



              <div className="card">
              <p>By signing in, you agree to our Terms.</p>

              </div>

              <button className="cta" type='button' onClick={handleLogin}>
                {Loading ? <div className="spinner" /> : "Login"}
              </button>

              <br />
              <p id='create_account'>New here?  <a href="#create_account">Create an account </a></p>
              <br /><br />
            </form>








              <h2>Register</h2>
        <p>Enter the Required Details To Create your Account</p>


         <form>
              <div className="inputGroup">

                <input type="text"
                value={RName}
                onChange={(e) => setRName(e.target.value)}
                placeholder='Enter your Full Name' required/>
              </div>

              <p style={{textAlign:'left', marginTop:-15, marginBottom:20,}}>This appears on your certificate—please use your preferred full name.</p>

                <div className="inputGroup">
                <input  type="email"
                value={REmail}
                onChange={(e) => setREmail(e.target.value)}
                
                placeholder='Enter your email' required/>
              </div>


                <div className="inputGroup">
                <input 
                
                type={RShow ? "text" : "password"}
                id='rPassword' 
                value={RPassword}

                autoComplete='false'
                 pattern="^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$"
                 placeholder='Enter your Password'
                 onChange={(e) => setRPassword(e.target.value)}

                 required/>
              </div>

              <p onClick={() => setRShow(!RShow)} id="toggle" style={{textAlign:'left', marginTop:-15, marginBottom:20,}}> 
               {RShow ? (
                <>
                 <ion-icon name="eye-off-outline"></ion-icon>{" "}Hide Password
              </> ) : (
                <><ion-icon name="eye-outline"></ion-icon>{" "}Show Password
               </>)}
               
               </p>
               <br />


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


              

              <button className="cta" type='button' onClick={handleRegister}>
                 {RLoading ? <div className="spinner" /> : "Register"}
                </button>

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
