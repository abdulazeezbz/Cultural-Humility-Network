import { useState } from "react";
import { db, ref, push } from "./firebase";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./learning.css";

import AppLogo from "./assets/new logo.png";

const LearningPage = () => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <section className="layout learning"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setSidebarOpen(true)}
      >
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        {/* Close button (mobile only) */}
        <button
          className="close-btn"
          onClick={() => setSidebarOpen(false)}
        >
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <img src={AppLogo} alt="" />
        <div className="lessons">
        
        
          
           <div className="lesson active">
            <p>Quiz</p>
            <div className="progres">.</div>
          </div>

          <div className="lesson">
            <div className="">
            <h2>Module 2</h2>
            <p>Module Descriprion Here! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error distinctio iure inventore dolorum molestias exercitationem sed rem consequuntur minus suscipit tempore nam blanditiis ex, repudiandae, fugiat architecto ab optio reiciendis.</p>
         </div> </div>
          <br />
         
        </div>
      </div>

      {/* Main Body */}
      <div className="body">
        <div className="learningTab">
            <h3>Question 1 of 10</h3>

            <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.

</p>

 
      <input type="radio" name="quiz"/> (A) loreom Espion<br />
      <input type="radio" name="quiz"/> (B) None of the above <br />
      <input type="radio" name="quiz"/> (C) All of the above <br />
      <input type="radio" name="quiz"/> (D) Both A and B <br />
      


        <br /><br /><button className="cta mini" style={{width:200}}>Submit Answer</button><br />
        </div>

      
      </div>
    </section>
  );
};

export default LearningPage;
