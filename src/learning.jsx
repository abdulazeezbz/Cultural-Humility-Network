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
          <div className="lesson">
            <p>Lesson 1 </p>
            <div className="progres">
              <ion-icon name="checkmark-done"></ion-icon>
            </div>
          </div>

          <div className="lesson active">
            <p>Lesson 2 </p>
            <div className="progres">
              <ion-icon name="checkmark-done"></ion-icon>
            </div>
          </div>

          <div className="lesson">
            <p>Lesson 3</p>
            <div className="progres">.</div>
          </div>


            <div className="lesson">
            <p>Lesson 4 </p>
            <div className="progres">
.            </div>
          </div>

          <div className="lesson">
            <p>Lesson 5 </p>
            <div className="progres">
.            </div>
          </div>

          <div className="lesson" onClick={()=> navigate("/quiz")}>
            <p>Quiz</p>
            <div className="progres">.</div>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <div className="body">
        <div className="learningTab">
            <h3>Module 1: Foundations of Cultural Humility</h3>

            <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.

</p>


Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure recusandae blanditiis tenetur odio qui officia ratione obcaecati, aliquid maxime. Eius dignissimos non fugiat tempora voluptas a hic, sequi odit itaque.
        
        
       <ol>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam soluta rerum, consectetur, illum nemo cupiditate voluptates corporis, voluptatum obcaecati laudantium. Consectetur architecto ex consequuntur perferendis iure! Velit, deleniti quisquam.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam soluta rerum, consectetur, illum nemo cupiditate voluptates corporis, voluptatum obcaecati laudantium. Consectetur architecto ex consequuntur perferendis iure! Velit, deleniti quisquam.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam soluta rerum, consectetur, illum nemo cupiditate voluptates corporis, voluptatum obcaecati laudantium. Consectetur architecto ex consequuntur perferendis iure! Velit, deleniti quisquam.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam soluta rerum, consectetur, illum nemo cupiditate voluptates corporis, voluptatum obcaecati laudantium. Consectetur architecto ex consequuntur perferendis iure! Velit, deleniti quisquam.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam soluta rerum, consectetur, illum nemo cupiditate voluptates corporis, voluptatum obcaecati laudantium. Consectetur architecto ex consequuntur perferendis iure! Velit, deleniti quisquam.</li>
        
        </ol> 
        


        <br /><br /><button className="cta mini" style={{width:200}}>Mark As Completed</button><br />
        </div>

        <div className="anoth card">
            <h3>Lesson 1</h3>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatibus temporibus commodi voluptatum labore velit alias, officia unde consequuntur esse eos, cumque laboriosam architecto quo illo vel sequi, saepe asperiores!
        <br /><br /><button className="cta mini" style={{width:200}}>Mark As Completed</button>
        </div>
      </div>
    </section>
  );
};

export default LearningPage;
