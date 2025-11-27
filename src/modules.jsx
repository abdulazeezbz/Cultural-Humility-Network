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

   




     <br /><br />
    



        <div className="content modules"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
           <div className="why card">
          <h2 style={{lineHeight:1, textAlign:'left'}}> Cultural Humility in Practice</h2>
          <p id="ABZZ" style={{fontSize:16, marginLeft:0, textAlign:'left'}} className='b' >This hub offers self-guided learning on cultural humility in health, social care, education and community settings. Work through core modules, explore specialist topics, and collect certificates you can use for CPD or portfolio evidence.</p>
</div>
<br /><hr /><br />



          

             <div className="content b" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">

           <div className="card" style={{textAlign:'left'}}>
  <h2 style={{textAlign:'left', lineHeight:1}}>Access, contributions and how this hub is funded</h2><br />
  <p style={{textAlign:'left'}}> This learning space is a small, independent project. It is <b>not run as a business</b> and is <b>not a registered charity or NGO</b>. Any money given simply helps with hosting, maintenance and ongoing development of the webapp and resources.</p>


  <br />
<div className="card">
  <li>Modules 1 and 2 are free for anyone to access.</li>
  <li>Modules 3–15 are contribution-supported: a minimum contribution of £5 is requested for access, and any amount above that is welcome.</li>
  <li>Contributions are voluntary and go towards running costs only. They should not be treated as charitable donations for tax or gift-aid purposes, and they do not purchase personalised clinical, legal or financial advice.</li>
  <li>If a financial contribution is difficult or you would prefer to support in another way, please log in and contact us so we can discuss options such as free access, collaboration or sharing resources.</li>
  </div>
  


<div className="badges">
  <span> Free access: Modules 1–2</span>
  <span>Contribution-supported: Modules 3–15 (min £5)</span>
  <span> Core pathway: Modules 1–5</span>
</div>
<br />
  <p style={{textAlign:'left'}}>
You can use the 
<a href="/about#contact">{" "}contact form </a>to ask for payment details (for example PayPal or bank transfer) or to offer other kinds of support.</p>
<br />
</div>
</div>







          {/* <h2>Interactive Learning Modules</h2>
          <p>Comprehensive, evidence-based training in cultural humility. Work at your pace with interactive scenarios, quizzes, and reflections. Complete a module at ≥80% to unlock its certificate; finish all five for the overall certificate.
          </p> */}

          <div className="progress" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="to"><h2>Core pathway progress</h2> <p>0/5 completed</p></div>
            <p>Modules 1–5 make up the core pathway. Advanced and specialist modules (6–15) can be taken in any order.</p>
            
            <div className="slid">
                <div className="Scont"></div>
            </div>

            <p>Complete each core module to unlock certificates..</p>
          </div>
      </div>
<hr /><br />
      <div className="content card molu" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
           

         <h2>
          Modules
         </h2>
         <p>Start with the free foundational modules (1–2), then continue along the core pathway (3–5) and add specialist modules (6–15) that fit your role. Each module includes short theory, UK-relevant examples, interactive activities and a knowledge check.</p>
         <br />

         
         <div className="card" style={{textAlign:'left', background:'transparent', border:'none', marginTop:-25, padding:0}}>
<div className="badges">
  <span> Free foundational modules: 1–2</span>
  <span>Contribution-supported modules: 3–15 (min £5)</span>
  <span> Quizzes with pass mark ≥80%</span>
</div>
</div>
           <br />


           {/* Lecture Start */}
           <div className="card module"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <details>
              <summary className='courseD'>
                <div className="">
                  <h3>Module 1: Foundations of Cultural Humility</h3>
                  <p>Est. 1.5 hours · Quiz included</p>  
                </div>
                <div className="">
                  <p>Not started</p>
                  <p>Access: free</p>
                </div>
                
              </summary>

              <div className="Desc">
                <p>Explore the foundations of cultural humility and its relevance in UK health, education and community settings.</p>
                <li>Understand core principles of cultural humility</li>
                <li>Recognise how your own background shapes practice</li>
            
<br />
                <button className='cta mini' >Start Learning</button>
                <button className='cta mini outlines' >View Outline</button>
                <button className='cta mini outlines' >Generate certificate</button>
              </div>
            </details>
           </div>

           {/* Lecture End */}


             {/* Lecture Start */}
           <div className="card module"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <details>
              <summary className='courseD'>
                <div className="">
                  <h3>Module 2: Self-Reflection & Bias</h3>
                  <p>Est. 1.5 hours · Quiz included</p>  
                </div>
                <div className="">
                  <p>Not started</p>
                  <p>Access: free</p>
                </div>
                
              </summary>

              <div className="Desc">
                <p>Examine bias and structural inequality, and connect these to everyday practice and decision-making.</p>
                <li>Identify bias and structural factors in your context</li>
                <li>Use reflective tools to notice and challenge patterns</li>
            
<br />
                <button className='cta mini' >Start Learning</button>
                <button className='cta mini outlines' >View Outline</button>
                <button className='cta mini outlines' >Generate certificate</button>
              </div>
            </details>
           </div>

                {/* Lecture End */}

<br />
<hr   data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000" /><br /><br />
<p  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">Contribution-supported core and specialist modules (3–15)</p>
<br />
                  {/* Lecture Start */}
           <div className="card module danger"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <details>
              <summary className='courseD'>
                <div className="">
                  <h3>Module 3: Power Dynamics & Equity</h3>
                  <p>Est. 1.5 hours · Quiz included</p>  
                </div>
                <div className="">
                  <p>Not started</p>
                  <p>Access: free</p>
                </div>
                
              </summary>

              <div className="Desc">
                <p>Focus on power, partnership and shared decision-making with people, families and communities.</p>
                <li>Recognise power imbalances in everyday interactions</li>
                <li>Use shared decision-making strategies to share power</li>
                <br />
               <b> This module is offered on a contribution basis. A minimum of £5 is requested, and any additional amount you are able to give helps to support hosting and development. This site is not run as a business and is not a registered charity or NGO; contributions simply help to keep the project going.
            
</b>

<br /><br />
                <button className='cta mini' >Start Learning</button>
                <button className='cta mini outlines' >View Outline</button>
                <button className='cta mini outlines' >Generate certificate</button>
              </div>
            </details>
           </div>

                {/* Lecture End */}




                        
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
