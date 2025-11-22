import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';
import Footer from './footer';

function Modules() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navigate = useNavigate();   // <-- HERE


  

  return (
    <>

    <TopNav />

   



     
    



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
        <div className="layout b modules">
            <div className="child" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Module 1: Foundations of Cultural Humility</h3>
                <p>Explore the foundations of cultural humility and its relevance in UK health and education. Learn key concepts and their application.</p>

<br /><br />
                <b style={{fontSize:13}}>Duration: 1.5 hours.</b>
                <div className="badges">
                    <p>Not Started</p>
                    <p>Est. 1.5 hours</p>
                    </div>

           
                    <div className="" style={{display:'flex', marginLeft:-14}}>
                    <button className='cta lear mini'>Contineu Learning</button>
                    <button disabled className='cta lear outlines mini'>Get Certificate</button>
                    </div>
                
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

           
                    <div className="" style={{display:'flex', marginLeft:-14}}>
                    <button className='cta lear mini'>Contineu Learning</button>
                    <button disabled className='cta lear outlines mini'>Get Certificate</button>
                    </div>
                
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

           
                    <div className="" style={{display:'flex', marginLeft:-14}}>
                    <button className='cta lear mini'>Contineu Learning</button>
                    <button disabled className='cta lear outlines mini'>Get Certificate</button>
                    </div>
                
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


      
      <Footer />

    </>
  )
}

export default Modules
