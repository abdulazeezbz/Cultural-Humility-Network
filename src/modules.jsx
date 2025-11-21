import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';

function Modules() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navigate = useNavigate();   // <-- HERE


  

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
    <li>
      <a href="/" onClick={toggleMenu}>Home</a>
    </li>
    <li>
      <a href="/#about" onClick={()=> navigate("/#about")}>About</a>
    </li>
    

    <li>
      <a href="#" onClick={toggleMenu}>Modules</a>
    </li>

     <li>
      <a href="#about" onClick={toggleMenu}>Community</a>
    </li>
    
        <li>
      <a href="#support" onClick={()=> navigate("/#support")}>Support</a>
    </li>
    
    <li>
      <a href="#contact" onClick={()=> navigate("/#contact")}>Contact</a>
    </li>
    

    
    

     <li>
      <button className="cta outlines create"  onClick={()=> navigate("/register")}>Create Account</button>
    </li>

  
  </ul>
</div>   
      

   



     
     </div>



        <div className="content modules"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2>Interactive Learning Modules</h2>
          <p>Comprehensive, evidence-based training in cultural humility. Work at your pace with interactive scenarios, quizzes, and reflections. Complete a module at ≥80% to unlock its certificate; finish all five for the overall certificate.
          </p>

          <div className="progress">
            <div className="to"><h2>Your progress</h2> <p>2/5 completed</p></div>
            
            <div className="slid">
                <div className="Scont"></div>
            </div>

            <p>Certificates are available per module when completed.</p>
          </div>
      </div>

      <div className="content">
        <div className="layout b">
           <div className="child" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Module 1: Foundations of Cultural Humility</h3>
                <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.</p>

<br /><br />
                <b style={{fontSize:13}}>Duration: 1.5 hours.</b>
                <div className="badges">
                    <p>Not Started</p>
                    <p>Est. 1.5 hours</p>
                    </div>

  <div className="progress">
            <div className="to"><h4>Your progress</h4> <p>4/5 completed</p></div>
            
            <div className="slid">
                <div className="Scont" style={{width:"80%"}}></div>
            </div>

          </div>
                    <button className='cta lear'>Contineu Learning</button>
                    <button disabled className='cta lear outlines'>Get Certificate</button>
                
            </div>



            <div className="child" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Module 1: Foundations of Cultural Humility</h3>
                <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.</p>

<br /><br />
                <b style={{fontSize:13}}>Duration: 1.5 hours.</b>
                <div className="badges">
                    <p>Not Started</p>
                    <p>Est. 1.5 hours</p>
                    </div>

  <div className="progress">
            <div className="to"><h4>Your progress</h4> <p>2/5 completed</p></div>
            
            <div className="slid">
                <div className="Scont" style={{width:"40%"}}></div>
            </div>

          </div>
                    <button className='cta lear'>Contineu Learning</button>
                    <button disabled className='cta lear outlines'>Get Certificate</button>
                
            </div>

            <div className="child" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Module 1: Foundations of Cultural Humility</h3>
                <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.</p>

<br /><br />
                <b style={{fontSize:13}}>Duration: 1.5 hours.</b>
                <div className="badges">
                    <p>Not Started</p>
                    <p>Est. 1.5 hours</p>
                    </div>

  <div className="progress">
            <div className="to"><h4>Your progress</h4> <p>0/5 completed</p></div>
            
            <div className="slid">
                <div className="Scont" style={{width:"0%"}}></div>
            </div>

          </div>
                    <button className='cta lear'>Start Learning</button>
                    <button disabled className='cta lear outlines'>Get Certificate</button>
                
            </div>

            <div className="child" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Module 1: Foundations of Cultural Humility</h3>
                <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.</p>

<br /><br />
                <b style={{fontSize:13}}>Duration: 1.5 hours.</b>
                <div className="badges">
                    <p>Not Started</p>
                    <p>Est. 1.5 hours</p>
                    </div>

  <div className="progress">
            <div className="to"><h4>Your progress</h4> <p>4/5 completed</p></div>
            
            <div className="slid">
                <div className="Scont" style={{width:"80%"}}></div>
            </div>

          </div>
                    <button className='cta lear'>Contineu Learning</button>
                    <button disabled className='cta lear outlines'>Get Certificate</button>
                
            </div>

            <div className="child" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Module 1: Foundations of Cultural Humility</h3>
                <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.</p>

<br /><br />
                <b style={{fontSize:13}}>Duration: 1.5 hours.</b>
                <div className="badges">
                    <p>Not Started</p>
                    <p>Est. 1.5 hours</p>
                    </div>

  <div className="progress">
            <div className="to"><h4>Your progress</h4> <p>4/5 completed</p></div>
            
            <div className="slid">
                <div className="Scont" style={{width:"80%"}}></div>
            </div>

          </div>
                    <button className='cta lear'>Contineu Learning</button>
                    <button disabled className='cta lear outlines'>Get Certificate</button>
                
            </div>

            <div className="child" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Module 1: Foundations of Cultural Humility</h3>
                <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.</p>

<br /><br />
                <b style={{fontSize:13}}>Duration: 1.5 hours.</b>
                <div className="badges">
                    <p>Not Started</p>
                    <p>Est. 1.5 hours</p>
                    </div>

  <div className="progress">
            <div className="to"><h4>Your progress</h4> <p>4/5 completed</p></div>
            
            <div className="slid">
                <div className="Scont" style={{width:"80%"}}></div>
            </div>

          </div>
                    <button className='cta lear'>Contineu Learning</button>
                    <button disabled className='cta lear outlines'>Get Certificate</button>
                
            </div>

            
        </div>
      </div>

        <div className="content cert" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="">
          <h2>Certificates</h2>
          <p><b>Per-module certificates:</b> Available as soon as each module is completed. Use the button on each card.</p>
          
          <br />
          <button className="cta cerr"  onClick={()=> navigate("/login")}>Generate Certificate</button>
          <p>Every certificate includes a unique serial and public verification link.</p>
          </div>

           <div className="">
            <h2>.</h2>
          <p><b>Overall certificate:</b>Complete all 5 modules to unlock.
          </p>
          <br />

          <button className="cta cerr"  onClick={()=> navigate("/login")}>Generate Certificate</button>
          <p>Complete all modules to unlock the overall certificate.</p>

          
          </div>
        </div>


<br /><br /><br />


      

    </>
  )
}

export default Modules
