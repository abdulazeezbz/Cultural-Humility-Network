import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/new logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';

function Home() {
  

  const [activeDot, setActiveDot] = useState(0);
  const navigate = useNavigate();   // <-- HERE
  
  useEffect(() => {
  const slider = document.querySelector(".cc");
  slider.style.transform = `translateX(-${activeDot * 100}%)`;
}, [activeDot]);

  return (
    <>

    <TopNav/>
 


   

     <div className="hero" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
      <div className="main">
        <div className="content">
          <h2>Welcome to <br />Cultural Humility Network <span>(CHN)</span></h2>
          <p>We believe cultural humility is the cornerstone of equitable practice in health and education. Explore immersive learning, evidence-based modules, and a supportive community that centres respect, reflection, and inclusion.</p>

        <div id="about" className="" style={{display:'flex'}}>
          <button className="cta"  onClick={()=> navigate("/modules")}>Explore Modules</button>
          <button className="cta outlines" onClick={()=> navigate("/community")}>Visit Community</button>
        </div>
        
      
      
      </div>
      </div>
      
      
      <div className="heroB" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
      <div className="main">
        <div className="content b">

<div className="why">
          <h2 style={{lineHeight:1, textAlign:'left'}}>Why Cultural Humility Matters</h2>
          <p id="ABZZ" className='b' style={{textAlign:'left'}}>Cultural humility is a lifelong practice of self-reflection, accountability, and challenging assumptions. Across healthcare and education, inequalities persist. Humility moves beyond awareness to listening deeply, engaging respectfully, and acting for equity.</p>
</div>

<br /><br />
  
<div className="layout c">
  <div className='child'>
  <h3 style={{textAlign:'left', marginLeft:20}}>
      What the Data Says
      </h3 >
      <p style={{fontSize:15, textAlign:'left'}}>The UK is increasingly diverse — but equity has not kept pace.</p>


      <div className="slide"
      
      >
       
          <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Ethnic diversity</h2>
            <p style={{fontSize:20}}>Population identifying with an ethnic minority group in England & Wales (2021 Census).</p>
            <p style={{fontSize:16}}>The UK’s population is becoming more ethnically diverse, especially in cities such as London, Birmingham and Manchester.</p>
          </div>


          <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>International students</h2>
            <p style={{fontSize:20}}>UK university students are from outside the UK.</p>
            <p style={{fontSize:16}}>Classrooms, placements and supervision spaces now routinely bring together people with very different cultural, faith and migration backgrounds</p>
          </div>

          <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Maternal mortality gap</h2>
            <p style={{fontSize:20}}>Black women in the UK face more than double the risk of maternal death compared with White women.</p>
            <p style={{fontSize:16}}>Racialised inequities in care, bias and structural disadvantage all contribute to this gap.</p>
          </div>

          <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Deprivation and safety</h2>
            <p style={{fontSize:20}}>Higher maternal mortality for women in the most deprived areas versus the least deprived.</p>
            <p style={{fontSize:16}}>Inequity is not only about identity; where you live and the resources around you also shape risk and outcomes.</p>
          </div>

           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Diversity in cities</h2>
            <p style={{fontSize:20}}>Of London residents identify as Asian, Black, Mixed or from another minority ethnic background.</p>
            <p style={{fontSize:16}}>Many services are still designed around a default ‘norm’ that doesn’t match the realities of the communities they serve.</p>
          </div>

           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>A multilingual UK</h2>
            <p style={{fontSize:20}}>Spoken in homes, communities and services across the UK.</p>
            <p style={{fontSize:16}}>Language, interpretation and communication support are central to safe, person-centred care – yet they are often treated as an optional extra.</p>
          </div>


           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Experiences of care</h2>
            <p style={{fontSize:20}}>Surveys show that people from some ethnic minority groups report lower satisfaction and trust in services and higher rates of feeling disrespected or ignored.</p>
            <p style={{fontSize:16}}>Cultural humility asks: whose voice is missing here, and how do we make it easier – and safer – for them to be heard?</p>
          </div>

           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Workforce diversity</h2>
            <p style={{fontSize:20}}>Health, care and education workforces in the UK include large numbers of staff who trained overseas or come from minority ethnic backgrounds</p>
            <p style={{fontSize:16}}>Supporting staff to bring their full selves to work – and tackling racism and discrimination – is part of cultural humility in organisations</p>
          </div>
           
           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Cultural humility in one lin3</h2>
            <p style={{fontSize:20}}>Cultural humility is a lifelong practice, not a competency you ‘tick off’.</p>
            <p style={{fontSize:16}}>It is about self-reflection, addressing power imbalances and building accountable partnerships with the communities we serve.</p>
          </div>

           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Why this hub exists</h2>
            <p style={{fontSize:20}}>This hub supports you to move beyond one-off training towards everyday practice change.</p>
            <p style={{fontSize:16}}>Short modules, reflection prompts and action plans help you translate insight into concrete, accountable steps in your own context.</p>
          </div>

          

          

       
      </div>
      {/* <div className="dot">
        {Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className={`dots ${activeDot === i ? "active" : ""}`}
      onClick={() => setActiveDot(i)}
    />
  ))}
      </div> */}
  </div>
</div>

<section className="layout nn">
  <div className='child'>
    <h3 style={{textAlign:'left'}}>
      Learning Modules
    </h3>
    <p style={{fontSize:16, marginLeft:0, textAlign:'left'}}>
      Short, interactive modules on power, bias, and anti-racism with UK case studies and self-assessments. Free and self-paced; earn a certificate.
      </p>
      <br /><br />


    <ul>
      <ion-icon name="checkmark-done-circle-outline"></ion-icon> Understanding Power, Privilege & Bias
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Reflective Practice
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Working Across Cultural Boundaries
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Trauma-Informed Care
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Anti-Racism in Practice
      <br />
      <div id="about" className="" style={{display:'flex'}}>
          <button className="cta mini" onClick={()=> navigate("/modules")}>Start learning</button>
          <button className="cta outlines mini" onClick={()=> navigate("/moules")}>View Certificate</button>
        </div>
    </ul>
  </div>

  <div className='child'>
    <h3 style={{textAlign:'left'}}>
      Our Community
    </h3>
    <p style={{fontSize:16, marginLeft:0, textAlign:'left'}}>Join forums for peer discussions, case studies, AMAs, and networking. Share your journey and learn with others.</p>

     <div id="about" className="" style={{display:'flex'}}>
          <button className="cta mini"  onClick={()=> navigate("/community")}>Join The Conversation</button>
          <button className="cta outlines mini" onClick={()=> navigate("/community")}>Browse Blogs</button>
        </div>
  </div>


  
</section>
<br /><br />

  <div className="why">
          <h2 style={{lineHeight:1, textAlign:'left'}}>Looking Ahead: Our Collaborations</h2>
          <p id="ABZZ" style={{fontSize:16, marginLeft:0, textAlign:'left'}} className='b' >We believe lasting change is built through collaboration. We aim to work with the NHS, the British Educational Research Association, Health Education England, and universities across the UK and beyond to embed cultural humility into policy, training, and practice.

We also welcome collaboration with international bodies such as WHO, UNESCO, and UNICEF to expand access to culturally humble education and centre dignity, diversity, and justice worldwide.</p>
</div>
<div className="founder">
 <div className="a"> 
     <h2 style={{lineHeight:1, textAlign:'left', marginLeft:10,}}>Frequently Asked Questions</h2>
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
          <h2  style={{textAlign:'left', lineHeight:1}}>Latest Announcements</h2>
          <p id="ABZZ" className='b' style={{marginLeft:0, textAlign:'left'}}>Stay updated with news, events, and meeting dates.</p>

          No announcements yet. Check back soon!
</div>
<br />

  <div className="why b a" style={{textAlign:'left'}}>
          <h2  style={{textAlign:'left',lineHeight:1}}>Get Involved</h2>
          <p id="ABZZ" className='b' style={{marginLeft:0, textAlign:'left'}}>Subscribe for updates, webinars, and events. Join our movement!</p>
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
