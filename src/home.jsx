import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/new logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';

function Home() {
  

  

  return (
    <>

    <TopNav/>
 


   

     <div className="hero" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
      <div className="main">
        <div className="content">
          <h2>Welcome to <br />Cultural Humility Network <span>(CHN)</span></h2>
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

<div className="why">
          <h2>Why Cultural Humility Matters</h2>
          <p id="ABZZ" className='b' >Cultural humility is a lifelong practice of self-reflection, accountability, and challenging assumptions. Across healthcare and education, inequalities persist. Humility moves beyond awareness to listening deeply, engaging respectfully, and acting for equity.</p>
</div>
<div className="layout c">

  <div className='child'>
    <h3 style={{textAlign:'center'}}>
      What the Data Says
      </h3 >
      <p style={{fontSize:13}}>The UK is increasingly diverse — but equity has not kept pace.</p>


      <div className="slide">
        <div className="cc"><h2>
          14%</h2>
          <p>Population identifying as non-White British (Census 2021)</p></div>
        <div className="cc"><h2>20%</h2>
        <p>UK university students are international (HESA 2022/23)</p>
        </div>
        <div className="cc"><h2>4×</h2>
        <p>Higher maternal mortality for Black women vs White women (UK)</p>
        </div>
      </div>
  </div>
</div>

<section className="layout nn">
  <div className='child'>
    <h3 style={{textAlign:'left'}}>
      Learning Modules
    </h3>
    <p style={{fontSize:13, textAlign:'left'}}>
      Short, interactive modules on power, bias, and anti-racism with UK case studies and self-assessments. Free and self-paced; earn a certificate.
      </p>
      <br /><br />


    <ul>
      - Understanding Power, Privilege & Bias
      <br />- Reflective Practice
      <br />- Working Across Cultural Boundaries
      <br />- Trauma-Informed Care
      <br />- Anti-Racism in Practice
      <br />
      <div id="about" className="" style={{display:'flex'}}>
          <button className="cta mini" onClick={()=> navigate("/login")}>Start learning</button>
          <button className="cta outlines mini" onClick={()=> navigate("/login")}>View Certificate</button>
        </div>
    </ul>
  </div>

  <div className='child'>
    <h3 style={{textAlign:'left'}}>
      Our Community
    </h3>
    <p style={{fontSize:13, textAlign:'left'}}>Join forums for peer discussions, case studies, AMAs, and networking. Share your journey and learn with others.</p>

     <div id="about" className="" style={{display:'flex'}}>
          <button className="cta mini"  onClick={()=> navigate("/login")}>Join The Conversation</button>
          <button className="cta outlines mini" onClick={()=> navigate("/login")}>Browse Blogs</button>
        </div>
  </div>


  
</section>
<br /><br />

  <div className="why">
          <h2>Looking Ahead: Our Collaborations</h2>
          <p id="ABZZ" className='b' >We believe lasting change is built through collaboration. We aim to work with the NHS, the British Educational Research Association, Health Education England, and universities across the UK and beyond to embed cultural humility into policy, training, and practice.

We also welcome collaboration with international bodies such as WHO, UNESCO, and UNICEF to expand access to culturally humble education and centre dignity, diversity, and justice worldwide.</p>
</div>
<div className="founder">
 <div className="a"> 
     <h2>Frequently Asked Questions</h2>
<br />
     <details className='faq' open>
        <summary>Is there a cost to use this platform?</summary>

        <p style={{textAlign:'left'}}>No.  Core modules, forums, and key resources are free. Optional certificates and expert-led workshops may carry a small fee.</p>
     </details>

      <details className='faq'>
        <summary>Who is this platform for?</summary>

        <p style={{textAlign:'left'}}>Healthcare professionals, educators, students, administrators, policymakers, and advocates — anyone committed to equity and inclusion.</p>
     </details>


      <details className='faq'>
        <summary>Do I need an account for modules?</summary>

        <p style={{textAlign:'left'}}>Yes. Logging in lets you track progress, earn certificates, and manage your learning. We collect basic details only and follow GDPR.</p>
     </details>


     <details className='faq'  id='contact'>
        <summary>How long does each module take?</summary>

        <p style={{textAlign:'left'}}>Between 1 and 1.5 hours. It’s self-paced and your progress is saved.</p>
     </details>

      <details className='faq'  id='contact'>
        <summary>Will I receive a certificate?</summary>

        <p style={{textAlign:'left'}}>Yes — complete all five modules to unlock a personalised certificate.</p>
     </details>
      <details className='faq'  id='contact'>
        <summary>Is it relevant outside the UK?</summary>

        <p style={{textAlign:'left'}}>Absolutely. While UK systems are highlighted, the approaches are globally applicable.</p>
     </details>

      <details className='faq'  id='contact'>
        <summary>How do you protect my data?</summary>

        <p style={{textAlign:'left'}}>Your data is securely stored, used only for service delivery/analytics, and never sold. We are fully GDPR-compliant.</p>
     </details>



    </div>

    
 
</div>

  <div className="why b a" style={{textAlign:'left'}}>
          <h2  style={{textAlign:'left'}}>Latest Announcements</h2>
          <p id="ABZZ" className='b' >Stay updated with news, events, and meeting dates.</p>

          No announcements yet. Check back soon!
</div>
<br />

  <div className="why b a" style={{textAlign:'left'}}>
          <h2  style={{textAlign:'left'}}>Get Involved</h2>
          <p id="ABZZ" className='b' >Subscribe for updates, webinars, and events. Join our movement!</p>
<br />
          <div className="inputGroup b">
            <input  type="email" required placeholder='Enter your Email Here!' />
            <button className='cta mini b'>Subscribe</button>
          </div>
</div>


        </div>
      </div>
     </div>

                              {/* 
                              
              </div>  





        <div className="founder b"  data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

          <div className="a"> 
            <h2>Support CHN</h2>
                    <p style={{textAlign:'center', maxWidth:'90%', marginLeft:'20px', marginTop:10,}}>CHN is free and self-funded so anyone can learn. If our work helps you or your organisation, a voluntary contribution keeps the lights on and the work growing.</p>
                    

                  

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
          
            </div>





        


 */}



     
     </div>

    </>
  )
}

export default Home
