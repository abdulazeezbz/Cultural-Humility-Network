import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';
import Footer from './footer';

const About = () => {


    const navigate = useNavigate();   // <-- HERE
    
  return (
    <>
      <TopNav/>

      
        <div className="content modules about"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2>About CHN</h2>
          <p>Discover the story behind the Cultural Humility Hub — advancing cultural humility in health and education by blending implementation science with practical tools for lasting change.
          </p>

<div className="">
<button className="cta"  onClick={()=> navigate("/modules")}>Explore Modules</button>
          <button className="cta outlines" onClick={()=> navigate("/community")}>Meet The Community</button>
</div>

        
      </div>



  
                <div className="founder b ann" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

                  <div className="a">  <h2>Our Founder</h2>
                            <img src={FounderIcon} alt='' />
                </div>
                          <div className="b">
                                      <p id="ABZZ" style={{textAlign:'left'}}>Dr. Jesse Enebi Usman is a lecturer, social care nurse, and public health practitioner with over ten years of experience across Africa and the UK. With advanced degrees in nursing, public health, and implementation science, his work bridges gaps in healthcare and education for diverse populations and appears in international journals.

                Passionate about implementation science (the study of how to embed evidence into routine practice), Jesse founded CHN to translate cultural humility principles into actionable tools. Moving beyond “cultural sensitivity” workshops, CHN emphasises lifelong self-reflection, power balance, and intersectionality to address systemic inequities.

                CHN grew from first-hand experience: disparities in patient outcomes and student engagement rooted in cultural misunderstandings. By applying implementation science, the modules prioritise practicality and measurable impact on everyday professional practice.
                </p>
                      </div>   
                      </div>




                      <div className="founder sii" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

                  <div className="a"> 
                    <h2>Our Mission & Vision</h2>
                    <br />
                            <p id="ABZZ">Equip health and education professionals with the knowledge, skills, and mindset to practise cultural humility, creating equitable, inclusive environments that honour diverse experiences.

                A world where cultural humility is standard in health and education—reducing disparities and empowering individuals through respectful, collaborative practice.
                </p>
                </div>
                <div className="a">
                    {/* <h2 className='Val' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Our Values</h2> */}

                  {/* <div className="ourvalues" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500"> */}
<h2 style={{textAlign:'left'}} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Our Values</h2>
<br />
<div data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                  <p><b>Respect & Empathy</b> <br />  Honouring each person’s story and experience</p>
                  <p><b>Lifelong Learning</b> <br />  
                  Committed to growth, reflection, and adaptation.</p>
                  

                  <p><b>Equity & Inclusion</b> <br />  
                  Challenging power imbalances and promoting fairness.</p>
                  
                    <p><b>Evidence-Based Practice</b> <br />  
                  Grounded in rigorous research and implementation science.</p>
                  
                  <p  id='support'><b>Community Collaboration</b> <br />  
                  Building connections for shared learning and support.</p>
                  
                  </div>
        
                </div>
              


             
                    </div> 



<div className="founder b input" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

          <div className="a"> 
            <h2>Contact Us</h2>
                    <p id="formH">We’re here to support your journey. Questions, feedback, or partnership ideas? Get in touch and let’s move the work forward together.</p>
                    

                    <form action="">
                      <div className="inputGroup">
                        <input type="text" placeholder='Enter your Full name'/>
                        <input type="text" placeholder='Enetr Your Email'/>
                      </div>

                      <div className="inputGroup">
                        <textarea rows="5" placeholder='Enter Your Message Here' name="" id=""></textarea>
                      </div>

                      <button className="cta">Send Message</button>
                    </form>
                    </div>
            </div>



                       {/* <div className="a"> 
                    <h2>Looking Ahead: Our Collaborations</h2>
                            <p id="ABZZ">We believe lasting change is built through collaboration. We aim to work with the NHS, the British Educational Research Association, Health Education England, and universities across the UK and beyond to embed cultural humility into policy, training, and practice.

                We also welcome collaboration with international bodies such as WHO, UNESCO, and UNICEF to expand access to culturally humble education and centre dignity, diversity, and justice worldwide.
                </p></div> */}

     

     
     <Footer />
    </>
  )
}

export default About