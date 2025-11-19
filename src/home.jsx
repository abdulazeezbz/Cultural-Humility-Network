import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';

function Home() {
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
      <a href="#" onClick={toggleMenu}>Home</a>
    </li>
    <li>
      <a href="#about" onClick={toggleMenu}>About-us</a>
    </li>
    
    <li>
      <a href="#support" onClick={toggleMenu}>Support</a>
    </li>
    
    <li>
      <a href="#contact" onClick={toggleMenu}>Contact-us</a>
    </li>
    

     <li>
      <button className="cta outlines create"  onClick={()=> navigate("/register")}>Create Account</button>
    </li>

  
  </ul>
</div>   
      
     </div>


   

     <div className="hero" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
      <div className="main">
        <div className="content">
          <h2>Welcome to <br />Cultural Humility Network <span>(CHH)</span></h2>
          <p>We believe cultural humility is the cornerstone of equitable practice in health and education. Explore immersive learning, evidence-based modules, and a supportive community that centres respect, reflection, and inclusion.</p>

        <div id="about" className="" style={{display:'flex'}}>
          <button className="cta outlines"  onClick={()=> navigate("/login")}>Explore Modules</button>
          <button className="cta" onClick={()=> navigate("/login")}>Login</button>
        </div>
        
      
      
      </div>
      </div>
      
      
      <div className="heroB" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
      <div className="main">
        <div className="content b">
          <h2>About CHH</h2>
          <p id="ABZZ" className='b' >Discover the story behind the Cultural Humility Hub — advancing cultural humility in health and education by blending implementation science with practical tools for lasting change.</p>



<div className="founder b" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

   <div className="a">  <h2>Our Founder</h2>
            <img src={FounderIcon} alt='' />
</div>
          <div className="b">
                      <p id="ABZZ">Dr. Jesse Enebi Usman is a lecturer, social care nurse, and public health practitioner with over ten years of experience across Africa and the UK. With advanced degrees in nursing, public health, and implementation science, his work bridges gaps in healthcare and education for diverse populations and appears in international journals.

Passionate about implementation science (the study of how to embed evidence into routine practice), Jesse founded CHH to translate cultural humility principles into actionable tools. Moving beyond “cultural sensitivity” workshops, CHH emphasises lifelong self-reflection, power balance, and intersectionality to address systemic inequities.

CHH grew from first-hand experience: disparities in patient outcomes and student engagement rooted in cultural misunderstandings. By applying implementation science, the modules prioritise practicality and measurable impact on everyday professional practice.
</p>
       </div>   
       </div>


       <div className="founder" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

   <div className="a"> 
     <h2>Our Mission & Vision</h2>
            <p id="ABZZ">Equip health and education professionals with the knowledge, skills, and mindset to practise cultural humility, creating equitable, inclusive environments that honour diverse experiences.

A world where cultural humility is standard in health and education—reducing disparities and empowering individuals through respectful, collaborative practice.
</p></div>
     </div>
        </div>
      </div>
     </div>

                      <h2 className='Val' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Our Values</h2>


           <div className="ourvalues" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">


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





<div className="founder b"  data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

   <div className="a"> 
     <h2>Support CHH</h2>
            <p style={{textAlign:'center', maxWidth:'90%', marginLeft:'20px', marginTop:10,}}>CHH is free and self-funded so anyone can learn. If our work helps you or your organisation, a voluntary contribution keeps the lights on and the work growing.</p>
            

           

              <a href="https://paypal.me/JESSEUSMAN" target='_blank'><button className="cta">Support with PayPal</button></a>
              <button className="cta outlines">Join The Community</button>
            
            </div>
     </div>


<div className="founder b" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

   <div className="a"> 
     <h2>Why your support matters</h2>
            <p>Contributions cover essentials and help us expand access, quality, and impact:</p>
            

           
<ul style={{textAlign:'left', maxWidth:'90%', marginLeft:'auto', marginTop:10,}}>
    <li>Hosting & infrastructure to keep the site fast, secure, and accessible.</li>
    <li>Regular content updates across modules and resources.</li>
    <li>New tools and features driven by user feedback.</li>
    <li>Community events, moderation, and learner support.</li>
    <li>Accessibility improvements and mobile optimisation.</li>
</ul>
            </div>
     </div>


<div className="founder b" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
    <div className="a"> 
     <h2>Frequently Asked Questions</h2>
<br />
     <details className='faq' open>
        <summary>Is my contribution required to access CHH?</summary>

        <p>No. Core modules and community areas remain free for everyone. Donations are optional.</p>
     </details>

      <details className='faq'>
        <summary>How are contributions processed?</summary>

        <p>Payments go through PayPal. We don’t store card details and only receive confirmation metadata.</p>
     </details>


      <details className='faq'>
        <summary>Can I help without donating?</summary>

        <p>Absolutely—share CHH with colleagues, submit a blog post or case study, or join forum discussions.</p>
     </details>


     <details className='faq'  id='contact'>
        <summary>Will I get a receipt or invoice?</summary>

        <p>PayPal provides a receipt. CHH isn’t a charity, so we can’t issue Gift Aid receipts.</p>
     </details>


    </div>
     </div>





<div className="founder b" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

   <div className="a"> 
     <h2>Contact Us</h2>
            <p>We’re here to support your journey. Questions, feedback, or partnership ideas? Get in touch and let’s move the work forward together.</p>
            

            <form action="">
              <div className="inputGroup">
                <input type="text" placeholder='Enter your Full name'/>
                <input type="text" placeholder='Enetr Your Email'/>
              </div>

              <div className="inputGroup">
                <textarea placeholder='Enter Your Message Here' name="" id=""></textarea>
              </div>

              <button className="cta">Send Message</button>
            </form>
            </div>
     </div>






     
     </div>

    </>
  )
}

export default Home
