import { useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/new logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';

const TopNav = () => {

     const [menuOpen, setMenuOpen] = useState(false);
  //  const [activeTab, setActiveTab] = useState("home");
   

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const location = useLocation();
  const navigate = useNavigate();   // <-- HERE

  const activeTab = location.pathname;


  
  return (
        <div className="topNav" data-aos="fade-down" data-aos-duration="1000">
      <div className="aa">
        <div className="anoth" data-aos="fade-right" data-aos-delay="800" data-aos-duration="1000">
        <img src={AppLogo} alt="" />
        <div className="">
          <h3 style={{fontSize:25}}>Cultural Humility Network</h3>
          <p>Fostering Inclusive, Reflective, and Culturally Aware Practice</p>
        </div></div>

        <div className="mobile" onClick={toggleMenu} data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1000">
          {menuOpen ? (
    <ion-icon style={{ fontSize: 28 }} name="close-outline"></ion-icon>
  ) : (
    <ion-icon style={{ fontSize: 28 }} name="menu-outline"></ion-icon>
  )}
        </div>
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

  <li className={activeTab === "/login" ? "active" : ""}>
    <a onClick={() => navigate("/login")}>Login</a>
  </li>



  <li>
    <button
      className="cta outlines create"
      onClick={() => navigate("/register")}
    >
      Create Account
    </button>
  </li>
</ul>
</div>   
      
     </div>
  )
}

export default TopNav