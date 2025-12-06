import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css'

import { signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useAuth } from "./AuthContext";

import AppLogo from './assets/new logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';

const ATopNav = () => {

     const [menuOpen, setMenuOpen] = useState(false);
  //  const [activeTab, setActiveTab] = useState("home");
   
  

    const { currentUser } = useAuth();


  const location = useLocation();
  const navigate = useNavigate();   // <-- HERE

  const activeTab = location.pathname;



  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/Adminlogin"); // redirect to login after logout
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
          <p style={{padding:"5px 10px", background:"var(--accent)", width:'fit-content', color:'white', 
            borderRadius:"50% 10% 50% 10% / 10% 50% 10% 50%"}}>(Admin Pannel)</p>
        </div></div>

       
      </div>
     <div className={`bb ${menuOpen ? "block" : "hidden"} md:flex`}>
 <ul>

 <li className={activeTab === "/adminLearners" ? "active" : ""}>
    <a onClick={() => navigate("/adminLearners")}>Learners</a>
  </li>
 

  <li className={activeTab === "/adminModules" ? "active" : ""}>
    <a onClick={() => navigate("/adminModules")}>Modules</a>
  </li>
 
 
  <li className={activeTab === "/adminPosts" ? "active" : ""}>
    <a onClick={() => navigate("/adminPosts")}>Posts&nbsp;&&nbsp;Blogs</a>
  </li>


        <>
          <li className={activeTab === "/AdminDashboard" ? "active" : ""}>
            <a onClick={() => navigate("/AdminDashboard")}>Dashboard</a>
          </li>
          <li>
            <a onClick={handleLogout}>Logout</a>
          </li>
        </>
   



</ul>
</div>   
      
     </div>

      <div className="mobile menu" onClick={toggleMenu} data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
          {menuOpen ? (
    <ion-icon style={{ fontSize: 28 }} name="close-outline"></ion-icon>
  ) : (
    <ion-icon style={{ fontSize: 28 }} name="menu-outline"></ion-icon>
  )}
        </div>

       </>
  )
}

export default ATopNav