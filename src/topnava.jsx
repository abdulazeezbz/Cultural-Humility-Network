import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css'

import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useAuth } from "./AuthContext";

import AppLogo from './assets/new logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';

const TopNav = () => {

     const [menuOpen, setMenuOpen] = useState(false);
  //  const [activeTab, setActiveTab] = useState("home");
   
  

    const { currentUser } = useAuth();


  const location = useLocation();
  const navigate = useNavigate();   // <-- HERE

  const activeTab = location.pathname;



  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // redirect to login after logout
    } catch (error) {
      console.log("Logout error:", error);
      alert("Failed to logout. Try again.");
    }
  };



  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };



  
  return (
       <>
        <div className="topNav" data-aos="fade-down" data-aos-duration="1000">
      <div className="aa">
        <div className="anoth" data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000">
        <img src={AppLogo} alt="" />
        <div className="">
          <h3>Cultural Humility Network</h3>
          <p>Fostering Inclusive, Reflective, and Culturally Aware Practice</p>
        </div></div>

      
      </div>

      
     <div className={`bb ${menuOpen ? "block" : "hidden"} md:flex`}>
 <ul>
  <li className={activeTab === "/" ? "active" : ""}>
    <a onClick={() => navigate("/")}>Home</a>
  </li>

  <li className={activeTab === "/about" ? "active" : ""}>
    <a onClick={() => navigate("/about")}>About</a>
  </li>

  <li className={activeTab === "/modules" ? "active" : ""}>
    <a onClick={() => navigate("/modules")}>Learn</a>
  </li>

  <li className={activeTab === "/community" ? "active" : ""}>
    <a onClick={() => navigate("/community")}>Community</a>
  </li>

  <li className={activeTab === "/training" ? "active" : ""}>
    <a onClick={() => navigate("/training")}>Training</a>
  </li>

  {currentUser ? (
        <>
          <li className={activeTab === "/dashboard" ? "active" : ""}>
            <a onClick={() => navigate("/dashboard")}>Dashboard</a>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </>
      ) : (
        <li className={activeTab === "/login" ? "active" : ""}>
          <a onClick={() => navigate("/login")}>Login</a>
        </li>
      )}


  <li>
    <button
      className="cta outlines create"
      onClick={() => navigate("/login#create_account")}
    >
      Create Account
    </button>
  </li>
</ul>
</div>   
      

      
     </div>

  
     
       <div className="mobile menu" onClick={toggleMenu} data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
          {menuOpen ? (
    <ion-icon style={{ fontSize: 28 }} name="close-outline"></ion-icon>
  ) : (
    <ion-icon style={{ fontSize: 28 }} name="menu-outline"></ion-icon>
  )}
        </div></>
  )
}

export default TopNav